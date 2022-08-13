function ratingFilm(usia){
    if(usia >= 21){
        return "Dewasa"
    }else if(usia >= 13){
        return "Remaja"
    }else if(usia >= 9){
        return "Bimbingan Orang Tua"
    }else{
        return "Semua Usia"
    }
}
console.log(ratingFilm(15));
console.log(ratingFilm(32));