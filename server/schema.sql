DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  body VARCHAR(255),
  user_id int,
    INDEX user_ind (user_id),
    FOREIGN KEY (user_id)
      REFERENCES users(id)
      ON DELETE CASCADE,
  room_id int,
    INDEX room_ind (room_id),
    FOREIGN KEY (room_id)
      REFERENCES rooms(id)
      ON DELETE CASCADE
);

CREATE TABLE rooms_users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id int,
    INDEX user_ind (user_id),
    FOREIGN KEY (user_id)
      REFERENCES users(id)
      ON DELETE CASCADE,
  room_id int,
    INDEX room_ind (room_id),
    FOREIGN KEY (room_id)
      REFERENCES rooms(id)
      ON DELETE CASCADE
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

