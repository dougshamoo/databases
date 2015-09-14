CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  userId MEDIUMINT NOT NULL,
  roomId MEDIUMINT NOT NULL,
  text varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  userName varchar(20),
  PRIMARY KEY (id),
  UNIQUE (userName)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  roomName varchar(20),
  PRIMARY KEY (id),
  UNIQUE (roomName)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

