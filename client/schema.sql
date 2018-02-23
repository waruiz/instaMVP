-- COMMANDS FOR HOW TO STARTUP:
-- 
-- Go to Terminal:
-- mysql -u root -p
-- 
-- Now, inside MySQL interactive prompt:
-- SHOW DATABASES;
-- CREATE DATABASE dabase_name;
-- USE database_name;
-- SOURCE path/to/file.sql;
-- 
-- Now, verify load:
-- SHOW DATABASES;
-- SHOW TABLES;
-- 
-- Verify the schema of each table:
-- DESCRIBE table_name;
-- 
-- Exit MySQL interactive prompt with control-z
-- 


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'USERS'
--
-- ---

DROP TABLE IF EXISTS `USERS`;

CREATE TABLE `USERS` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(25) NOT NULL,
  `Gender` VARCHAR(10) NOT NULL,
  `Profile_pic` VARCHAR(300) NOT NULL,
  `Bio` VARCHAR(280) NULL,
  `Username` VARCHAR(20) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Submissions'
--
-- ---

DROP TABLE IF EXISTS `Submissions`;

CREATE TABLE `Submissions` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Image_url` VARCHAR(200) NOT NULL,
  `Caption` VARCHAR(280) DEFAULT 'Im Lazy',
  `Like_count` INTEGER(4) DEFAULT 0,
  `User_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Comments'
--
-- ---

DROP TABLE IF EXISTS `Comments`;

CREATE TABLE `Comments` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Submission` INTEGER NOT NULL,
  `Commenter` INTEGER(3) NOT NULL,
  `Content` VARCHAR(500) DEFAULT 'Cool pic!',
  `Parent` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Followers_Following'
--
-- ---

DROP TABLE IF EXISTS `Followers_Following`;

CREATE TABLE `Followers_Following` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Follower` INTEGER(3) NOT NULL,
  `Followee` INTEGER(3) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Likes'
--
-- ---

DROP TABLE IF EXISTS `Likes`;

CREATE TABLE `Likes` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `Submission` INTEGER(3) NOT NULL,
  `User_id` INTEGER(3) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Submissions` ADD FOREIGN KEY (User_id) REFERENCES `USERS` (`id`);
ALTER TABLE `Comments` ADD FOREIGN KEY (Submission) REFERENCES `Submissions` (`id`);
ALTER TABLE `Comments` ADD FOREIGN KEY (Commenter) REFERENCES `USERS` (`id`);
ALTER TABLE `Followers_Following` ADD FOREIGN KEY (Follower) REFERENCES `USERS` (`id`);
ALTER TABLE `Followers_Following` ADD FOREIGN KEY (Followee) REFERENCES `USERS` (`id`);
ALTER TABLE `Likes` ADD FOREIGN KEY (Submission) REFERENCES `Submissions` (`id`);
ALTER TABLE `Likes` ADD FOREIGN KEY (User_id) REFERENCES `USERS` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `USERS` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Submissions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Comments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Followers_Following` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Likes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `USERS` (`id`,`Name`,`Gender`,`Profile_pic`,`Bio`,`Username`,`Password`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Submissions` (`id`,`Image_url`,`Caption`,`Like_count`,`User_id`) VALUES
-- ('','','','','');
-- INSERT INTO `Comments` (`id`,`Submission`,`Commenter`,`Content`,`Parent`) VALUES
-- ('','','','','');
-- INSERT INTO `Followers_Following` (`id`,`Follower`,`Followee`) VALUES
-- ('','','');
-- INSERT INTO `Likes` (`id`,`Submission`,`User_id`) VALUES
-- ('','','');
