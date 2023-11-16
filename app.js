const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const tarih = document.getElementById("tarih");

loadingDiv.style.display="block";
containerDiv.style.display = "none";
btn.style.display = "none";
tarih.style.display = "none"
setTimeout(showContainer, 3000)


function showContainer() {
    console.log("is running");
    loadingDiv.style.display="none";
    containerDiv.style.display = containerDiv.style.display === "none" ? "block" : "none";
    btn.style.display = "block";
    
    tarih.style.display = "block"

    fetching()
    setInterval(timeTr, 1000)
}
   


// fetching()

function fetching(){

    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then((response)=>{
        console.log(response);
        if(!response.ok){
            throw new Error(`${response.status}`)
        }
        return response.json();
        // never don't forget
    })
    .then((data)=>{
        console.log(data);
        show(data)
    })
    .catch((error)=>{
        console.log(error);
        cardDiv.setAttribute("class", "mt-5 display-1 text-center")
        cardDiv.textContent = error;
    })


//  Display fetching elements
    
    const show = (cats)=>{
        cats.forEach((cat)=>{
            cardDiv.innerHTML += `<img src="${cat.url}" width="370px" height="250px"/>` 
            
        })
       
    }


}

btn.addEventListener("click", ()=>{
    containerDiv.style.display = "none";
    cardDiv.innerHTML = "";
    console.log("is clicked");
    loadingDiv.style.display="block";
    btn.style.display = "none";
    tarih.style.display = "none"

    setTimeout(showContainer, 2000)
 
})

// Timer
const timeTr = () =>{
    const tarih1 = new Date().toLocaleDateString()
    const tarih2 = new Date().toLocaleTimeString()
    tarih.innerText = tarih1 + " " +tarih2.toString();

}
