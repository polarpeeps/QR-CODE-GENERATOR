const form=document.querySelector("form")
const input = document.querySelector("input")
const button = document.querySelector("#generate")
const response=document.querySelector(".response")
const API_URL="http://localhost:3000/"
// www.youtube.com
const image=(url,inp)=>`<h2>Here is your QR-code <h2><div class="border"><div class="content"><img src="${url}" style="border-radius: 19px;" alt="Image for ${url}">
</div></div>
</div>
<h2>${inp}</h2>`
const handleSearch = async (event) => {
    try {
        event.preventDefault();
        let codeTogenerate = input.value;
        if (codeTogenerate !== null && codeTogenerate !== "") {
            const imgUrl= await fetch(`${API_URL}${codeTogenerate}`)
            response.innerHTML=await image(`${API_URL}${codeTogenerate}`,codeTogenerate)
            // alert(codeTogenerate)
            // input.value = ""
            return;
        } else {
            return window.alert("Please enter something!!!");
        }
    } catch (error) {
        console.log(error);
    }
};






form.addEventListener('submit', handleSearch)