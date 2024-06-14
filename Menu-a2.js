class Menu {
    constructor() {
      this.imgContainer = document.querySelector('#menu');
      this.statusBar = document.querySelector('#status-bar');
      
      this.showButtonClicked = this.showButtonClicked.bind(this);
      
      const unopened = "gift.jpeg";
      this.presents = [
        new Present(this.src, 'gift.jpeg',this.showButtonClicked),
        new Present(this.src, 'gift.jpeg', this.showButtonClicked),
        new Present(this.src, 'gift.jpeg', this.showButtonClicked)
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
     * @param {*} gifSrc the path to the image stc
     * @param {*} onClickedCallback callback param function
     */
    constructor(containerElement, gifSrc, onClickedCallback) {
      this.containerElement = containerElement;
      this.gifSrc = gifSrc;
      this.onClickedCallback = onClickedCallback;
      
      this.onClick = this.onClick.bind(this);
      
      const image = document.createElement('img');
      image.src = 'gift.jpeg';
      button.addEventListener('click', this.onClick);
      this.containerElement.append(image);
    }
    
    onClick() {
        this.onClickedCallback(this.gifSrc);
    }
  }

  new Menu();
