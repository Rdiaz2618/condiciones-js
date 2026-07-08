/*Imagen con Borde*/

const imgBorde = document.querySelector("#imgBorde");

if (imgBorde) {
    let conBorde = false;

    imgBorde.onclick = function () {
        if (!conBorde) {
            imgBorde.style.border = "5px solid violet";
            conBorde = true;
        } else {
            imgBorde.style.border = "none";
            conBorde = false;
        }
    };
}

/*Fin Imagen con Borde*/


/*Contador de Stickers*/

const btnContador = document.querySelector("#btnContador");

if (btnContador) {
    btnContador.onclick = function () {

        const contador1 = document.querySelector("#contador1");
        const contador2 = document.querySelector("#contador2");
        const contador3 = document.querySelector("#contador3");
        const totalStickers = document.querySelector("#totalStickers");

        const total =
            Number(contador1.value) +
            Number(contador2.value) +
            Number(contador3.value);

        if (total <= 10) {
            totalStickers.textContent = `Llevas ${total} stickers`;
        } else {
            totalStickers.textContent = "Llevas demasiados stickers";
        }
    };
}

/*Fin Contador de Stickers*/


/*Ingrese Contraseña*/

const btnPassword = document.querySelector("#btnPassword");

if (btnPassword) {
    btnPassword.onclick = function () {

        const password1 = document.querySelector("#password1").value;
        const password2 = document.querySelector("#password2").value;
        const password3 = document.querySelector("#password3").value;

        const password = password1 + password2 + password3;

        const resultado = document.querySelector("#resultadoPassword");

        if (password === "911") {
            resultado.textContent = "Password 1 correcto";
        } else if (password === "714") {
            resultado.textContent = "Password 2 correcto";
        } else {
            resultado.textContent = "Password incorrecto";
        }
    };
}