let qty = document.getElementsByClassName('qty');

const minus = document.getElementsByClassName('fa-minus');
for(let i=0 ; i < minus.length ; i++){
    minus[i].addEventListener('click', function(e){
        let parentEl = e.target.parentNode.children[1];
        let x = parentEl.innerText;
        if(parseInt(x)){
            x--;
            parentEl.innerText = x;
        }
        totalCalc();
    });
    
}
const plus = document.getElementsByClassName('fa-plus');
for(let i=0 ; i < plus.length ; i++){
    plus[i].addEventListener('click', function(e){
        let parentEl = e.target.parentNode.children[1];
        let x = parentEl.innerText;
            x++;
            parentEl.innerText = x;
            totalCalc();
    });

}

function totalCalc(){
const subTotal = document.getElementsByClassName('subtotalamount')[0];
const price = document.getElementsByClassName('price')
let x=0;
for(let i =0; i < price.length; i++){
    x += parseInt(qty[i].innerText)*parseInt(price[i].innerText);
    subTotal.innerHTML = x;
}
document.getElementsByClassName('totalamount')[0].innerHTML = 50 + parseInt(x);
}