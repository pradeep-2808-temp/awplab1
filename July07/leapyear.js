let a = 2025

function checkYear(a){
if(a%4==0 && a%100!=0 || a%400==0){
    console.log('leap year!')
}
else{
    console.log('Not a leap year!')
}
}
checkYear(a)