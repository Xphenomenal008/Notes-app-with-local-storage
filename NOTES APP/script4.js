let inputfield=document.getElementById("inputfield")
let parasaver=document.getElementById("parasaver")
let btn=document.getElementById("fun")
 
function setItem(){
    localStorage.setItem("data",parasaver.innerHTML)
}
function getItem(){
    parasaver.innerHTML=localStorage.getItem("data")
     
}
 btn.addEventListener("click",()=>{
    if(inputfield.value!=""){
        
        let para=document.createElement("p")
        parasaver.appendChild(para)
        let spansaver=document.createElement("span")
        spansaver.innerHTML=inputfield.value
        para.appendChild(spansaver)
        let editButton=document.createElement("button")
        editButton.innerHTML="EDIT"
        editButton.id="id1"
        para.appendChild(editButton)
        let cutImage=document.createElement("img")
        cutImage.src="Untitled (3).jpg"
        cutImage.id="id2"
        para.appendChild(cutImage)
        inputfield.value=""
        setItem()
        

    }
    
 })
 parasaver.addEventListener("click",(e)=>{
if(e.target.id==="id1"){
    let prompty=prompt("edit your content here",e.target.parentElement.querySelector("span").innerHTML)
    e.target.parentElement.querySelector("span").innerHTML=prompty
    setItem()
} if(e.target.id==="id2"){
    e.target.parentElement.remove();
    setItem()
}
 })


getItem();
