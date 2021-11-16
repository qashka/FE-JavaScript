const dogImage = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');

dogButton.addEventListener('click', getNewDog)

function getNewDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src = result.message
        })
        .catch(err => console.log(err))
}