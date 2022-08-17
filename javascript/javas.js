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

    const dizi1 = [11,52,60, 22, 33, 44, 55, 66, 77, 88, 99]
    let diziFunction16 = () => {
document.writeln("<br>"+dizi1);
let result1=dizi1.filter((value)=>{
return value %2==0;

});
let result2=dizi1.filter((value)=>{
    return value %2==1;
    
    });

document.write("<br>"+"çift sayılar====>"+result1);
document.write("<br>"+"tek sayılar ====>"+result2);
    }
    diziFunction16()