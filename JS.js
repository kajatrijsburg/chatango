function hide_all(){
	var categories = ['about_me', 'talk_to_me', 'chat_rooms', 'friends', 'welcome'];
	for(var i=0; i < categories.length; i++){
		document.getElementById(categories[i]).style.display='none';
	}
}

function display_category(category){
	hide_all();
	var i = category;
	document.getElementById(i).style.display='block'
}
