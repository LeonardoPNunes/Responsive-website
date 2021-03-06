import "./style.css";
const HeaderFashion = () =>{
    
    return/*html*/`
    <header class="header-navigation">
    
        <nav class="search-navigation">
            <div class="logo-navigation">
                <ul>
                    <li><a href="https://www.linkedin.com/in/leonardo-paulo-nunes-de-freitas/"><img src="./images/linkedin.png" alt="Logo do linkedin" /></a></li>
                    <li><a href="./"><img src="./images/twitter.png" alt="Logo do twitter" /></a></li>
                    <li><a href="./"><img src="./images/pinterest.png" alt="Logo do pinterest" /></a></li>
                    <li><a href="./"><img src="./images/google-plus.png" alt="Logo do google plus" /></a></li>
                    <li><a href="./"><img src="./images/rss.png" alt="Logo do rss" /></a></li>
                </ul>
            </div>

            <div class="search">
                <form>
                    <input type="text" class="input-search" placeholder="Search to get fashionable..."/>
                    <button class="universal-button">Search</button>
                </form>
            </div>
        </nav>

        <nav class="inland-navigation">

            <div class="logo-fashion">
                <a href="./">Fashion</a> 
                <h3>A Sua Loja Da Moda</h3>
            </div>

            <ul class="nav-list">
                <li><a href="./">Home</a></li>
                <li><a href="./">Novidades</a> </li>
                <li><a href="./">Promoção</a></li>
                <li><a href="./">Roupas</a></li>
                <li><a href="./">Vestidos</a></li>
                <li><a href="./">Acessórios</a></li>
            </ul>
            
        </nav>
    </header>
    `
}
export default HeaderFashion
