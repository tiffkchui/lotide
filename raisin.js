
const raisinAlarm = function(cookie) {

  let result = "All good!";
  
    for(let cook of cookie){
  
      if(cook === "🍇"){
        return "Raisin alert!";
      } 
    }
    return result;
  };

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));