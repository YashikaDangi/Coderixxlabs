const galleryContainer = document.querySelector('.gallery-conatiner');
const galleryControlsContainer= document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const items= document.querySelector('.item');

class Carousel{

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselContainer= controls;
        this.carouselArray= {...items};
    }

    updateGallery(){
        this.carouselArray
        .forEach(e1 =>{
            e1.classList.remove('item1');
            e1.classList.remove('item2');
            e1.classList.remove('item3');
            e1.classList.remove('item4');
            e1.classList.remove('item5');
        });

        this.carouselArray.slice(0,5).forEach((e1,i) =>{
            e1.classList.add(`item-${i+1}`);
        })
    }
}