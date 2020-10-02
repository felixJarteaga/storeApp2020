import { FactoryTag } from "./factoryTag.js";
export function FactoryLogo() {
  const API = {};

  const factoryTag = new FactoryTag();
  let params = {};

  API.logoInformatica = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.src = "assets/img/escudo02.png";
    params.alt = "Escudo Informática";
    const img = factoryTag.image(params);

    article.appendChild(img);
    return article;
  };
  API.logoHarnina = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params.class = "";
    params.href = "https://iesarroyoharnina.educarex.es/";
    params.target = "_blank";
    params.title = "I.E.S. Arroyo Harnina";
    const a = factoryTag.a(params);
    params = {};
    params.class = "imageLogo";
    params.src = "assets/img/harni01.png";
    const img = factoryTag.image(params);
    a.appendChild(img);
    article.appendChild(a);
    return article;
  };
  API.logoMarcaAgua = function () {
    params.class = "logo";
    const article = factoryTag.article(params);
    params = {};
    params.href = "#0";
    params.text =
      '<svg height="60" width="200"><text x = "14" y = "15" fill = "pink" transform = "rotate(30 20,40)" >&nbsp &nbsp DAM 2020</text >Sorry, your browser does not support inline SVG.</svg >';
    const a = factoryTag.a(params);
    // params = {};
    // params.height = "60";
    // params.width = "200";
    // const svg = factoryTag.svg(params);
    // params = {};
    // params.x = "14";
    // params.y = "15";
    // params.fill = "pink";
    // params.transform = "rotate(30 20,40)";
    // const text = factoryTag.text(params);
    // text.textContent = "&nbsp &nbsp DAM 2020";
    // svg.appendChild(text);
    // a.appendChild(svg);
    article.appendChild(a);
    return article;
  };
  return API;
}
