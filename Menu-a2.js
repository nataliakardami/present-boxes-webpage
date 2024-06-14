
const GIF_LIST = [
    "img/cat1.gif",
    "img/cat2.gif",
    "img/cat3.gif",
    "img/cat4.gif",
    "img/cat5.gif"
]
class Menu {
    constructor() {
      this.imgContainer = document.querySelector('#menu');
      this.statusBar = document.querySelector('#status-bar');
      
      this.allImgClicked = this.allImgClicked.bind(this);
      
      const unopened = "gift.jpeg";
      this.presents = [];

      // create a present object for each image in GIF_LIST and append it to the presents array
      for (let i=0; i<GIF_LIST.length; i++){
        this.presents.push(new Present(this.imgContainer, unopened, this.allImgClicked, i));
      }

      // add event listener to document to check if all the images have been clicked
      document.addEventListener('click', this.allImgClicked);
    }
    
    allImgClicked() {
      // If all images are clicked, then the array of images will be full of "-1"
      if (GIF_LIST.every((element) => element === "-1")){
        this.statusBar.textContent = "Enjoy your presents!";
      }
    
    }
}
  /*  Class Present  */
class Present {
    /**
     * Present container object
     * @param {} containerElement create a container for img
     * @param {*} src_dir the path to the image stc
     * @param {*} onClickedCallback callback param function
     */
    constructor(containerElement, src_dir, onClickedCallback, index) {

      // some oop stuff
      this.containerElement = containerElement;
      this.src_dir = src_dir;
      this.onClickedCallback = onClickedCallback;
      this.onClick = this.onClick.bind(this);
      this.index = index;

      // create img and allocate src dir
      const image = document.createElement('img');
      image.src = src_dir; // this works

      // add event listener and append the image to the container element
      image.addEventListener('click', this.onClick);
      this.containerElement.appendChild(image); 

    }
    /**
     * onClick function
     * @param {*} event 
     */
    onClick(event){
        // call the callback function
        const image = event.currentTarget;
        image.src = GIF_LIST[this.index];
        // im not even sure if the callback function is needed here
        this.onClickedCallback(this.index);

        // change src to flag index -1, notifying that the image has been clicked
        GIF_LIST[this.index] = "-1";
        console.log(GIF_LIST);
        image.removeEventListener('click', this.onClick);
  
  }
}
new Menu();
