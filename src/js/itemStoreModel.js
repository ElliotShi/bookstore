"use strict";

function itemStore(initialItems){
	this._id = 0;
	this._items = initialItems || [];
	this.addItem = this.addItem.bind(this);
	this._items.forEach(this.addItem);
}

itemStore.prototype._getId = function(){
	return ++this._id;
}

itemStore.prototype.addItem = function(item){
	item.setId(this._getId());
	// item.id = this._getId();
	this._items.push(item);
}

itemStore.prototype.findItemById = function(id){
	var itemArray = this._items.filter(function(item){
		return item.getId() == id;
		// return item.id == id;
	});
	return itemArray[0];
}

itemStore.prototype.getItemIndex = function(id){
	return this._items.indexOf(this.findItemById(id));
}

itemStore.prototype.removeItem = function(id){
	var index = this.getItemIndex(id);
	this._items.splice(index, 1);
}

itemStore.prototype.updateItem = function(item){
	var index = getItemIndex(item.getId);
	// var index = this.getItemIndex(item.id);
	this._items.splice(index, 1, item);
}

itemStore.prototype.searchItemsByName = function(keyWords){
	var regex = new RegExp(keyWords, "i");
	return this._items.filter(function(item){
		return regex.test(item.title);
	})
}


var is = new itemStore();
console.log(is);