import ProductSection from "../../components/ProductSection";
import "./style.css"

const ProductBoard = () =>{
    return/*html*/`
    <section class="product-board">
        ${ProductSection("calça")}
        ${ProductSection("calça2")}
        ${ProductSection("calça3")}
    </section>
    `
}
export default ProductBoard