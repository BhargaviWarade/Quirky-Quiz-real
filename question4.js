class Question4 {
    constructor() {
      this.hint = createButton("See Hint"); 
      this.option1 = createButton("");
      this.option2 = createButton("");
      this.option3 = createButton("");
      this.option4 = createButton("");
      this.continue = createButton("Continue");
      this.question4 = createElement("h2");
      this.message = createElement("h1");
    }
    display(){
  
    this.handleHint();
    this.handleCorrectAns();
    this.handleWrongAns();
    this.handleContinue();
    this.setElementsPosition();
    this.setElementsStyle();
    
    
    
  
    this.question4.html("The art of paper Folding is called:");
    this.question4.style('fonts-size', '70px')
    this.question4.style('color','white');
    this.question4.position(220, 100);
  
    this.hint.position(200,410);
    this.hint.size(200,40);
    this.hint.style('background','white');
  
    this.continue.position(440,410);
    this.continue.size(200,40);
    this.continue.style('background','white');
    
  
    // creating options
      this.option1.html("Origami " );
      this.option1.position(200, 200);
      this.option1.size(200,40);
      this.option1.style('background','lightgreen');
  
      this.option2.html("Creasing" );
      this.option2.position(470, 200);
      this.option2.size(200,40);
      this.option2.style('background','lightgreen');
  
      this.option3.html("Mixed Media " );
      this.option3.position(200, 280);
      this.option3.size(200,40);
      this.option3.style('background','lightgreen');
  
      this.option4.html("Collage");
      this.option4.position(470, 280);
      this.option4.size(200,40);
      this.option4.style('background','lightgreen');
  
      /*this.handleCorrectAns();
    this.handleHint();*/
    }
  
    setElementsPosition() {
      this.message.position(width / 2 - 200, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.message.class("message");
      this.message.style('color','white');
    }
  
     handleCorrectAns() {
      this.option1.mousePressed(() => {
       /* this.points += 5;
        this.points.updatePoints();*/
         clapM.play();
          swal ( {
              title: `Good Job!`,
              text: `Correct Answer: Origami is the traditional Japanese art of folding paper into attractive shapes to make decorative objects.`,
              image: `coco`,
             imageUrl:`https://c.tenor.com/1mRsobYzxEoAAAAC/corgi-excited.gif`,
              imageSize: "100x100",
              confirmButtonText: "OK"
          });
      })
    }
  
    handleWrongAns() {
      this.option2.mousePressed(() => {
           swal ({
               title: `Opps!`,
               text: `You lose the game`,
               imageUrl:`https://c.tenor.com/5MnEH0popSIAAAAi/puppy-brown.gif`,
               confirmButtonText: `Continue`
              });
      })
  
      this.option3.mousePressed(() => {
        swal ({
            title: `Opps!`,
            text: `You lose the game`,
            imageUrl:`https://c.tenor.com/5MnEH0popSIAAAAi/puppy-brown.gif`,
            confirmButtonText: `Continue`
           });
   })
  
   this.option4.mousePressed(() => {
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
             text: `It is a Japanese Art`,
             //imageUrl: `https://www.edarabia.com/japan/flag/`,
             confirmButtonText: "Ok"
          });
      })
      }
  
      handleContinue() {
        this.continue.mousePressed (() => {
          this.question4.hide();
          this.option1.hide();
          this.option2.hide();
          this.option3.hide();
          this.option4.hide();
          this.hint.hide();
          
          
  
          var endMessage =`
                   Hey!   
          </br>Thank you for playing
          </br> More quizes coming soon....
          </br> Stay tune`;
          this.message.html(endMessage);
  
          /*this.op1.display();
          this.op2.display();
          question2.display();*/
  
          
         
           
          // text("Thank you for playing; More levels are coming soon! Stay tune...")
  
         
  
         
         
  
        })
      }
      
    
  }
  