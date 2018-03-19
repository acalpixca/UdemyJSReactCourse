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

And now for a complete Grunt example:
https://github.com/babel/grunt-babel
