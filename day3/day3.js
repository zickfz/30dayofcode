function main() {
    var N = parseInt(readLine());
    if(N%2 === 1){
        console.log("Weird");
    }else{
        if(N>= 6 && N <=20){
            console.log("Weird");
        }else{
            console.log("Not Weird")
        }
    } 
}