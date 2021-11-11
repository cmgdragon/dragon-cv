import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '../App';
import "core-js/stable";
import "regenerator-runtime/runtime";
import sendEmail from './services/mailer';

const server = express();
const port = 8080;

server.use(express.urlencoded({extended: true})); 
server.use(express.json());

server.get('/', (req, res) => {

    const app = ReactDOMServer.renderToNodeStream(<App />);

    fs.readFile(
        path.resolve(__dirname, '..', '..', 'dist', 'index.html'), 'utf-8', (err, data) => {
            if (err) { 
                console.log(error);
                res.status(500).send('An error occurred in server side');
            }
        return res.send(data.replace('<main id="root"></main>', `<main id="root">${app}</main>`))
    })
});

server.post('/sendemail', sendEmail);

server.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));
server.use("/images", express.static(path.resolve(__dirname, '..', 'images')));

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});  