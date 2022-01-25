const CommentsSection = (i) =>{
    const comments = [
        {
            img:"./images/pessoa1.jpg",
            name:"Jorge S",
            comment:"Ótima loja"

        },
        {
            img:"./images/pessoa2.jpg",
            name:"Maria M",
            comment:"Qualidade impecavel"

        }
    ]   
    const name = comments[i].name
    const img = comments[i].img
    const comment = comments[i].comment
        
    
    
    return/*html*/`
    <div>
    <img src="${img}" alt="foto de perfil" />
    <h2>${name}</h2>
    <h3>${comment}</h3>
    </div>
    `
}
export default CommentsSection