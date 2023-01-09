require('dotenv').config();
const cors = require('cors');
const session = require('express-session');
const express = require('express');
const Sequelizestore = require('connect-session-sequelize');
const pgSession = require('connect-pg-simple')(session);
const router = require('./routes');


const {
    APP_PORT,
    SESSION_SECRET,
    DB_DATABASE,
    DB_PASSWORD,
    DB_PORT,
    DB_USERNAME,
    DB_HOST
} = process.env;

const app = express();

const { Client } = require('pg')
const conObject = {
    user: DB_USERNAME,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
}

const client = new Client(conObject)
client.connect()

// session store and session config
const store = new (require('connect-pg-simple')(session))({
    createTableIfMissing: true,
    conObject,
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://sosmart.vercel.app.com']
}));

app.use(express.json());

app.use(router);

//store.sync();

app.listen(APP_PORT, ()=> {
    console.log(`server runing on port ${APP_PORT}`);
})