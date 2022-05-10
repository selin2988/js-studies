try{
    if(true){
        throw new ReferenceError ("Refarans Hatası,böyle değişken yok");
        throw new URIError ("Değişken adında hata var");
        throw new SyntaxError ("Yazım hatası");
        throw new RangeError ("Uzun sayı hatası");
        throw new TypeError ("Tür hatası");

    }
    // let 1a=5; syntax Hatası
    // let num=1;
    // num.toUppercase();
    // let x=y+1; referenceError
    let x=parseInt(prompt("0 ile 10 arasında sayı giriniz"))
    if(x<=0 ||x>=10) throw new RangeError("sayı istenen aralıkta değil")
} catch(error){
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log("İşlem tamamlandı");
    // Hata oluşsada oluşmasada çalışır.
}