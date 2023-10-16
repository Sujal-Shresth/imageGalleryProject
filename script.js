const corss = document.getElementById("cross");
const image = document.getElementById("image");
const preview = document.getElementById("preview");
cross.onclick = ()=> {
    image.style.display = 'none';
}

function display(url){
    console.log(preview);
    console.log(url);
    image.style.display = 'flex';
    preview.setAttribute('src',url);
}