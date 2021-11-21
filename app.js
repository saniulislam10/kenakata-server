/**
 * NODEJS API
 * DATABASE MONGODB
 * VERSION 1.0.0
 * DEVELOP BY MD Saniul Islam
 */
const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config();

// Cross Unblocked File..
const cors = require('cors');
const errorHandler = require('./middileware/error-handler');

/**
 *  Router File Import
 */
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const uploadRoutes = require('./routes/upload');
const cartRoutes = require('./routes/cart');


/**
 * MAIN APP CONFIG
 * REPLACE BODY PARSER WITH EXPRESS PARSER
 */

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Image upload
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


/**
 * MAIN BASE ROUTER WITH IMPORTED ROUTES
 */

app.use(cors());
app.use('/api/product', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/cart', cartRoutes);


/**
 * MAIN BASE GET PATH
 */
app.get('/', (req, res) => {
    res.send(`<div>Server is running</div>`)
})


/**
 * Error Handler
 * 401 UnAuthorized, Access Denied
 * 406 Already Exists, Not Acceptable
 * 404 Not Found
 * 422 Input Validation Error, Unprocessable Entity
 * 500 Database Operation Error, Internal Server Error
 */
app.use(errorHandler.route);
app.use(errorHandler.next);


/**
 * NODEJS SERVER
 * PORT CONTROL
 * MongoDB Connection
 * IF PASSWORD contains @ then encode with https://meyerweb.com/eric/tools/dencoder/
 * Database Name roc-ecommerce
 * User Access authSource roc-ecommerce
 */
mongoose.connect(
    // `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/${process.env.DB_NAME}?authSource=${process.env.AUTH_SOURCE}`,
    `mongodb://localhost:27017/${process.env.DB_NAME}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server is running at port:${port}`));
        console.log('Connected to mongoDB');

    })
    .catch(err => {
        console.error('Oops! Could not connect to mongoDB Cluster', err);
    })
