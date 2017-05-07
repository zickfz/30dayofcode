function processData(input) {
    var arr = input.split('\n'),
        n = parseInt(arr[0]),
        phones = [],
        queries = [];
    
    for(var i = 1; arr.length > i; i++) {
        if (n >= i) {
            var temp = arr[i].split(' ');
            phones[temp[0]] = temp[1];
        } else {
            queries.push(arr[i])
        }
    }

    for (var i = 0; i < queries.length; i++) {
        if (phones[queries[i]] !== undefined) {
            console.log(queries[i] + '=' + phones[queries[i]]);
        } else {
            console.log('Not found')
        }
    }
}