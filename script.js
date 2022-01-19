//empty strings to hold first number and second number as well as operators
let input = '';
let numberSaver='';
let operatorSaver='';
// boolean to detemine if display is filled without using equals sign, but instead by using operators to solve
let occupying=false;
// Math functions , takes in 2 inputs 
let add = (a,b) => {
    return (a+b)
}

let subtract = (a,b) => {
    return (a-b)
}

let multiply = (a,b) => {
    return (a*b)
}

let divide = (a,b) => {
    return (a/b)
}

// operator function , uses Math Functions with 2 inputs
let operate = (operator,a,b) => {
    if(operator==='+'){
        operator=add;
    }
    if (operator==='-'){
        operator=subtract;
    }
    if (operator==='x'){
        operator=multiply;
    }
    if (operator==='÷'){
        operator=divide;
    }
    return operator(a,b)
}

// querySelect buttons //
const numbers =document.querySelectorAll("[data-number]");
const operators =document.querySelectorAll("[data-operator]");
const clear= document.querySelector(".clear");
const del= document.querySelector(".delete")
const equals=document.querySelector("#equals")
const buttons=document.querySelectorAll("button");
//add hover effect
buttons.forEach(node =>{
    node.addEventListener(('mouseover'),function(e){
        console.log(this);
       this.classList.add('hover');
    })})
buttons.forEach(node =>{
    node.addEventListener(('mouseleave'),function(e){
        this.classList.remove('hover');
    })
})

// addEventlisteners 
numbers.forEach(node =>{
    node.addEventListener(('click'),function(e){
        input+=this.innerHTML;
        // each click, the display updates with the new input 
        document.querySelector(".display").innerHTML= input;
    })
    });
//Utilize operators 
    // 1. Read in operator to a variable
    // 2. import input into numberSaver
    // 3. clear input for next number
operators.forEach(node =>{
    node.addEventListener(('click'), function(e){
        // if operator,numberSaver, and input have values, then solve 
        if(operatorSaver.length>0 && numberSaver.length>0 && input.length>0){
            let holder1=parseFloat(input)
            let holder2=parseFloat(numberSaver);
            numberSaver = operate(operatorSaver,holder2,holder1)
            operatorSaver=this.innerHTML;
            numberSaver=String(numberSaver);
            document.querySelector(".display").innerHTML= numberSaver;   
            document.querySelector(".upper").innerHTML= numberSaver + "&nbsp;"+ "&nbsp" + operatorSaver;
    
            input='';
        }
        else{
            console.log('other')
        operatorSaver=this.innerHTML;
        if (numberSaver===''){
        numberSaver=input;
        }
        document.querySelector(".upper").innerHTML= numberSaver + "&nbsp;"+ "&nbsp"+ operatorSaver;
        input='';
    }
    })
})
//clear function 
clear.addEventListener(('click'),function(e){
    input = '';
    document.querySelector(".display").innerHTML= input;
    numberSaver='';
    operatorSaver='';
    document.querySelector(".upper").innerHTML= input;
})
//delete function 
del.addEventListener(('click'),function(e){
    input=input.slice (0,input.length-1);
    if(input.charAt(input.length-1)==='.'){
        input=input.slice (0,input.length-1);
    }
    document.querySelector(".display").innerHTML= input;
})

// operate / equal function
equals.addEventListener(('click'), function(e){
    if (input===''){
        return;
    }
    document.querySelector(".upper").innerHTML= numberSaver + "&nbsp;"+ "&nbsp"+ operatorSaver 
    + "&nbsp;"+ "&nbsp"+ input + "&nbsp;"+ "&nbsp" + '=';
    let holder1=parseFloat(input)
    let holder2=parseFloat(numberSaver);
    input = operate(operatorSaver,holder2,holder1)
    document.querySelector(".display").innerHTML= input;
    
})