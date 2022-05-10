// For Döngüsü bu şekilde kurulur
// for(let i=0;i<5;i++){
//         console.log("Sayac: ",i);
// }

//for() içerisine 3 parametre alır.
// 1. let i=0; Neyi sayacak, kaçtan başlayacak?(i'yi sayacak,0'dan başlayacak)
// 2. i<5 Nereye kadar sayacak? (i 5'ten küçük olduğu sürece sayacak.)
// 3. i++ Kaçar kaçar sayacak? i++ ile i'nin birer birer sayması gerektiğini söylüyoruz. i+=2 dersek ikişek ikişer sayar.

//*********Continue Deyimi */

// for(let i=0;i<5;i++){
//     if(i==3){
//         continue;
//     }
//     console.log("Sayac: ",i)
// }


//******** Break Deyimi*/ 

// for(let i=0;i<5;i++){
//     if(i==3){
//         break;
//     }
//     console.log("Sayac: ",i)
// }

// for(let i=5;i>0;i--){
//     console.log("Sayac: ",i);
// }

//While Döngüsü

// let i=1;
// while(i<50){
//     if(i==3) {
//         console.log("3'ü buldunuz");
//         i++;
//         continue;
//     }
//     console.log("Sayac: ",i);
//     i++;
// }

// for(let i=1;i<50;i+=2){
//         console.log("Sayac: ",i);
// }


// while(true){
//     console.log("Döngü başı");
//     let sayi=parseInt(prompt("Bir sayi giriniz:"));
//     if(sayi>100){
//         console.log("100'den büyük bir sayı girdiniz");
//         break;
//     }else{
//         console.log("Daha büyük bir sayı girin.")
//     }

//     console.log("Döngü sonu.");

// }

// console.log("Döngüden çıkıldı");


/** DO WHILE DÖNGÜSÜ */

// let i=5;
// // while(i<0){
// //     console.log("Döngü çalışsın");
// // }
// do{
//     console.log("Sayaç:"+i)
//     i++;
// }while(false);



/*********** PIN KODU ÖRNEĞİ ************/

// let pin="1234";
// for(let hak=3;hak>0;hak--){
//     let girilenPin=prompt("Lütfen pin kodunuzu giriniz?");
//     if(pin===girilenPin){
//         alert("Hoşgeldiniz!");
//         break;
//     }else{
//         if(hak==1){
//             alert("Giriş başarısız oldu");
//         }else{
//             alert(hak-1+ " hakkınız kaldı.");
//         }
//     }
// }


let h2=document.getElementById("hak");
// let pin="1234";
// let hak=3;
// while(hak>0){
//     let girilenPin=prompt("Pin kodunuzu giriniz:");
//     if(pin===girilenPin){
//         h2.innerText="Hoşgeldiniz!";
//         console.log("1 bölüm çalıştı")
//         break;
//     }else{
//         console.log("else çalıştı")
//         hak--;
//         if(hak==0){
//             h2.innerText="Giriş başarısız oldu";
//             console.log("hak 0 olmuş")
//             break;
//         }else{
//             console.log("kalan hak sayısı çalıştı")
//             h2.innerHTML=hak+" hakkınız kaldı";
//         }
//     }
// }


/// Soru: 1'den 10'a kadar olan sayıların toplamını hesaplayıp konsola yazdıralım.

// let toplam=0;
// for(let i=1;i<=10;i++){
//     toplam=toplam+i;
// }
// console.log("Toplam:"+toplam);

// let faktor=1;
// for(let i=1;i<=5;i++){
//     faktor=faktor*i;
// }
// console.log("Faktöriyel: "+faktor);

// let dizi=[10,11,12,13,14];

// for(let i=0;i<dizi.length;i++){

//     console.log(dizi[i]);

// }
// dizi.forEach((eleman)=>console.log(eleman))

// let dizi=[[1,2,3,4],[5,6,7,8],[9,10,11,12,13,14,15]];
// for(let i=0;i<dizi.length;i++){
//     for(let j=0;j<dizi[i].length;j++)[
//         console.log(dizi[i][j])
//     ]
// }

// let dizi=[1,2,3,4,5,6,6,7,8,9,10];

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         console.log(i+"x"+j+"="+i*j);
//     }
// }
// "\t"
// let alt="";
// let sonuc="";
// for(let i=1;i<=10;i++){
//     alt="";
//     for(let j=1;j<=10;j++){
//         alt+=i+"x"+j+"="+i*j+"\n";
//     }
//     sonuc+=alt;
// }
// h2.innerText=sonuc;