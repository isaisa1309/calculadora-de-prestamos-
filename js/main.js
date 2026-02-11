let monto = document.querySelector("#primerNumero");
let tasa = document.querySelector("#segundoNumero");
let meses = document.querySelector("#tercerNumero");

let resultado = document.querySelector("#resultado");

function sumar() {

let m = parseFloat(monto.value);
let t = parseFloat(tasa.value);
let n = parseFloat(meses.value);

if (isNaN(m) || isNaN(t) || isNaN(n)) {
resultado.classList.remove("d-none");
resultado.textContent = "Complete todos los campos";
return;
}

let interesMensual = t / 100 / 12;


let cuota = m * interesMensual * Math.pow(1 + interesMensual, n) /
(Math.pow(1 + interesMensual, n) - 1);


resultado.classList.remove("d-none");
resultado.innerHTML = `
<strong>Cuota mensual:</strong> RD$ ${cuota.toFixed(2)}
`;

}

