class Menu {
    constructor() {
      this.imgContainer = document.querySelector('#menu');
      this.statusBar = document.querySelector('#status-bar');
      
      this.showButtonClicked = this.showButtonClicked.bind(this);
      
      const unopened = "gift.jpeg";
      this.presents = [
        new Present(this.imgContainer, 'gift.jpeg',this.showButtonClicked),
        new Present(this.imgContainer, 'gift.jpeg', this.showButtonClicked),
        new Present(this.imgContainer, 'gift.jpeg', this.showButtonClicked)
      ];
      
      document.addEventListener('click', this.showButtonClicked);
    }
    
    showButtonClicked(newSrc) {
      this.statusBar.gifSrc = newSrc;
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
    constructor(containerElement, src_dir, onClickedCallback) {
      /* 
         this.containerElement = containerElement;
      this.gifSrc = gifSrc;
      this.onClickedCallback = onClickedCallback;
      
      this.onClick = this.onClick.bind(this);
      
      const image = document.createElement('img');
      image.src = 'gift.jpeg';
      button.addEventListener('click', this.onClick);
      this.containerElement.append(image);
*/
   

      // some oop stuff
      this.containerElement = containerElement;
      this.src_dir = src_dir;
      this.onClickedCallback = onClickedCallback;
      this.onClick = this.onClick.bind(this);

      // create img and allocate src dir
      const image = document.createElement('img');
      src_dir = "img/gift.jpeg"; //TODO #1 :  change this
      image.src = src_dir;
      image.addEventListener('click', () => {
          this._openPresent(src_dir);
      });

      this.containerElement.append(image);


  }
  _openPresent(event, source){
      const image = event.currentTarget;
      image.src = source || "img/cat1.gif";
      image.removeEventListener('click', this._openPresent);
      //event.currentTarget.src = event.currentTarget.src == "img/cat1.gif" ? "img/gift.jpeg" : "img/cat1.gif";
  }
  
    
    onClick() {
        this.onClickedCallback(this.gifSrc);
    }
  
  }
new Menu();
