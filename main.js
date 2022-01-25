import HeaderFashion from "./src/components/HeaderFashion";
import ProductSection from "./src/components/ProductSection";
import SectionTitle from "./src/components/SectionTitle";
import ProductBoard from "./src/objects/ProductBoard";

import "./src/styles/generic/reset.css";
import "./style.css"
const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", `

${HeaderFashion()}
${SectionTitle()}
${ProductBoard()}
`)

