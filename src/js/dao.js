'use strict';

var booklib = [
{
	uuid: "7b1897ad-9c33-39a4-c771-a86949fce09d",
	title: "Thinking, Fast and Slow",
	author: "Daniel Kahneman",
	price: 13.00,
	image: "src/image/books/thinkingfastandslow.jpg",
	description: "The phenomenal New York Times Bestseller by Nobel Prize-winner Daniel Kahneman, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
},
{
	uuid: "85d09d2b-6f4a-3909-167c-a0f9472d0f9f",
	title: "The 7 Habits of Highly Effective People",
	author: "Stephen R. Covey",
	price: 17.00,
	image: "src/image/books/The 7 Habits of Highly Effective People.jpg",
	description: "One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of Presidents and CEOs, educators and parents— in short, millions of people of all ages and occupations.",
},
{
	uuid: "43e75b8e-3db2-47ac-e4e1-f265045d90a6",
	title: "Capital in the Twenty-First Century",
	author: "somebody",
	price: 10.00,
	image: "src/image/books/Capital in the Twenty-First Century.jpg",
	description: "A work of extraordinary ambition, originality, and rigor, Capital in the Twenty-First Century reorients our understanding of economic history and confronts us with sobering lessons for today.",
},
{
	uuid: "8c8773cd-f6bf-5fed-49b8-1774e0201433",
	title: "Misbehaving",
	author: "Richard H. Thaler",
	price: 10.00,
	image: "src/image/books/Misbehaving.jpg",
	description: "Laced with antic stories of Thaler’s spirited battles with the bastions of traditional economic thinking, Misbehaving is a singular look into profound human foibles. When economics meets psychology, the implications for individuals, managers, and policy makers are both profound and entertaining.",
},
{
	uuid: "dd936cb8-4405-b60f-6728-7546a475c889",
	title: "Creativity, Inc.",
	author: "Ed Catmull",
	price: 10.00,
	image: "src/image/books/Creativity.jpg",
	description: "'Too often, we seek to keep the status quo working. This is a book about breaking it.' - Seth Godin",
},
{
	uuid: "14384afa-569c-9c76-c823-3347125f1e89",
	title: "Give and Take",
	author: "Adam Grant",
	price: 120.00,
	image: "src/image/books/Give and Take.jpg",
	description: "GIVE AND TAKE presents the fascinating secrets to givers' success. The results are unequivocal: givers gain big. Jack Welch, Richard Branson, Jon Huntsman Sr. - all of them are givers. In a world in which so many takers such as Bernard Madoff and Raj Rajaratnam have ruined lives and reputations, this book will reassure readers that the real power lies in becoming a giver. Since the vast majority of people aren't born givers, Grant not only presents the case for why givers win, he also offers their hidden strategies for winning.",
},{
	uuid: "3c05c867-e860-1930-1dbb-441a01c32f54",
	title: "Thinking, Fast and Slow",
	author: "Daniel Kahneman",
	price: 13.00,
	image: "src/image/books/thinkingfastandslow.jpg",
	description: "The phenomenal New York Times Bestseller by Nobel Prize-winner Daniel Kahneman, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions. Why is there more chance we'll believe something if it's in a bold type face? Why are judges more likely to deny parole before lunch? Why do we assume a good-looking person will be more competent? The answer lies in the two ways we make choices: fast, intuitive thinking, and slow, rational thinking. This book reveals how our minds are tripped up by error and prejudice (even when we think we are being logical), and gives you practical techniques for slower, smarter thinking. It will enable to you make better decisions at work, at home, and in everything you do.",
},
{
	uuid: "a02f1e6e-61ba-b3e6-c620-7007091a3599",
	title: "The 7 Habits of Highly Effective People",
	author: "Stephen R. Covey",
	price: 17.00,
	image: "src/image/books/The 7 Habits of Highly Effective People.jpg",
	description: "One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of Presidents and CEOs, educators and parents— in short, millions of people of all ages and occupations.",
},
{
	uuid: "6c43da5b-7bb0-61b2-a2ec-feb206171c58",
	title: "Capital in the Twenty-First Century",
	author: "somebody",
	price: 10.00,
	image: "src/image/books/Capital in the Twenty-First Century.jpg",
	description: "A work of extraordinary ambition, originality, and rigor, Capital in the Twenty-First Century reorients our understanding of economic history and confronts us with sobering lessons for today.",
},
{
	uuid: "8b81740c-45f2-eb84-49fb-f7d311684ede",
	title: "Misbehaving",
	author: "Richard H. Thaler",
	price: 10.00,
	image: "src/image/books/Misbehaving.jpg",
	description: "Laced with antic stories of Thaler’s spirited battles with the bastions of traditional economic thinking, Misbehaving is a singular look into profound human foibles. When economics meets psychology, the implications for individuals, managers, and policy makers are both profound and entertaining.",
},
{
	uuid: "24fb0791-0216-fd24-a141-959285e7b931",
	title: "Creativity, Inc.",
	author: "Ed Catmull",
	price: 10.00,
	image: "src/image/books/Creativity.jpg",
	description: "'Too often, we seek to keep the status quo working. This is a book about breaking it.' - Seth Godin",
},
];

function init(){
	var bookStore = new itemStore(booklib);
}


//pass booklib to layer js
function getBookLib(){
	return booklib;
}

//create book object
function createBookObj(title, author, price, image, desc){
	var newBook = new item(title, author, price, image, desc);
	return newbook;
}

//push book obj to booklib array
function addToBookList(book){
	bookStore.addItem(book);
}

//find book by id
function findBookById(id){
	bookStore.findItemById(id);
}

//delete book by id
function deleteBookById(id){
	bookStore.removeItem(id);
	// for(var i = 0; i < booklib.length; i++){
	// 	if(id == booklib[i].uuid){
	// 		booklib.splice(i, 1);
	// 	}
	// }	
}

//updateBookObj
function updateBookObj(id, title, author, price, image, desc){
	var tempBook = new item(title, author, price, image, desc);
	tempBook.id = id;
	bookStore.updateItem(tempBook);
}

//search book objs
function searchBookObj(target){
	var regex = new RegExp(target, "i");
	var result = {};
	var ids = [];
	var count = 0;
	var flag;
	for(var i = 0; i < booklib.length; i++){
		if(!booklib[i].title.match(regex) && !booklib[i].author.match(regex)){
			ids[count] = booklib[i].uuid;
			count++;
		}
	}
	if(count == booklib.length){
		flag = true;
	}else{
		flag = false;
	}
	result.idlist = ids;
	result.flag = flag;
	return result;
}

init();