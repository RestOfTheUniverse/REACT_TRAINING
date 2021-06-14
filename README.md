# React JS Training

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

https://github.com/BanuPrakash/SG_REACT
----------------------------------------------------------

Softwares Required:
1) Visual Studio Code.
2) Chrome Web Browser
	Redux DevTools
	React Development Tools
3) NodeJS Latest LTS

---------------------------

Day 1: Intro to JS; Functional Style of Programming; ES2015 features; Node JS as environment for web application development.

Day 2: Basic React Introduction; Testing REACT with RTL; use case

Day 3: continue with use case ==> Routers, React Context; React Hooks

Day 4: HOC; React Performance; Redux Framework [ Redux ; Thunk ; Saga]

=====================================================

JavaScript

-----------	
		* Scripting language [ Scripting; JIT; AOT]
		 * dynamically typed language [ data types are decided @ Runtime based on literal value assigend to variable]

		var x = "Tim"; // string
		x.toUpperCase();
		x = 10; //numerical
		x++;

		x = true; // boolean
		if(x) { }

		TypeScript ==> transpiler ==> JS ==> execute

		* functions as first-class members

		x = function() { // ...}

		JS needs JS engine to execute

		JS engines ==> V8 (Google ==> Chrome & NodeJS), SpiderMonkey ( FireFox, Adobe products), Nashorn (Oracle), Chakra
					, Continum

		first.js

		var g = 100;

		function doTask(x, y) {
			var result = x + y;
			if( result > 5 ) {
				var c = 100;
				d = 200;
			}
			console.log(g, result, c, d);
			return result;
		}

		doTask(4,5);

		console.log(g, result, c, d);
===================================================

"use strict";

to prevent from using varibles without declaring
 ==> d usage leads to errors

==============================

function add(x, y) {
	console.log(x + y);
}

var res = add(4,5); // what is res? ==> "undefined" 

var x;

console.log(x); // undefined

function add(x, y) {
	return x + y;
}

var res = add(4,5); // what is res? ==> 9


===
semi-colon insertions while creating AST

function add(x, y) {
	return
		x + y;
}

var res = add(4,5); // what is res? ==> undefined

=========================

var add = function (x, y) {
	return x + y;
}

var add = new Function("x", "y" , "return x + y");

===


var add = function (x, y) {
	var result = x + y;
	console.log(result);
}

var add = new Function("x", "y" , "var result = x + y; console.log(result); ");


==================================================================

OOP with JS
-----------

1) var obj = new Object();
	//add state 
	obj.x = 10;
	obj.y = 15;
	// behaviour
	obj.doTask  = function() {
		return this.x + "," + this.y;
	}

2) Function constructor

	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	Person("Tim", 34); // assigns window.name = "Tim" and window.age = 34;

	let p = new Person("Tim", 34);
	p.name will be "Tim" and not window.name

3) Function Constructor with instance methods


	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	//instance methods
	Person.prototype.getName = function() {
		return this.name;
	}

	Person.prototype.getAge = function() {
		return this.age;
	}

	// static method
	Person.compare = function(p1, p2) {
		p1.age > p2.age ? true: false;
	}

	let p1 = new Person("Tim", 34);
	let p2 = new Person("Smitha", 32);

	Person.compare(p1, p2);

	p1.getName()

=====

4) JSON Object ==> JavaScript Object Notation
	
	var obj = {} ; // for singleton objects
	key/field is a string; values can be: string, number, boolean, undefined, null, function, object
	var person = {
		"name" : "Reena",
		"age" : 23,
		"getName" : function () {
			return this.name;
		},
		"address" : {
			"street" : "M G Road",
			"state": "Karnataka",
			"city" : "Bengaluru"
		}
	}

=================

Inhertited methods call() and bind()


var person = {
		"name" : "Reena",
		"age" : 23,
		"getName" : function () {
			return this.name;
		}
}

var fn = person.getName; // context of "person" is lost; will use window context


fn(); // gets the name of "window" object as in window.name

var ref = person.getName.bind(person); // "person" context is copied

ref(); // name refers to "person" and not window


=====

function update(name) {
	this.name = name;
}

var person = {
		"name" : "Reena",
		"age" : 23,
		"getName" : function () {
			return this.name;
		}
};

var obj = {"name" : "Some Name"}

update.call(person, "Peter");

update.call(obj,"Rita");

=======================

Functional style of programming

-------------------------------
SOLID Design Principles

OOP ==> methods tightly coupled to state of object
	Account has balance; credit() and debit() uses balance

Functional style of Programming ==> leads OCP ==> open Close principle
	functionality which can be used on any type
	filter(elems)
	Functional style of programming uses High Order Function (HOF)
		==> treat functions as first-class members [ treat functions similar to primitive or object]
		==> Functions accept function as argument 
		==> Functions which returns a function


		Without HOF:
		var elems = [1,2,5,71,77,13,15,80];

		for(elem in elems) {
			console.log(elem);
		}


		for(elem in elems) {
			alert(elem);
		}

 		for(elem in elems) {
			writeToClient(elem);
		}

Commonly used HOF: filter, map, reduce, forEach, skip, limit		

filter ==> subset

   var products = [
       
       {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
       {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
       {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
       {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];



map ==> transform

=====================

	HOF ==> function returning a function

Math.random(); not a pure function
function add(x,y) {} will be a pure function

Pure Function:

function greeting(msg, name) {
	return msg + " " + name;
}

greeting("Good Morning", "Peter");
greeting("Good Morning", "Roger");
greeting("Good Morning", "Anna");

===

Convert this to HOF with Closure:

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var morningGreet = greeting("Good Morning");

morningGreet("Raja");
morningGreet("Rani");

============

Memoize design pattern using closure concept

	function getEmployee(id) {
		REST call to backend
	}

	getEmployee(5); ==> Make a REST call pull the data and Cache it on client

	getEmployee(10); ==> Make a REST call pull the data and Cache it on client

	getEmployee(5); read from cache ; don;t make REST call


====

	Server sends Response and Etag ==> generated using JSON data

	cache-control

============================================

https://rxmarbles.com/#reduce

Input elems:
  {"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
       {"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
       {"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
       {"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
        {"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}];

Output:
	sum of all the products :124447.44 + 4444.44 +  98444.44 + ...

	reduce gives a single aggregate value [ sum, count, avg, max, min]



===============

Resume @2:00

ES 2015

