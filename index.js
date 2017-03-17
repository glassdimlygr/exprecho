const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, no-store');
    next();
});

/**
 * Log request info to console with colors.
 * */
app.use((req, res, next) => {
    const requestMethod = req.method ? req.method : '';
    console.log(`\n\x1b[33m${requestMethod} \x1b[32mRequest at: `, new Date().toLocaleString());
    console.log('\x1b[32m \nRequest headers: \x1b[0m', req.headers);
    console.log('\x1b[32m \nRequest cookies: \x1b[0m', req.cookies);
    console.log('\x1b[32m \nRequest query: \x1b[0m', req.query);
    console.log('\x1b[32m \nRequest body: \x1b[0m', req.body);
    console.log('\n\x1b[31m ----------- NEXT ----------- \x1b[0m');
    next();
});

/**
 * Echo request body as JSON
 * */
app.all('/echo', (req, res) =>{
    res.json(req.body);
});


/**
 * Echo headers as JSON
 * */
app.all('/echo/headers', (req, res) =>{
    res.json(req.headers);
});

/**
 * Echo query params as JSON
 * */
app.get('/echo/query', (req, res) =>{
    res.json(req.query);
});


module.exports = app;