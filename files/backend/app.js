const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});