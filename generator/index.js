const fs = require('fs');
const Handlebars = require('handlebars');

const IMAGE_DIR = './src/public/images/';
const imageNames = fs.readdirSync(IMAGE_DIR).filter(name => name.match(/\.(jpg|jpeg|gif|png)$/));

const templateString = fs.readFileSync('./generator/template.hbs', 'utf8');
const template = Handlebars.compile(templateString);

const imagePaths = imageNames.map(path => `./public/images/${path}`)

const compiledTemplate = template({ images: imagePaths });

fs.writeFileSync('./src/index.html', compiledTemplate, 'utf8')
