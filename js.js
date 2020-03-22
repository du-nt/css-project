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
var createvideoicon = document.getElementById('createvideoicon');
var appsicon = document.getElementById('appsicon');
var notificationicon = document.getElementById('notificationicon');
var accounticon = document.getElementById('accounticon');
var createvideo = document.getElementById('createvideo');
var apps = document.getElementById('apps');
var notification = document.getElementById('notification');
var account = document.getElementById('account');

var isOpen1=isOpen2=isOpen3=isOpen4 = true;

createvideoicon.addEventListener('click', toggle1)
appsicon.addEventListener('click', toggle2)
notificationicon.addEventListener('click', toggle3)
accounticon.addEventListener('click', toggle4)

function toggle1(){
	if(isOpen1 === false){
		createvideo.style.display = 'none';
		isOpen1 = true;
	}
	else if(isOpen1 === true){
		createvideo.style.display = 'block';
		isOpen1 = false;
	}
}
function toggle2(){
	if(isOpen2 === false){
		apps.style.display = 'none';
		isOpen2 = true;
	}
	else if(isOpen2 === true){
		apps.style.display = 'block';
		isOpen2 = false;
	}
}
function toggle3(){
	if(isOpen3 === false){
		notification.style.display = 'none';
		isOpen3 = true;
	}
	else if(isOpen3 === true){
		notification.style.display = 'block';
		isOpen3 = false;
	}
}
function toggle4(){
	if(isOpen4 === false){
		account.style.display = 'none';
		isOpen4 = true;
	}
	else if(isOpen4 === true){
		account.style.display = 'block';
		isOpen4 = false;
	}
}