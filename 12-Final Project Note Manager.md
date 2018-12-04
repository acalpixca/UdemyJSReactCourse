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
