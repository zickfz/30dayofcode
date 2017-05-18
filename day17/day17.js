var Calculator = function () {
  this.power = function(a,b) {
    try {
      if (a < 0 || b < 0) {
        throw new Error ('n and p should be non-negative');
      }
      return Math.pow (a,b);
    }
    catch (e) {
      return e.message;
    }
  }
}