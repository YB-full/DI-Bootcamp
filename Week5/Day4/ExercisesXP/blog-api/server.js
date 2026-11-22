const express=require('express');
const app=express();
const router = require('./routes/index');

app.use(express.json());
app.use('/', router);
app.use((req, res) => res.status(404).json({ error: 'Route not found' })).
app.listen(3000, () => {
  console.log("The server is  running");
});