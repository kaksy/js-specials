// alert('there will be turmoil');
// [1, 2] .forEach(alert)

// let name = " uwakmfon"
// alert(typeof name);

// let digit = 23
// let num = prompt('guess the number', 23);
// if (digit === 23){
//     alert('lucky guess')
// }
// else {
//     alert('really bad')
// }

let cond = prompt('alert your full name here ', 18);
let result= (cond >= 18) ? alert('hello'): alert('void');


let question = function(ask, yes, no) {
    if (confirm(ask))yes()
    else no();
}
question(
    'do you accept',
   function (){alert('you accepted')} ,
   function (){alert ('you disaagreed')}

)

// using switch constructor once again 
let name = 'Atan'
let age = +prompt(`what is your age ${name}?`)

switch (age){
    case 18:
        alert('keep pushng harder');
        break;

     case 17:
         alert('your almost getting there');
         break;   
    case 20:
        alert('this works');
        break;
        default:
            alert('go take permission from dad or mum');
}    