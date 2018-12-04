/* global $ */
//displays the next element after the current target
function display(event) {
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
   $("h3").click(display);
    
//displays and animates the next element after the current target
function display2(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
}//end of display2    

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "yellow");
 }, function(){
 $(this).css("background-color", "teal");
});


function display3(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "slow");
}
$("h2").click(display3);
