const battleWinCheck = Ennemy => {
    if (Ennemy.hull <= 0) {
      console.log("You blew up " + Ennemy.name + " Nice job!");
      victory();
    } else {
      console.log("keep shooting nice attack keep playing");
    }
  };
  /// check if game is over -------******** if yes alert oh joy ---
  ///  else ... if not over have next alien ship in [ bad guys ] attack you
  
  const didIWin = () => {
    if (ennemies[0] === "dead") {
      // this is working now
      console.log(
        "You win c!",
        
      );
      alert(
        "Awesome job playing you won !!!! Click the link on the page to refresh and play again"
      );
    } else {
      console.log(
        "%c ... There are still aliens left to kill ...",
        "background:red; color:white;"
      );
      console.log(
        "%c .. Look out here comes one now ..",
        "background: lightyellow; color:red; font-size:15px;"
      );
      if (ennemies[2] === "dead") {
        ennemies[0].attack(youHero);
      } else {
        ennemies[0].fight(youHero); /// al#5 al#6  will use more powerful mizzles
        
        ///   they have unlimited shots so I upgraded hull fix to 2 times so can win  .........
      }
    }
  };
  
  ///// lets make it so a bad guy ship can be destroyed
  ///  if ship hull <= 0 remove first with splice add "dead"
  ///     to the end of badGuys array
  //// when first ship in  array = "dead" then game over you got em all!
  
  const victory = () => {
    if (ennemies[0].hull <= 0) {
      console.log(
        "%c !! Awesome !!.. you destroyed the alien ship ..!!",
        "background:orange; font-size:18px; border:3px solid green; color:white;"
      );
      ennemies[ennemies.length] = "dead";
      ennemies.splice(0, 1);
      didIWin();
    } else {
      console.log(
        "%c .. Good shot but they are still alive ..",
        "background:lightyellow; font-size:15px; color:red;"
      );
      didIWin();
    }
  };

  function sampleFunction() {
    var user = prompt("Enter your name, please", "Bilbo Baggins");
    if (user != null) {
      document.getElementById("greeting").innerHTML =
        "Greetings " + user + "!";
    }
  }
  //// we will make it a game you can die...
  
  const defeat = youHero => {
    if (youHero.hull <= 0) {
      console.log(
        "%c Game over you are dead.... Sorry - refresh the page to play again",
        "font-size:18px; background:darkgreen; color:white; border: 4px dashed gold;"
      );
      alert(
        ` Oh No your ship blew up ! The ${youHero.name} is gone! Close this annoying pop-up and refresh the page to try again Captian! Good thing it was just a simulation..... don't forget your engineers can search Reddit for a way to restore your hull power`
      );
    } else {
      console.log(
        "%c .. Your turn now captian enter your move below .. ",
        "background:lightskyblue; color:black; font-size:20px;"
      );
    }
  };
  
  //// missle array to limit big shots outside construcor...
  /////// limit shield repairs like missles and lives
  let enigneers = ["E", "E", "E"];
  this.myMissles = ["M", "M", "M", "M", "M", "M"];
  /// none left to shoot when myMissles = ["o","o","o","o","o","o","o",etc...];
  
  // hero ship constructor below
  


  class Hero {
    constructor(name, hull, accuracy) {
      this.name = name;
      this.hull = hull || 20;
      this.accuracy = accuracy || 0.7;
      this.weapons = {
        lasers: 5,
        missles: myMissles.length
      };
      
    }
    
    announceHealth() {
      console.log("I am" + this.name + "my shields are now " + this.hull);
    }
   
    attack(Ennemy) {
      if (this.hull >= 1) {
        //////attack with missles if you are still alive
        if (Ennemy.name === ennemies[0].name) {
          //// attack the right bad guy

              victory(Ennemy); ///// check if you destroted the ship or not and they or the next one returns fire
            } else {
              console.log(
                "%c awwww .... raaaattttssssssssssss...... you are out of missles switch to lasers",
                "background:lightskyblue; color:black; font-size:18px;"
              );
              ///// does not count as turn - could be typo
              console.log(
                "%c ..... it is still your turn now captian enter your move below ..... ",
                "background:lightskyblue; color:red; font-size:22px;"
              );
            }
          } else {
            console.log(
              "%c Awww hamburgers... You missed",
              "background:lightgray; color:red;"
            );
            victory(Ennemy); //// you missed but that was your turn they get to shoot at you now
          }
        } 
      } 
    
    
  
  
  /// ok we have our hero ship / us / our character
  let youHero = new Hero(" USS Schwarzenegger ");
  
  // enemy ship constructor - same as hero but evil alien - not Governator
  
  class Alienship {
    constructor(name) {
      this.name = name;
      this.hull = Math.floor(Math.random() * 4) + 3; //// make random between 3 & 6
      this.firepower = Math.floor(Math.random() * 3) + 2; /// make random between 2 & 4 for their lazers with a z ... /////////
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; ///// make random between .6 and .8 /////
      this.weapons = {
        lazers: Math.floor(Math.random() * 3) + 2, /// felt i need it here even though lazaer power might return different number that firepower above - it did not like using firepower in earlier versions...
        mizzle: 6
      };
      
    }
    
    announceHealth() {
      console.log(
        "We are the " + this.name + " our shields are now " + this.hull
      );
    }
    fight(youHero) {
      if (this.name === ennemies[0].name) {
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
          
          console.log(
            "take that huumooonns! .......",
            
          );
          
          console.log((youHero.hull -= this.firepower));
          defeat(youHero); /// but did you die? also returns it to your move
        } else {
          console.log(this.name + " can not hit the side of a barn. Lucky us!"); /// so you know who shot at you / who next target is
          console.log(
            "good those alien scumbags missed us " +
              youHero.name +
              "took no damage. Hull power at " + youHero.hull); /// you know they missed
          defeat(youHero); /// returns to your move no damage dealt - live to fight another day
        }
      } else {
        console.log("dead aliens can't shoot"); // not sure how they would but just in case if simulating in console log with pre typed functions...
        //return to your move
        defeat(youHero);
      }
    }
    ///////// mizzles for the "boss" or last 2 enemies
    attack(youHero) {
      if (this.name === ennemies[0].name) {
        if (Math.floor(Math.random() * Math.floor(9)) / 10 <= this.accuracy) {
          
          console.log(
            youHero.name +
              " got hit with an alien Z * mizzle, their health is down to"
          );
          console.log((youHero.hull += -7)); /// had it set to this . mizzle but somehting was not working with it or  the random number so I hard coded it... sorry
          defeat(youHero); /// like above -_- but did you die?
        } else {
          console.log(this.name + "  can not hit the side of a barn"); /// so you know who next target is when they appear but miss
          console.log(
            "Ha! those aliens shoot like stormtroopers " +
              youHero.name +
              "took no damage. Hull power  =  " +
              youHero.hull
          ); /// you know they missed
          defeat(youHero); /// no damage awesome but return to your move with this
        }
      } else {
        console.log("dead aliens can't shoot"); // not sure how they would but just in case if simulating in console log with pre typed functions...
        //return to your move
        defeat(youHero);
      }
    }
  }
  
  // would need enemy ships in an array so they can be removed when dead ... empty array = win game
  
  let ennemies = [];
  
  // need constructor function to push to empty bad-Guys array.
  //// will build last bad guy first then each subsequent pushed before it into array -
  // construct in reverse order because I want ship 1 to be first target .... it's my game....
  
  
  ennemies.unshift((al6 = new Alienship("AL #6")));
  ennemies.unshift((al5 = new Alienship("AL #5")));
  ennemies.unshift((al4 = new Alienship("AL #4")));
  ennemies.unshift((al3 = new Alienship("AL #3")));
  ennemies.unshift((al2 = new Alienship("AL #2")));
  ennemies.unshift((al1 = new Alienship("AL #1")));
  
  /// they are generated with random attributes - a loop could auto create them but not sure how to have it give them each different names unless I tie it to an array of  names..... lots of other stuff to fix before that...  will have to use name of bad guy to attack them and name of badguy to attack us back..
  
  /// ships exist yes x 7 for now hardcoded but random attributes on refresh
  //// ships can fight and talk smack
  //// ships attacks change enemys hull via damage incrementally
  
  ///// ********************************************************************** //////
  //////////// * - * - * -  LET THE BATTLE (game) BEGIN !!!! * - * - * - /////////////
  
  //// to set the story of the game with a little zaaz!
  
  console.log(
    " %c........ Welcome to the Space Battle! You are captian of the USS Schwarzenegger - and there are 6 evil alien ships headed to destroy Earth! ........ ",
    "font-size: 15px; background:black; border: 2px solid red; color:white;"
  );
  console.log("......You must blow them all up to win the game..... ");
  console.log(
    "......You have unlimited lasers (weak) to fire but a limited number of missles (strong) you can fire..... "
  );
  
  
  console.log(
    "%c......Beep Beep Beep Boop 'warning aliens detected ' Beep Beep Beep Boop......",
    "background: lightyellow; color:orange; font-size:12px;"
  );
  console.log(
    "......There are 6 alien ships that are ready to attach the us"
  );
  console.log(
    "......You can see the scanner results below by clicking on the little arrow beside the (6) [Alienship, Alienship, ....] on the above line or a few lines up depending on your screen size it's right under the yellow beep warning...... "
  );
  console.log(ennemies);
  console.log(
    "......Brace yourselves they are charging weapons and they are opening fire...... "
  );
   al1.fight(youHero); 

   function welcomeMsg(promptMsg)
   {
   visitorName = prompt(promptMsg, '');
   alert("Welcome " + visitorName + "," + "\n\n" + "You are currently  visiting our game do you want to start or retreat?");
   }
