-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_on` datetime NOT NULL,
  `last_on` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `name`, `email`, `username`, `password`, `created_on`, `last_on`) VALUES
(1,	'Alexandre',	'thiamkok.lau@gmail.com',	'demo',	'$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',	'2019-06-17 00:00:00',	'2019-01-21 23:32:58');

-- 2020-03-03 18:53:55
