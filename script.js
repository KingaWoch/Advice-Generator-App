const adviceIdElement = document.querySelector("h1");
const adviceTextElement = document.querySelector(".advice");
const diceElement = document.querySelector(".dice");

const fetchAdvice = () => {
  let apiUrl = "https://api.adviceslip.com/advice";
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const id = data.slip.id;
      const advice = data.slip.advice;

      adviceIdElement.innerText = `Advice # ${id}`;
      adviceTextElement.innerText = `${advice}`;
    });
};

fetchAdvice();

diceElement.addEventListener("click", fetchAdvice);
