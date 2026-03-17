function sapaUser(event){

event.preventDefault();

let nama = document.getElementById("nama").value;

document.getElementById("hasil").innerHTML =
"Halo " + nama + ", silakan lihat jadwal dokter pada tabel di atas.";

}