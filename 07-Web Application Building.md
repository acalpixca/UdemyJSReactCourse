# JavaScript and React for Devs - Udemy - Cassidy Williams

## Web Application Building
### Dependency Management
These are the tools we'll be using:

* npm -> at least 5.5 (it comes with node)
* yarn -> download from https://yarnpkg.com/lang/en/docs/install/#windows-tab
* grunt -> npm install -g grunt-cli
* gulp -> npm install -g gulp-cli
* webpack -> npm install -g webpack

### npm and yarn
Package managed tools, and they help you include public packages in your project.
Package means a directory with files (and one of these files is package.json).
A package is a small project that solves a single problem well.

#### npm
https://www.npmjs.com
* Create a folder
* Open command prompt inside that folder
* Run npm init
   * Te va preguntando cosas, nombre del paquete, autor, licencia... cuando acabas dices yes, y te crea el proyecto en esa carpeta, es decir, un fichero package.json.
To install a package inside my project:
* npm install vaca -save
* Ver el package.json de nuestro proyecto y ver que se ha puesto la dependencia (¡ojo! necesita el -save). Y que se ha copiado el paquete vaca en mi carpeta node_modules.

To use the vaca package:
* create an index.js file in my project.
``` JavaScript
const vaca = require('vaca');
console.log(vaca());
```
* Run from the command line: node index.js

#### yarn
https://yarnpkg.com
Similar to npm but created by people who were concerned about some inconsistencies and security flaws of npm (not very common ones, though!)

To create a yarn project:
* Create a folder
* Open command prompt inside that folder
* Run yarn init
   - Answer the prompt questions.
To install a package:
* from the command prompt, run yarn add dogefy
Then you create an index.js file with this
``` JavaScript
const dogefy = require('dogefy');
console.log(dogefy('this is awesome'));
```
Yarn is a bit faster and more secure, but no big difference.

### Grunt
https://gruntjs.com
A JavaScript task grunter.This means that it does the grunt work for you, ie. the boring repetitive stuff.
For example, if you write your code in CoffeeScript, you can set a watch to check when a .coffee file is modified, and then a transpiler can translate it to JavaScript, and then a minifier can minify the JavaScript file because changes to js files were also being watched by Grunt.
And this is an example: https://github.com/malizmaj/node-example-app

* watch: monitors a file for changes. When these occur, actions take place.
``` javascript
watch: {
    sass: {
      files: '**/*.scs',
      tasks: ['css','another'],
      options: {
        something: 'value'
      }
    }

}
```
And now for a complete Grunt example: folder "givenfile". Modify the Gruntfile.js so that you can use babel to transpile ES6+ to classic JavaScript.
https://github.com/babel/grunt-babel

### gulp
Similar to Grunt. Referred to as the streaming built system. It has thousands of modules and plugins and you can automate the tedious, repetitive tasks very easily - a task  is just JavaScript and you can tweak it as much as you want.

To describe the tasks it uses something very similar to promises, but with the word *pipe* instead of *then*

We do an example on folder *gulpactivity*, where we create a web site as a portfolio of all our activities so far.

We build it with handlebars, a package that helps create templates of web pages.
* we have an index.hbs which contains a template for the homepage.
* we have a folder partials where we have hbs files which represent parts included in that homepage.

### Webpack
Most recent in the market, growing in popularity. It doesn't focus so much on job automation as it does on bundling packages for you.

4 main concepts:
* Entry: first file to kick off your app.
* Output: it tells Webpack where your code should go and it tells it how to treat the bundled code.
* Loaders: loaders explains how to process non JavaScript modules, and include these dependencies into your bundles.
* Plugins: Can do what loaders can't.

We won't cover them in detail here because we'll be using Webpack all the time when we do React.

Some resources:
* https://webpack.js.org
* https://github.com/dabit3/beginning-webpack
* An excellent beginners guide: https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460
