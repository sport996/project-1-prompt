//DOM Manipulation
//Getting Players Names
// const player1 = prompt('Enter Player 1 name:');
// const player2 = prompt('Enter Player 2 name:');
// const getPlayersName = $('header h3');
// getPlayersName[0].text(player1.toUpperCase());
// getPlayersName[1].text(player2.toUpperCase());

let symbol = "X";
// let playerN = "Player 1";
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
    
    if (winner() == 'X'){
        console.log("Player 1 has won");
        $('span > h1').text('_');
        $(targetBox).off('click');
    } 
    else if (winner() == 'O'){
        console.log("Player 2 has won");
        $('span > h1').text('_');
        $(targetBox).off('click');
    }
    else if ($(targetBox).text.length === 9){
        console.log("It is a Tie ^_^");
        $('span > h1').text('_');
    }
    
    
    //console.log(targetBox);

    // for(let i=0; i< targetBox.length;i++){
    //     targetBox[i].text();
    // }

    //forEach loop
    // targetBox.forEach(function(item, index){
    //     targetBox[].text('X'); //how to determine the symbol
    // });
}
function winner() { 
    //For catching the wins by Rows
    for(let i=0;i<=2;i++){//First Row 
        if( ($(targetBox[i]).text() && $(targetBox[i+1]).text() && $(targetBox[i+2]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+1]).text() && $(targetBox[i+1]).text() == $(targetBox[i+2]).text()) 
                return $(targetBox[0]).text();
    }
    for(let i=3;i<=5;i++){//Second Row 
        if( ($(targetBox[i]).text() && $(targetBox[i+1]).text() && $(targetBox[i+2]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+1]).text() && $(targetBox[i+1]).text() == $(targetBox[i+2]).text()) 
                return $(targetBox[3]).text();
    }
    for(let i=6;i<=8;i++){//Third Row 
        if( ($(targetBox[i]).text() && $(targetBox[i+1]).text() && $(targetBox[i+2]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+1]).text() && $(targetBox[i+1]).text() == $(targetBox[i+2]).text()) 
                return $(targetBox[6]).text();
    }
    //For catching the wins by Columns
    for(let i=0;i<=6;i+=3){//First Column 
        if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
                return $(targetBox[0]).text();
        }
    for(let i=1;i<=7;i+=3){//Second Column 
        if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
                return $(targetBox[1]).text();
    }
    for(let i=2;i<=8;i+=3){//Third Column 
        if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
                return $(targetBox[2]).text();
        }
    //For catching the wins by Corners 
    for(let i=0;i<=8;i+=4){//First Corner index from 0
        if( ($(targetBox[i]).text() && $(targetBox[i+4]).text() && $(targetBox[i+8]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+4]).text() && $(targetBox[i+4]).text() == $(targetBox[i+8]).text()) 
                return $(targetBox[0]).text();
        }
    for(let i=2;i<=6;i+=2){//Second Corner from index 2
        if( ($(targetBox[i]).text() && $(targetBox[i+2]).text() && $(targetBox[i+4]).text() ) != '' )
            if($(targetBox[i]).text() == $(targetBox[i+2]).text() && $(targetBox[i+2]).text() == $(targetBox[i+4]).text()) 
                return $(targetBox[2]).text();
        }
}
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

