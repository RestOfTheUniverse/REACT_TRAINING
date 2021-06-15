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


document.addEventListener("click", callbackfn);

===============================================

ES 2015 / ES 6 ==> EsNext

ES 5 version is compatabile across JS engines

ECMAScript




ES 2015 / ES 6 ==> Transpiler ==> Lower version of JS --> ES5 or ES3

Transpiler ==> Babel, Tracuer

======================================

ES 6 features:
1) Block scope variable
	let and const have block level scope

		var g = 100;
		const PI = 3.14159; // constant
		function doTask(x, y) {
			var result = x + y;
			if( result > 5 ) {
				let c = 100; // block scope
				d = 200;
			}
			console.log(g, result, c, d); // c is not visible
			return result;
		}

		doTask(4,5);

		console.log(g, result, c, d); // c, result are not visible

2) Arrow operator ==> write lambda functions

 
function filter(elems, predicate) {
    var result = [];
    iterate(elems, function(elem){
        if(predicate(elem)) {
            result.push(elem);
        }
    });
    return result;
}

Without Arrow:
 var predicate = function(elem) { return elem % 2 === 0};
 var subset = filter(elems, predicate);


With Arrow Operator:
var subset = filter(elems, elem => elem %2 == 0);

let add = (x,y) => {
	return x + y;
}

OR 

let add = (x,y) => x + y;

3) Destructing // DeConstructing
	3.1) Arrays

		var colors = ["RED", "GREEN","BLUE","PINK","ORANGE"];

		legacy way:

		var r = colors[0];
		var g = colors[1];

	ES 6 way:

	let [r,g,...others] = colors;

	3.2) Object
	let p =	{"id":2,"name":"Onida","price":4444.44,"category" : "tv"};
	ES5 way:
	var name = p.name;
	var price = p.price;

	ES6 way:
	let {name, price} = p;

	let {name:n, price:amt} = p;

4) Cloning
	4.1) cloning array
		Reference:

		var data = [5,6,2];

		var ref = data; // reference

		ref[0] = 55;

		immutablity
		var data = [5,6,2];
		var copied = [...data];

	4.2) cloning object
	let p =	{"id":2,"name":"Onida","price":4444.44,"category" : "tv"};
	let ref = p; // reference

	ES 5 way:
	let ref = {};
	Object.assign(ref,{}, p);



	let refPrd = {...p}; // copy
	
	refPrd.name = 'Sony';


	let nObj = {tax:4, ...p};

----------


5) Promise API

Asynchonous code ==> returns a defered result ==> REST call, file handling , timers based

Synchronous code:

function doTask() {

}

let res = doTask();

console.log(res); // blocked until doTask() completes


ASynchronous code using Promise API:


function doTask() {
	returning a Promise [ resolved or rejected]
}


doTask().then(
	(happy) => ...,
	(alternate) ==> ...
).catch(ex) {
	console.log(ex);
}


====

fetch("http://jsonplaceholder.typicode.com/users/1") //promise
	.then(response => response.json()) //promise
	.then(data => console.log(data));

============================

Promise.all() usecase ==> Aggregator like applications [ MakeMyTrip, HolidayIQ]
	==> Hotels
		==> API call to Ginger
		==> API call to Taj Vivanta:807
		==> aggregate the results and display

Promise.race()	use case ==> 2 or 3 CD``Ns have same data
	http:server:8080/products
	http:server:8081/products

===============

Nested Callbacks:
fetch("http://jsonplaceholder.typicode.com/users/1") //promise
	.then(response => response.json()) //promise
	.then(data => console.log(data));

can be avoided using async and await

=========

6) Async and Await ==> to be used on Promise API to convert the code to blocking way

7) Class

class Person {
	constructor(name = "" , age = 0) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}

	getAge() {
		return this.age;
	}
}


let p = new Person("Tim", 55);
let p = new Person("Tim");
let p = new Person();

p.getName();

==> internally this is a function constructor with prototype

=============

8) Modules

	JS Module system
	8.1) IIFE ==> Immediate Invoke Function Expression

		let customerModule = (function() {
			let a = 10;
			function doTask() {
				console.log(a);
			}

			function some() {

			}

			return {
				"doTask": doTask,
				"some" : some
			}
		})();


		let orderModule = (function() {
			let a = 90;
			let b = 100;
			function doTask() {
				console.log(a, b);
			}
			return {
				"sample" : doTask
			}
		})();

		customerModule.doTask();

		orderModule.sample();

		8.2) CommonJS module system ==> adopted by NodeJS
		8.3) AMD ==> Asynchrnonous Module Defenition

		 define('myModule', ['dep1', 'dep2'], function (dep1, dep2) {

   			 //Define the module value by returning a value.
   			 return function () {};
			});

		8.4) ES 6 Module System

		lib.js

		export  class Person {
			constructor(name = "" , age = 0) {
				this.name = name;
				this.age = age;
			}

			getName() {
				return this.name;
			}

			getAge() {
				return this.age;
			}
		}

		function iterate(elems, action) {
		   
		}
	
		export default function filter(elems, predicate) {
		     
		}

		export function map(elems, transformFn) {
   
		}

		other.js

		import {Person, map}, filter from './lib';

		let p = new Person("A", 22);


		import * as MyLib from './lib'

		import * as MyLibExt from './libext'

		MyLib.filter()

		MyLibExt.filter()

=====================
 
Function returns a single member
Promise returns a defered member


9) Generator
			are used to execute tasks in multiple stages
			and return multple members ==> each stage different
	
	function* tasks() {
		console.log("one");
		console.log("two");
	
		yield "First output";
	
		console.log("three");
		console.log("four");
	
		yield 100;
	
		console.log("five");
		yield {"name": "Phone", "price" : 12345.22}
	}	

	let iter = tasks();

	iter.next();
	iter.next();
	iter.next();

	SAGA Design Pattern
=======================================
==> Proxy, Reflection

Event Loop and JS


console.log("one");

$("#btn").click(function task1() {
	console.log("clicked!!!");
});

console.log("two");

setInterval(function timeout() {
	console.log("time ..")
}, 1000);

console.log("three")

================================

Node JS
--------
	==> Environment with V8 JS engine
	==> libraries like libuv ==> helpers for Threads / NIO operations / Async operation
	==> can be used to write Real time applications like streaming [ OTT ]
		[ Spring Boot + Netty Reactor + Flux]
	==> Chatbot	
	==> NoSQL
	==> Environment for building client side web application
	=================> Problems faced
	========================> 1) Transpile / Compile [ TypeScript / CoffeeScript / Dart / ES6/7]

	========================> 2) Testing

	========================> 3) Static code analyis ==> ESList

	========================> 4) Browserify [ Bundle]

		index.html
			<script src="lib.js"></script>
			<script src="jquery.js"></script>
			<script src="handlebars.js"></script>
			<script src="loadhash.js"></script>
			<script src="backbone.js"></script>
	========

	every nodejs project needs package.json
	package.json ==> place where we configure scripts
				==> configure dependencies [ libraries required for production stage]
				==> configure devDependencies [ libraries required only for development stage]

	Node Package Manager is used to manage dependencies

	npm i jquery

	npm i -D mocha ESLint

	dowloads the modules from repository

	npm config set repository "sgrepo"

	folder "node_modules"

	npm i -g json-server 
			download into global configured folder for the machine
				users/username/AppData/Roaming/npm/

	Same as Maven / PIP

	Team member commits only package.json and code to "repo/Git"; not node_modules

	other team members uses : npm i

	====

	NodeJs uses JS build tools for the above tasks : Grunt, Gulp and Webpack

	Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting.

	====================

	webpack:
	>npm run build-dev

asset bundle.js 6.19 KiB [emitted] (name: main)    
runtime modules 670 bytes 3 modules
cacheable modules 1.49 KiB
  ./src/index.js 173 bytes [built] [code generated]
  ./src/person.js 1.21 KiB [built] [code generated]
  ./src/lib.js 113 bytes [built] [code generated]

npm run build-prod

asset bundle.js 589 bytes [emitted] [minimized] (name: main)
orphan modules 1.18 KiB [orphan] 2 modules
./src/index.js + 2 modules 1.38 KiB [built] [code generated]
webpack 5.38.1 compiled successfully in 1673 ms


React or Angular by default uses Webpack as bundler

===========================================================
const data =[  
   {  
      "name":"Baked Salmon",
      "ingredients":[  
         {  
            "name":"Salmon",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Pine Nuts",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Butter Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Yellow Squash",
            "amount":1,
            "measurement":"med"
         },
         {  
            "name":"Olive Oil",
            "amount":0.5,
            "measurement":"cup"
         },
         {  
            "name":"Garlic",
            "amount":3,
            "measurement":"cloves"
         }
      ],
      "steps":[  
         "Preheat the oven to 350 degrees.",
         "Spread the olive oil around a glass baking dish.",
         "Add the salmon, garlic, and pine nuts to the dish.",
         "Bake for 15 minutes.",
         "Add the yellow squash and put back in the oven for 30 mins.",
         "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
      ]
   },
   {  
      "name":"Fish Tacos",
      "ingredients":[  
         {  
            "name":"Whitefish",
            "amount":1,
            "measurement":"l lb"
         },
         {  
            "name":"Cheese",
            "amount":1,
            "measurement":"cup"
         },
         {  
            "name":"Iceberg Lettuce",
            "amount":2,
            "measurement":"cups"
         },
         {  
            "name":"Tomatoes",
            "amount":2,
            "measurement":"large"
         },
         {  
            "name":"Tortillas",
            "amount":3,
            "measurement":"med"
         }
      ],
      "steps":[  
         "Cook the fish on the grill until hot.",
         "Place the fish on the 3 tortillas.",
         "Top them with lettuce, tomatoes, and cheese."
      ]
   }
];

========

 
   ===============


Day 2:
======

Recap: JS, Event Loop, Functional Style Of Programming, ES 2015, NodeJS and Webpack

Rendering ==> data into presentation

Server Side Rendering: Presentation pages are served to client => Traditional web application
==> Servlet Technology [ JSP , Servlet, JSF]
==> PHP
==> .NET ==> ASP.NET
==> JS ==> EJS / JADE / PUG 

Client Side Rendering:
	Server sends data/representation to client in various formats [ JSON / XML]

	In client machine rendering happens:
	Evolution of Client side rendering [ web application]
	1) Plain DOM ==> Document Object model was used
			var tbl = document.createElement("table");
			var tr = document.createElement("tr");
			tbl.append(tr);
			tr.appendChild("data from server"); ...
			using XmlHttpRequest ==> used to make AJAX call
	2) jQuery helped in DOM creation, Navigation and simplify AJAX calls
			var tbl = $(<table>);
			var tr = $(<tr>);
			tbl.append(tr);
	3) Template based
		product.template
				<div class="card">
					<div class="card_header">
						{{name}} {{description}}
					</div>	
					<img src ="images/{{pic}}" />
				</div>		

		Expression language and Interpolation
		Popular Template libraries for JS community: Underscore _firstName , Handlebars # , Mustache {

	Single Page Application challenges:
		1) Data binding [ one-way, two-way binding]
		2) Routes
			Different URIs has to display different views
			http://server/products/mobiles
			http://server/products/mobiles/iPhone12
			http://server/products/tv

			History APIs 
		3) Performance

	4) Libraries and Frameworks:
		4.1) Knockout
		4.2) Backbone
		4.3) AngularJS
		4.4) React
		4.5) Angular
		4.6) Vue

	Framework: Complete solution ==> Backbone, Angular
	Library: React

	Angular: [ M V C ]
		1) Framework
		2) Google 								
		3) Two-way binding [ Model <--> View]
		4) Comes with Dependency Injection Support [ Root level, Module level, ...]
		5) To manage views uses Zone.js and concept of Partial DOM
		6) ChangeDetection Policy has to be tweaked in for imporving performance
		7) Project is based on many modules [ Customer module , Admin Module, TripManagenent]

	React: [ View ]
		1) View Library
		2) Facebook
		3) One-way binding [ Model ---> View ]
		4) No full fledged DI support; partial
		5) uses Virtual DOM to render view
		6) High Performance

Shadow Dom:
	<CustomerRow class="_ng_content_0">
		<div class="">
			{{firstName}}
		</div>
	</CustomerRow>

	<div class="row">

	</div>

=========================

React uses Virtual DOM

========================


CodePen:

JS Preprocessor ==> Babel

JS dependencies:
react
https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js

react-dom
https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

<div id="root">
</div>


let Welcome = React.createElement("h1", {style: {'color':'red'}}, "Welcome to SG REACT TRG");

ReactDOM.render(Welcome, document.getElementById("root"));

ReactElement: 

This is the primary type in React.
ReactElement is a light, stateless, immutable, Virtual representation of DOM.
this make the basic nodes here

Once defined ReactElements can be rendered int o "real" dom


=========================================

Functional Components return JSX ==> JavaScript and XML ==> Babel is used as TransCompiler
{props.title} ==> Interpolation

function Welcome(props) {
  return <div>
       	 	<h1>
           		 {props.title} in {props.name}
        	</h1>
   		</div>
}

ReactDOM.render(<Welcome title="Welcome to React" name="SG" />, document.getElementById("root"));

Parent passes data to children in the form of props:
props ==> title="Welcome to React" name="SG"

JSX needs a root element

Using Destructing:
function Welcome({title, name}) {
  return <div>
        <h1>
            {title} in {name}
        </h1>
        </div>
}

ReactDOM.render(<Welcome title="Welcome to React" name="SG" />, document.getElementById("root"));


==

function Welcome({title, name}) {
  return <React.Fragment>
        <h1>
            {title} in {name}
        </h1>
        <h2>Hello World</h2>
        </React.Fragment>
}

ReactDOM.render(<Welcome title="Welcome to React" name="SG" />, document.getElementById("root"));

====


React Fragment:
function Welcome({title, name}) {
  return <>
        <h1>
            {title} in {name}
        </h1>
        <h2>Hello World</h2>
        </>
}

ReactDOM.render(<Welcome title="Welcome to React" name="SG" />, document.getElementById("root"));

================================

	Class Component ==> can have state and behaviour

	Button as component ==> 
		color, label, size ==> state
		onClick(), onMouseOver() ==> behaviour

	function Welcome({title, name}) {
 	 return <div>
        <h1>
            {title} in {name}
        </h1>
        </div>
	}

ReactDOM.render(<Welcome title="Welcome to React" name="SG" />, document.getElementById("root"));


	class Welcome extends React.Component {
		// instance variables
		constructor(props) {
			super(props);
		}

		// instance methods
		changeMessage(msg) {

		}

		render() { // returns JSX
			let {title, name} = this.props;
			return <div>
       				 <h1>
           				 {title} in {name}
       				 </h1>
       				 </div>
		}
	}

==========================================
Earlier:
npm install -g create-react-app
install in "\Users\banuprakash\AppData\Roaming\npm"

create-react-app customerapp

Now:

npx create-react-app customerapp

package.json:

 "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  }

react and reac-dom ==> to create react components and rendering

"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  react-scripts internally uses "webpack"

  npm run eject ==> this project will be ejected with webpack based project
  we can customize webpack.config.js


To start the application with built-in lite http server
  npm start

 ===========
 
 ==> state and props are immutable

==========================================

Testing
	==> Unit Testing
	==> Integration Testing
	==> E2E testing

JS Unit Testing Frameworks:
	1) Jasmine
	2) Mocha
	3) JEST

	==> Chai assertion libraries [ https://www.chaijs.com/ ]

	Angular ==> Angular Test Bed on top of Jasmine
	React ==> React Testing Library is a wrapper on top of JEST
		==> assertion libraries to test React Components

	    <h1>Customer Application</h1> 


	 <input type="text" 
                placeholder="search by name"
                onChange={(evt) => props.filterEvent(evt.target.value)}/>

     <button type="button" onClick={() => this.deleteRow(id)} >&times;</button>  

	getByXXXX() ==> throws exception if not found
	
	queryByXXXX() ==> returns null if not found

	findByXXXX() ==> for Promise based component creation

	getByRole('button')
	getByText(/customer application/i);
	getByPlaceHolderText("search by name");
	getByTestId("someid"); // <div data-testid="someid"></div>


	Collections version : getAllByRole('button')

===

npm test

Coverage:
npm test -- --coverage

===

npm i -D cypress

JavaScript End to End Testing Framework | cypress.io

---

Angular ==> Protractor ==> Selenium

---------------------------------------------


npm run cypress

=====================


npx create-react-app phoneapp

cd phoneapp

phoneapp> npm i bootstrap styled-components react-router-dom

***********






