
// SORU1:1'den 100'e kadar tüm sayıları konsola yazdırın
// for(let i=1;i<101;i++){
//     console.log(i);
// }

// SORU2:1'den 20'ye kadar olan sayıların karesini konsola yazdırın
// for(let i=1;i<21;i++){
//     console.log(i*i);
// }

// SORU3:1 ve 50 arasında bulunan tüm çift sayıları konsola yazdırın 
// for(let i=1;i<51;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=2;i<51;i=i+2){
//     console.log(i);
// }

// SORU4:50'den 1'e doğru tüm tek sayıları konsola yazdırın
// for(i=50;i>0;i--){
//     if(i%2!=0)
//     console.log(i);
// }

// SORU5:arr dizisinin elemanlarını toplayıp sonucu ekrana yazdırın
// let arr=[4,5,6,72,34,67,90,1,3,-5,-9,13,26,7];
// let toplam=0;
// for(i=0;i<arr.length;i++){
//     if (isNaN(arr[i])) {
//         continue;
//     } 
//     toplam += arr[i];
//     console.log(toplam);
// }
// let i=0;
// while(i<arr.length){
//     toplam += arr[i];
//     i++;
//     }
// console.log(toplam);

// let arr2= [[1,2,5,6,7,2], [-5,-9,13,26,7], [3,45,67,-45,-23]];
// SORU6:iki boyutlu arr2 dizisinin elemanlarını toplayıp konsola yazdırın

// let toplam=0

// for(let i=0;i<arr2.length;i++){
//     console.log(arr2[i]);
    
//     for (let j=0;j<arr2[i].length;j++){
//         toplam+=arr2[i][j];  
//     }
//    }

// console.log(toplam);

// SORU7:Klavyeden girilen bir sayı arr3 dizisinde varsa, konsola elemanın index numarasını, yoksa -1 sonucunu yazdırın
// let arr3=[1,2,4,7,8,12,34,56,78,456,567,678,789,1234,2345,3456,4567,5678,6789,7890];

// let number=parseInt(prompt("Lütfen bir sayı giriniz"));
// let index; //Bulduğumuz index no'yu bu değişkene atayacağız.
// let isFound=false; // Bunun ile bulup bulmadığımız ölçeceğiz
// for(let i=0;i<arr3.length;i++){
//     if(number==arr3[i]){
//        index=arr3.indexOf(number);
//        //veya index=i; diyebiliriz. zaten i, index numarasına karşılık geliyor.
//        isFound=true;
//        break; // Bulduğumuza göre döngüden çıkabiliriz.
//     }
// }
// if(isFound){
//     console.log(index);
// }else{
//     console.log("-1")
// }

// SORU8:0'dan başlayarak klavyeden girilen bir sayıya kadar tüm sayıları konsola yazdırın
// let number=parseInt(prompt("Lütfen sayı giriniz"));


// for(let i=0;i<number;i++){
//     console.log(i);
// }



// SORU9:Klavyeden girilen iki sayı arasındaki tüm sayıları konsola yazdırın

// let number1=parseInt(prompt("Lütfen sayı giriniz"));
// let number2=parseInt(prompt("Lütfen sayı giriniz"));

// for(let i=number1;i<=number2;i++){
//     console.log(i);
// }

// SORU10:Klavyeden girilen 5 sayıyı toplayarak sonucu konsola yazdırın.

// let number=parseInt(prompt("Lütfen birinci sayıyı giriniz"));


// let toplam=0;

// for(let i=0;i<=number;i++){
//     toplam=toplam+number;
//     console.log(toplam);

// }

// SORU11:Klavyeden girilen sayının faktöriyelini konsola yazdırın.

// let number=parseInt(prompt("Lütfen bir sayı giriniz"));
// let faktoriyel=1;

// for(let i = 1; i <= number; i++){
//     faktoriyel = faktoriyel * i;
// }
// console.log("Faktöriyel : " + faktoriyel);


// soru12:Klavyeden girilen username ve password eşleşiyorsa konsola "hoşgeldiniz", eşleşmiyorsa "hatalı kullanıcı adı veya parola" yazdırın
// let users= [
//     {username:"kadir",password:"123"},
//     {username:"yasemin",password:"456"},
//     {username:"selin",password:"789"},
//     {username:"erkan",password:"fenerbahçe"},
//     {username:"mustafa",password:"1234"}]
//     while(true){  
//     let username=prompt("Lütfen kullanıcı adını giriniz");
//     let parola=prompt("Lütfen şifreyi giriniz");
//     let bool=false;
//     for (let user of users){
//         if(user.username==username && user.password==parola){
//             alert("Hoşgeldiniz");
//             bool=true;
//             break;
//         }
//     }
//     if(bool==false){
//         alert("Hatalı Kullanıcı adı veya parola")
//     }else break;
// }
    
// SORU13:Klavyeden 0 girilene kadar girilen sayıların ortalamasını hesaplatıp, 0 girildiğinde bulunan ortalamayı konsola yazdırın.
// let toplam=0;
// let count=0;

// while(true){
//     let number=parseInt(prompt("Lütfen bir sayı giriniz"));
//     if(number!=0){
//         toplam=toplam+number;
//         count++;
//     }else{
        
//         console.log(toplam/count);
//         break;
//     }
   
// }

//SORU14: 0,1,1,2,3,5,8,13,21,34... dizisine fibonacci dizi denmektedir. Fibonacci dizisinin 100. elemanını bulup konsola yazdırın.




// SORU15:Bonus
/* 
   Sayı Tahmin Oyunu

   1-100 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

let rastgele=Math.round(Math.random()*99)+1;
let count=0;
console.log(rastgele);
while(true){

    let tahmin=parseInt(prompt("Lütfen sayı giriniz"));
    count++
    if(tahmin>rastgele) {
        alert("Daha küçük sayı");
    }
    
    else if(tahmin<rastgele) {
        alert("Daha büyük sayı");
    }
    else {
        alert("Bravo");
        break;
    }
}





