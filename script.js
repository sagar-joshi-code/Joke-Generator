
const setup = document.getElementById("setup");
const punchLine = document.getElementById("punchline");
const jokeBtn = document.getElementById("btn");

//adding functionality on jokeBtn
jokeBtn.addEventListener("click", async () => {
  setup.textContent = "Loading.....";
  punchLine.textContent = "";
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
    );
    const data = await res.json();
    console.log(data);
    setup.textContent = data.setup;
    setTimeout(() => {
      punchLine.textContent = data.punchline;
    }, 2000);
  } catch (error) {
    setup.textContent = "Failed to load a joke";
  }
});

