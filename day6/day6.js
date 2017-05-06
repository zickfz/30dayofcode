function processData(input) {
    input = input.split('\n');
input.splice(0, 1);
    
input.forEach(function(item, i) {
	var even = '',
		odd = '';
	for (var j=0; j < item.length; j++) {
		if (j % 2 === 0) {
			even += item[j];
		} else {
        	odd += item[j];
        }
	}
	input[i] = even + ' ' + odd;
});
    
console.log(input.join('\n'));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});