//document ready
$(document).ready(function(){
    //submiting the form
    $('form').on('submit', function(){
      // preventing the page from refreshing 
      event.preventDefault();
      // using the val() to reference what the user put in the input
      let toDoItem = $('input').val();
      // getting a trash icon with the item so that way user can delete anything on the list
      let removalLink = " <a href='#'><span class='fa fa-trash'></span></a>";
      // if the input is not empty then submit the append to the page the input and the removallink
      if(toDoItem !== ''){
        $('ul').append("<li> <span class='fa fa-square-o'></span>" + toDoItem + removalLink+ "</li>")
        $('input').val('')
      }
      // when the user clicks on checkbox when they are finished with the task or if they aren't finished the task then check will be removed
      $('ul').on('click', 'li', function(){
        let checkBox = $(this).find('.fa')
        checkBox.toggleClass('fa-square-o fa-check-square-o');
        // everything user clicks on the item when they are finished the task will be faded
        $(this).toggleClass("text-muted");
  
      });
  
  // by clicking on the trash can the user can remove any item off of the list
      $('ul').on('click', 'a', function(){
        // this is grabbing the parent of the anchor tag which is the li
        let trashBox = $(this).parent();
        trashBox.remove();
      });
  
    })
  })