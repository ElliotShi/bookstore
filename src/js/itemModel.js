"use strict";

function item(title, author, price, image, desc){
	if(arguments.length === 1 && typeof arguments[0] === 'object'){
		var item = arguments[0];
		this.id = -1;
		this.title = item.title;
		this.author = item.author;
		this.price = item.price;
		this.image = item.image;
		this.desc = item.desc;
	}else{
		this.id = -1;
		this.title = title;
		this.author = author;
		this.price = price;
		this.image = image;
		this.desc = desc;
	}
}

item.prototype.getId = function(){
	return this.id;
}

item.prototype.setId = function(id){
	this.id = id;
}
