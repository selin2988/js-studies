/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini bir dizi içerisinde tutunuz.
   
   Araç Bilgileri:

      id : bmw_1
      marka: bmw
      model : 116d
      yil : 2015
      renk : white
      servisKayitlari : 
            id : bmw_1_1
            tarih: 17.09.2016 
            km : 13000 
            toplamUcret : 900
            servisDetayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw_1_2
            tarih : 10.01.2017 
            km : 28000 
            toplamUcret : 1800
            servisDetayı:
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/


// 3. aracın rengini, 2. servis tarihini ve ücretini konsola yazdırın.

let aracBilgileri = [{
   id: "bmw_1",
   marka: "bmw",
   model: "116d",
   yil: 2015,
   renk: "white",
   servisKayitlari: [{
         id: "bmw_1_1",
         tarih: "17.09.2016",
         km: "13000",
         toplamUcret: "900",
         servisDetayi: [
            {id: 1,işlem: "yağ değişimi", ücret: 300},
            {id : 2, işlem : "filtre değişimi", ücret: 300},
            {id : 3, işlem : "fren hidroliği", ücret: 300}

               ]
            },
         {
         id : "bmw_1_2",
         tarih : "10.01.2017 ",
         km : 28000, 
         toplamUcret : 1800,
         servisDetayı:[
               {id : 1, işlem : "yağ değişimi", ücret : 350},
               {id : 2, işlem : "filtre değişimi", ucret: 350},
               {id : 3, işlem : "fren hidroliği",  ucret: 300},
               {id : 3, işlem : "balata değişimi", ucret: 800} 
            ]
         }

      ]
   },
   {
      id: "bmw_2",
      marka: "bmw",
      model: "5.20",
      yil: 2017,
      renk: "black",
      servisKayitlari: [{
            id: "bmw_2_1",
            tarih: "17.09.2016",
            km: "13000",
            toplamUcret: "900",
            servisDetayi: [
               {id: 1,işlem: "yağ değişimi", ücret: 300},
               {id : 2, işlem : "filtre değişimi", ücret: 300},
               {id : 3, işlem : "fren hidroliği", ücret: 300}
   
                  ]
               },
            {
            id : "bmw_2_1",
            tarih : "10.01.2017 ",
            km : 28000, 
            toplamUcret : 1800,
            servisDetayı:[
                  {id : 1, işlem : "yağ değişimi", ücret : 350},
                  {id : 2, işlem : "filtre değişimi", ucret: 350},
                  {id : 3, işlem : "fren hidroliği",  ucret: 300},
                  {id : 3, işlem : "balata değişimi", ucret: 800} 
               ]
            }
   
         ]
      },
      {
         id: "seat_1",
         marka: "seat",
         model: "leon",
         yil: 2017,
         renk: "red",
         servisKayitlari: [{
               id: "seat_1_1",
               tarih: "17.09.2016",
               km: "13000",
               toplamUcret: "900",
               servisDetayi: [
                  {id: 1,işlem: "yağ değişimi", ücret: 300},
                  {id : 2, işlem : "filtre değişimi", ücret: 300},
                  {id : 3, işlem : "fren hidroliği", ücret: 300}
      
                     ]
                  },
               {
               id : "seat_1_1",
               tarih : "10.01.2017 ",
               km : 28000, 
               toplamUcret : 1800,
               servisDetayı:[
                     {id : 1, işlem : "yağ değişimi", ücret : 350},
                     {id : 2, işlem : "filtre değişimi", ucret: 350},
                     {id : 3, işlem : "fren hidroliği",  ucret: 300},
                     {id : 3, işlem : "balata değişimi", ucret: 800} 
                  ]
               }
      
            ]
         }
];

console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].servisKayitlari[0].servisDetayi[0].ücret);

console.log(aracBilgileri);

   








   
        