// pengkondisian Statics IF & Else
let jam = 24;
if(jam <= 10){
    console.log("Selamat Pagi")
}else if(jam >10 && jam <= 14){
    console.log("Selamat Siang")
}else if(jam > 15 && jam <=21){
    console.log("Selamat Sore")
}else if(jam > 21 && jam <= 24){
    console.log("Selamat Malam")
}

// console.log(new Date().getDay());
//pengkondisian 
let hari = new Date().getDay();
console.log(hari)
switch(hari){
    case 0 :
        console.log("Hari Minggu");
        break;
    case 1 : 
        console.log("Hari Senin");
        break;
    case 2 : 
        console.log("Hari Selasa");
        break;
    case 3 :
        console.log("Hari Rabu");
        break;
    case 4 :
        console.log("Hari Kamis");
        break;
    case 5 :
        console.log("Hari Jum'at");
        break;
    case 6 :
        console.log("Hari Sabtu");
        break;
}
//For Each & Map hanya bisa melakukan looping untuk array

for( let i = 0; i<= ""; i++){
    switch(i){
    case 0 :
        console.log("Hari Minggu");
        break;
    case 1 : 
        console.log("Hari Senin");
        break;
    case 2 : 
        console.log("Hari Selasa");
        break;
    case 3 :
        console.log("Hari Rabu");
        break;
    case 4 :
        console.log("Hari Kamis");
        break;
    case 5 :
        console.log("Hari Jum'at");
        break;
    case 6 :
        console.log("Hari Sabtu");
        break;
    default:
        console.log("tidak ada hari")
        break

    }
}
//hardcode valuenya nulis sendiri bukan panggil nama variabel
// Kondisi secara dinamis
let namaKades = "Sugiono"
let namaCamat = "Agus"
let jabatan = "Kades"
// if(namaKades === "Sugiono"){
//     console.log(namaKades)
// }else{
//     console.log(namaCamat)
// }
if(namaKades !== "Kades"){
    console.log(namaCamat)
}else{
    console.log(namaKades)
}
const Bos = true;
const miniBos = false;
// if(Bos == true){
//     console.log("Naik Level")
// }else{
//     console.log("Masih Cupu")
// }
// if(Bos === true && miniBos === false){
//     console.log("Naik Level")
// }else{
//     console.log("Masih cupu")
// }

// if(Bos !== true && miniBos !== false){
//     console.log("Naik Level")
// }else{
//     console.log("Masih cupu")
// }
//bos true && miniBos true
// if(Bos && !miniBos){
//     console.log("Naik Level")
// }else{
//     console.log("Masih Cupu")
// }
//Bos false & miniBos false
if(!Bos && miniBos){
    console.log("Naik Level")
}else{
    console.log("Masih cupu")
}

const peserta = {id : 1, nama: "Soleh", kelas: "Front End"}
let namaPeserta = "";
for(let x in peserta){
    namaPeserta += " " + peserta[x];
}
console.log(namaPeserta)

const makanans = ["Bakso", "Mie Ayam", "Ketoprak", "Soto", "Gado - Gado"];
let namaMakanan = "";
// for(const makanan of makanans){
//     namaMakanan += makanan
// }
// menampilkan Ketoprak menggunakan Looping

for(var i= 0; i < makanans.length; i++){
    namaMakanan += " " + makanans[2]
}
console.log(namaMakanan)
//menampilkan ketoprak 1x
// console.log(makanans[2])

// var angka = 5
// for (let angkas of angka) {
//    angka += angkas++
// }
// console.log(angka)
let counter = 1;
while(counter <= 10){
    console.log(counter)
    counter++
}

