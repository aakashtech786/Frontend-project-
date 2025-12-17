let qrformEl = document.getElementById("qrForm");
const qrContainerEl = document.getElementById("qrContainer");
const qrImageEl = document.getElementById("qrImage");
const inputextEl = document.getElementById("inputext");

const renderQrcode = (url) => {
    if (!url) return;

    qrImageEl.src = url;
    qrContainerEl.classList.add("show");
   
}


qrformEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(qrformEl);
    console.log(formData);

    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
    
    renderQrcode(qrCodeUrl);

})

inputextEl.addEventListener("keyup", () => {
    if (inputextEl.value == "") {
         qrContainerEl.classList.remove("show");
    }
})