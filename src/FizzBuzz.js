function fizzbuzz(number){
    for( let i = 0; i <= number; i++){
        if((number % 5 === 0) && ( number % 3 === 0)){
            return 'FIZZBUZZ';
        }else if( number % 5 === 0){
            return 'BUZZ';
        }else if( number % 3 === 0){
            return 'FIZZ';
        }else{
            return number;
        }
    }          
}

fizzbuzz(15);