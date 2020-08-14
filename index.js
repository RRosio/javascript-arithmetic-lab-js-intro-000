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
  //Need better way to catch the 9000. TO_REVIEW
  if(typeof a === "string" && parseInt(a, 16) != 9000){
    return parseInt(a)
  }else if (parseInt(a, 16) >= 0){
    return 0
  }else if(isNaN(a) != false){
    return 0
  }
}


function preserveDecimal(n){
  if(typeof a != "float"){
    return parseFloat(n)
  }else if(isNaN(n) === false){
    return true
  }

}
