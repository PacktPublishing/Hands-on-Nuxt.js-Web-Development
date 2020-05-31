<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nuxt-wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'tklau' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'j&V;/))iK#rHM)E+?&@%0@%a}81]fr#GkE<T oZM ,=`>6G.68! ?+Hee-e}uVSa' );
define( 'SECURE_AUTH_KEY',  '.Q[o]67yitrEC.M}tk/xbcusVh?hYQhgA6J5 }wI+t:nkKQ{fAc0aXf+FFimD Im' );
define( 'LOGGED_IN_KEY',    '%C&(h8k;TL/dxZ.0WzW0g5MAH7WS8$7_Dz-E!=9GMB`zM, 5$|A(#5$:> =t#id!' );
define( 'NONCE_KEY',        '@wQ9s+AZ ~nhBqc171=89QF;:j/R,nePt5d[QK:>O}vFU?m6MH+sOa{G}eMZi~FR' );
define( 'AUTH_SALT',        't07O*?QCB.G680Y(8k}aUcXYj:V7z]@O*xnCs@;6((o&X)mxMv(_z[37bU9y6vrJ' );
define( 'SECURE_AUTH_SALT', '5+otW}Zb#9r^m &hMN{.MsWcJ+OaPINPNhE;}xSv%>BtaQquTF.dh)Pmv#2!&Q`<' );
define( 'LOGGED_IN_SALT',   '`NE!}{/Wivjo@?oHrF>7`%M+;dIfNMcdxC-A$.eS`=zLN$oZNU3CE!)Jl5gy?p0e' );
define( 'NONCE_SALT',       'sEjUyjdQ)~CC-.[YRoo%$Z$l<32.eTuFZe4Cn3/C!5t=~Yd=)~QK(v{f1H3]<k.y' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
