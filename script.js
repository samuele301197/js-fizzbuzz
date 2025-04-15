// Ciò che vogliamo è che il programma stampi i numeri divisibili per 3(fizz), per 5(buzz), e sia per 3 che per 5(fizzbuzz). Per cui per prima cosa andiamo a richiedere l'informazione con più contenuti, impostandola su IF, in seguito gli "scarti" dell'informazione li mettiamo su else if (grazie a Loris per la delucidazione!)


for (let i = 1; i <= 100; i++) {
    console .log("iterazione", i);
    if ((i % 3 === 0 && i % 5 === 0)) {
        console.log("FIZZBUZZ");
    } else if ( i % 5 === 0) {
        console.log("BUZZ");
    } else if (i % 3 === 0) {
        console .log("FIZZ");
    }
}
