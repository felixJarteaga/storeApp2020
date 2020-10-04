//STORE2021.namespace("STORE2021.FactoryHeader");

import { FactoryBranding } from "./factoryBranding.js";
import { FactoryObject } from "./factoryObject.js";

const factoryBranding = new FactoryBranding();
const factoryObject = new FactoryObject();

export function FactoryHeader() {
  const div = document.createElement("div");
  div.appendChild(factoryBranding.brandingIndex());
  div.appendChild(factoryObject.menuButton());
  return div;
}
