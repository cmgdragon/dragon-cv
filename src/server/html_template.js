import React from "react";
import App from "../App";

const Html = () => {
    return (
        <html lang="en">
        
        <head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" type="image/png" href="./favicon_file_hash" />
            <link rel="stylesheet" type="text/css" href="./css_file_hash" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap" rel="stylesheet" />
            <title>cmgdragon – Web Developer 🐲</title>
        </head>
        
        <body>
            <main id="root"><App /></main>
            <script src="./js_file_hash" type="module"></script>
        </body>
        
        </html>
    )
}

export default Html;