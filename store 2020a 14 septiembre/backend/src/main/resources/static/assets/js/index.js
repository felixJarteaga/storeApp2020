// De momento cuatro formas

//STORE2021.includeBranchHTML("[data-include]", "data-include");
/*
import { includeBranchHTML } from "./modul_js/lookhtml.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  includeBranchHTML();
});

document.querySelectorAll("[data-include]").forEach((el) =>
  fetch(el.getAttribute("data-include"))
    .then(function (response) {
      // The API call was successful!
      return response.text();
    })
    .then(function (html) {
      // This is the HTML from our response as a text string
      el.outerHTML = html;
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    })
);
const header = new STORE2021.FactoryHeader();
header.getHeader();

const footer = new STORE2021.FactoryFooter();
footer.getFooter();*/

import { FactoryHeader } from "./modul_js/factoryHeader.js";
import { FactoryFooter } from "./modul_js/factoryFooter.js";
import { FactoryFunction } from "./modul_js/factoryFunction.js";
const d = document;
const factoryFunction = new FactoryFunction();

d.addEventListener("DOMContentLoaded", (e) => {
  d.getElementById("myFooter").appendChild(FactoryFooter());
  d.getElementById("myHeader").appendChild(FactoryHeader());
  factoryFunction.darkLight("dark-mode");
});
