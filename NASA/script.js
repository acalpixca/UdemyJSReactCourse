var response = null;
myStorage = window.localStorage;
if (!myStorage.getItem('searches')) { // no existe el elemento donde guardo mis búsquedas
  myStorage.setItem('searches', "");
}

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  var currentList=myStorage.getItem('searches');
  var searchList=[];
  if (currentList) { // JSON.parse de elemento vacío no funciona
    searchList = JSON.parse(currentList);
  }
  searchList.push(document.getElementsByTagName('input')[0].value);

  myStorage.setItem('searches',JSON.stringify(searchList));

  getPhotos(document.getElementsByTagName('input')[0].value);
});

function getPhotos(param) {
  fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + param +'&api_key=DEMO_KEY')
    .then(function(r) {
      console.log(r.status);
      if (r.status === 200) {
        return r.json();
      }
      else {
        console.log('ha ido mal');
      }

    })
    .then(function(j) {
      response = j;
      // console.log(JSON.stringify(response));
      console.log(response.photos[0]);
      assignValues();
      //getFollowers(j.followers_url);
    })
}

function assignValues() {
  response.photos.forEach(function(f) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="' + f.img_src + '">'
      + '<img src="' + f.img_src + '" alt="' + f.rover.name + '"/>'
      + '</a>';
    document.getElementById('list').appendChild(li);
    console.log(f.rover.name);
  });
}
