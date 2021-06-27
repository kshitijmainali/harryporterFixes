const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/assets', express.static(path.resolve('uploads')));
const listingRoute = require('./potterComponent/listingRoute');
//routes
app.use('/api', listingRoute);

//start listening
app.listen(5000, () => {
  console.log('server is running now');
});
//We should handle the unhandled promise rejection so below is the central place
//to do so
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  app.close(() => {
    process.exit(1);
  });
});
