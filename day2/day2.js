    // Write your code here
    var tip;
    var tax;
    var totalCost;

    tip = mealCost*(tipPercent/100);
    tax = mealCost*(taxPercent/100);
    totalCost = mealCost+tip+tax;
    totalCost = Math.round(totalCost);
    // Use console.log() to print to stdout
    console.log('The total meal cost is ' + totalCost +' dollars.');