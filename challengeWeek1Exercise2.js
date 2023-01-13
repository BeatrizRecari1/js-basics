// Convert one currency to USD

function convertCurrency(amount=0, currency= "E"){
    let answer = 0;
    switch(true){
        case (currency=="E"):
            answer =  amount* 1.08;
        break;
        case( currency=="Y"):
            answer = amount * 0.0078;
        break;
        case (currency ="C"):
            answer = amount*0.00021;
            break;
            default:
                answer = "Currency no registered"
    }
    return answer;
}
const amount = 5000;
const currency = "Y";
const convertedAmount = convertCurrency(amount,currency);
console.log(`${amount} ${currency} is ${convertedAmount} USD`);

