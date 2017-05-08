function processData(input) {
    //Enter your code here
    var factorial = function(input) {
      if (input <= 0) { // terminal case
        return 1;
      } else { // block to execute
        return (input * factorial(input - 1));
      }
    };
    console.log(factorial(input));
} 
