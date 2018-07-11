const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/login', function (req, res) {
  res.send("Login Route Works :D");
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/dist/guestApp/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});