/*   //LINE 20 READ!!!!
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    //isolates the number
    var result;
    var firstLetter = input.match(/[a-zA-Z\s]/); //splits the input by looking for the index of the first character.
    //console.log(firstLetter+ " ciao");
    if (input.indexOf(firstLetter) != 0) {
      var number = input.slice(0, input.indexOf(firstLetter)); //extracts the number
      //console.log(number);
      var aux = number.match(/^\d+.\d+\/\d+$|^\d+.\d+$|^\d+\/\d+$|^\d+$/);//does not recognise double fractions
          
      
      if (aux==null){
        result= "invalid number";
      }
      else { // aux not null
        result = aux[0];
        var slash = result.match(/\//g);
        //console.log(slash);
        if (slash != null && slash.length >= 2) {
        result = "invalid number";
        } 
       else { result = (1000 * eval(result)) / 1000; //match gives an ARRAY!!!} 
      }
      
    } 
    }
    else {
      result=1;
    }
    return result;
    
  };
  
  this.getUnit = function(input) {
    //isolate the unit splitting like in the previous function
    var firstLetter = input.match(/[a-zA-Z\s]/); //splits the input by looking for the index of the first character.
    var result;
    var unit = input.slice( input.indexOf(firstLetter));
    //console.log(unit);
    result = unit.match(/^(gal|km|mi|lbs|kg|l|GAL|KM|MI|LBS|KG|L)$/);
    //console.log(result + "ciao");
    if (result==null) {
      result="invalid unit";
    }
   
    else result=result[0];
   // console.log(result);
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    //decides the return unit
    var result;
    initUnit=initUnit.toLowerCase();
    
    //
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      default:
        result = "invalid unit";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    //spells out the unit, i.e. from gal to gallons
    unit=unit.toLowerCase();
    var result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    //works
    //converts the numbers
    initUnit=initUnit.toLowerCase();
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    //console.log(initNum);
    //console.log(initUnit);
    var result;
    if (initNum!="invalid number"){
       switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result="invalid unit";
    }
      
    }
    else result="invalid number";
    //console.log(result + " ciao");
    
    if (result!= "invalid unit" && result!= "invalid number"){
      result=Math.round(result * 100000) / 100000;
    }
    
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result ;
    if (initNum=="invalid number" && initUnit== "invalid unit") {
      result="invalid number and unit";
     // result= {
        //error: "invalid number and unit",
        //string: "Error - invalid number and unit"
      //}
    }
    else if (initNum=="invalid number") {
      result= "invalid number";
      //  result={
    //    error: initNum,
    //   // string: "Error - "+ initNum
    //  }
    }
    else if (initUnit=="invalid unit"){
      result= "invalid unit";
    //  result={
    //    error: initUnit,
       // string: "Error - "+ initUnit
   //   }
    }
    else {
      result=  {
      initNum: initNum,
      initUnit: initUnit, 
      returnNum: returnNum, 
      returnUnit: returnUnit, 
      string: initNum+ " " + this.spellOutUnit(initUnit)+ " converts to " + returnNum + " "+ this.spellOutUnit(returnUnit)
    };
    }
    return result;
  };
}

module.exports = ConvertHandler;
