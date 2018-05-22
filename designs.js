// Select color input
// Select size input
//function to make sure it loads after html 
$(function(){

 function makeGrid() {    //set vars inside makeGrid so no parameters
  var height = $('#inputHeight').val(); //user's input on height passed into val function and stored in a variable 
  var width = $('#inputWidth').val();  //user's input on width
  var table = $('#pixelCanvas');
  var color = $('#colorPicker'); //user's input on color
  table.children().remove(); //removes any grid created previously
  for (let r=0; r<height; r++) {  //loops for creating grid
    table.append('<tr></tr>');   // add rows to the table
    for (let c=0; c<width; c++) {  
      $('tr').last().append('<td></td>'); //adds new cells to last rows
    }
  }
  $(table).on('click', 'td', function(){  //listens to clicks on created table and colours tds
      $(this).css('background-color', color.val());
  });
}

$('input[type="submit"]').click(function(evt) { //calls the function makeGrid
  evt.preventDefault();  //prevents reloading page with submit button
  makeGrid();
});
});