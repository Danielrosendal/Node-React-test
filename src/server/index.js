const express = require('express');

const UserService = require('./UserService.js');
const TestAdapter = require('./TestAdapter.js');

const app = express();

app.use(express.static('dist'));

app.get('/api/userData', (req, res) => {
  const { email, userName } = req.query;
  const obj = {
    email,
    userName
  };
  const testadapter = new TestAdapter();
  const userService = new UserService([testadapter]);
  const resultData = userService.getUserData(obj.userName, obj.email);
  res.send(JSON.stringify(resultData));
});
app.listen(8080, () => console.log('Listening on port 8080!'));
