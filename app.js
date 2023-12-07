const api = "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";
const inp = document.getElementById("inp");
const images = document.querySelector(".images");

const getImage = async () => {
    // Make a Request to OpenAI
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
              "prompt":inp.value,
              "n":3,
              "size":"256x256",
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    // Parse the respons as json
    const data = await res.json();
    const listImages = data.data;

    // listImages.map((photo) => {
    //     images.innerHTML = ""
    //     const container = document.createElement("div");
    //     images.append(container);
    //     const img = document.createElement("img");
    //     container.append(img);
    //     img.src = photo.url
    // })
    images.innerHTML = "";
    showImg(listImages[0]);
    showImg(listImages[1]);
    showImg(listImages[2]);
}
function showImg(image) {
    const container = document.createElement("div");
    images.append(container);
    const img = document.createElement("img");
    container.append(img);
    img.src = image.url
}


