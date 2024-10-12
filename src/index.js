document.addEventListener('DOMContentLoaded', function(){
    console.log('%c HI', 'color: firebrick')

    
    const dogImages = document.getElementById('dog-image-container')  

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response=>response.json())
.then((data)=> {
    const dogImage = document.getElementById('dog-breeds')

    data.message.forEach(animalData => {
        
        
        const dogliList = document.createElement('li')
        const dogSrc = document.createElement('img')
        dogSrc.src = animalData

        dogSrc.style.width ='400px'
        dogSrc.style.height ='400px'

        dogliList.append(dogSrc)
        dogImages.appendChild(dogliList)
    });
})



fetch('https://dog.ceo/api/breeds/list/all')
.then((response)=> response.json())
.then((breeds)=> {
    const dogBreeds = document.getElementById('dog-breeds')

    Object.keys(breeds.message).forEach(breed => {
        const dogBreedList = document.createElement('li')
        dogBreedList.textContent = breed
        dogBreeds.appendChild(dogBreedList)
    })
})

let allBreeds = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    allBreeds = Object.keys(data.message);
    displayBreeds(allBreeds);
  });

document.getElementById('breed-dropdown').addEventListener('change', (e) => {
  const letter = e.target.value;
  displayBreeds(letter ? allBreeds.filter(breed => breed.startsWith(letter)) : allBreeds);
});

function displayBreeds(breeds) {
  const breedList = document.getElementById('dog-breeds');
  breedList.innerHTML = breeds.map(breed => `<li>${breed}</li>`).join('');
}


//challange 3
const dogList = document.querySelectorAll('li')

dogList.forEach (dog=> {
    dog.addEventListener('click', function() {
        dog.style.color = 'purple'
    })
})

})
