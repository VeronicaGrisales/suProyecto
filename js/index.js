const images = document.querySelectorAll('.img-principal');
const containerImage = document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show');

images.forEach(image => {
    image.addEventListener('click', ()=>{

        addImage(image.getAttribute('src'), image.getAttribute('alt'));

         // console.log(image.getAttribute('src'))
        //console.log(image.getAttribute('alt'))
    })
})

const addImage = (srcImage, altImage) => {
    containerImage.classList.toggle('move');
    imageContainer.src = srcImage;
}

containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
})


