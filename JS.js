function hide_all(){
	var categories["about_me", "talk_to_me", "chat_rooms", "friends"];
	for(var i=0; i < categories.length; i++){
		document.getElementById(categories[i]).style.display='none';
	}
}

function display_category(category){
	hide_all();
	document.getElementById(category).style.display='block'
}
