-- This file assumes that you have an imageuploader database already created
-- See README for more details

-- Create the USER TABLE
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  email varchar(150) NOT NULL,
  pswd varchar(20) NOT NULL,
  UNIQUE (email)
);

-- Create the IMAGE TABLE
DROP TABLE IF EXISTS images;
CREATE TABLE images (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  imageUrl character varying(400) NOT NULL,
  public BOOLEAN NOT NULL,
  uploaded_date timestamp DEFAULT CURRENT_TIMESTAMP,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Seed the database with initial USER TABLE information
INSERT INTO users (email, pswd) VALUES
('test@test.com', '123'),
('test2@test.com', '234'),
('test3@test.com', '345'),
('test4@test.com', '456');

-- Seed the database with initial IMAGE TABLE information
INSERT INTO images (imageUrl, public, user_id) VALUES
('https://images.pexels.com/photos/2927854/pexels-photo-2927854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', true, 1),
('https://images.pexels.com/photos/3392937/pexels-photo-3392937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', true, 2),
('https://images.pexels.com/photos/3029479/pexels-photo-3029479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', true, 3),
('https://images.pexels.com/photos/3758112/pexels-photo-3758112.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 4),
('https://images.pexels.com/photos/4078456/pexels-photo-4078456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 1),
('https://images.pexels.com/photos/3909480/pexels-photo-3909480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 2),
('https://images.pexels.com/photos/2461310/pexels-photo-2461310.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 3),
('https://images.pexels.com/photos/458497/pexels-photo-458497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 4),
('https://images.pexels.com/photos/3792313/pexels-photo-3792313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 1),
('https://images.pexels.com/photos/4197797/pexels-photo-4197797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 2),
('https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 3),
('https://images.pexels.com/photos/270968/pexels-photo-270968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 4),
('https://images.pexels.com/photos/165799/pexels-photo-165799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 1),
('https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 2),
('https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 3),
('https://images.pexels.com/photos/247931/pexels-photo-247931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 4),
('https://images.pexels.com/photos/277509/pexels-photo-277509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 1),
('https://images.pexels.com/photos/1204941/pexels-photo-1204941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 2),
('https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', true, 3);


