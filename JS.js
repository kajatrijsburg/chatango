function hide_all(){
	var categories = ['about_me', 'talk_to_me', 'chat_rooms', 'friends', 'welcome'];
	for(var i=0; i < categories.length; i++){
		document.getElementById(categories[i]).style.visibility = 'hidden';
	}
}

function display_category(category){
	hide_all();
	var i = category;
	document.getElementById(i).style.visibility = 'hidden';
}
