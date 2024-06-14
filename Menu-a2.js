
const GIF_LIST = [
    "gift.jpeg",
    "img/cat1.gif"
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
      this.image.src = GIF_LIST[1];

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
      this.textContent = index;

      // create img and allocate src dir
      const image = document.createElement('img');
      image.src = GIF_LIST[index];

      image.addEventListener('click', () => {
          this.onClick(index);
      });
      this._openPresent = this._openPresent.bind(this);
      this.containerElement.append(image);
      

  }
    _openPresent(event){
        const image = event.currentTarget;
        image.src = GIF_LIST[index]
        image.removeEventListener('click', this.onClick);
        //event.currentTarget.src = event.currentTarget.src == "img/cat1.gif" ? "img/gift.jpeg" : "img/cat1.gif";
    }
  
    
    onClick() {
        this.onClickedCallback(this.index);
    }
  
  }
new Menu();
