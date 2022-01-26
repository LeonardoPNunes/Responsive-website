import FooterFashion from "./src/components/FooterFashion";
import HeaderFashion from "./src/components/HeaderFashion";
import SectionTitle from "./src/components/SectionTitle";
import CommentsBoard from "./src/objects/CommentsBoard";
import ProductBoard from "./src/objects/ProductBoard";

import "./src/styles/generic/reset.css";
import "./style.css"
const $root = document.querySelector('#app');
$root.insertAdjacentHTML("beforeend", `

${HeaderFashion()}
${SectionTitle()}
${ProductBoard()}
${CommentsBoard()}
${FooterFashion()}

`)

