/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule(number){
  var module = {};

  //PRIVATE
  var memory = 0;
  var total = 0;

  function isaNum(x){
    if( typeof x === 'number' ){
      var remainder  = ( data % 1 );
      if ( remainder === 0 ) {
        return true;
    } else {
        return ("it's not an integer");
    }
    }
 }

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   module.load = function(x){
    if (isaNum(x)){
      total = x;
    }
      return total;
  };
  /**
   * Return the value of `total`
   * @return { Number }
   */
  }
    module.getTotal = function(){
      return total;
    };
  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    module.add = function(x){
      if (isaNum(x)){
      total = total + x;
     }
    };

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    module.subtract = function(x){
      total = total - x;
    };

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    module.multiply = function(x){
      total = total * x;
    };

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   module.divide = function(x){
    total = total/ x;
   };

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   module.recallMemory = function(){
    return memory;
   };

  /**
   * Stores the value of `total` to `memory`
   */
   module.saveMemory = function(){
    memory = total;
    return memory;
   };

  /**
   * Clear the value stored at `memory`
   */

   module.clearMemory = function(){
    memory = 0;
   };

  /**
   * Validation
   */



   return module;
}
