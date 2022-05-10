// Dizi tanımlama

let dizi;
// let dizi2=Array(1,2);

//Diziler her türden veriyi tutabilir
dizi=["Yasemin", "Selin", "Kadir", "Mustafa"];
// dizi=[1,2,3];
// dizi=[1,"Yasemin",true,,undefined,null,{ad:"Mustafa"},[1,2,3]];
//dizi=[[1,2,3],[4,5,6]];
//dizi="Yasemin";


//Diziye eleman Ekleme
//dizi[4]="Mehmet";
// dizi[dizi.length]="Yeliz";
// dizi[dizi.length]="Ayşe";

//Push dizi sonuna eleman ekler
dizi.push("Mehmet");

// Unshift dizi başına eleman ekler
//dizi.unshift("Ali");

//Pop dizi sonundan eleman siler
dizi.pop();
//dizi.pop();

//Shift Dizi Başından eleman siler.
//dizi.shift();

//Reverse Diziyi tersine çevirir
dizi.reverse();

//Sort dizi elemanlarını a-z, 0-9 sıralar
dizi.sort();
let numbers=[1,500,2,4];
numbers.sort();
console.log(numbers);

// Concat metodu iki diziyi birleştirir
let dizi2=dizi.concat(numbers);
console.log(dizi2);

//Splice diziye eleman ekleme ve silme için kullanır
dizi2.splice(4,3,"Yeşim");
console.log(dizi2);

//Indexof dizide arama yaptırır, index no'yu döner. Elemanı bulamazsa -1 döner
let index=dizi.indexOf("Yasemin");
let index2=dizi.indexOf("Ramazan");
console.log(index);
console.log(index2);

//Includes dizide arama yaptırır, sonuca göre true veya false döndürür

console.log(dizi.includes("Kadir"));

//Find eleman aratır. Parametre olarak fonksiyon alır. Bulduğu ilk elemanı döndürür. Eleman bulamazsa undefined döndürür
let dizi3=[1,2,3,4,5,6,7,8]
let result=dizi3.find(function (eleman){
   return eleman>5;
}) 

result=dizi3.filter(function (eleman) {
    return eleman>5;
})

console.log(result);


console.log(dizi);
// dizi[3]="Erkan";
// console.log(dizi);
// dizi[4]="Ahmet";
// console.log(dizi);

//console.log(dizi[1]);
//console.log(dizi2)

