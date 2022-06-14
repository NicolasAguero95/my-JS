document.addEventListener("DOMContentLoaded", () => {
    const title= document.getElementById("title");
    const description= document.getElementById("description");
    const table= document.getElementById("table");
    const alert= document.getElementById("alert");
    const btn = document.getElementById("add");

    
    function addTodo() {
        if (description.value === "" || title.value === "") {
            alert.classList.remove("d-none");
            alert.innerText = "titulo y descripcion son requeridos"
        } else {
            console.log("ok")
        }
    };
    
    
    btn.onclick = addTodo;







});


