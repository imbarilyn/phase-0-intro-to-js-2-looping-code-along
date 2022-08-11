// Code your solutions in this file

// const pple = [ 'Guadalupe', 'Ollie', 'Aki' ];
function writeCards(pple, event){
    const watu = [];
    for(let i = 0; i < pple.length; i++){
        watu.push(`Thank you, ${pple[i]}, for the wonderful ${event} gift!`);
    }
    return watu ;
}

function countDown(num) {

    while(num >= 0){
        console.log(num);
       num--;
    }
    //console.log (num);
}
countDown(10);

        
