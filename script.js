//DOM Manipulation

//Getting the values into the DOM(Document Object Model) Tree
$('h3#p1').text('player1'.toUpperCase());
$('h3#p2').text('player2'.toUpperCase());
//Changing the style of players names by jQuery library
$('h3#p1').css('fontSize', '35px');
$('h3#p2').css('fontSize', '35px');
//Initiating the value of symbol which will be entered first
let symbol = "X";
//Getting the symbol into the box to clarify who's turn it is
$('span > h1').text(symbol);
//Changing the style of the box contents by jQuery library
$('span > h1').css({
    'fontSize':'80px','color':'yellow'
});
//Initiating the event type
const eventType = 'click';
//Targeting the table data by its selector in jQuery library
//Which will give us an array of our table date(9 indexes)
const targetBox = $('td.box');
// const targetBox = document.querySelectorAll('.box');
//The callback function which specifies what will happen if 
//our event has happened
const callback = function(){
    // To test the event
    // console.log('Clicked box');

    // I used event.target to catch the element that triggered the event
    //And input the value of symbol variable in it
    $(event.target).text(symbol);
    //changing the style of the input value
    $(event.target).css({'fontSize':'90px', 'color':'#2196F3'});
    //Method Turn, used to toggle the value of our variable symbol,
    //from X to O and vice versa
    turns();
    //Updating the value in the box that specifies the turns
    $('span > h1').text(symbol);
    //Basically, what follows is if-else conditions to specify
    //the winner, depending on the return of function winner()
    if (winner() == 'X'){
        //putting the value of turns box to dash, since the game
        //has ended
        $('span > h1').text('_');
        //Turning off the event Listener on jQuery
        $(targetBox).off('click');
        //Styling the result by jQuery
        $('aside > p').css('border','double #2196F3');
        //The result text
        $('aside > p').text("Player 1 has won");
    } 
    else if (winner() == 'O'){
        $('span > h1').text('_');
        $(targetBox).off('click');
        $('aside > p').css('border','double #2196F3');
        $('aside > p').text("Player 2 has won");
    }
    //Checking the value of our array
    //when the array is full and non of the players has won
    //the condition will return Tie result
    else if ($(targetBox).text().length === 9){
        $('span > h1').text('_');
        $('aside > p').css('border','double #2196F3');
        $('aside > p').text("It is a Tie ^_^");
    }
    
}
//Function check(num1,num2,num3) will be used in our winner() function
//it takes 3 arguments, checks if they are empty, if they are empty
//it will check if they are equal and return true
//otherwise it will return false
function check(num1,num2,num3){
    if( (num1 && num2 && num3 ) != '' )
            if(num1 == num2 && num2 == num3)
                return true;
}
//
function winner() { 
    //For catching the wins
    //Columns: the loop will run through each column in each iterate
    //so we are going to have 3 iterates 
    //each iterate will pass arguments to our check function 
    for(let i=0;i<=2;i++){ 
        if(check($(targetBox[i]).text(), $(targetBox[i+3]).text(), $(targetBox[i+6]).text()))
            return $(targetBox[i]).text();
    }
    //Rows
    for(let i=0;i<=6;i+=3){  
        if(check($(targetBox[i]).text(), $(targetBox[i+1]).text(), $(targetBox[i+2]).text()))
            return $(targetBox[i]).text();
    }
    //Corners: the if-else conditions will check the values of our elements
    //and return the result
    if(check($(targetBox[0]).text(), $(targetBox[4]).text(), $(targetBox[8]).text()))
        return $(targetBox[0]).text();
    else if(check($(targetBox[2]).text(), $(targetBox[4]).text(), $(targetBox[6]).text()))
        return $(targetBox[2]).text();
}
//Function turns(), checks if the value of variable symbol is X it 
//change it to O and vise versa
function turns() {
    if (symbol === "X") {
        symbol = "O";
    } else {
        symbol = "X";
    }
}

//Binding the table data boxes to the callback function ..
//of an event type that is stored in eventType Variable('click')
//by using a jQuery method called one()
//which activates the callback function only once for each 
targetBox.one(eventType, callback);
