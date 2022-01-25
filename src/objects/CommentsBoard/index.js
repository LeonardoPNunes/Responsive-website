import CommentsSection from "../../components/CommentsSection";

const CommentsBoard = () =>{
    return/*html*/`
    <section class="comments-board">
    <h1>"Compradores confiam na fashion,pela Qualidade e preços"</h1>
    ${CommentsSection(0)}
    ${CommentsSection(1)}
    </section>
    `
}
export default CommentsBoard;