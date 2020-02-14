
/*Function to get numbers */
function getNumber(num) {
    var input_var = document.getElementById('input');
    switch(num){
        case 1:
            input_var.value += '1';
            break;
        case 2:
            input_var.value += '2';
            break;
        case 3:
            input_var.value += '3';
            break;
        case 4:
            input_var.value += '4';
            break;
        case 5:
            input_var.value += '5';
            break;
        case 6:
            input_var.value += '6';
            break;
        case 7:
            input_var.value += '7';
            break;    
        case 8:
            input_var.value += '8';
            break;                  
        case 9:
            input_var.value += '9';
            break;
        case 0:
            input_var.value += '0';
            break;        

    }
}
/* Function to get operands */

function getOperand(operand){
    var input_var = document.getElementById('input');
    switch(operand){
        case '+':  
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case '÷':
            input_var.value += '/';
            break;
        case 'x':
            input_var.value += '*';
            break;
        }
}
/* Function to get brackets */
function getBracket(parenthesis){
    var input_var = document.getElementById('input');
    switch(parenthesis){
        case '(': 
            input_var.value += '(';
            break;
        case ')':
            input_var.value += ')';
            break;
        }
}

function clearAll(){
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}
/*backspace*/
function clear_entry(){

    var input_var = document.getElementById('input');
    var x = input_var.value;
    if (x.length > 0){
        /*deletes from the left*/
        x = x.substring(0, x.length-1);
    }
    document.getElementById('input').value = x;

}

function getDecimal(decimal){
    var input_var = document.getElementById('input');
    input_var.value += '.';
}

function equal(){
    var input_var = document.getElementById('input');
    try{
        /*calculation */
        ans = eval(input_var.value);
        /*display in answer box */
        document.getElementById('answer').value = '=' + ans;
        /*after computation puts back into input box */
        document.getElementById('input').value = ans;
    }
    /*if multiple operands are adjacent then error display */
    catch(e){
        if (e instanceof SyntaxError){
           document.getElementById('answer').value = '=' + " Invalid Calculation";
        }
    }
    
}