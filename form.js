const form = document.querySelector('form');
form.addEventListener("submit", convertUSDtoWon);

function convertUSDtoWon(e) {
    e.preventDefault()
    const usd = Number(e.target.usd.value);
    const won = usd / 0.00078;
    document.getElementById("display").innerText = "$" + usd + " USD is equal to + " + won.toFixed(2) + "₩";
}