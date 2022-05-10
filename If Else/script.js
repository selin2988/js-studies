// 1. Klavyeden girilen iki sayıdan büyük olandan küçük olanı çıkartıp sonucu konsola yazdırın
// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// let b = parseInt(prompt("Lütfen ikinci sayıyı giriniz"))
// if (a > b) {
//     console.log("a ile b nin farkı: ", a - b)
// } else {
//     console.log("b ile a nın farkı", b - a);
// }


// 2. Klavyeden girilen iki sayıdan büyük olanın karesini hesaplayıp sonucu konsola yazdırın
// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// let b = parseInt(prompt("Lütfen ikinci sayıyı giriniz"))
// if(a>b){
//     console.log("a nın kartesi : ",(a*a));
// }else{
//     console.log("b nın kartesi : ",(b*b));
// }

// 3. Klavyeden girilen bir sayı 0'dan büyükse, konsola “Pozitif”, 0'dan küçükse konsola “Negatif” yazdırın
// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// if(a>0){
//     console.log("Sayı pozitif ");
// }else{
//     console.log("sayı negatif");
// }


// 4. Klavyeden girilen bir sayının tek mi çift mi olduğunu bulup, konsola tekse “tek”, çiftse “çift” yazan sonucu konsola yazdırın
// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// if(a%2==0){
//     console.log("sayı çift");
// } else{
//     console.log("sayı tek");
// }


// 5. Klavyeden girilen iki notun ortalaması, 45'ten büyük ya da 45'e eşitse konsola “Geçti”, 45'ten küçükse “Kaldı” yazdırın
// let a = parseInt(prompt("Lütfen bir not giriniz"))
// let b = parseInt(prompt("Lütfen ikinci not giriniz"))
// if(((a+b)/2)>=45){
//     console.log("Geçti");
// }else{
//     console.log("Kaldı");
// }




/*
6. Switch Case yapısını kullanarak, 
    Klavyeden takım adı girildiğinde, 
       “Galatasaray” ise “Aslanlar.”
        “Fenerbahçe” ise “Kanaryalar”
        “Beşiktaş” ise “Kartallar”
        “Trabzonspor” ise “Kaplanlar”
yazdırın



*/

// let team=prompt("Takımınızı giriniz")
// switch(team){
//     case "Galatasaray":
//         console.log("Aslanlar");
//         break;
//     case "Fenerbahçe":
//         console.log("Kanaryalar");
//         break
//     case "Beşiktaş":
//         console.log("Kartallar");
//         break
//     case "Trabzonspor":
//         console.log("Kaplanlar");
//        break;
//        default:
//            console.log("Takımınız bulunamadı");
//         }



// 7. Üç kenar uzunluğu klavyeden girilen bir üçgen, eşkenar üçgense, konsola “Eşkenar üçgen” yazdırın
// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// let b = parseInt(prompt("Lütfen ikinci sayıyı giriniz"))
// let c = parseInt(prompt("Lütfen üçüncü sayıyı giriniz"))

// if(a==b && b==c){
//     console.log("Eşkenar üçgen");
// }else{
//     console.log("Eşkenar üçgen değildir");
// }

// 8. Üç kenar uzunluğu klavyeden girilen bir üçgen ikizkenar üçgense ekrana “İkizkenar üçgen” yazdırın

// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// let b = parseInt(prompt("Lütfen ikinci sayıyı giriniz"))
// let c = parseInt(prompt("Lütfen üçüncü sayıyı giriniz"))

// if(a==b && b!=c){
//     console.log("İkizkenar üçgen");
// }else{
//     console.log("ikizkenar  üçgen değil");
// }

// 9. Üç kenar uzunluğu klavyeden girilen bir üçken çeşitkenar üçgense ekrana “Çeşitkenar üçgen” yazdırın

// let a = parseInt(prompt("Lütfen bir sayı giriniz"))
// let b = parseInt(prompt("Lütfen ikinci sayıyı giriniz"))
// let c = parseInt(prompt("Lütfen üçüncü sayıyı giriniz"))

// if(a!=b && b!=c && a!=c){
//     console.log("çeşitkenar üçgen");
// }else{
//     console.log("çeşitkenar üçgen değil");
// }

// 10. Klavyeden girilen parola doğru ise “Hoşgeldin” değilse “Yanlış Parola” yazdırın.
let parola="selin"
let a=prompt("Lütfen parola giriniz")

if(a==parola){
    console.log("Hoşgeldin");
}else{
    console.log("Yanlış Parola");
}