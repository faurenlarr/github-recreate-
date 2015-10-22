
var pic = "<img src='" + users.avatar_url + "'>";
var followers = "<h1>" +  users.followers + "</h1>";
var following = "<h1>" + users.following + "</h1>";
var starred = "<h1>" + users.starred + "</h1>";



$('.name').text(users.name);
$('.username').text(users.login);
$('.profilepic').html(pic);
$('.location').text(users.location);
$('.createdat').text("Joined on " + moment(users.created_at).format("ll"));
$('.thumbnail').html(pic);
$('.followers').html(followers);
$('.following').html(following);
$('.starred').html(starred);
$('.orgpic').html("<img src='" + users.organizations_url + "'>");

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
