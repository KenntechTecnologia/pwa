window.addEventListener("load", registerSW);

const btn = document.querySelector("button");
const text = document.querySelector("textarea");

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js");
    } catch (e) {
      console.log("SW registration failed");
    }
  }
}

btn.addEventListener("click", () => makeESP());

const makeESP = async () => {
  const result = await fetch(`http://192.168.15.70/alarmes`)
    .then((res) => res.json())
    .then((res) => (text.innerText = JSON.stringify(res)))
    .catch((err) => console.log(err));
};
