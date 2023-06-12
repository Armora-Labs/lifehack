# lifehack
An app to learn and share lifehacks.

new text in read me.

The table 'Categories' has a capital 'C'!
Use single quotes when inserting strings


INSERT INTO hacks (ID, content, likes, dislikes, user_id, category_id) VALUES (2,'love yourself', 0,0, 1, 1);

SQL Tables Cheat Sheet:											
Categories: ID,	Name
users:	ID, googlename, username
hacks:	ID, content, likes, dislikes, user_id, category_id






vxmunmxv=> CREATE TABLE hacks (ID int NOT NULL PRIMARY KEY, content varchar(1000), likes int, dislikes int, user_id int, category_id int, CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(ID), CONSTRAINT fk_Category FOREIGN KEY(category_id) REFERENCES Categories(ID));
CREATE TABLE


vxmunmxv=> CREATE TABLE Categories (
        ID int NOT NULL PRIMARY KEY,
        Name varchar(1000) NOT NULL
);
CREATE TABLE


vxmunmxv=> CREATE TABLE users (
ID int NOT NULL PRIMARY KEY,
googlename varchar(1000),
username varchar(1000) UNIQUE
);
CREATE TABLE




