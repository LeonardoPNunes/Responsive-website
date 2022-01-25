import "./style.css"
const ProductSection = (image) => {
    const product ={
        name:"Kit moletom 3 calças lisas masculino benellys",
        previousValue:"343,90",
        currentValue:"226,90",
        cashValue:"222,37"
    }
return/*html*/`
<div class="product-image">
<img  src="./images/${image}.jpg" alt="imagem de uma calça" />
<h1 class="product-name">${product.name}</h1>
<p class="previous-value">De ${product.previousValue} </p>
<p class="current-value">Por ${product.currentValue}</p>
<p class="cash-value">À vista ${product.cashValue}</p>
<button class="universal-button">Comprar</button>
</div>
`
}
export default ProductSection