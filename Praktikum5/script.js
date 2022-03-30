var block = document.getElementById("block"); //membuat variabel block dengan memanggil elemen dengan id block pada direktori CSS
var hole = document.getElementById("hole"); //membuat variabel hole dengan memanggil elemen dengan id hole pada direktori CSS
var character = document.getElementById("character");//membuat variabel character dengan memanggil elemen dengan id character pada direktori CSS
var jumping = 0; //variabel integer yang digunakan dlaam penghitungan jarak loncatan karakter
var counter = 0; //variabel integer yang digunkaan dalam penghitungan skor


hole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});
//mangatur posisi dan datangnya block ketika block sebelumnya sudah dilewati dengan perhitungan (x*300)+150 kemudian di berikan satuan pixel pasda hasil tersebut.


setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //membuat variabel characterTop dengan mengkloning sifat dari variabel character, dan menambahkan nilai "top" pada variabel ini,untuk menentukan gravitasi dari permainan.
    if(jumping==0){
        //pengecekan apabila tidak ada gerakan loncat maka ,karakter akan turun kebawah sebanyak 3 pixel 
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //variabel blockLeft berguna untuk menggeser block ke kiri setelah player melewati block tersebut.
    var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    //variabel holeTop berguna dalam pemindahan posisi lubang atau jalan yang akan dilewati oleh karakter.
    var cTop = -(500-characterTop);
    //variabel cTop bernilai bahwa ketika player menyentuh pixel ke 500 maka player sudah ada didasar area permainan.
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        //pengecekan dimana ketika variabel characterTop berada di posisi lebih dari 480px, kemudian blockLeft sudah berada di posisi dibawah 20px
        //atau blockLeft lebih dari - 50pixel , dan cTop sudah melebihi holeTop atau holeTop+130
        alert("Game over. Score: "+(counter-1));
        //maka akan muncul peringatan game over
        character.style.top = 100 + "px";
        //dan karakter kembali lagi ke posisi awal.
        counter=0;
        //dan skor juga menjadi kosong lagi.
    }},10);

function jump(){
//fungsi loncat 
    jumping = 1; // ketika fungsi berjalan karakter akan naik posisinya sebanyak 1 pixel.
    let jumpCount = 0; //digunakan untuk mengembalikan posisi kebawah setalah loncat.
    var jumpInterval = setInterval(function(){
        //variabel jumInterval berguna untuk mengatur jarak waktu antara satu loncatan ke loncatan selanjutnya
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6)&&(jumpCount<15)){
            //pengecekan ketika characterTop sudah lebih dari 6 pixel dan hitungan loncatan sudah mencapai 15 pixel
            //maka akan dilakukan perintah
            character.style.top = (characterTop-5)+"px";
            //karakter akan naik sebanyak 5 pixel 
        }
        if(jumpCount>20){
            //dan jika jumpCount lebih dari 20 pixel.
            clearInterval(jumpInterval); //maka interval akan dikosongkan
            jumping=0;
            jumpCount=0;
            //hitungan loncatan juga dikosongkan atau direset kembali.
        }
        jumpCount++;
    },10);
}
