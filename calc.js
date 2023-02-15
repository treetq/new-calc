let operator=false;
display=(val)=>{
let vl = document.getElementById('result').value;
    if(vl=='/' ||vl=='*' ||vl=='-' ||vl=='+')
    operator=true;
    
    
    if(vl.includes('.') && !operator && val=='.') val='';
    document.getElementById('result').value += val;
    
    return val;
}

equal=()=>{
    let x = document.getElementById('result').value;
    let y = new Function(`return ${x}`)();// nahitt eval() hhhh
    console.log(y);
    document.getElementById('result').value = y;
    operator=false;
    return y;
}

clearScreen=()=>{
    document.getElementById('result').value = '';
}