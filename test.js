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