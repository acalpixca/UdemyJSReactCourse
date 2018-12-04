# Final Project: Create a markdown editor for personal notes

Start installing the framework with:
```
create-react-app note-manager
// to launch it, do:
cd note-manager
yarn Start
```
Then we add a styling manager called Milligram, more details here https://milligram.io
```
yarn add milligram
```
Then we add a simple md editor package that already exists :-)
```
yarn add react-simplemde-editor
```
We add the milligram stylesheet to the \<link\> block of index.html in the public folder.

We edit App.js (the component where the whole app is contained) and modify it to:
* Import Milligram.
* Invoke the (yet to be done) components Editor and Sidebar from the main div.
* Import Editor and Sidebar.

Then we create the components folder inside of src.
We create Sidebar.js and Editor.js in the components folder.

The final project (my version) is in note-manager.

Cassidy's final version is in markdown-manager.

## To learn more about React ;-)

* Build with React: http://buildwithreact.com
* React Tutorials and Insights: https://www.codementor.io/community/topic/reactjs
* React Reference: https://www.codecademy.com/articles/bwa-react-reference

## To learn more in general :-)

* JavaScript Classes by Wes Bos: http://wesbos.com/courses/
* JavaScript Language Reference: https://docs.microsoft.com/en-us/scripting/javascript/javascript-language-reference
* Creative Coding Club: http://creativecoding.club/
* React Practice Projects: https://daveceddia.com/react-practice-projects/
* React Native: Build mobile apps with JavaScript and React!: http://www.reactnative.com/
