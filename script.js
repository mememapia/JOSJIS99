const symbols = ["💯", "🎰", "❓"];

const slots = document.querySelectorAll(".slot");
const spinBtn = document.querySelector(".spin-btn");
const resultText = document.getElementById("result");

spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  resultText.textContent = "";
  resultText.className = "result";

  slots.forEach((slot) => slot.classList.remove("win"));

  let finalSymbols = [];

  slots.forEach((slot, index) => {
    let count = 0;

    const interval = setInterval(() => {
      slot.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      count++;

      if (count > 15 + index * 5) {
        clearInterval(interval);

        const final = symbols[Math.floor(Math.random() * symbols.length)];
        slot.textContent = final;
        finalSymbols[index] = final;

        if (finalSymbols.length === slots.length) {
          checkWin(finalSymbols);
          spinBtn.disabled = false;
        }
      }
    }, 100);
  });
});

function checkWin(symbolsResult) {
  const win = symbolsResult.every((symbol) => symbol === symbolsResult[0]);

  if (win) {
    resultText.textContent = "yah menang😞";
    resultText.classList.add("win-text");

    slots.forEach((slot) => slot.classList.add("win"));
  } else {
    resultText.textContent = "AWKAOWAKWAO KALAH 🤪";
  }
}
