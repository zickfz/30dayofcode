function Solution(){
  //Write your code here
    var stack = [];
    var queue = [];
  
    this.pushCharacter = (s) => stack.push(s);
    this.enqueueCharacter = (s) => queue.push(s);

    this.popCharacter = () => stack.pop(); //pop removes last element
    this.dequeueCharacter = () =>queue.shift(); //shift removes first element
}