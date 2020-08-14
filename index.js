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
  if(typeof a === "string" && a.match(/^#[a-f0-9]{6}$/i) === null){
    return parseInt(a)
  }else if (isNaN(a) != false){
    return true
  }else{
    var i = 0
    return i
  }
}

function preserveDecimal(n){
  if(typeof a != "float"){
    return parseFloat(n)
  }else if(isNaN(n) === false){
    return true
  }

}
