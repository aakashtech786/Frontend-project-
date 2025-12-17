
const getcolor = () => {
    
  const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    
    let codeEle = document.getElementById("code");
    codeEle.innerText = randomCode;
    // document.body.style.background = randomCode;
    let colorboxEle = document.getElementById("colorbox");
    colorboxEle.style.background = randomCode;

   
}



let mybtn = document.getElementById("btn");
mybtn.addEventListener("click", getcolor);

getcolor();