   let ran = 0;
   let total = 10;
   let count = 0 ;
   let win = 0 ;
   let loose = 0;
        let computer = "rock";
        function cRandom() {
            ran = Math.random() * 10;
            if (ran >= 1 && ran < 4) {
                computer = "rock";
            } else if (ran >= 4 && ran < 7) {
                computer = "paper";
            } else {
                computer = "scisser";
            }
        }
        let b = '';
        function chooseRock(a) {
            b = a;
        }

        function choosePaper(a) {
            b = a;
        }
        function chooseScissor(a) {
            b = a;
        }

        function winMethod() {

            document.querySelector('.choice').classList.add('active');

            if (b == computer) {
                document.querySelector('.box1').style.backgroundImage = `url(img/${b}.png)`;
                document.querySelector('.box2').style.backgroundImage = `url(img/${b}.png)`;

                document.querySelector('.winMessage').innerHTML = `So This Gonna Tie 😔`
                document.querySelector('.your_c').innerHTML = b;
                document.querySelector('.com_c').innerHTML = computer;

                
                document.querySelector('.score').innerHTML = `Total : ${total} Win : ${win} Loose : ${loose}`;

            } else if (b == 'rock' && computer == 'scisser') {
                document.querySelector('.box1').style.backgroundImage = `url(img/${b}.png)`;
                document.querySelector('.box2').style.backgroundImage = `url(img/${computer}.png)`;

                document.querySelector('.winMessage').innerHTML = ` You win 😀`
                document.querySelector('.your_c').innerHTML = b;
                document.querySelector('.com_c').innerHTML = computer;

                count++; win++;
                document.querySelector('.score').innerHTML = `Total : ${total} Win : ${win} Loose : ${loose}`;
            }
            else if (b == 'paper' && computer == 'rock') {
                document.querySelector('.box1').style.backgroundImage = `url(img/${b}.png)`;
                document.querySelector('.box2').style.backgroundImage = `url(img/${computer}.png)`;

                document.querySelector('.winMessage').innerHTML = `You win 😀`;
                document.querySelector('.your_c').innerHTML = b;
                document.querySelector('.com_c').innerHTML = computer;
                count++; win++;
                 document.querySelector('.score').innerHTML = `Total : ${total} Win : ${win} Loose : ${loose}`;
            } else if (b == 'scisser' && computer == 'paper') {
                document.querySelector('.box1').style.backgroundImage = `url(img/${b}.png)`;
                document.querySelector('.box2').style.backgroundImage = `url(img/${computer}.png)`;

                document.querySelector('.winMessage').innerHTML = `You win 😀`;
                document.querySelector('.your_c').innerHTML = b;
                document.querySelector('.com_c').innerHTML = computer;

                count++; win++;
                document.querySelector('.score').innerHTML = `Total : ${total} Win : ${win} Loose : ${loose}`;
            } else {
                document.querySelector('.box1').style.backgroundImage = `url(img/${b}.png)`;
                document.querySelector('.box2').style.backgroundImage = `url(img/${computer}.png)`;

                document.querySelector('.winMessage').innerHTML = ` You Loose 🥹`;
                document.querySelector('.your_c').innerHTML = b;
                document.querySelector('.com_c').innerHTML = computer;

                count++; loose++;
                document.querySelector('.score').innerHTML = `Total : ${total} Win : ${win} Loose : ${loose}`;

            }
        }
        function checkWin(){

            if(win + loose >= 10 || count>=10){
                if(win>loose){
                alert('You Win🎈🎈🎈🎆🎇✨');
                
                win = 0;
                loose = 0;
                count = 0;
            }
            else if(win == loose){
                alert('Game is Tie 😔😔😔😔😔');
                 win = 0;
                loose = 0;
                count = 0;
            }
            else{
                alert('You loose 🥹🥹🥹🥹🥹');
                 win = 0;
                loose = 0;
                count = 0;
            }
        }
        }

