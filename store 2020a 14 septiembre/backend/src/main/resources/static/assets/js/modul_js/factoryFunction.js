export function FactoryFunction() {
  const API = {};
  const d = document,
    ls = localStorage;
  var sw = 0;

  API.darkLight = function (classDark) {
    const $selectors = d.querySelectorAll("[data-dark]");
    console.log($selectors);

    const lightMode = (e) => {
      e.target.value = "light";
      $selectors.forEach((el) => el.classList.remove(classDark));
      ls.setItem("theme", "light");
    };
    const darkMode = (e) => {
      e.target.value = "dark";
      $selectors.forEach((el) => el.classList.add(classDark));
      ls.setItem("theme", "dark");
    };
    d.addEventListener("click", (e) => {
      if (e.target.id === "darkMode") {
        if (e.target.value === "light") {
          darkMode(e);
        } else {
          lightMode(e);
        }
      }
    });
    let $btn = d.getElementById("darkMode");
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") {
      $btn.value = "light";
      $selectors.forEach((el) => el.classList.remove(classDark));
    }
    if (ls.getItem("theme") === "dark") {
      $btn.value = "dark";
      $selectors.forEach((el) => el.classList.add(classDark));
    }
  };

  return API;
}
