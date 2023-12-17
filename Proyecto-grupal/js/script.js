let check = document.querySelector(".check");

check.addEventListener('click', language);

function language(){
    let lang = check.checked;
     if(lang == true){
        location.href="../html/index.html";
     } else {
        location.href="../english/index.html";
     }
}

function send() { 
   swal ('✅ Fomulario enviado correctamente');
}

function sendEnglish() { 
   swal ('✅ Form submitted successfully');
}


const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}
