
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let original = ''
let originalArr = []

function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => {
        original = json.message
        
        for (x in original) {
            originalArr.push(x);
          } 

        addBreeds(json.message)}
        );
  }

  function addBreeds(breeds) {
    let dogBreedsList = document.getElementById('dog-breeds')
      for (x in breeds) {
        dogBreedsList.innerHTML += `<li class= 'breed'>${x}</li>`;
      }
  }
  
  function handleClick(e){
    if(e.target.className === 'breed'){
        handleClickEvent(e)
    }
    console.log("i was clicked")
    }

    function handleClickEvent(event){
        event.target.style.color ='red'
    }

document.addEventListener('DOMContentLoaded', function() {
    function fetchImages() {
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImages(json.message));
      }
    
      function renderImages(images) {
        const dogImageContainer = document.getElementById('dog-image-container')
        images.forEach(image => {
          dogImageContainer.innerHTML += `<img src=\'${image}\'>`
        })
      }
      
    fetchImages()
    fetchBreeds()

    const dogBreedsList = document.getElementById('dog-breeds')
    const drop = document.getElementById('breed-dropdown')
    
    dogBreedsList.addEventListener('click', handleClick)
            
    drop.addEventListener("change", handleChange)

        function handleChange(e){     
            filteredBreeds = originalArr.filter(function(breed) {
                return breed.charAt(0) == drop.value
            })
                dogBreedsList.innerHTML = ''
            
            filteredBreeds.forEach(function(b){
                dogBreedsList.innerHTML += `<li class= 'breed'>${b}</li>`
            })
        }
  })