import "./style.css";
const FooterFashion = () =>{

    return/*html*/`
    <footer class="footer-fashion">
        <div class="footer-grid">
            <div class="div-details margin">
                <h2 class="title">Detalhes de Contato</h2>
                <h3>Fashion</h3>
                <h3>Rua Três - 1.513</h3>
                <h3>Guarujá</h3>
                <h3>São Paulo</h3>
                <h3>Tel: 55+ 13 000000000</h3>
                <h3>Email:  <a href="./">fashion@fashion.com</a></h3>
            </div>
            <div class="div-links margin">
                <h2 class="title">Links</h2>
                <a href="./">Link</a>
                <a href="./">Link</a>
                <a href="./">Link</a>
                <a href="./">Link</a>
            </div>
            <div class="div-blog margin">
                <h2 class="title">Blog</h2>
                <h3>Cortar custos</h3>
                <p>Aprender a gerir de forma eficiente e saber adquirir os produtos mais relevantes e com o melhor custo-benefício são atitudes essenciais para a sustentabilidade financeira.</p>
                <a href="./">Leia Mais ></a>
            </div>
            <div class="div-form margin">
                <h2 class="title">NewSletter</h2>
                <form method="get">
                    <input class="input-form" type="text" name="name" placeholder="Nome" />
                    <input class="input-form" type="email" name="email_user" placeholder="Email" />
                    <input class="universal-button" type="submit" value="Enviar" />
                </form>
            </div>
        </div>    
        <div class="div-copy">
            <p>Copyright &copy; 2022 Fashion - All rights Reserved</p>
        </div>
        
    </footer>
    `
}
export default FooterFashion