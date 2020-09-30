import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

//const express = require("express");

const cors = require('cors');
app.use(cors());

var bodyParser = require("body-parser");

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve('../../public/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if(err)
        {
            console.error(err);
            return res.status(500).send("Error on server side");
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.listen(3000, () => console.log("Listening on port 3000"));