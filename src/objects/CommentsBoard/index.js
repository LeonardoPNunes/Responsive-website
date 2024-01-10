import CommentsSection from "../../components/CommentsSection";
import "./style.css"

const CommentsBoard = () =>{
    return/*html*/`
    <div class="div-text-comment">
        <h1>"Compradores confiam na fashion pela Qualidade e preços"</h1>
    </div>
    
    <section class="comments-board">
    ${CommentsSection(0)}
    ${CommentsSection(1)}
    </section>
    `
}
export default CommentsBoard;