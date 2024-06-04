import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

console.log('Replacing ssr content hashes...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

fs.readdir("public/assets", (err, files) => {
    if (err) console.log(err);

    const js = files.find(file => file.startsWith('index-') && file.endsWith('.js'));
    const css = files.find(file => file.startsWith('index-') && file.endsWith('.css'));
    const favicon = files.find(file => file.startsWith('favicon-') && file.endsWith('.webp'));
    
    fs.readFile(path.resolve(__dirname, '..', 'server', 'html_template.jsx'), (err, buff) => {
        if (err) console.log(err);
        
        let html = buff.toString();

        html = html.replace("js_file_hash", js)
                   .replace("css_file_hash", css)
                   .replace("favicon_file_hash", favicon);

        fs.writeFile(path.resolve(__dirname, '..', 'server', 'html.jsx'), html, (err) => {
            if (err) console.log(err);
            console.log("Done!");
        });
    })
});