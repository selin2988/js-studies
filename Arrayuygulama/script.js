
// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun ve konsola yazdırın.
let dizi=["Bmw","Mercedes","Opel","Mazda"]

console.log(dizi);


// Dizinin eleman sayısını konsola yazdırın

console.log(dizi.length);



// Dizinin ilk ve son elemanını konsola yazdırın.?

console.log(dizi[0]);
console.log(dizi[3]);


// Diziye yeni eleman eklense bile son elemanı her zaman konsola yazdırmak için length metodundan faydalanın.
// "Renault" değerini dizinin sonuna ekleyin.
dizi.push("Renault");
console.log(dizi);

// dizi[dizi.length]="Renault";



// "Toyota" değerini dizinin başına ekleyin.


dizi.unshift("Toyota");
console.log(dizi);


// "Renault" değerini siliniz.

dizi.pop('Renault');
console.log(dizi);

// "Toyota" değerini siliniz.

dizi.pop('Toyota');
console.log(dizi);

// Dizi elemanlarını ters çevirin
dizi.reverse();
console.log(dizi);

// Dizi elemanlarını alfabetik olarak sıralayın.

// [1,2,5,80] dizisini sıralayın.

dizi.sort();
console.log(dizi);


// "Opel" değeri dizinin bir elemanı mıdır ?
console.log(dizi.indexOf("Opel"));
console.log(dizi.includes("Opel"));


var str = "Chevrolet,Dacia,Seat";
// str metnini diziye çeviriniz.(split metodu ile)
var dizi2=str.split(",");
console.log(dizi2);



// Oluşturduğunuz yeni dizinin elemanlarını ilk dizi ile birleştirin.

let dizi3=dizi.concat(dizi2);
console.log(dizi3);

// Oluşan yeni dizinin son iki elemanını splice metodu ile silin.

console.log(dizi3.splice(5,2));

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Kadir Karayel 3
     StudentB : Yasemin Demir 1 
     studentC : Selin Sakca 4   

     Örn: let studentD=["Erkan Kanlıoğlu", 2];

*/

let studentA=["Kadir","Karayel",3];
let studentB=["Yasemin","Demir",1];
let studentC=["Selin","Sakca",4];

let students=[studentA,studentB,studentC];
console.log(students);
// Her öğrenci için oluşturduğunuz bu dizileri, students adlı tek bir diziye ekleyip iki boyutlu bir dizi oluşturun.

console.log(students[0][0]);

// Oluşan bu iki boyutlu dizinin elemanlarından herhangi birini konsola yazdırın. (students[2][0] gibi)