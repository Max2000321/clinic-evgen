const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/api', indexRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/public', 'clinic.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});