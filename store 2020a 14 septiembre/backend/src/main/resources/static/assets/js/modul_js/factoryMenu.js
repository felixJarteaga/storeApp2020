import { FactoryTag } from "./factoryTag.js";
export function FactoryMenu() {
  const API = {};
  const factoryTag = new FactoryTag();
  let params = {};

  API.indexMenu = function () {
    const href = [
      "assets/subpage/home.html",
      "assets/subpage/login.html",
      "assets/subpage/register.html",
      "assets/subpage/contacto.html",
    ];
    const text = ["home", "Login", "Register", "Contacto"];
    params.class = "menu";
    const nav = factoryTag.nav(params);
    params = {};
    for (let index = 0; index < href.length; index++) {
      params.href = href[index];
      params.text = text[index];
      const a = factoryTag.a(params);
      nav.appendChild(a);
    }
    return nav;
  };
  return API;
}
