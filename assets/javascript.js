
/*Imagen con Borde*/
const imgBorde = document.querySelector("#imgBorde");

if (imgBorde) {
    let conBorde = false;

    imgBorde.onclick = function () {
        if (conBorde === false) {
            imgBorde.style.border = "5px solid violet";
            conBorde = true;
        } else {
            imgBorde.style.border = "none";
            conBorde = false;
        }
    };
}

/*Fin Img con borde*/

/*Contador de Stickers*/

const contador1 = document.querySelector("#contador1");
const contador2 = document.querySelector("#contador2");
const contador3 = document.querySelector("#contador3");

const btnContador = document.querySelector("#btnContador");
const totalStickers = document.querySelector("#totalStickers");

btnContador.onclick = function () {

    let numero1 = Number(contador1.value);
    let numero2 = Number(contador2.value);
    let numero3 = Number(contador3.value);

    let total = numero1 + numero2 + numero3;

    if (total <= 10) {
        totalStickers.innerHTML = "Llevas " + total + " stickers";
    } else {
        totalStickers.innerHTML = "Llevas demasiados stickers";
    }

};

/*Ingrese contraseña*/

const btnPassword = document.querySelector("#btnPassword");

if (btnPassword) {
  btnPassword.onclick = function () {
    const password1 = document.querySelector("#password1").value;
    const password2 = document.querySelector("#password2").value;
    const password3 = document.querySelector("#password3").value;

    const password = password1 + password2 + password3;
    const resultado = document.querySelector("#resultadoPassword");

    resultado.textContent = password;

    if (password === "911") {
      resultado.textContent = "Password 1 correcto";
    } else if (password === "714") {
      resultado.textContent = "Password 2 correcto";
    } else {
      resultado.textContent = "Password incorrecto";
    }
  };
}
