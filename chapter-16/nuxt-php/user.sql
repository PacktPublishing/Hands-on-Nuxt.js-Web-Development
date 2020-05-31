-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uuid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_on` int(10) unsigned NOT NULL,
  `updated_on` int(10) unsigned NOT NULL,
  UNIQUE KEY `slug` (`slug`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `user` (`uuid`, `name`, `slug`, `created_on`, `updated_on`) VALUES
('bcfa5b45-54f0-3b76-9da0-36045d9c2119',	'Jane',	'jane',	1567967422,	0),
('1ffb35b5-06c7-33d2-9c9c-0de5ea6b5a3e',	'John',	'john',	1567996348,	0);

-- 2019-09-09 14:14:34
