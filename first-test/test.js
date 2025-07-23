const aInput = document.getElementById('a');
    const bInput = document.getElementById('b');
    const opSelect = document.getElementById('op');
    const calcBtn = document.getElementById('calc');
    const resultDiv = document.getElementById('result');

    calcBtn.addEventListener('click', () => {
      const a = parseFloat(aInput.value);
      const b = parseFloat(bInput.value);
      const op = opSelect.value;

      if (isNaN(a) || isNaN(b)) {
        resultDiv.textContent = "Veuillez entrer deux nombres.";
        resultDiv.classList.add("show");
        return;
      }

      let res = 0;
      switch (op) {
        case '+': res = a + b; break;
        case '-': res = a - b; break;
        case '*': res = a * b; break;
        case '/':
          if (b === 0) {
            resultDiv.textContent = "Erreur : division par zéro.";
            resultDiv.classList.add("show");
            return;
          }
          res = a / b;
          break;
      }

      resultDiv.textContent = "Résultat : " + res;
      resultDiv.classList.remove("show"); // reset animation
      void resultDiv.offsetWidth; // force reflow
      resultDiv.classList.add("show");
    });