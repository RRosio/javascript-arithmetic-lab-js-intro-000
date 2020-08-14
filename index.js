function add(){
}

function subtract(){
}

function multiple(){
}

function divide(){
}

function add(a, b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function increment(n){
  return n+=1
}

function decrement(n){
  return n-=1
}

function makeInt(a){
  if(typeof a === "string" && isNaN(a) != false){
    if(isNaN(a) == false){
      var i = 0
      return i
    }else{
      var i = 1
      return i
    }
  }else if (typeof a === "string"){
    return parseInt(a)
  }
}

function preserveDecimal(n){
  if(typeof a != "float"){
    return parseFloat(n)
  }else if(isNaN(n) === false){
    return true
  }

}
