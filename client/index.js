const input = document.querySelector("input")
const button = document.querySelector("#generate")


const handleSearch = async () => {
    let codeTogenerate = input.value;
    try {
        const codeTogenerate = input.value;
        if (codeTogenerate !== null && codeTogenerate !== "") {

            input.value = ""
            return;
        } else {
            return window.alert("adding an empty item is not possible");
        }
    } catch (error) {
        console.log(error);
    }
};






button.addEventListener('click', handleSearch)