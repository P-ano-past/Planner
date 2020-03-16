$( document ).ready(function(){
    function update() {
        $('#today').html(moment().format('MMMM DD YYYY H:mm: ssA'));
      }
      
      setInterval(update, 1000);
  
    

      
})