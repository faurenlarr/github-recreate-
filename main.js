
var pic = "<img src='" + users.avatar_url + "'>";
var followers = "<h1>" +  users.followers + "</h1>";
var following = "<h1>" + users.following + "</h1>";
var starred = "<h1>" + users.starred + "</h1>";
var graycat = "<span class='octicon octicon-mark-github'></span>";



var eventMap = _.map(events, function(el, idx, arr){
if(el.type === "PushEvent"){
  return {userName: el.actor.login, repoName: el.repo.name,fork: el.payload.ref.split("/")[2], sha: el.payload.commits[0].sha, messages: el.payload.commits[0].message};
}
else if (el.type === "CreateEvent") {
  return{userName: el.actor.login,fork: el.payload.ref,repoName: el.repo.name,crTime: el.created_at};
}
});

var pushEventMapHTML = "";
_.each(eventMap, function(el, idx, arr){
  if(el.sha) {
   pushEventMapHTML += "<li><div class='pubName'>"
   + "<a href=#>"
   + el.userName
   + "</a>"
   + "</div>"
   + "<strong>"
   + " pushed to "
   + "</strong>"
   + "<div class='pubFork'>"
   + "<a href=#>"
   + el.fork
   + "</a>"
   + "</div>"
   + " at "
   + "<div class='pubRepoName'>"
   + "<a href=#>"
   + el.repoName
   + "</a>"
   + "</div>"
   + "<br>"
   + "<div class='anotherpic'>"
   +  pic
   + "</div>"
   + "<div class='cat'>"
   + graycat
   + "</div>"
   + "<div class='pubSha'>"
   + "<a href=#>"
   +  el.sha
   + "</a>"
   + "</div></li>";
 } else {
   pushEventMapHTML += "<li><div>"
 }

});

// var anotherpushEventMapHTML = "";
// _.each(eventMap, function(el, idx, arr){
//  pushEventMapHTML += "<div class = event-map>" +
//  "<a href=#>" + el.userName + "</a>" + "<strong>" + "pushed to" + "</strong>" + "<a href=#>" + el.fork + "</a>" + "at" + "<a href=#>"  + el.repoName  + "</a>" + "</div>";
//
// });



$(document).ready(function(){
$("#publicinfo").append(pushEventMapHTML);
});


// var eventMap = _.map(events, function(el, idx, arr){
//   if(el.type === "PushEvent"){
//     return {userName: el.actor.login, repoName: el.repo.name, fork: el.payload.ref, sha: el.payload.commits[0].sha, message: el.payload.commits[0].messages};
//
//   }
//   else if(el.type === "CreateEvent") {
//     return {userName: el.actor.login, fork: el.payload.ref, repoName: el.repo.name,
//             crTime: el.created_at};
//
//   }
// });
//
// var pusheventMapHTML = " ";
// _.each(eventMap, function(el){
//   pusheventMapHTML += "<div class= event-map>" + "<a href=#>" + el.userName + "</a>" + "pushed to" + "<a href=#>" + el.fork + "</a>" + "at" + "<a href=#>" + el.repoName + "</a>" + "</div>";
// });
//




$('.name').text(users.name);
$('.username').text(users.login);
$('.profilepic').html(pic);
$('.location').text(users.location);
$('.createdat').text("Joined on " + moment(users.created_at).format("ll"));
$('.thumbnail').html(pic);
$('.followers').html(followers);
$('.following').html(following);
$('.starred').html(starred);



$('.repotab').click(function(event){
  event.preventDefault();
  $('#repoinfo').css('display', 'block');
  $('#publicinfo').css('display', 'none');
  $('#continfo').css('display','none');

  // $('.repotab').css('border-bottom', 'display','none');

});

$('.publicactivitytab').click(function(event){
  event.preventDefault();
  $('#repoinfo').css('display', 'none');
  $('#publicinfo').css('display', 'block');
  $('#continfo').css('display','none');
});

$('.contributionstab').click(function(event){
  event.preventDefault();
  $('#repoinfo').css('display', 'none');
  $('#publicinfo').css('display', 'none');
  $('#continfo').css('display','block');
});



// repos

var titleName = repos.map(function(el){
  return "<div class = 'repoName'>"
  + el.name
  + "</div>"
  + "<br>"
  + "<div class = 'repoDesc'>"
  + el.description
  + "</div>"
  + "<br>"
  + "<div class = 'repoDate'>"
  + "Updated " + moment(users.updated_at).startOf('day').fromNow();
  + "</div>";
});


var newArray =[];

for(var i = 0 ; i < titleName.length ; i++){
  newArray += ["<li><a href=''>"
  + titleName[i]
  + "</a></li>"
  ];
}

$('#repoinfo').html(newArray);


// public info
