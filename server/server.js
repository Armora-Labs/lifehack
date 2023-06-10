const express = require('express')
const path = require('path')

const PORT = 3000
const app = express()
app.use(express.static('client'))

// app.get('/', (req, res, next) => {
//   res.status(200).json('This is the backside of lifeHackz');
// });

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
