import { FactoryTag } from "./factoryTag.js";
import { FactoryMenu } from "./factoryMenu.js";
import { FactoryButton } from "./factoryButton.js";

export function FactoryObject() {
  const API = {};
  let params = {};

  const factoryTag = new FactoryTag();
  const factoryMenu = new FactoryMenu();
  const factoryButton = new FactoryButton();

  API.menuButton = function () {
    params.class = "header-content container";
    const section = factoryTag.section(params);

    section.appendChild(factoryMenu.indexMenu());
    section.appendChild(factoryButton.darkLight());
    return section;
  };
  return API;
}