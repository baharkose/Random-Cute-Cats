const loadingDiv = document.getElementById("loading");
const containerDiv = document.querySelector(".kapsayici");
const tarih = document.getElementById("tarih");
const cardDiv = document.getElementById("cardDiv");
const btn = document.getElementById("btn");
let status = 0;

containerDiv.style.display = "none";
setTimeout(() => {
    showContainer()
}, 3000);
function fetching(){
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response)=>{
        status = response.status;
        console.log(response);
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        show(data)
    })
    .catch((error)=>{
        console.log(error);
        cardDiv.setAttribute("class", "mt-5 display-1 text-center")
        cardDiv.innerHTML += `${error} <br> <img src="./img/error.gif" width="370px" height="250px"/>` 

    })
}
// Get the data from fetch
const show = (cats)=>{
    cardDiv.innerHTML = "";
    cats.forEach((cat)=>{
        cardDiv.innerHTML += `<img src="${cat.url}" width="370px" height="250px"/>` 
    })
}
const showContainer = () =>{
    containerDiv.style.display = "flex";
    loadingDiv.style.display = "none";
    fetching()
    setInterval(timeTr, 1000)
}
const timeTr = () =>{
    const date11 = new Date().toLocaleDateString()
    const date12 = new Date().toLocaleTimeString()
    tarih.innerText = date11 + " " +date12.toString();

}
//  CLICK EVENTS
btn.addEventListener("click", () => {
    cardDiv.innerHTML = `<img src="./img/loading.gif" width="370px"/>`
    setTimeout((showContainer(),status))
    
})



