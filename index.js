var faker = require('faker');
var strftime = require('strftime');

var args = process.argv.slice(2);

var speed = args[0];

if (typeof(speed) === 'undefined') {
	speed = 10;
}

function createWeightedArray(inputArr) {
	var arr = [];
	for (var key in inputArr) {
		for (var i = 0; i < inputArr[key]; i++) {
			arr.push(key);
		}
	}
	return arr;
}

// set weighted response codes
var respCodes = createWeightedArray({ 200: 92, 404: 5, 503: 3 });

// set weighted file extensions
var fileExts = createWeightedArray({ html: 40, php: 30, png: 15, gif: 10, css: 5 });

function writeLine() {

	var httpLine = faker.internet.ip();
	httpLine 	+= ' - - [';
	httpLine	+= strftime("%d/%b/%Y:%H:%M:%S %z");
	httpLine	+= '] \"GET ';
	httpLine	+= '/' + faker.system.commonFileName(faker.random.arrayElement(fileExts));
	httpLine	+= ' HTTP/1.1\" ';
	httpLine	+= faker.random.arrayElement(respCodes) + " ";
	httpLine	+= faker.random.number(8192) + 128;
	httpLine	+= ' \"-\" \"';
	httpLine	+= faker.internet.userAgent() + '\"';
	
	console.log(httpLine);

	// add a random factor to the interval
	setTimeout(writeLine, (Math.random() + 1) * 1000 / speed);
}

setTimeout(writeLine, 1000);