# LifeHx
An app to learn and share lifehacks.

# Odd Capitilazions
The Dev branch has a capital 'D' (but the 'main' branch is all lower cased)
The table 'Categories' has a capital 'C'!
Use single quotes when inserting strings


INSERT INTO hacks (ID, content, likes, dislikes, user_id, category_id) VALUES (2,'love yourself', 0,0, 1, 1);

SQL Tables Cheat Sheet:											
Categories: ID,	Name
users:	ID, googlename, username
hacks:	ID, content, likes, dislikes, user_id, category_id


# A note on the users table
This table has three columns: ID, googlename, username.
- ID is the primary key.
- googlename acts as the name that either comes from Google OAuth or is entered as a login name (used to log in).
- username actuallys acts as a displayname that is rendered in the hacks.




# This was the query to create the hacks table
CREATE TABLE hacks (
        ID int NOT NULL PRIMARY KEY,
        content varchar(1000),
        likes int,
        dislikes int,
        user_id int,
        category_id int,
        CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(ID),
        CONSTRAINT fk_Category FOREIGN KEY(category_id) REFERENCES Categories(ID)
);

*Beware of the Capital C*

CREATE TABLE Categories (
        ID int NOT NULL PRIMARY KEY,
        Name varchar(1000) NOT NULL
);

CREATE TABLE users (
        ID int NOT NULL PRIMARY KEY,
        googlename varchar(1000),
        username varchar(1000) UNIQUE
);

The tables use sequences to generate the next primary key.
The sequence is call 'hack_sequence' and is passed into the invocation of nextVal() as seen in apiController.js in the 'makeHack' func

hack_sequence
  Type  | Start | Minimum | Maximum | Increment | Cycles? | Cache 
--------+-------+---------+---------+-----------+---------+-------
 bigint |     6 |       0 |     999 |         1 | yes     |     1


user_sequence
  Type  | Start | Minimum | Maximum | Increment | Cycles? | Cache 
--------+-------+---------+---------+-----------+---------+-------
 bigint |     2 |       0 |     999 |         1 | yes     |     1


## Things that don't do anything:
- Password for app sign up or sign in  (Google Oauth does work tho!)
  - The username provided is stored in the database, you just don't need to pass in a password currently
- Like + Dislike buttons are not connected to anything
- Adding a new Hack does not automatically trigger a rerender of the page. Must go to category dropdown and reselect the category

## Intended stretch feature
- automatically render new hack on page (currently you have to navigate into another category and then return to the new hack category to see it rendered)
- be able to add new categories
- remove Oauth button on upper left when logged in using the app login

# Branches
The main branch is pretty much empty. Dev is up to date.

## If you want the 'client secret' in order to have administrative access to Google Oauth...
Venmo $420.69 to @sussybacca96 and leave a valid email address in the comment. You will be emailed the client secret once the funds have cleared.