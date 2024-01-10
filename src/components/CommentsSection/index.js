import "./style.css"
import pessoa1 from "../../assets/pessoa1.jpg"
import pessoa2 from "../../assets/pessoa2.jpg"


const CommentsSection = (i) =>{
    const comments = [
        {
            img:pessoa1,
            name:"Jorge S",
            comment:"Ótima loja"

        },
        {
            img:pessoa2,
            name:"Maria M",
            comment:"Qualidade impecavel"

        }
    ];  
    const name = comments[i].name;
    const img = comments[i].img;
    const comment = comments[i].comment;
    
    return/*html*/`
    <div class="div-comment">
    <img src="${img}" alt="foto de perfil" />
    <h2>${name}</h2>
    <h3>${comment}</h3>
    </div>
    `
}
export default CommentsSection;