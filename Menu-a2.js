
const GIF_LIST = [
    "gift.jpeg",
    "img/cat1.gif",
    "img/cat2.gif",
    "img/cat4.gif",
]
class Menu {
    constructor() {
      this.imgContainer = document.querySelector('#menu');
      this.statusBar = document.querySelector('#status-bar');
      
      this.showButtonClicked = this.showButtonClicked.bind(this);
      
      const unopened = "gift.jpeg";
      this.presents = [
        new Present(this.imgContainer, 'gift.jpeg',this.showButtonClicked,0),
        new Present(this.imgContainer, 'gift.jpeg', this.showButtonClicked,1),
        new Present(this.imgContainer, 'gift.jpeg', this.showButtonClicked,1)
      ];
      
      document.addEventListener('click', this.showButtonClicked);
    }
    
    showButtonClicked(index) {
      // TODO: add condiotional here
      this.statusBar.textContent = index + ' was clicked';

    
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
        image.src = 'img/cat1.gif'
        this.onClickedCallback(this.index);
  
  }
}
new Menu();
