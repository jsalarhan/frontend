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
const kelimegir=String(prompt("kelime girişi"))
document.write(kelimegir + "<br/>");
document.write("Harf Sayısı: " + kelimegir.length + "<br/>");
document.write("Traşlanmış Harf Sayısı: " + kelimegir.trim().length + "<br/>");
document.write("hepsi buyuk"+" " +kelimegir.toUpperCase()+"<br>")
document.write("ilk harf"+" " +kelimegir.charAt(0)+ "<br/>");
document.write(kelimegir.concat(" "+"ben java ögreniyorum")+ "<br/>");
document.write(kelimegir.substring(0,4)+ "<br/>");

const kelimegir2=String(prompt("kelime girişi"))
document.write(kelimegir2 + "<br/>");
document.write(kelimegir2.replace(kelimegir2," ")+ "<br/>");