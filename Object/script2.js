// let ad="Mustafa";
// let soyad="Karcıoğlu";

let person={
    ad:"Mustafa",
    soyad:"Karcıoğlu",
    dt:2000,
    tcNo:111,
    yasHesapla: function() {
        return 2021-this.dt;
    },
    beslen: function (yemekAdi) {
        console.log(this.ad,yemekAdi,"ye");
    },
    hobiler:["Kitap","Müzik","Film"]
}
let person2={
    ad:"Yasemin",
soyad:"Demir",
dt:2001,
tcNo:112,
yasHesapla: function() {
    return 2021-this.dt;
},
beslen: function (yemekAdi) {
    console.log(this.ad,yemekAdi,"ye");
},
hobiler:["Spor","Müzik","Kayak"]}

let person3={
    ad:"Selin",
soyad:"Sakca",
dt:2002,
tcNo:113,
yasHesapla: function() {
    return 2021-this.dt;
},
beslen: function (yemekAdi) {
    console.log(this.ad,yemekAdi,"ye");
},
hobiler:["Dalış","Trekking","Kayak"]}
let person4={
    ad:"Melek",
soyad:"Dontlu",
dt:2003,
tcNo:114,
yasHesapla: function() {
    return 2021-this.dt;
},
beslen: function (yemekAdi) {
    console.log(this.ad,yemekAdi,"ye");
},
hobiler:["Gitar","Tenis","Yüzme"]}

// console.log(person.ad);
// console.log(person.yasHesapla());
// person.beslen("elma");
// console.log(person.hobiler[0]);

let people=[person,person2,person3,person4];

console.log(people);



for(eleman of people){
    console.log(eleman.ad);
    console.log(eleman.hobiler[0]);
    console.log(eleman.yasHesapla());
}