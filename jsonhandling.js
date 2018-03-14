 fetch('https://api.github.com/users/cassidoo')
   //fetch('https://api.github.com/users/acalpixca')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('username').innerText = j.login;
    document.getElementById('name').innerText = j.name;
    document.getElementById('bio').innerText = j.bio;
    document.getElementById('location').innerText = j.location;
    document.getElementById('followers').innerText = j.followers;
    document.getElementById('avatar').setAttribute("src",j.avatar_url);
    var numFollowers=parseInt(j.followers);
    var urlFollowers=j.followers_url;
    fetch(urlFollowers)
    .then(function(r){
      return r.json();
      })
         .then(function(j){
            console.log("AHI VAN LOS " + j.length + " FOLLOWERS");
            console.log(j[0]);
            var elem;
             for (var i=0;i<j.length;i++){
               console.log("voy con el seguidor "+ i);
               elem=document.createElement("p");
               elem.innerHTML=j[i].login;
               document.getElementsByClassName("container")[0].appendChild(elem);
            }
         })
  })
