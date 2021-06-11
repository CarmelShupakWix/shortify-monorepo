CREATE TABLE IF NOT EXISTS `url` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `short_url` varchar(225),
  `long_url` varchar(225),
  PRIMARY KEY (`id`)
);