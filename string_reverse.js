let calculator = {
    read: function() {
      calculator.a = parseFloat(console.log("Enter the first value:"));
      calculator.b = parseFloat(console.log("Enter the second value:"));

    },
  
    sum: function() {
      return calculator.a + calculator.b;
    },
  
    mul: function() {
      return calculator.a * calculator.b;
    }
  };
  
  calculator.read(1,2);

  console.log(calculator.sum());
  console.log(calculator.mul());
  