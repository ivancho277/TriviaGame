// ski trivia
// 1.How many ski resorts are in Washington State?
// a. 10 b.16 c.20 d. 31
// 2.What is the closest ski resort to Seattle?
// a.Stevens Pass b.Snoqualmie Pass c.Mt. Baker d.Hurrican Ridge
// 3.What ski resort holds the record for most snowfall in a single season for the USA(1,140inches)?
// a.Alta, UT b.Mt. Baker, WA c.Timberline, OR d.Alyeska, AK
// 4.Which ski Resort is NOT in Idaho.
// a.Sun Valley b.Bogus Basin c.Jackson Hole d.Targhee
// 5.What is the biggest ski Resort in North America?
// a.Whistler-Blackcomb b.Big SKy c.Park City d.Heavenly
// 6.Which ski resort is NOT in Colorado?
// a.Crested Butte b.Whitefish c.Breckenridge d.Steamboat
// 7.How high is Chacaltaya Bolivia, the highest ski resort in the world
// a.20,110ft. b.17,785ft c.13,235ft d.15,000ft
// 8.What male skier holds the most xGames medals
// a.Tanner Hall b.Simon Dumont c.Tom Wallisch d.Gus Kenworthy
// 9.What skier has an infamos video of breaking both ankles?
// a.Gus Kenworthy b.Candide Thorvex c.James Woods d.Tanner Hall

//Class to build each question
class Question {
    constructor(question, answ1, answ2, answ3, answ4, correctAnsw) {
        this.question = question;
        this.answ1 = answ1;
        this.answ2 = answ2;
        this.answ3 = answ3;
        this.answ4 = answ4;
        this.correctAnsw = correctAnsw;
        this.timeup = false;
        //this.questionTimer();
        this.isAnsweredCorrect = false;
        //this.printQuestionToConsole();
        

    }
        

    static questionTimer() {
        let timer = 30;
        let intervalId;

        function decrement() {
            timer--;
            $("#time").text("Time left: " + timer);
            if (timer === 0) {
                stop();                
                $("#game-section").html("<h1> Out of Time! <h1>")                
                this.timeup = true;
            }
        }
        function stop() {
            clearInterval(intervalId);

        }

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
        run();
    }
    
    //check if clicked answer is correct answer
    checkifClickedisCorrect() {
        var ans1 = this.answ1  //my method of binding class variable to be visible in the click events
        var ans2 = this.answ2
        var ans3 = this.answ3
        var ans4 = this.answ4
        var correct = this.correctAnsw
        
        $("#answer-a").click(() => {
            console.log(this.isAnsweredCorrect);
            console.log($(this));
            if(ans1 === correct)
            {
                console.log("correct");
                this.isAnsweredCorrect = true;

            }
            else{console.log("incorrect")}
        })
        $("#answer-b").click(() => {
            console.log(this.isAnsweredCorrect);
            if(ans2 === correct)
            {
                console.log("correct");
                this.isAnsweredCorrect = true;
            }
            else{console.log("incorrect")}
        })
        $("#answer-c").click(() => {
            
            if(ans3 === correct)
            {
                console.log("correct");
                this.isAnsweredCorrect = true;
                console.log(this.isAnsweredCorrect);
            }
            else{console.log("incorrect")}
        })
        $("#answer-d").click(() => {
            
            if(ans4 === correct)
            {
                console.log("correct");
                this.isAnsweredCorrect = true;
                console.log(this.isAnsweredCorrect);
            }
            else{console.log("incorrect")}
        })
        
    }

    //Print to screen
    printToScreen() {
        $("#question-id").html(this.question);
        $("#answer-a").html(this.answ1);
        $("#answer-b").html(this.answ2);
        $("#answer-c").html(this.answ3);
        $("#answer-d").html(this.answ4);
    }

    printQuestionToConsole() {
        console.log(this.question);
        console.log("a:", this.answ1);
        console.log("b:", this.answ2);
        console.log("c:", this.answ3);
        console.log("d:", this.answ4);
        console.log(this.correctAnsw);
    }

}
$(document).ready(function () {



    $("#time").hide()
    $("#game-section").hide()
    let Question1 = new Question("How many ski area are in Washington State?", "10", "16", "20", "31", "20");
    let Question2 = new Question("What is the closest ski resort to Seattle?", "Stevens Pass", "Snoqualmie Pass", "Mt. Baker", "Hurrican Ridge", "Snoqualmie Pass")
    let Question3 = new Question("What ski resort holds the record for most snowfall in a single season for the USA(at 1,140inches)?", "Alta, UT", "Mt. Baker, WA", "Timberline, OR", "Alyeska, AK", "Mt. Baker, WA")
    let Question4 = new Question("Which ski Resort is NOT in Idaho?", "Sun Valley", "Bogus Basin", "Jackson Hole", "Targhee", "Jackson Hole")
    let Question5 = new Question("What is the biggest ski Resort in North America?", "Whistler-Blackcomb", "Big Sky", "Park City", "Heavenly", "Whistler-Blackcomb")
    let Question6 = new Question("Which ski resort is NOT in Colorado?", "Crested Butte", "Whitefish", "Breckenridge", "Steamboat", "Whitefish")
    let Question7 = new Question("How high is Chacaltaya Bolivia, the highest ski resort in the world?", "20,110ft.", "17,785ft", "13,235ft", "15,000ft", "17,785ft")
    let Question8 = new Question("What male skier holds the most X-Games medals?", "Tanner Hall", "Simon Dumont", "Tom Wallisch", "Gus Kenworthy", "Tanner Hall")
    let Question9 = new Question("What skier has an infamos video of breaking both ankles?", "Gus Kenworthy", "James Woods", "Candide Thorvex", "Tanner Hall", "Tanner Hall")

let questionArray = [Question1, Question2, Question3, Question5, Question6, Question7, Question8, Question9]
      console.log(questionArray);


    $("#start-btn").click(function () {
        Question1.printToScreen();
        Question1.checkifClickedisCorrect();
        Question.questionTimer();

      
     

        //display question1
        //if time runs out on question 1 go to question 2 etc...


        
        // for(var i = 0; i < questionArray.length; i++)
        // {              
        //     {
        //     
        //
        //     }

        // }
        $("#time").show()
        $("#game-section").show()
        $("#start-btn").hide()
    })

$('#answer-a, #answer-b, #answer-c, #answer-d').click(() => {
    if(Question1.isAnsweredCorrect === true){
        $("#game-section")
        Question2.printToScreen();
    }
})
    



})