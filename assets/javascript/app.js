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
// a.Whistler Blackcomb b.Big SKy c.Park City d.Heavenly
// 6.Which ski resort is NOT in Colorado?
// a.Crested Butte b.Whitefish c.Breckenridge d.Steamboat
// 7.How high is Chacaltaya Bolivia, the highest ski resort in the world
// a.20,110ft. b.17,785ft c.13,230ft d.15,000ft
// 8.What male skier holds the most xGames medals
// a.Tanner Hall b.Simon Dumont c.Tom Wallisch d.Gus Kenworthy
// 9.What skier has an infamos video of breaking both ankles?
// a.Gus Kenworthy b.Candide Thorvex c.James Woods d.Tanner Hall

class Question {
    constructor(question, answ1, answ2, answ3, answ4, correctAnsw){
        this.question = question;
        this.answ1 = answ1;
        this.answ2 = answ2;
        this.answ3 = answ3;
        this.answ4 = answ4;
        this.correctAnsw = correctAnsw;
    }

    //Print to screen





    printQuestionToConsole(){
        console.log(this.question);
        console.log("a:", this.answ1);
        console.log("b:", this.answ2);
        console.log("c:", this.answ3);
        console.log("d:", this.answ4);
        console.log(this.correctAnsw);
    }

}
$(document).ready(function() {
$("#game-section").hide()
let Question1 = new Question("How many ski resorts are in Washington State?", "10", "16", "20", "31", "20");
$("#start-btn").click(function(){
    $("#question-id").text( Question1.question);
    $("#answer-a").text("a. " + Question1.answ1);
    $("#answer-b").text("b. " + Question1.answ2);
    $("#answer-c").text("c. " + Question1.answ3);
    $("#answer-d").text("d. " + Question1.answ4);
    $("#game-section").show()
    $("#start-btn").hide()
})
})