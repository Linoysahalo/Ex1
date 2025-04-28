let base;
let newBase;

function setBase(b){
base= b;
}

function setNewBase(b){
newBase=b;
}

function check(num, base){
    const chars= "0123456789ABCDEF".slice(0, base);
    const upperNum= num.toUpperCase();
    for (let i=0; i<upperNum.length; i++) {
        if (!chars.includes(upperNum[i])) {
            return false;
        }
    }
    return true;
}

function toDec(num, base){
    const chars= "0123456789ABCDEF";
    let decimal= 0;
    for (let i=0; i<num.length; i++){
        const digit= chars.indexOf(num[i]);
        decimal= decimal*base+digit;
    }
    return decimal;
}

function toBase(num, base){
    let result="";
    const chars= "0123456789ABCDEF";
    if (num===0){
        result="0";
    } else {
        while(num>0){
            result= chars[num%base]+result;
            num= Math.floor(num/base);
        }
    }
    return result;
}

function cnvrt(){
    if(isNaN(base)||isNaN(newBase)){
        alert("please select base and new base");
        return;
    }
    const num= document.getElementById('num').value;
    if (!check(num,base)){
        alert("the number is invalid for the chosen base")
        return;
    } else {
        decimal= toDec(num, base);
        let result= toBase(decimal, newBase)
        document.getElementById('res').innerText= `${result}`;
        document.getElementById('num').value = ""
    }
}

