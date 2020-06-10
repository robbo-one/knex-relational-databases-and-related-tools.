const server = require('./server')
const db = require('./models/index')

const port = process.env.PORT || 3000

db.sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
