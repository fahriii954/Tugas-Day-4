function cekKabisat(tahun){
    if(tahun % 400 === 0){
        return "Kabisat"
    }else if(tahun % 400 !== 0){
        if(tahun % 100 === 0){
        return "Bukan Kabisat"
        }else if(tahun % 4 === 0){
            return "Kabisat"
        }else{
            return "Bukan Kabisat"
        }
    }
}
console.log(kabisat(1900));
console.log(kabisat(2000));
console.log(kabisat(2001));
console.log(kabisat(2016));