class Form {
    constructor() {
      
      this.AButton = createButton("A");
      this.BButton = createButton("B");
      this.CButton = createButton("C")
      this.DButton = createButton("D")
      this.EButton =createButton("E")
      this.FButton =createButton("F")
      this.GButton =createButton("G")
      this.HButton =createButton("H")
      this.titleImg = createImg("./assets/title.png", "game title");
      this.AImg = createImg("assets/a.png");
      this.BImg = createImg("assets/b.png");
      this.CImg = createImg("assets/c.png");
      this.greeting = createElement("h2");
      
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 50);
    
      this.AButton.position(40, height / 5 - 20);
      this.BButton.position( 150,  height / 5 - 20);
      this.CButton.position( 260,  height / 5 - 20);
      this.DButton.position( 370,  height / 5 - 20);
    this.EButton.position(480,height/5-20)
    this.FButton.position(590,height/5-20)
    this.GButton.position(700,height/5-20)
    this.HButton.position(810,height/5-20)     

      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
     this.AImg.class("gameTitle")
     this.BImg.class("gameTitle")



     
      this.AButton.class("customButton");
      this.BButton.class("customButton");
      this.CButton.class("customButton");
      this.DButton.class("customButton");
      this.EButton.class("customButton");
      this.FButton.class("customButton");
      this.GButton.class("customButton");
      this.HButton.class("customButton");

      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.AButton.hide();
      this.BButton.hide();
      
    }
  
    handleMousePressed() {
      this.AButton.mousePressed(() => {
        this.AButton.hide();
        this.AImg.position(200,height/3-100);
      });
        
             
      

      this.BButton.mousePressed(() => {
        this.BButton.hide();
        this.BImg.position(200,height/3-100);
                       
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  