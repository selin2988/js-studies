//Strings

var cumle = "  JavaScript* (JS) is a lightweight, interpreted, or just-in-time compiled* programming* language with first-class functions. ";

var url = "http://seydikemerhem.meb.k12.tr/WEB UYGULAMALARI GELİŞTİRME KURSU sıfırdan ileri seviye ü ö ş";


let uzunluk=cumle.length;
console.log(uzunluk);


// kaç kelimeden oluşuyor ?

console.log(cumle.trim().split(' ').length);


// Tüm cümleyi küçük harfe çevirin.


console.log(cumle.toLowerCase());


// Cümlenin başındaki ve sonundaki boşlukları siliniz.

console.log(cumle.trim());

// '*' karakterini silin.

console.log(cumle.replace("*",""));


// url hangi protocol'u kullanmaktadır ? (http,https)

// if(url.includes("http")){
    // console.log("Url http protokolu kullanmaktadır.");
// }else if(url.includes("https")){
//     console.log("Url https protokolu kullanmaktadır.");
// }

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url'nin içinden alttaki str kısmını çıkarınız.
var str = 'http://';
url=url.replace(str,"")
console.log(url);


// url, '.com' ifadesini içeriyor mu?

// if(url.includes(".com")){
//     console.log("Url .com içermektedir.");
// }else if(url.includes("k12.tr")){
//     console.log("Url k12.tr içermektedir.");
// }

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));


// url string ifadesini geçerli bir url olarak düzenleyiniz.(Geçerli bir url, boşluk içermez, büyük harf içermez, çığöşü karakterlerini içermez.)

console.log(url.toLowerCase()
  .replace(/ı/g,'i')
  .replace(/ü/g,'u')
  .replace(/ö/g,'o')
  .replace(/ş/g,'s')
  .replace(/ç/g,'c'));