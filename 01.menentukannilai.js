function menentukanNilai(nilai){
    if (nilai>=90) {
        return "A"
    }else if(nilai >= 80){
        return "B"
    }else if(nilai >= 70){
        return "C"
    }else if(nilai >= 60){
        return "D"
    }else{
        return "E"
    }
}
console.log(menentukanNilai(30));
console.log(menentukanNilai(75));