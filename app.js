let numButtons = document.querySelectorAll(".btn-num");
let opButtons = document.querySelectorAll(".btn-op");
let displayTxt = document.querySelector(".display");
let previewTxt = document.querySelector(".preview");
let eqButton = document.querySelector(".btn-eq");
let cButton = document.querySelector(".btn-c");
let pmButton = document.querySelector(".btn-pm");


let operator='';
let result=0;
displayTxt.textContent = '0';
previewTxt.textContent = '';
numButtons.forEach(button => button.addEventListener('click', () =>
{

    if(displayTxt.textContent==='0')
    {
        displayTxt.textContent = button.textContent;
    }
    else
    {
        displayTxt.textContent += button.textContent;
    }
}));

opButtons.forEach(button => button.addEventListener('click',() =>
{
    calculate();
    displayTxt.textContent='0';
    previewTxt.textContent=result;
    operator=button.textContent;
    
}))

eqButton.addEventListener('click',() =>
{
    // console.log(result);
    calculate();
    displayTxt.textContent = result;
    previewTxt.textContent ='';
    operator='';
})

cButton.addEventListener('click',() =>
{
    displayTxt.textContent='0';
    previewTxt.textContent='';
    operator='';
})

pmButton.addEventListener('click',() =>
{
    if(displayTxt.textContent==='0')return;
    if(Number(displayTxt.textContent) > 0)
    {
        displayTxt.textContent='-'+displayTxt.textContent;
    }
    else
    {
        displayTxt.textContent = Math.abs(Number(displayTxt.textContent));
    }

})
function calculate()
{
    let number = Number(displayTxt.textContent);
    switch(operator)
    {
        case '':
            result=number;
            break;
        case '+':
            result += number;
            break;
        case '-':
            result -= number;
            break;
        case 'X':
            console.log(result + " " + number);
            result *= number;
            break;
        case '/':
            result /= number;
            break;
        default:
            break;
    }
    
}