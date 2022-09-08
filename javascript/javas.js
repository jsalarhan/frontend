
const dizi2=[1,2,3,4,5,6,7,8,9]
let diziFunction18=()=>{
    let newData=dizi2.map((value)=>{
return value*2;
    })
    console.log(newData)
}

//diziFunction18()
let result3=document.getElementById("h_id");
result3.addEventListener("click",function() {alert("merhaba")},false);





let diziFunction20=()=>{

const person={
    adi:"jiyan",
    soyadi:"salarhan",
    numara:1212,
    isLogin:true,
    jsTeknolojiler:['jqery','react','angular'],
javaTeknolojileri:{
    adi:"javase",
    yıl:"1990"
},
frontend:function(){
    return `${this.javaTeknolojileri.adi} ${this.numara}`;
},
backend:function(){
    return`${this.adi} ${this.soyadi}`
}
};
//person.meslek="bilgisayar öğretmeni";
//console.log(person.adi);
//console.log(person.soyadi.toLocaleUpperCase());

console.log(`adi:${person.adi} soyadi:${person.soyadi} 
java:${person.jsTeknolojiler[0]}
frontend:${person.frontend()}

`);
console.log(person.backend());


}
//diziFunction20()

// call Apply Bind ==> 
// Bir fonksiyonun farklı objelerde kullanmaya yarar.
// Fonksiyonun dışardan bir obje verisine bağladım.
// parametreli ve parametresiz kullanım söz konusudur.
// call ile apply aynıdır sadece parametrelide kullanımlarında dizi yazmak
// bind ise bir fonksiyon olarak döndürmemiz gerekir. ancak call ve apply direk çağırır.

//1.YÖNTEM PARAMETRESIZ
//FONKSIYON
// let callApplyBindFunctionWithoutParam= function(){
//     document.writeln(`Merhabalar: ${this.adi} <br/>`);
// }
//objeye bağlamak: call ile apply parametresizde kullanımları aynı
// bind ise bize bir değer döndermek için bir fonksiyonda yazmamız gerekir.
//OBJECT
// let objectData1={adi:'Hamit'};

// callApplyBindFunctionWithoutParam.call(objectData1);

// callApplyBindFunctionWithoutParam.apply(objectData1);

// let newBindFuctionWithoutParam=callApplyBindFunctionWithoutParam.bind(objectData1);
// newBindFuctionWithoutParam();

// document.writeln(`**********************<br/>`)

///////////////////////////////////////////////////////////////////////////
//2.YÖNTEM PARAMETRELI 
//parametrelide call ile apply arasındaki fark [] yazmak veya yazmamak
//FONKSIYON
// let callApplyBindFunctionParam= function(x,y){
//     document.writeln(`Merhabalar: ${this.adi} X:${x} Y:${y}<br/>`);
// }

// let objectData2={adi:'Hamit'}; 

// callApplyBindFunctionParam.call(objectData2,'Java',"nodejs");

// //apply'da veriler dizi içinde gösterilir
// callApplyBindFunctionParam.apply(objectData2,['Java',"nodejs"]);

// let newBindFuctionParam=callApplyBindFunctionParam.bind(objectData2,'Java',"nodejs");
// newBindFuctionParam();
///////////////////////////////////////////
let sum=()=>{
    setInterval(function () {
    console.log("Merhabalar")
    }, 500)

}
///////////////////////////////////////////
//DOM
function parag() {
    // document.getElementById("p_id").innerHTML="<b>Değişti</b>";
    //document.getElementById("p_id").innerText="<b>Değişti</b>";
    //document.getElementsByClassName("p_class")[0].innerHTML="<b>Değişti</b>";
    //document.getElementsByName("p_name")[0].innerHTML="<b>Değişti</b>";
    document.getElementsByTagName("p")[0].innerHTML = "<b>Değişti</b>";
}





















// const number1=Number(prompt("lutfen birinci sayı giriniz?"))
// console.log(number1)
// const number2=Number(prompt("lutfen ikinci sayı giriniz?"))
// console.log(number2)
// document.write("kücük sayı"+Math.min(number1,number2)+ "<br/>")
// document.write("büyük sayı"+Math.max(number1,number2)+ "<br/>")
// document.write("kareköku"+ Math.sqrt(Math.max(number1,number2))+ "<br/>") 
// document.write("kareköku"+ Math.floor(Math.sqrt(Math.max(number1,number2)))+ "<br/>") 
// document.write("kücük sayı mutlak degeri"+ Math.abs(Math.min(number1,number2))+ "<br/>")
////////////////////////////////////////
// const kelimegir=String(prompt("kelime girişi"))
// document.write(kelimegir + "<br/>");
// document.write("Harf Sayısı: " + kelimegir.length + "<br/>");
// document.write("Traşlanmış Harf Sayısı: " + kelimegir.trim().length + "<br/>");
// document.write("hepsi buyuk"+" " +kelimegir.toUpperCase()+"<br>")
// document.write("ilk harf"+" " +kelimegir.charAt(0)+ "<br/>");
// document.write(kelimegir.concat(" "+"ben java ögreniyorum")+ "<br/>");
// document.write(kelimegir.substring(0,4)+ "<br/>");

// const kelimegir2=String(prompt("kelime girişi"))
// document.write(kelimegir2 + "<br/>");
// document.write(kelimegir2.replace(kelimegir2," ")+ "<br/>");


//döndürme olayı olmayan//
// function returnsuzparametresiz(){
//     console.log(" returnsuzparametresiz")
// }

// let cars = ['bmw', 'mercedes', 'audi'];
// let people = [
//     {
//     firstname:'roza', 
//     lastname:'ekti'},
//     {
//     firstname:'jiya',
//     lastname: 'salarhan'},
// {firstname:'mervan',
// lastname:'ektiyse'},



// ];

// // for (let i = 0; i < cars.length; i++) 
// // // {
// // //     console.log(cars[i]);
// // // }
// // for(let i in  cars){
// //     console.log('index : ${i}, value : ${cars[i]}');
// // }
// console.log(people)
// for (let i = 0; i < people.length; i++) 
// {
//     document.writeln(people[i].lastname);
// }

// let name1='jiyans';
//  let age='32';
//  let licence='true';
// if (age == '32')
// {
//     document.write('jiyan jiyansela')
// }
// ;
// if( licence=='false')
// {
//     document.write('<br>'+'ehliyet')
// }
// else 
// {
//     document.write('<br>'+'ehliyetsiz')
// };
//let cars = ['bmw', 'mercedes', 'audi'];
//  let people = [
//      {
//      firstname:'roza', 
//      lastname:'ekti'},
//      {
//      firstname:'jiya',
//      lastname: 'salarhan'}
// ];
// cars[2]='delal';
// cars[cars.length]='rubar';
// cars.push(25);
// cars.push('gsgsg');
// document.write(cars);
// cars.unshift(2876);
// cars.pop();
// cars.shift();
// cars.reverse();
// cars.sort();
// console.log(cars);

//  console.log(dizi);
//     let dizi=[];
//     dizi[0]="Merhabalar";
//     dizi[1]=44;
//     dizi[2]=44.23;
//     dizi[3]=true;

//     console.log(dizi);
//     console.log("ilk eleman ==>"+dizi[0]);
//     console.log("son eleman ==>"+dizi[dizi.length-1]);
//     document.write("<br/>son eleman ==>"+dizi[dizi.length-1]);
//     }
let diziFunction = () => {
    let dizi = [];
    dizi[0] = "merhaba";
    dizi[1] = 44;
    dizi[2] = 21, 21;
    dizi[3] = 59;
    console.log(dizi);
    console.log(dizi[0]);
    console.log("son eleman" + dizi[dizi.length - 1]);

}

//diziFunction()

let diziFunction2 = () => {
    let dizi = [];
    let temp;
    for (let i = 0; i < 5; i++) { //dizi sayısını veriyor
        temp = Math.round(Math.random() * 5);
        dizi[i] = temp;
    }
    return dizi
}
//console.log(diziFunction2());

let diziFunction3 = () => {
    const dizi2 = diziFunction2();
    console.log(dizi2);
    for (let i = 0; i < dizi2.length; i++) {
        document.write(dizi2[i] + "")
    }
}
// diziFunction3()



let diziFunction4 = () => {
    const dizi2 = diziFunction2();
    console.log(dizi2);
    for (let number in dizi2) {
        document.write(number + "")
    }
}
//diziFunction4()
let diziFunction5 = () => {
    const dizi2 = diziFunction2();
    console.log(dizi2);
    for (let number of dizi2) {
        document.write(number + "")
    }
}
// diziFunction5()

let diziFunction6 = () => {
    const dizi2 = [2, 4, 6, 8, 10];
    let sum = 0;
    dizi2.forEach(function (roza) {
        sum += roza;
    }
    )
    document.write("<br>" + sum)


    console.log(dizi2)

}
//diziFunction6()


let diziFunction7 = () => {

    const dizi = [11, 22, 33, 44, 55, 66, 77, 88, 99]
    console.log(dizi);
    dizi.push(20);//sona ekleme
    console.log(dizi);
    dizi.unshift(80); //basa ekleme
    console.log(dizi);
    //dizi.pop();
    console.log(dizi);
    //dizi.shift();
    console.log(dizi);
    dizi.sort();//kcukten buyuge
    console.log(dizi)
    dizi.reverse()
    console.log(dizi)
    dizi.sort().reverse()
    console.log(dizi)


}

// diziFunction7()

let diziFunction8 = () => {

    //  const dizi1 = [11,"veri",52,60, "java", "roza", 22, 33, 44, 55, 66, 77, 88, 99]
    // const dizi2=[10,20,30,100,200];
    // const dizi3=dizi1+dizi2;
    // console.log(dizi3);
    // console.log(dizi1.toString());
    // console.log(dizi1.join('-'));
    // console.log(typeof dizi3);

    // const dizi4=dizi1.concat(dizi2);
    // console.log(dizi4);
    //console.log(typeof dizi4);

    //delete dizi1[0];
    //  let dizi2=dizi1.slice(2);
    //  console.log(dizi2);
    //let dizi3=dizi1.slice(1,dizi1.length);
    //console.log(dizi3);
    // console.log(dizi1.splice(3,3,'merhaba'));
    // console.log(dizi1);



}
//diziFunction8()

//arrow function ile filter 

//     const dizi1 = [11,52,60, 22, 33, 44, 55, 66, 77, 88, 99]
//     let diziFunction16 = () => {
// document.writeln("<br>"+dizi1);
// let result1=dizi1.filter((value)=>{
// return value %2==0;

// });
// let result2=dizi1.filter((value)=>{
//     return value %2==1;

//     });

// document.write("<br>"+"çift sayılar====>"+result1);
// document.write("<br>"+"tek sayılar ====>"+result2);
//     }
//     diziFunction16()


// //y =3x+4k 
// let x=prompt("3 ile carpılanbir sayı giriniz");

// let k=prompt("4 ile carpılan sayı giriniz");

// let toplam=(3*x)+(4*k);
// document.write("toplam sonuc"+toplam);
// console.log("sonuc"+toplam);


// let k=prompt("fahrenhayta sayı giriniz");
// let toplam=(k*9/5)+32;
// document.write("toplam sonuc"+toplam);
//  console.log("sonuc"+toplam);

// async function dene()
// {
//     return "deneme"

// }
// let dene=(adi,soyadi)=> {
// return "adı ve soyad"+adi+""+soyadi;
// }
// // let don=dene("jiyan","sala");
// console.log("jiyan","sala");
// function dene(){
//     console.log("normal")
// }
// dene();
// let dene2=function(){
//     console.log("annymous")
// }
// dene2()
//  let dene3=()=>{
//      console.log("arrow")
//  }
//  dene3();
//immedia function
//(function(){console.log("roza")})();

// (function(sayi){
//     console.log("sayı ussu");
//     console.log(Math.pow(sayi,2))

// })(4)
// let dene=(sayi)=>{
//     console.log("sayı ussu");
//     console.log(Math.pow(sayi,2))
// }
// dene(5)
// function dene(number){
//     console.log(Math.pow(number,2));
// }
// function dene2(){
//     const data1=Number(prompt("bir sayı giriniz"))
//     console.log(Math.pow(data1,2));
// }
// dene2()
// function data(number){
//     console.log(Math.pow(number,2));
// }
// function data2(callback){
//     const userData=Number(prompt("bir sayı giriniz"));
//     callback(userData)
// function data1() {
//     document.write("bir sayı giriniz")

// }
// function data2() {
//     document.write("<br>" + "ikinci sayı giriniz");
// }
// setTimeout(data2, 5000);
// setTimeout(data1, 2000);

// setTimeout(function sure() { document.write("bir sayı giriniz") }, 4000)

// setTimeout(() => {
//     document.write("<br>" + "arrow settime");
// }, 7000);
// let data=()=>{
//  const sayi=Number(prompt("bir sayı giriniz"))
//  let sonuc=(sayi==1)?"sayi1dir":"farklı sayıdır";
// console.log(sonuc)

// }
// data()
// function data2() {
//     const sayi = Number(prompt("bir sayı giriniz"))
// switch(sayi){
//     case 1:
//         console.log("sayi 1")
//         break;
//         case 2:
//             console.log("sayi 2")
//             break;
//             default:
//                 console.log("sayi farklı");
//                 break;
// }

// }
// data2()

//////async ödev////////////
// function merhaba() {

//     return new Promise(basarili=> basarili('merhaba sınıf'))
// }
// const text = merhaba()

// text.then(basarili => console.log(basarili))


///kendini kendini cagıran fonsiyonla asyn ve await yapınca
// (async()=>{

//     async function merhaba() {

//           return 'merhaba sınıf'
        
//         }
//         const text = await merhaba()
//         console.log(text)
        
// })()
async function merhaba() {

              return 'merhaba sınıf'
            
            }
            const text = merhaba()
            text.then(basarili => console.log(basarili))
