// ambil id button 
var mybtn = document.getElementById("btn-top");
// ketika pengguna menggulir ke bawah 20px maka buttton akan di perlihatkan
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybtn.style.display = "block";
    } else {
        mybtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// saat pengguna mengklick tombol maka akan di gulirkan ke atas atau kembali ke header