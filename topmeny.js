// JavaScript Document
$(document).ready(function(){
var scrollValue = 0;
$(window).scroll(function(){
var curValue = $(this).scrollTop();
if(curValue > scrollValue)
{
var i = 2;
removeLetter();
function removeLetter()
{
$("#l"+i).fadeOut(0);
if(i < 9)
{
i++;
setTimeout(removeLetter,30);
}
}
}
else {
var i = 13;
showLetter();
function showLetter()
{
$("#l"+i).fadeIn(0);
if(i >= 2)
{
i--;
setTimeout(showLetter,30);
}
}
}
scrollValue = curValue;
});
});

