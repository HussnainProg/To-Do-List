let addTask = document.querySelector("#addTask");
let text = document.querySelector("#task");
let content  = document.querySelector("#content")
let secondRow = document.querySelectorAll(".row");


addTask.addEventListener('click',()=>{
    if(text.value === ""){
        alert("Add Task First");
    }
    else{
        let div = document.createElement("div");
        div.className = "col-10";
        div.id = "task";
        div.innerHTML = `<p>${text.value}</p>
                        <button class="btn btn-outline-success complete btn-lg">Done</button>
                        <button class="btn btn-outline-danger delete btn-lg ms-3">Delete</button>`
        // console.log(div);

        // checking which del button is pressed.
        secondRow[1].appendChild(div);
        let delBtn = document.getElementsByClassName("delete");
        for(let i=0; i<delBtn.length; i++){
            delBtn[i].onclick = function(){
                // console.log(this.parentElement)
                let elem = confirm("This will be deleted permnently");
                if(elem){
                    this.parentElement.style.display = "none";

                }
            }
        }
        // checking whcich cimplete button is pressed.
        let compBtn = document.getElementsByClassName("complete");
        for(let i=0; i<compBtn.length;i++){
            compBtn[i].onclick = function(){
                // console.log(this.previousSibling);
                console.log(this.parentElement.children[0].innerText);
                let para = this.parentElement.children[0];
                para.style.textDecoration = "line-through";
                para.style.color = "silver";
                console.log(para); 
            }
        }
        

        

        
    }

    text.value = "";

})
