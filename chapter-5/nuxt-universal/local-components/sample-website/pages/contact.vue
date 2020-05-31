<template>
  <!-- article -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div data-aos="fade-in">
            <img :src="$loadAssetImage(post.image.src)" :alt="post.image.alt">
          </div>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-6 medium-6 cell">

          <div class="container-text-about" data-aos="fade-up">

            <form class="form-contact form-submit" data-abide novalidate action="#">

               <!-- grid container -->
               <div class="grid-container">

                <!-- grid x -->
                <div class="grid-x grid-padding-x">

                  <div class="medium-12 cell">
                    <div data-abide-error class="alert callout" style="display: none;">
                      <p><i class="fi-alert"></i> There are some errors in your form.</p>
                    </div>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label>Name
                      <input type="text" name="sender-name" class="form-input" placeholder="(required)" required>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="large-6 medium-12 cell">
                    <label>Email
                      <input type="email" name="sender-email" class="form-input" placeholder="(required)" pattern="email" required>
                      <span class="form-error">Please fill this out, it's required. Or, it is invalid.</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label>Subject
                      <input type="text" name="sender-subject" class="form-input" placeholder="(required)" required>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="medium-12 cell">
                    <label>Messager
                      <textarea placeholder="(required)" name="sender-message" class="form-input" rows="10" required></textarea>
                      <span class="form-error">Please fill this out, it's required.</span>
                    </label>
                  </div>

                  <div class="cell small-12">
                    <input type="submit" class="button button-submit" value="Submit">
                    <input type="hidden" name="task" value="message" />
                  </div>

                  <div class="cell small-12">
                    <div class="success callout" style="display: none;">
                      <p><i class="fi-like"></i>&nbsp; Thank you for contacting me.</p>
                    </div>
                  </div>

                </div>
                <!-- grid x -->

              </div>
              <!-- grid container -->

            </form>
          </div>

        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- article -->
</template>

<script>
import $ from 'jquery'

const post = {
  id: 4,
  slug: 'contact',
  title: 'Contact',
  excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
  content: '<p>(Contact) Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<\/p><p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.<\/p>',
  image: {
    src: '/contact.jpg',
    alt: 'Sample alt 1',
    caption: ''
  }
}

export default {
  data() {
    return {
      post: post
    }
  },

  head () {
    return {
      title: this.post.title || 'all',
    }
  },

  mounted() {
    $(document).foundation()
  }
}
</script>
