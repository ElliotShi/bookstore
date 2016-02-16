'use strict';

var goodinfo = document.getElementById("goodinfo");
var nonedit = document.getElementById("nonedit");
var foredit = document.getElementById("foredit");
var searchtip = document.getElementById("searchtip");
var boxp1 = document.getElementById("p1");
var boxp2 = document.getElementById("p2");

// show books
function showBooks(){
	goodinfo.style.display = "none";
	searchtip.style.display = "none";
	var content = document.getElementById("list");
	var booklist = getBookLib();
	while(content.firstChild){
		content.removeChild(content.firstChild);
	}
	for(var i = 0; i < booklist.length; i++){
		var div = document.createElement("div");
		div.setAttribute("class", "goods");
		div.setAttribute("id", booklist[i].uuid);
		var showinfo = "showInfos('" + booklist[i].uuid + "')";
		div.setAttribute("onclick", showinfo);
		var img = document.createElement("img");
		img.setAttribute("src", booklist[i].image);
		var p1 = document.createElement("p");
		p1.setAttribute("class", "title");
		p1.innerHTML = booklist[i].title;
		var p2 = document.createElement("p");
		p2.innerHTML = "$" + booklist[i].price;
		div.appendChild(img);
		div.appendChild(p1);
		div.appendChild(p2);
		content.appendChild(div);
	}
	var lastdiv = document.createElement("div");
	lastdiv.setAttribute("class", "clear");
	content.appendChild(lastdiv);
}

//generate guid
function guid() {
    function S4() {
       return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

//create new book object
function createBook(title, author, price, image, desc){
	var title = document.getElementById(title).value;
	var author = document.getElementById(author).value;
	var price = document.getElementById(price).value;
	var image = document.getElementById(image).value;
	var desc = document.getElementById(desc).value;
	if(validateInfo(title, author, price, image, desc)){
		var book = createBookObj(title, author, price, image, desc);
		addToBookList(book);
		showBooks();
	}
}

//create book validate
function validateInfo(title, author, price, image, desc){
	if(title == "" || author == "" || price == "" || image == "" || desc == ""){
		alert("Please input all the infomation!");
		return false;
	}else{
		return true;
	}
}

//show book infos at the top of the page
function showInfos(id){	
	goodinfo.style.display = "block";
	nonedit.style.display = "block";
	foredit.style.display = "none";
	var bookobj = findBookById(id);
	if(bookobj != null && bookobj != ""){
		document.getElementById("infoimg").setAttribute("src", bookobj.image);
		document.getElementById("infotitle").innerHTML = bookobj.title;
		document.getElementById("infoauthor").innerHTML = bookobj.author;
		document.getElementById("infoprice").innerHTML = "$" + bookobj.price;
		document.getElementById("infodesc").innerHTML = bookobj.description;
		document.getElementById("tools").setAttribute("data-key", bookobj.uuid);
	}
}

//delete book in show infos box
function deleteBook(){
	if(confirm("Are you sure to delete this item?")){
		var id = document.getElementById("tools").getAttribute("data-key");
		deleteBookById(id);
		goodinfo.style.display = "none";
		showBooks();
	}
}

//edit book infos, display edit fields for edit
function editBook(){
	nonedit.style.display = "none";
	foredit.style.display = "block";
	var id = document.getElementById("tools").getAttribute("data-key");
	var bookobj = findBookById(id);
	if(bookobj != null && bookobj != ""){
		document.getElementById("editimg").innerHTML = bookobj.image;
		document.getElementById("edittitle").setAttribute("value", bookobj.title);
		document.getElementById("editauthor").setAttribute("value", bookobj.author);
		document.getElementById("editprice").setAttribute("value", bookobj.price);
		document.getElementById("editdesc").innerHTML = bookobj.description;		
	}

}

//cancel to close edit model
function cancelEdit(){
	nonedit.style.display = "block";
	foredit.style.display = "none";	
}

//update book infos in edit model
function updateBook(){
	var id = document.getElementById("tools").getAttribute("data-key");
	var image = document.getElementById("editimg").value;
	var title = document.getElementById("edittitle").value;
	var author = document.getElementById("editauthor").value;
	var price = document.getElementById("editprice").value;
	var desc = document.getElementById("editdesc").value;
	if(validateInfo(title, author, price, image, desc)){
		updateBookObj(id, title, author, price, image, desc);
		showBooks();
		showInfos(id);
	}
}

//search book by title or author
function searchBook(){
	goodinfo.style.display = "none";
	for(var i = 0; i < booklib.length; i++){
		var id = booklib[i].uuid;
		var div = document.getElementById(id);
		div.style.display = "";	
	}
	var target = document.getElementById("search").value;
	if(target != ""){
		searchtip.style.display = "block";
		var result = searchBookObj(target);
		for(var i = 0; i < result.idlist.length; i++){
			var id = result.idlist[i];
			var div = document.getElementById(id);
			div.style.display = "none";
		}
		if(result.flag){
			boxp1.style.display = "none";
			boxp2.style.display = "block";
		}else{
			boxp1.style.display = "block";
			boxp2.style.display = "none";
		}
	}else{
		searchtip.style.display = "none";
	}
}

//close book infos box
function closeBox(){
	goodinfo.style.display = "none";
}

showBooks();


