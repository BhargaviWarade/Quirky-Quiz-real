class Question3 {
  constructor() {
    this.hint = createButton("See Hint"); 
    this.option1 = createButton("");
    this.option2 = createButton("");
    this.option3 = createButton("");
    this.option4 = createButton("");
    this.continue = createButton("Continue");
    this.question3 = createElement("h2");
    this.message = createElement("h1");
  }
  display(){

  this.handleHint();
  this.handleCorrectAns();
  this.handleWrongAns();
  this.handleContinue();
  
  
  

  this.question3.html("In the alphabet song, how many letters are there in L and S?");
  this.question3.style('fonts-size', '70px')
  this.question3.style('color','white');
  this.question3.position(135, 100);

  this.hint.position(200,410);
  this.hint.size(200,40);
  this.hint.style('background','white');

  this.continue.position(440,410);
  this.continue.size(200,40);
  this.continue.style('background','white');
  

  // creating options
    this.option1.html("1) 4 " );
    this.option1.position(200, 200);
    this.option1.size(200,40);
    this.option1.style('background','lightgreen');

    this.option2.html("2) 5" );
    this.option2.position(470, 200);
    this.option2.size(200,40);
    this.option2.style('background','lightgreen');

    this.option3.html("3) 6 " );
    this.option3.position(200, 280);
    this.option3.size(200,40);
    this.option3.style('background','lightgreen');

    this.option4.html("4) 7");
    this.option4.position(470, 280);
    this.option4.size(200,40);
    this.option4.style('background','lightgreen');

    /*this.handleCorrectAns();
  this.handleHint();*/
  }

  /*setElementsPosition() {
    this.message.position(width / 2 - 200, height / 2 - 100);
  }

  setElementsStyle() {
    this.message.class("message");
    this.message.style('color','white');
  }*/

   handleCorrectAns() {
    this.option3.mousePressed(() => {
     /* this.points += 5;
      this.points.updatePoints();*/
       clapM.play();
        swal ( {
            title: `Good Job!`,
            text: `Correct Answer: There are total 6 alphabets`,
            image: `coco`,
           imageUrl:`https://c.tenor.com/1mRsobYzxEoAAAAC/corgi-excited.gif`,
            imageSize: "100x100",
            confirmButtonText: "OK"
        });
    })
  }

  handleWrongAns() {
    this.option1.mousePressed(() => {
         swal ({
             title: `Opps!`,
             text: `You lose the game`,
             imageUrl:`https://c.tenor.com/5MnEH0popSIAAAAi/puppy-brown.gif`,
             confirmButtonText: `Continue`
            });
    })

    this.option2.mousePressed(() => {
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
           text: `Sing the alphabets songs, that you used to  sing in childhood`,
           confirmButtonText: "Ok"
        });
    })
    }

    handleContinue() {
      this.continue.mousePressed (() => {
        this.question3.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();
        this.hint.hide();
        question4.display();
        

        /*var endMessage =`
                 Hey!   
        </br>Thank you for playing
        </br> More quizes coming soon....
        </br> Stay tune`;
        this.message.html(endMessage);*/

        /*this.op1.display();
        this.op2.display();
        question2.display();*/

        
       
         
        // text("Thank you for playing; More levels are coming soon! Stay tune...")

       

       
       

      })
    }
    
  
}
