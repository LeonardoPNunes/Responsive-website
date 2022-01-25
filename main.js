import HeaderFashion from "./src/components/HeaderFashion";
import ProductSection from "./src/components/ProductSection";
import SectionTitle from "./src/components/SectionTitle";

import "./src/styles/generic/reset.css";
import "./style.css"
const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", `

${HeaderFashion()}
${SectionTitle()}
${ProductSection()}
`)

