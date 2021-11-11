import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path';
import Html from './html';
import { pipeline } from 'stream';
import "core-js/stable";
import "regenerator-runtime/runtime";
import sendEmail from './services/mailer';

const server = express();
const port = 8080;

server.use(express.urlencoded({extended: true})); 
server.use(express.json());

server.get('/', (req, res) => {

    const app = ReactDOMServer.renderToNodeStream(<Html />);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<!DOCTYPE html>`);

    pipeline(app, res, error => {
        if (error) console.log(error)
    });

});

server.post('/sendemail', sendEmail);

server.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));
server.use("/images", express.static(path.resolve(__dirname, '..', 'images')));

server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});  