console.log('Separate js from first.js file');

// option-1 : Directly set on the html element..
/* <button onclick="console.log('7')">Click me</button>
<button onclick="console.log('Hello')">Hire Me</button> */

// option-2 : add onclick function.
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3 : 
const blue = document.getElementById('makeBlue');
blue.onclick = makeBlue;
        // function call kora jabe na,,korle value set hoye jabe..

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option-3.. another
const purpleColor = document.getElementById('makePurple');
purpleColor.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

 // 4. addEventListener
 const pinkColor = document.getElementById('pink');
 pinkColor.addEventListener('click',makePink);

 function makePink(){
     document.body.style.backgroundColor = 'pink';
 }

 // 4.. another
 const greenColor = document.getElementById('green');
 // greenColor.addEventListener('click',function(){})
               
greenColor.addEventListener('click',function(){
       document.body.style.backgroundColor = 'green';
})

// 4. another...[Very very Important..]

// document.getElementById('golden').addEventListener('click',function(){})
document.getElementById('golden').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
})
