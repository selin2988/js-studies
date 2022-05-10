//******************** STRING KONUSU ***********************

// let cumle='Türkiye\'nin başkenti Ankara\'dır.'
// cumle='Mustafa \"Merhaba\" dedi'
// cumle=String("Merhaba");

let cumle="Mustafa" +" "+ "Karcıoğlu";
let ad="Mustafa";
let soyad="Kılıç";
// ad+=" Tarık";
// cumle=ad+" "+soyad;
cumle=ad.concat(" ",soyad);
let uzunluk=cumle.length;
cumle=cumle.toUpperCase();
cumle=cumle.toLocaleLowerCase("tr");
let index=cumle.indexOf("kılıç");
let part=cumle.substring(3,7)
let part2=cumle.slice(8);

part2=part2.replace("kılıç","Karcıoğlu");
cumle=cumle.replace("mustafa","Kadir");

let cumle2=" Kadir Karayel      ";
cumle2=cumle2.trim();

let cumle3="Ankara,İstanbul,İzmir,Muğla";
cumle3=cumle3.split(",");
let cumle4=cumle.split("");
let cumle5="Bugün Alanya'de hava çok güzeldi."
//cumle5=cumle5.split(" ");

if(cumle5.startsWith("Bugün")){
    console.log("Cümle bugün kelimesi ile başlıyor");
}



if(cumle5.includes("Fethiye")){
    console.log("Cümlede Fethiye geçiyor.");
}else if(cumle5.includes("Seydikemer")){
    console.log("Cümlede Seydikemer geçiyor.");
}else{
    console.log("Cümle Muğla'ya ait değil.");
}







console.log(cumle5.includes("Finike"));



let yas=35;
let kilo=80;

let cumle6="Mustafa'nın yaşı "+yas+" kilosu "+kilo;
//Template Literals
let cumle7=`Ahmet'in yaşı ${yas} kilosu ${kilo}.`

console.log(cumle6);
console.log(cumle7);


console.log(cumle);
console.log(uzunluk);
console.log(index);
console.log(part);
console.log(part2);
console.log(cumle2);
console.log(cumle3);
console.log(cumle4);
console.log(cumle5);