
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

      image.addEventListener('click', () => {
          this._openPresent("img/cat1.gif");
      });
      this.containerElement.appendChild(image);
      this._openPresent = this._openPresent.bind(this);

      

  }
    _openPresent(event){
        const image = event.currentTarget;
        //console.log(this.index);
        this.containerElement.src ="img/cat1.gif";
        // image.removeEventListener('click', this._openPresent);
        //event.currentTarget.src = event.currentTarget.src == "img/cat1.gif" ? "img/gift.jpeg" : "img/cat1.gif";
    }
  
    
    onClick(event) {
        console.log(this.index);
        event.currentTarget.src = "img/cat1.gif";
        //this.src_dir = GIF_LIST[this.index];
        this.onClickedCallback(this);
    }
  
  }
new Menu();
