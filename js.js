var menu = document.getElementById('menu');
var big = document.getElementById('bigsidebar');
var small = document.getElementById('smallsidebar')

var isOpen = false;
menu.addEventListener('click', toggle)
function toggle(){
	if(isOpen === true){
		big.style.display = 'block';
		small.style.display = 'none';
		isOpen = false;
	}
	else if(isOpen === false){
		big.style.display = 'none';
		small.style.display = 'block';
		isOpen = true;
	}
}

////////////////////////////////
var createvideoicon = document.getElementById("createvideoicon");
var appsicon = document.getElementById('appsicon');
var notificationicon = document.getElementById('notificationicon');
var accounticon = document.getElementById('accounticon');
var createvideo = document.getElementById('createvideo');
var apps = document.getElementById('apps');
var notification = document.getElementById('notification');
var account = document.getElementById('account');

function HideandUNhideObj(ThisObj) {

 if (ThisObj === "createvideo") {
    var div = "apps";
    var divx = "notification";
    var divy = 'account';
  }  else if(ThisObj ==="apps") {
     div = "createvideo";
     divx = "notification";
     divy = 'account';
  }
 else if(ThisObj==='notification') {
     div ="createvideo";
     divx= "apps";
     divy = 'account';
  } 
  else {
  	div ="createvideo";
     divx= "apps";
     divy = 'notification';
  }
  nav = document.getElementById(ThisObj).style;
  if (nav.display === "block") {
    nav.display = 'none';
  } else {
    nav.display = 'block';
    document.getElementById(div).style.display = "none";
    document.getElementById(divx).style.display= "none";
    document.getElementById(divy).style.display= "none";
  }
}

createvideo.addEventListener('click', function (event) {  
            event.stopPropagation(); 
        }); 
notification.addEventListener('click', function (event) {  
            event.stopPropagation(); 
        }); 
apps.addEventListener('click', function (event) {  
            event.stopPropagation(); 
        }); 
account.addEventListener('click', function (event) {  
            event.stopPropagation(); 
        }); 
   
window.onclick = function(event){
	if(event.target === createvideoicon ) {
     	HideandUNhideObj('createvideo')
		}else if (event.target === appsicon){
			HideandUNhideObj('apps')		 
		}
		else if (event.target === notificationicon){	
			 HideandUNhideObj('notification')
		}
		else if (event.target === accounticon){
			HideandUNhideObj('account')
		} else {
			 createvideo.style.display = "none";
			 apps.style.display = "none";
			 notification.style.display = "none";
			 account.style.display = "none";
		}
}
