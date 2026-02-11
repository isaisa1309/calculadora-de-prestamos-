let capital = document.querySelector("#primerNumero");
let tasa = document.querySelector("#segundoNumero");
let tiempo = document.querySelector("#tercerNumero");

let resultado = document.querySelector("#resultado");

function sumar() {

let c = parseFloat(capital.value);
let t = parseFloat(tasa.value);
let n = parseFloat(tiempo.value);

if (isNaN(c) || isNaN(t) || isNaN(n)) {
resultado.classList.remove("d-none");
resultado.textContent = "Complete todos los campos";
return;
}

let tasaDecimal = t / 100;

let interes = c * tasaDecimal * n;

let total = c + interes;

resultado.classList.remove("d-none");
resultado.innerHTML = `
<strong>Interés:</strong> RD$ ${interes.toFixed(2)} <br>
<strong>Total a pagar:</strong> RD$ ${total.toFixed(2)}
`;

}
