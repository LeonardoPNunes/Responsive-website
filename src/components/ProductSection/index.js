import "./style.css"
import calca1 from "../../assets/calça1.jpg"
import calca2 from "../../assets/calça2.jpg"
import calca3 from "../../assets/calça3.jpg"

const ProductSection = (image) => {
    const product ={
        name:"Kit moletom 3 calças lisas masculino benellys",
        previousValue:"343,90",
        currentValue:"226,90",
        cashValue:"222,37"
    }
    let imageSelected = 
    image === "calça1" ? calca1 : 
    image === "calça2" ? calca2 : 
    image === "calça3" ? calca3 : ""

return/*html*/`
<div class="product">
<img class="product-image" src=${imageSelected} alt="imagem de uma calça" />
<h1 class="product-name">${product.name}</h1>
<p class="previous-value">De ${product.previousValue} </p>
<p class="current-value">Por ${product.currentValue}</p>
<p class="cash-value">À vista ${product.cashValue}</p>
<button class="universal-button">Comprar</button>
</div>
`
}
export default ProductSection