//DOM Manipulation
//Getting Players Names
const player1 = prompt('Enter Player 1 name:');
const player2 = prompt('Enter Player 2 name:');
// let getPlayersName = $('header h3');
$('h3#p1').css('fontSize', '35px');
$('h3#p2').css('fontSize', '35px');
$('h3#p1').text(player1.toUpperCase());
$('h3#p2').text(player2.toUpperCase());

let symbol = "X";
$('span > h1').text(symbol);
$('span > h1').css({
    'fontSize':'80px','color':'yellow'
});

const eventType = 'click';
const targetBox = $('td.box');
// const targetBox = document.querySelectorAll('.box');

const callback = function(){
    // console.log('Clicked box'); // To test the event
    // we use event.target to catch the element that triggered the event
    $(event.target).text(symbol);
    $(event.target).css({'fontSize':'90px', 'color':'#2196F3'});
    turns();
    $('span > h1').text(symbol);
    let result;

    if (winner() == 'X'){
        $('span > h1').text('_');
        $(targetBox).off('click');
        $('aside > p').css('border','double #2196F3');
        $('aside > p').text("Player 1 has won");
        // alert("Player 1 has won");
    } 
    else if (winner() == 'O'){
        $('span > h1').text('_');
        $(targetBox).off('click');
        $('aside > p').css('border','double #2196F3');
        $('aside > p').text("Player 2 has won");
        // alert("Player 2 has won");
    }
    else if ($(targetBox).text().length === 9){
        $('span > h1').text('_');
        $('aside > p').css('border','double #2196F3');
        $('aside > p').text("It is a Tie ^_^");
        // alert("It is a Tie ^_^");
    }
    
}

function check(num1,num2,num3){
    if( (num1 && num2 && num3 ) != '' )
            if(num1 == num2 && num2 == num3)
                return true;
}

function winner() { 
// console.log(targetBox);
// console.log($(targetBox[0]).text());
    //For catching the wins by Rows
    for(let i=0;i<=2;i++){ //Columns
        if(check($(targetBox[i]).text(), $(targetBox[i+3]).text(), $(targetBox[i+6]).text()))
            return $(targetBox[i]).text();
        // if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
        //     if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text())
    }
    for(let i=0;i<=6;i+=3){ //Rows 
        if(check($(targetBox[i]).text(), $(targetBox[i+1]).text(), $(targetBox[i+2]).text()))
            return $(targetBox[i]).text();
        // if( ($(targetBox[i]).text() && $(targetBox[i+1]).text() && $(targetBox[i+2]).text() ) != '' )
        //     if($(targetBox[i]).text() == $(targetBox[i+1]).text() && $(targetBox[i+1]).text() == $(targetBox[i+2]).text()) 
    }
    //Corners
    if(check($(targetBox[0]).text(), $(targetBox[4]).text(), $(targetBox[8]).text()))
        return $(targetBox[0]).text();
    else if(check($(targetBox[2]).text(), $(targetBox[4]).text(), $(targetBox[6]).text()))
        return $(targetBox[2]).text();
    // for(let i=6;i<=8;i++){//Third Row 
    //     if( ($(targetBox[i]).text() && $(targetBox[i+1]).text() && $(targetBox[i+2]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+1]).text() && $(targetBox[i+1]).text() == $(targetBox[i+2]).text()) 
    //             return $(targetBox[6]).text();
    // }
    // //For catching the wins by Columns
    // for(let i=0;i<=6;i+=3){//First Column 
    //     if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
    //             return $(targetBox[0]).text();
    //     }
    // for(let i=1;i<=7;i+=3){//Second Column 
    //     if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
    //             return $(targetBox[1]).text();
    // }
    // for(let i=2;i<=8;i+=3){//Third Column 
    //     if( ($(targetBox[i]).text() && $(targetBox[i+3]).text() && $(targetBox[i+6]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+3]).text() && $(targetBox[i+3]).text() == $(targetBox[i+6]).text()) 
    //             return $(targetBox[2]).text();
    //     }
    // //For catching the wins by Corners 
    // for(let i=0;i<=8;i+=4){//First Corner index from 0
    //     if( ($(targetBox[i]).text() && $(targetBox[i+4]).text() && $(targetBox[i+8]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+4]).text() && $(targetBox[i+4]).text() == $(targetBox[i+8]).text()) 
    //             return $(targetBox[0]).text();
    //     }
    // for(let i=2;i<=6;i+=2){//Second Corner from index 2
    //     if( ($(targetBox[i]).text() && $(targetBox[i+2]).text() && $(targetBox[i+4]).text() ) != '' )
    //         if($(targetBox[i]).text() == $(targetBox[i+2]).text() && $(targetBox[i+2]).text() == $(targetBox[i+4]).text()) 
    //             return $(targetBox[2]).text();
    //     }
}
function turns() {

    if (symbol === "X") {
        symbol = "O";
    } else {
        symbol = "X";
    }
}

targetBox.one(eventType, callback);
// document.addEventListener(eventType,targetBox);

