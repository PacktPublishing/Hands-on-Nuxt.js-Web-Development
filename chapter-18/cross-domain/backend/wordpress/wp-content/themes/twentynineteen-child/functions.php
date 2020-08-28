<?php
/**
 * Create custom content/post type: project.
 * https://codex.wordpress.org/Function_Reference/register_post_type
 * https://developer.wordpress.org/reference/functions/register_post_type/
 */
add_action('init', 'create_project_post_type');
function create_project_post_type () {
    $args = [
        'labels' => [
            'name' => __('Project (Pages)'),
            'singular_name' => __('Project'),
            'all_items' => 'All Projects'
        ],
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'page',
        'hierarchical' => true,
        // 'rewrite' => array('slug' => 'try/project'),
        'query_var' => true,
        'menu_icon' => 'dashicons-star-filled',
        'supports' => [
            'title',
            'editor',
            'excerpt',
            // 'trackbacks',
            // 'custom-fields',
            // 'comments',
            // 'revisions',
            // 'author',
            'thumbnail',
            'page-attributes',
        ],

        // Add global category & tag.
        'taxonomies'  => [
            // 'category',
            // 'post_tag'
        ],
    ];
    register_post_type('project', $args);
}

/**
 * Create a new set of categories for work post type specifically.
 * https://codex.wordpress.org/Function_Reference/register_taxonomy
 * https://developer.wordpress.org/reference/functions/register_taxonomy/
 */
add_action('init', 'create_project_categories');
function create_project_categories() {
    $args = [
        'label' => __('Categories'),
        'has_archive' =>  true,
        'hierarchical' => true,
        'rewrite' => [
            'slug' => 'project',
            'with_front' => false
        ],
    ];
    $postTypes = ['project'];
    $taxonomy = 'project-category';
    register_taxonomy($taxonomy, $postTypes, $args);
}

/**
 * Create custom JSON API endpoint.
 * https://developer.wordpress.org/rest-api/extending-the-rest-api/adding-custom-endpoints/
 * https://developer.wordpress.org/reference/functions/register_rest_route/
 *
 * Usage:
 * /wp-json/api/v1/projects/1
 * /wp-json/api/v1/projects/2
 * /wp-json/api/v1/projects/3
 */

// Global namespace.
$namespace = 'api/v1/';

// Create the endpoint for the main navigation.
add_action('rest_api_init', function () use ($namespace) {
    $route = 'menu';
    $args = [
        'methods' => 'GET',
        'callback' => 'fetch_menu',
    ];
    register_rest_route($namespace, $route, $args);
});

// Create the endpoint for a single page.
add_action('rest_api_init', function () use ($namespace) {
    $route = 'page/(?P<slug>[a-zA-Z0-9-]+)';
    $args = [
        'methods' => 'GET',
        'callback' => 'fetch_page',
    ];
    register_rest_route($namespace, $route, $args);
});

// Create the endpoint for a single project.
add_action('rest_api_init', function () use ($namespace) {
    $route = 'project/(?P<slug>[a-zA-Z0-9-]+)';
    $args = [
        'methods' => 'GET',
        'callback' => 'fetch_project',
    ];
    register_rest_route($namespace, $route, $args);
});

// Create the endpoint for fetching projects.
add_action('rest_api_init', function () use ($namespace) {
    $route = 'projects/(?P<page_number>\d+)';
    $args = [
        'methods' => 'GET',
        'callback' => 'fetch_projects',
    ];
    register_rest_route($namespace, $route, $args);
});

// Only need this for Nuxt below v2.13, or when Nuxt crawler fails.
// Create the endpoint for fetching all projects.
add_action('rest_api_init', function () use ($namespace) {
    $route = 'projects';
    $args = [
        'methods' => 'GET',
        'callback' => 'fetch_all_projects',
    ];
    register_rest_route($namespace, $route, $args);
});

// Create function to fetch site menu.
function fetch_menu ($data) {
    // Get the menu items by menu name.
    // https://developer.wordpress.org/reference/functions/wp_get_nav_menu_items/
    $menu_items = wp_get_nav_menu_items('menu-main');

    // Return [] if no post.
    if (empty($menu_items)) {
        return [];
    }

    // Loop each item and push other data.
    // https://developer.wordpress.org/reference/functions/url_to_postid/
    // https://developer.wordpress.org/reference/functions/get_post/
    foreach ($menu_items as &$menu_item) {
        $post_id = url_to_postid($menu_item->url);
        $post = get_post($post_id);
        $menu_item->slug = $post->post_name;
    }

    return $menu_items;
}

// Create function to fetch a single page.
function fetch_page ($data) {
    // Get the single post by slug/ path.
    // https://developer.wordpress.org/reference/functions/get_page_by_path/
    $post = get_page_by_path($data['slug'], OBJECT, 'page');

    // Return empty array if no data.
    if (!count((array)$post)) {
        return [];
    }

    // https://developer.wordpress.org/reference/functions/get_the_post_thumbnail_url/
    $post->featured_image = get_the_post_thumbnail_url($post->ID);

    // Add the ACF slides.
    // https://www.advancedcustomfields.com/resources/get_field/
    $post->slides = get_field('slide_items', $post->ID);

    return $post;
}

// Create function to fetch a single project.
function fetch_project ($data) {
    // Get the single post by slug/ path.
    // https://developer.wordpress.org/reference/functions/get_page_by_path/
    $post = get_page_by_path($data['slug'], OBJECT, 'project');

    // Return empty array if no data.
    if (!count((array)$post)) {
        return [];
    }

    // Push other sub data.
    // Use this method for local categories.
    // https://developer.wordpress.org/reference/functions/get_the_terms/
    $post->categories = get_the_terms($post->ID, 'project-category');

    // Use this method for global categories.
    // https://developer.wordpress.org/reference/functions/get_the_category/
    // $post->categories = get_the_category($post->ID);

    // Add the ACF images.
    // https://www.advancedcustomfields.com/resources/get_field/
    $post->fullscreen = get_field('full_screen_image', $post->ID);
    $post->images = get_field('image_items', $post->ID);

    return $post;
}

// Create function to fetch projects.
function fetch_projects ($data) {
    // e.g. 1, 2, 3,...
    $paged = $data['page_number'] ? $data['page_number'] : 1;
    $posts_per_page = 6;
    $post_type = 'project';

    // Set the arguments for the query.
    $args = [
        'post_type' => $post_type,
        'post_status' => ['publish'],
        'posts_per_page' => $posts_per_page,
        'paged' => $paged,
        'orderby' => 'date'
    ];

    // https://developer.wordpress.org/reference/functions/get_posts/
    $posts = get_posts($args);

    // Return [] if no post.
    if (empty($posts)) {
        return [];
    }

    // https://developer.wordpress.org/reference/functions/wp_count_posts/
    $total = wp_count_posts($post_type);
    $total_max_pages = ceil($total->publish / $posts_per_page);
    // var_dump($total_max_pages);

    // Loop each post and push other sub data.
    foreach ($posts as &$post) {
        // https://developer.wordpress.org/reference/functions/get_the_post_thumbnail_url/
        $post->featured_image = get_the_post_thumbnail_url($post->ID);

        // Use this method for local categories.
        // https://developer.wordpress.org/reference/functions/get_the_terms/
        $post->categories = get_the_terms($post->ID, 'project-category');

        // Use this method for global categories.
        // https://developer.wordpress.org/reference/functions/get_the_category/
        // $post->categories = get_the_category($post->ID);

        // Add the ACF images.
        // https://www.advancedcustomfields.com/resources/get_field/
        // $post->images = get_field('image_items', $post->ID);
    }

    return [
        'items' => $posts,
        'total_pages' => $total_max_pages,
        'current_page' => (int)$paged,
        'next_page' => (int)$paged === (int)$total_max_pages ? null : $paged + 1,
        'prev_page' => (int) $paged === 1 ? null : $paged - 1,
    ];
}

// Only need this for Nuxt below v2.13, or when Nuxt crawler fails.
// Create function to fetch all projects.
function fetch_all_projects ($data) {
    $post_type = 'project';
    $posts_per_page = -1; // get all posts.

    // Set the arguments for the query.
    $args = [
        'post_type' => $post_type,
        'post_status' => ['publish'],
        'posts_per_page' => $posts_per_page,
        'orderby' => 'date'
    ];

    // https://developer.wordpress.org/reference/functions/get_posts/
    $posts = get_posts($args);

    // Return [] if no post.
    if (empty($posts)) {
        return [];
    }

    // Loop each post and push other sub data.
    foreach ($posts as &$post) {
        // https://developer.wordpress.org/reference/functions/get_the_post_thumbnail_url/
        $post->featured_image = get_the_post_thumbnail_url($post->ID);

        // Use this method for local categories.
        // https://developer.wordpress.org/reference/functions/get_the_terms/
        $post->categories = get_the_terms($post->ID, 'project-category');

        // Use this method for global categories.
        // https://developer.wordpress.org/reference/functions/get_the_category/
        // $post->categories = get_the_category($post->ID);

        // Add the ACF images.
        // https://www.advancedcustomfields.com/resources/get_field/
        // $post->images = get_field('image_items', $post->ID);
    }
    return $posts;
}

/**
 * Empty all properties in an object.
 */
function empty_object ($object) {
    foreach ($object as $key => $value) {
        unset($object->$key);
    }
    return $object;
}

/**
 * Disable Gutenberg Completely.
 * https://wordpress.org/support/topic/massive-problems-with-wp-5-0-2-gutenberg/
 * https://digwp.com/2018/04/how-to-disable-gutenberg/
 */
// disable for posts
add_filter('use_block_editor_for_post', '__return_false', 10);

// disable for post types
add_filter('use_block_editor_for_post_type', '__return_false', 10);
