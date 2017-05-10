function main() {
    var n = parseInt(readLine());
    n = ((n >>> 0).toString(2)).split('0');
    n = n.reduce(function (a, b) { return a.length > b.length ? a : b; })
    console.log(n.length);
}
