let iceCream = 'chocolate';
if(iceCream === "chocolate"){
    console.log("Benar")
}else{
    console.log("Salah")
}

function data (numb1, numb2){
    let result = numb1 * numb2
    return result
}
console.log(data(2,2))
let myStrings = 'Bob';
console.log(myStrings)
let number = 10;
console.log(number)
let Boolean = false
if(Boolean == true){
    console.log("Benar")
}else if(Boolean == false){
    console.log("Salah")
}
let Array = [1,2,3,4,5];
console.log(Array[0])
let mahasiswa = [
    {
        nama : "Nur Muhamad Soleh",
        semester: "8"
    },
    {
        nama : "Wahyu Adi Saputra",
        semester: "7"
    }
]
console.log(mahasiswa[0].nama)
// for(let personal in mahasiswa){
//     console.log(`${mahasiswa[personal].nama} Dan Semester ${mahasiswa[personal].semester}`)
// }
mahasiswa.forEach((i)=>{
    console.log(i.semester)
})
var angka = 10;
var angka2 = 20;
console.log(angka + angka2)
console.log(angka - angka2)
console.log(angka * angka2)
console.log(angka / angka2)
let Variabels = 2;
Variabels = 43;
console.log(Variabels)

// Operator Logika
// And
var num = 5;
var result = num > 3 && num >= 5
console.log(result)
// OR //
var hasil = num < 3 || num >= 5
console.log(hasil)
// NOT // untuk mendapatkan hasil true menjadi false
var hasildata = num !== 3
console.log(hasildata) //hasil nya true karena 5 tidak sama dengan 3

var object = {type:"123", merek:"Honda"};
console.log(`Saya Mempunyai Mobil dengan type ${object.type} Merek ${object.merek}`)
let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.jpeg'){
        myImage.setAttribute('src','images/index2.jpg')
    }else{
        myImage.setAttribute('src','images/index.jpeg')
    }
}