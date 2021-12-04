
class Question2 {
    constructor() {
      this.hint = createButton("See Hint"); 
      //this.input = createInput("").attribute("placeholder", "Write True or False");
      this.op1 = createButton("");
      this.op2 = createButton("");
      this.continue = createButton("Continue");
      this.question2 = createElement("h2");
      this.message = createElement("h1");
    }
    display(){
    
    
  
    this.handleHint();
    this.handleCorrectAns();
    this.handleWrongAns();
    this.handleContinue();
    
    
  
    this.question2.html("Scotland National animal is Wolf.");
    this.question2.style('fonts-size', '70px')
    this.question2.style('color','white');
    this.question2.position(220, 105);
  
    this.hint.position(200,410);
    this.hint.size(200,40);
    this.hint.style('background','white');
  
    this.continue.position(440,410);
    this.continue.size(200,40);
    this.continue.style('background','white');
    
  
      this.op1.html("True" );
      this.op1.position(200, 200);
      this.op1.size(200,40);
      this.op1.style('background','lightgreen');
  
      this.op2.html("False");
      this.op2.position(470, 200);
      this.op2.size(200,40);
      this.op2.style('background','lightgreen');
  
  
     this.handleCorrectAns();
    this.handleHint();
    this.setElementsPosition();
    this.setElementsStyle();
    }

    setElementsPosition() {
      this.input.position(width / 2 - 110, height / 2 - 80);
    }
  
    setElementsStyle() {
      this.input.class("customInput");
    }
  
     handleCorrectAns() {
      this.op2.mousePressed(() => {
        /*this.points += 5;
      this.points.updatePoints();*/
         clapM.play();
          swal ( {
              title: `Good Job!`,
              text: `Correct Answer: Scotland's National Animal is Unicorn`,
              imageUrl:`https://c.tenor.com/1mRsobYzxEoAAAAC/corgi-excited.gif`,
              //imageSize: 100x100,
              confirmButtonText: "OK"
          });
      })
    }
  
    handleWrongAns() {
      this.op1.mousePressed(() => {
           swal ({
               title: `Opps!`,
               text: `You lose the game`,
               imageUrl:`https://c.tenor.com/5MnEH0popSIAAAAi/puppy-brown.gif`,
               confirmButtonText: `Continue`
              });
      })
    }
  
      
     
      handleHint() {
        this.hint.mousePressed(() => {
          swal({
             title: `Hint`,
             text: `All the girls like that animal`,
             confirmButtonText: "Ok"
          });
      })
      }
  
      handleContinue() {
        this.continue.mousePressed ( () => {
          question3.display();
           this.question2.hide();
          this.op1.hide();
          this.op2.hide();
          this.hint.hide();
        })
      }
      
    
  } 
  
