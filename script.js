const imgContainer = document.querySelector(".img-container");

const btne1= document.querySelector(".btn");

let imgNum=6;
btne1.addEventListener('click',() => {
  UpdateImage();
}
)

function UpdateImage(){
    for (let i = 0; i < imgNum; i++) {
        
        const nwImg = document.createElement("img");
        nwImg.src= `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`
        imgContainer.appendChild(nwImg);
    }
}