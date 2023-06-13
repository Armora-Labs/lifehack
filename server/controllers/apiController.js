const db = require('../models/models')

const controller = {}

// Get data from the database:
controller.getData = (req, res, next) => {

  console.log('Category: ', req.params);
  const category = req.params.category;

  // hacks: content, likes, dislikes // h
  // users: username // u
  // Categories: Name // C

  // SQL query string to return all hacks in database:
  const allHackQuery = `SELECT h.content, h.likes, h.dislikes, u.username, C.Name AS category 
  FROM hacks h INNER JOIN users u 
  ON u.ID = h.user_id
  INNER JOIN Categories C
  ON C.ID = h.category_id;`

  // SQL query string to return all categories in database:
  const categoryQuery = `SELECT h.ID, h.content, h.likes, h.dislikes, u.username, C.Name AS category 
  FROM hacks h INNER JOIN users u 
  ON u.ID = h.user_id
  INNER JOIN Categories C
  ON C.ID = h.category_id
  WHERE C.Name = '${category}';`

  db.query(categoryQuery)
    .then(data => {
      const { rows } = data
      console.log('From Database: ', rows)
      res.locals.data = rows
      return next()
    })
}

// Post a new hack to the database:

controller.makeHack = (req, res, next) => {
  // console.log(req)
  // console.log(req.body)
  const { category, content, user } = req.body
  console.log('Category: ', category, ' Content: ', content, ' User: ', user)

  // nextval is a method that generates the next primary key, pass it the sequence name
  const postHack = `INSERT INTO hacks (ID, content, likes, dislikes, user_id, category_id) VALUES (nextval('hack_sequence'), '${content}', 0,0, (SELECT ID FROM users WHERE username = '${user}'), (SELECT ID FROM Categories WHERE Name = '${category}'));`

  db.query(postHack)
    .then(data => {
      const { rows } = data
      // console.log('From Database: ', rows)
      res.locals.data = rows
      return next()
    })
}

// Post a new user to the database:
controller.makeUser = (req, res, next) => {
  const {name} = req.body
  // console.log('reqbody', req.body)
  // console.log('name in makeuser', name)
  // A SELECT query is required after the INSERT query to actually return the new user
  const postUser = `INSERT INTO users (ID, googlename, username) VALUES (nextval(\'user_sequence\'),'${name}' ,'${name}');
  SELECT * FROM users WHERE googlename = '${name}';`
  db.query(postUser)
    .then(data => {
      // console.log('data in makeUser', data)
      const { rows } = data[1]
      // console.log('From Database: ', rows)
      res.locals.data = rows
      return next()
    })
}

controller.getUser = (req, res, next) => {
  const name = req.params.user;
  console.log('name in getUser', name)
  const getUserQuery =  `SELECT id, username FROM users WHERE googlename = '${name}'`
  db.query(getUserQuery)
    .then(data => {
      // console.log('data from getusers', data)
      const {rows} = data
      res.locals.data = rows
      return next();
    }
  )
}


controller.changeUsername = (req, res, next) => {
  const {newUsername} = req.body
  const {id} = req.body
  // console.log('reqbody', req.body)
  // A SELECT query is required after the INSERT query to actually return the new user
  const postUser = `UPDATE users SET username = '${newUsername}' WHERE ID = ${id};
  SELECT * FROM users WHERE ID = ${id};`
  db.query(postUser)
    .then(data => {
      // console.log('data in makeUser', data)
      const { rows } = data[1]
      // console.log('From Database: ', rows)
      res.locals.data = rows
      return next()
    })
}



module.exports = controller



/* Syntax for creating a new sql sequence in the terminal */
// CREATE SEQUENCE user_sequence
// start with 2
// increment by 1
// minvalue 0
// maxvalue 999
// cycle;

// SELECT * FROM information_schema.sequences;
