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
 
    <link href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    
    


*******************************

Day 2 Recap:

React.createElement()
functional component
class component
props ==> mechanism using which data can be passed from parent to child
state ==> component specific data

state & props are immutable

replace the key with new data value
this.setState({
	"key": value
})

console.log(state value ==> may not be set)

Event Handling with react components ==> onEventName() = {() => this.functionName()}

onEventName={this.functionName.bind(this)}

React Testing Library for Unit Testing and Cypress for E2E

============================================

Day 3: 

-----

React Life Cycle:

ReactContext ==> Centralized store for State [ React 16.6 version introduced this as state management util]	

	<PersonProvider>
			<A/>
			<B/>
			<C/>
	</PersonProvider>
===

let PersonContext = React.createContext();

class PersonProvider extends React.Component {
  componentDidMount() {
    this.setState({
      "name": "Banu",
      "email" : "someemail",
      "updateEmail" : this.updateEmail.bind(this)
    });
  }
  updateEmail(email) {
    this.setState({"email": email});
  }
  
  render() {
    return <PersonContext.Provider value={{...this.state}}>
          {this.props.children}
      </PersonContext.Provider>
  }
}

class App extends React.Component {
  render() {
    return <PersonProvider>
              <First />
      </PersonProvider>
  }
}

function First() {
  return <> I am First !!! <Second /></>
}

class Second extends React.Component {
  render() {
    return <PersonContext.Consumer>
      {
          value => {
            return <>
                    Name : {value.name} <br />
                    Email : {value.email} <br />
                    <button type="button" 
                          onClick={()=>value.updateEmail("me@gmail.com")}>
                        Change
                  </button>
                  </>
          }     
      }
     </PersonContext.Consumer>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

===============


class App extends React.Component {
  render() {
    return <PersonProvider>
    		  <CartProvider>
              <First />
    		</CartProvider>
        		<Test/>
      		<Best/>
      </PersonProvider>
  }
}

=======================

PhoneApp:
	1) React Context
	2) React Router DOM
	3) font-awesome for icons
	4) styled-components -- for better HTML elements [ wrapped as React Element] ==> Button
	5) Bootstrap ==> Response Web Design

npx create-react-app phoneapp

cd phoneapp

phoneapp> npm i bootstrap styled-components react-router-dom

==> Download "share.zip"
	https://github.com/BanuPrakash/SG_REACT/blob/main/share.zip
	extract the file
	1) copy "data.js" into src folder
	2) Overwrite "App.css"
	3) copy "img" folder into "public"

components:
1) Navbar.js
2) ProductList.js
4) Cart.js
http://localhost:3000/details/3
http://localhost:3000/details/4
6) Details.js
7) Default.js

3) Product.js
5) CartList.js

Copy "Button.js" and "Context.js" from "share" into "components" folder.
Overwrite "Navbar.js"

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

function Title(props) {
	return <h1 {...props} >
			{props.children}
		</h1>
}

Navbar.js
Link is Router API just to update the component based on Route Path
<Link to="/" className="nav-link">   
                    Products
</Link>

Full Page reloads:
<a href="/">
	Products
</a>

===

Navbar.js uses Bootstrap and "Link" of react-router-dom
Context.js ==> setting state by getting data from data.js; configure Provider
Button.js ==> Styled-components
index.js ==> placed Context Provider
App.js ==> Configured Routes

========================


Making REST API calls from React:
npm i axios

npx json-server
{
    "products":[],
    "orders" : []
}


start JSON Server:
npm i -g json-server
json-server --watch data.json --port 1234

OR

npx json-server --watch data.json --port 1234

==========================

npm build

place the build file on server [ Apache, NginX, Tomcat, IIS]

==================================


How to Avoid re-rendering of child components

class Child extends React.Component{
  render() {
    console.log("child re-renders!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name:"Banu"
  }
increment() {
  this.setState({
    count : this.state.count + 1
  })
}
render() {
  console.log("Parent Renders");
  return <>
        Parent : {this.state.count} + " : " + {this.state.name} <br />
        <Child name={this.state.name} /> <br />
    <button onClick={() => this.increment()}>Inc</button>
    </>
}
}


ReactDOM.render(<Parent />, document.getElementById("root"));

===

class Child extends React.Component {
	  shouldComponentUpdate(nextProps, nextState) {
	    return JSON.stringify(this.props) !== JSON.stringify(nextProps)
	  }
  render() {
    console.log("child re-renders!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
  state = {
    count : 0,
    name:"Banu"
  }
increment() {
  this.setState({
    count : this.state.count + 1
  })
}
render() {
  console.log("Parent Renders");
  return <>
        Parent : {this.state.count} + " : " + {this.state.name} <br />
        <Child name={this.state.name} /> <br />
    <button onClick={() => this.increment()}>Inc</button>
    </>
}
}


ReactDOM.render(<Parent />, document.getElementById("root"))
===

class Child extends React.PureComponent {
   render() {
    console.log("child re-renders!!");
    return <h1> Child : {this.props.name} </h1>
  }
}

class Parent extends React.Component {
 	increment() {
	}
}

====================================================================

React Hooks ==> React 16.6 version onwards

Using this we can have functional components with all the capabilities of class Component


class Component ==> state and behaviour and life-cycle methods

React Hooks:
1) useState
	helps to have state in functional components

	function App() {
  			let [count,setCount] = React.useState(0);
  			let [user, setUser] = React.useState("Banu");


  	class App extends React.Component {
  			state = {
  				count : 0,
  				user: "Banu"
  			}

  			setCount(count) {
  				this.setState({
  					count: count
  				})
  			}

  			setUser(user) {
  				this.setState({
  					"user": user
  				})
  			}
  	}

  	====
  	useState Example:

  	function App() {
		  let [count,setCount] = React.useState(0);
		  let [user, setUser] = React.useState("Banu");
		  return (
		    <>
		      Count {count} <br />
		      User {user} <br />
		      <button onClick={() => setCount(count + 1)}>Click</button>
		    </>
		  )
	}
	ReactDOM.render(<App />, document.getElementById("root"));


2) useReducer Hook
	 ==> if state is complex and conditional mutation

let initialState = {count:0};

let countReducer  = (state, action) => {
  switch(action.type) {
    case "INCREMENT" : return {count : state.count + action.payload};
    case "DECREMENT" : return {count : state.count  - 1 };
    default : return state;
  }
}

function App() {
  let [state,dispatch] = React.useReducer(countReducer, initialState);
  
  function doIncrement() {
    let action = {"type": "INCREMENT", payload: 10};
    dispatch(action);
  }
  
  return (
    <>
      Count {state.count} <br />
     
      <button onClick={doIncrement}>Increment</button>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));

=======================

let initialState = { cart: [], total : 0};


let countReducer  = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART" : return {cart : state.cart.push(action.payload), total : computedvalue};
    case "REMOVE_FROM_CART" : return {cart : state.cart.slice(...)  };
    default : return state;
  }
}

=================================


Day 4:

-------

Day 3: 
Context, Styled-components, React-Router-dom [ BrowserRouter, Route, Switch, Link (History API rather than "<a> for links")]

React Hooks:
1) useState [ for simple state values - mostly primitive types]
2) useReducer [ complex data and computation based on criteria]
		Reducer is a function which takes state and action and returns back the copy of state after mutation

		actions are simple json with {"type": ... , payload}

		How to call Reducer ==> dispatch(action) ==> invokes Reducer

		let [state, dispatch] = React.useReducer(initialState);

3) useEffect 
		is used to invoke side-effects [ async like API calls and timers] in functional components,
		generally done in component life-cycle methods of class methods
		componentDidMount(), componentDidUpdate()

		function App() {
		  let [count, setCount] = React.useState(0);
		  let [user, setUser] = React.useState("");
		  
		  React.useEffect(() => {
		      console.log("Called effect 1 ", count);
		  });
		  
		   React.useEffect(() => {
		      console.log("Called effect 2 ", count);
		  }, []);
		  
		   React.useEffect(() => {
		      console.log("Called effect 3 ", count);
		  }, [user]);
		  
		  function inc() {
		    setCount(count + 1);
		  }
		  return (
		    <>
		        Count {count} <br />
		       <button onClick={inc}> Click</button>
		    </>
		  )
		}

		ReactDOM.render(<App />, document.getElementById("root"))

4) Memo
	
function Child(props) {
   console.log("child re-renders!!");
    return <h1> Child : {props.name} </h1>
}

class Parent extends React.Component {
  state = {
    count : 0,
    name:"Banu"
  }
increment() {
  this.setState({
    count : this.state.count + 1
  })
}
render() {
  console.log("Parent Renders");
  return <>
        Parent : {this.state.count} + " : " + {this.state.name} <br />
        <Child name={this.state.name} /> <br />
    <button onClick={() => this.increment()}>Inc</button>
    </>
}
}


ReactDOM.render(<Parent />, document.getElementById("root"));

-=-----


function Child(props) {
   console.log("child re-renders!!");
    return <h1> Child : {props.name} </h1>
}

const MemoChild = React.memo(Child);

class Parent extends React.Component {
  state = {
    count : 0,
    name:"Banu"
  }
increment() {
  this.setState({
    count : this.state.count + 1
  })
}
render() {
  console.log("Parent Renders");
  return <>
        Parent : {this.state.count} + " : " + {this.state.name} <br />
        <MemoChild name={this.state.name} /> <br />
    <button onClick={() => this.increment()}>Inc</button>
    </>
}
}


ReactDOM.render(<Parent />, document.getElementById("root"));

====

function applyEquals(props, nextProps) {
	...
}

const MemoChild = React.memo(Child, applyEquals);

===

5) useCallback() is to memorize a function


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};


function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}


function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment Age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment Salary</Button>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("app"));

===
with Memo:


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = () => {
		setAge(age + 1)
	};

	const incrementSalary = () => {
   		setSalary(salary + 1000)
	}
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));

===
useCallback:
Pass an inline callback and an array of dependencies. 
useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders


const incrementAge = React.useCallback(() => { 
		setAge(age + 1)
	}, [age]); 

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);

===

Final code for useCallback:


function Title() {
  console.log('Rendering Title')
  return (
    <h2>
      Example: Title
    </h2>
  )
};

const MemoTitle = React.memo(Title);

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {children}
    </button>
  )
}

const MemoButton = React.memo(Button);

function Count({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

const MemoCount = React.memo(Count);

function ParentComponent() {
	const [age, setAge] = React.useState(25)
	const [salary, setSalary] = React.useState(50000)

	 const incrementAge = React.useCallback(() => { 
		setAge(age + 1)
	}, [age]); 

	const incrementSalary = React.useCallback(() => {
   		setSalary(salary + 1000)
	}, [salary]);
  
	return (
		<div>
			<MemoTitle />
			<MemoCount text="Age" count={age} />
			<MemoButton handleClick={incrementAge}>Increment Age</MemoButton>
			<MemoCount text="Salary" count={salary} />
			<MemoButton handleClick={incrementSalary}>Increment Salary</MemoButton>
		</div>
	)
}

ReactDOM.render(<ParentComponent/>, document.getElementById("root"));


===

6) useContext()

Using Context in Functional Components

const NumberContext = React.createContext();



function App() {
		return (
				<NumberContext.Provider value={24}>
						<div>
							<Display />
						</div>
				</NumberContext.Provider>
		)
}
function Dispay() {
	return(
		<NumberContext.Consumer>
			{
				value => <div> {value} </div>
			}
		</NumberContext.Consumer>
	)
}

Display using "useContext" ==> helps using Context without Consumer code;

function Dispay() {
	const data = React.useContext(NumberContext);
	return <div> {data} </div>
}

Using multiple providers:

function HeaderComponent() {
	const user = React.useContext(CurrentUser);
	const notifications = React.useContext(Notifications);
	return (
		<header>
				Welcome, {user.name} <br />
				You have {notifications.length} notifications
		</header>
	)
}

-------------------------

7) createRef();
		==> get a pointer

	class App extends React.Component {
		emailRef = React.createRef(); // reference

		render() {
				return (
					<>
						<input type="text" ref={this.emailRef} />
						<button onClick={() => this.doTask()}> Click </button>
					</>
				)
		}

		doTask() {
			console.log(this.emailRef.current.value);
			this.emailRef.current.focus();
		}
	}

	ReactDOM.render(<App/> , document.getElementById("app"));

	========

	PrimeReact; KendoUI; D3.js; Chart.js

8) forwardRef
	==> create a refernce and forward the reference to child components [ KendoUI/ PrimeReact / ]

	const EmailInput = React.forwardRef( (props, ref) => {
			<input type="text" ref={ref} {...props} />
	})


	class App extends React.Component {
		emailRef = React.createRef(); // reference

		render() {
				return (
					<>
						<EmailInput ref={this.emailRef} />
						<button onClick={() => this.doTask()}> Click </button>
					</>
				)
		}

		doTask() {
			console.log(this.emailRef.current.value);
			this.emailRef.current.focus();
		}
	}

	ReactDOM.render(<App/> , document.getElementById("app"));

============

 Building Your own hooks: ==> customize Hooks

 function useWindowLocalState(key, defValue) {
 	const [state,setState] =  React.useState( () => {
 		let value;
 		try {
 			value = JSON.parse(window.localStorage.getItem("key")) || String(defValue)
 		} catch(error) {
 			value = String(defValue);
 		}
 	});

 	React.useEffect(() => {
 		window.localStorage.setItem(key,state);
 	}, [state]);

 	return [state,setState];

 }

 function App() {
 	const [state,setState] = useWindowLocalState("app-state", 0);
 	return <>
 		<button onClick={() => setState(state + 1)}>Click</button>
 	</>
 }

 ===================================================

 High Order Components: accept component and returns a component
 Why?
 	1) to introduce new props and behaviour
 	2) conditionally return component

 	class DivComponent extends React.Component {
 		render() {
 		return <>
 				count {this.props.count} <br />
 				<button type="button" onClick={() => this.props.increment()}> Click </button>
 			</>
 		}
 	}

 	const withCounter = (WrappedComponent) => {
 		return class extends React.Component {
 			constructor(props) {
 				super(props);
 				this.state = {
 					count : 0
 				}
 			}

 			increment = () => {
 				this.setState({
 					count : this.state.count + 1
 				})
 			}

 			render() {
 				return <WrappedComponent count = {this.state.count} increment={this.increment} />
 			}
 		}
 	}

 	const DivWithCounter = withCounter(DivComponent);
 
 	function App() {
 			return <DivWithCounter/>
 	}
 	
	ReactDOM.render(<App/> , document.getElementById("root"));


========

render() {	
				if(this.props.isLoading) {
					return <img src =".."/>
				} else {
 						return <WrappedComponent count = {this.state.count} increment={this.increment} />
 				}
 			}


 	ParentComponent {
 		this.state.isLoading = true;
 		componentDidMount() {
 				API all
 				isLoading to true
 		}
 	}

=============================================================

ErrorBoundary Component
	is any component which overrides one of the below:
		componentDidCatch(error, erroInfo){

		}

		static getDerivedStateFromError() {
			return { hasError : true}
		}

	Example:
		class AppErrorBoundary extends React.Component {
			state = {
				hasError: false,
				error: null,
				errorInfo: ""
			}

			componentDidCatch(error, erroInfo){
				this.setState({
							hasError: true,
							error: error
							errorInfo: erroInfo
					})
			}

			render() {
				if(this.state.hasError) {
					return <>
								<div> Boom :-( </div>
								{this.state.errorInfo}
							</>
				} else {
					return this.props.children
				}
			}
		}

		function App() {
			return <AppErrorBoundary>
						<A/>
						<B/>
						<C/>

			</AppErrorBoundary>
		}
===================

Redux and State Management

shopping-list-base.zip == > extract ==> npm i

shopping-list-base> npm i redux react-redux redux-logger

==========================================================

 
Best for performance use Redux as central store ==> take into different ReactContext ==> use this to prevent intermediate props

============================

import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
 
import Details from './components/Details';
import Default from './components/Default';

const Cart = lazy(() => import('./components/Cart'));

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route exact path="/" component={ProductList} />
          <Route default component={Default} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


main.chunk.js 

With Lazy ==> main.chunk.js is minus Cart module

When Cart link is clicked it loads the "cart" module


======

Next.js [part of code is rendered on server ]
and React.js [ client side rendering ]

==============


LINKS:
https://etherpad.opendev.org/p/advjava
https://codepen.io/sandeshkota/pen/abJXdmm?editors=1111
https://primefaces.org/primereact/showcase/#/setup
https://github.com/johnpapa/angular-styleguide

 
		
