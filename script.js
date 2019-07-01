//DOM Manipulation
//Getting Players Names
// const player1 = prompt('Enter Player 1 name:');
// const player2 = prompt('Enter Player 2 name:');
// const getPlayersName = $('h3');
// getPlayersName[0].text(player1.toUpperCase());
// getPlayersName[1].text(player2.toUpperCase());


// let board = [];
// board.forEach(function(item, index){
// });
let symbol = "X";
let playerN = "Player 1";
$('span > h1').text(symbol);
$('span > h1').css({
    'fontSize':'80px','color':'yellow'
});
// $('aside > h1').text(playerN + ' Turn:');

const eventType = 'click';
const targetBox = $('td.box');
// const targetBox = document.querySelectorAll('.box');

const callback = function(){
    
    // console.log('Clicked box'); // To test the event
    // we use event.target to catch the element that triggered the event
    $(event.target).text(symbol);
    $(event.target).css('fontSize','90px',);
    turns();
    $('span > h1').text(symbol);

    // for(let i = 0;i < targetBox.length;i++ ){
    // $(targetBox)[i].text('X');
    // }

    // for(let i = 0;i < targetBox.length;i++ ){
    //     targetBox[i].text('X');
    // }

    //forEach loop
    // targetBox.forEach(function(item, index){
    //     targetBox[].text('X'); //how to determine the symbol
    // });
    
};

function turns() {

    if (symbol === "X") {
        symbol = "O";
    } else {
        symbol = "X";
    }
}
// function playersNum() {

//     if (symbol === "X") {
//         playerN = "Player 2";
//     } else {
//         playerN = "Player 2";
//     }
// }

targetBox.one(eventType, callback);
// document.addEventListener(eventType,targetBox);

