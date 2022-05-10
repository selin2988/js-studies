// Klavyeden girilen iki sayıyı toplayıp sonucu konsola yazdıran fonksiyon.

// let num1=parseInt(prompt("Lütfen birinci sayıyı giriniz."));
// let num2=parseInt(prompt("Lütfen ikinci sayıyı giriniz."));

// function sum(num1,num2){
//     return num1+num2;
// }
// console.log(sum(num1,num2));

// Klavyeden 0 girilene kadar girilen sayıların ortalamasını bulup döndüren fonksiyon
// function sum(num, toplam, count) {
//     toplam += num;
//     count++
//     return [toplam, count];
// }
// let count = 0;
// let toplam = 0;
// while (true) {
//     let num = parseInt(prompt("Lütfen sayı giriniz."));
//     if (num != 0) {
//         [toplam, count] = sum(num, toplam, count);
//     } else {
//         console.log(toplam / count);
//         break;
//     }
// }

// Kare hesaplayan fonksiyon tanımlayıp 1'den 20'ye kadar olan sayıların karesini konsola yazdırın

// for(i=1;i<21;i++){


//         console.log(power(i));
// }
// function power (i){
//     return i*i;

// }

// Yaş hesaplama fonksiyonu

// function yashesapla(birthyear){
//     return 2021-birthyear;
// }
// console.log("Mustafa "+yashesapla(2000)+" yasında");

// Emeklilik yaşı hesaplama

// function emeklilikhesapla(startyear){
//     return(25-(2021-startyear));
// }
// function hesapla(isim,startyear){
//     console.log(isim+ " emekliliğine  "+ emeklilikhesapla(startyear));
// }
// hesapla("Selin",1999);


// arguments kavrama
// function topla(){
//     console.log(arguments);
//     let toplam=0;
//     for (let i=0;i<arguments.length;i++){
//           toplam+=arguments[i];
//     }
//     return toplam;
// }
// console.log(topla(1,2,3,4,5,6,7));

// Bir sayının tekse false, çiftse true değeri döndüren fonksiyonu tanımlayın ve bu fonksiyonu kullanarak 
// 1 ve 50 arasında bulunan tüm çift sayıları konsola yazdırın 


// function sayı(i) {
//     if (i % 2 == 0) return i + " çift sayıdır."
//     else return i + " tek sayıdır."

// }
// for (let i = 1; i < 51; i++) {

//     console.log(sayı(i));
// }

// let arr = [4, 5, 6, 72, 34, 67, 90, 1, 3, -5, -9, , 13, 26, 7];
// // Kendisine argüman olarak gönderilen bir dizideki tüm sayıları toplayıp sonucunu 
// // döndüren fonksiyonu tanımlayın. arr dizisini kullanabilirsiniz.

// function topla(){
//     console.log(arguments);
//     let toplam=0;
//     let i=0;
//     arguments[i]=arr[i];
//     for (let i=0;i<arguments.length;i++){
//           toplam+=arguments[i];
//     }
//     return toplam;
// }
// console.log(topla(arguments));

// function dolarTL (n,kur){
//     return (n*kur);
// }
// console.log(dolarTL(100,9.7));

let arr3=[1,2,4,7,8,12,34,56,78,456,567,678,789,1234,2345,3456,4567,5678,6789,7890];
// function(arr, target){} adında bir fonksiyon tanımlayın. Bu fonksiyon klavyeden girilen bir sayı bu dizide varsa index numarasını, yoksa -1 sonucunu döndürsün.

// function bul(dizi,hedef){

//     for(let i=0;i<dizi.length;i++){
//         if(dizi[i]==hedef) return i;
//     }
//     return -1;
// }
// let sayı=parseInt(prompt("Sayısı Giriniz"));
// let sonuc=bul(arr3,sayı);
// console.log(sonuc);

/**************** Bankamatik Simülasyonu ************/
/*Aşağıdaki bilgileri kullanarak bir bankamatik simülasyonu gerçekleştiren fonksiyonu tanımlayın. Gerekli Bilgiler: 

- Bakiye yeterliyse paranızı alabilirsiniz deyip çekilen miktarı bakiyeden düşsün.

- Bakiye yeterli değilse çekilmek istenen miktarı bakiye+ekhesabın karşılayıp karşılamadığına bakılsın ve; 
    (1)karşılıyorsa confirm metodu ile onay alınsın, çekilmek istenen miktar bakiyeden ve ekhesap'tan düşülsün, 
    (2)karşılamıyorsa üzgünüz bakiyeniz yetersiz diye uyarı versin. */

    // let hesapA = {
    //     ad : 'Ahmet',
    //     soyad:'Yılmaz',
    //     hesapNo : '12345678',
    //     bakiye : 2000,
    //     ekHesap : 1000
    // }
    
    // let hesapB= {
    //     ad : 'Ayşe',
    //     soyad:'Yıldırım',
    //     hesapNo : '12356479',
    //     bakiye : 3000,
    //     ekHesap : 2000
    // }
    // function paraCek(hesap,miktar){
    //     if(miktar<=hesap.bakiye){
    //         hesap.bakiye-=miktar;
    //         console.log("Lütfen kartınızı alınız");
    //         console.log("Paranızı alabilirsiniz");
    //     }else{
    //         if((miktar<=(hesap.bakiye+hesap.ekHesap))){
    //             if(confirm("Ek hesabınızı kullanıyorsunuz, onaylıyor musunuz?")){
    //            let kalan=miktar-hesap.bakiye;
    //            hesap.ekHesap-=kalan;
    //            console.log("Kartınızı alınız");
    //            console.log("Paranızı alınız");
    //             }else{
    //            console.log("İşlem iptal edilmiştir");
    //            console.log("Kartınızı alınız");
    //             }
    //     }else{
    //         console.log("işleminiz iptal edilmiştir");
    //     }
    
    
    // }
        
    // }
    // paraCek(hesapA,2500);
    // console.log("HesapA Bakiye:" +hesapA.bakiye);

  