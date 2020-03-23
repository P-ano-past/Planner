$( document ).ready(function(){
  function update() {
    $('#date').html(moment().format('MMMM DD YYYY'));   
    $('#time').html(moment().format('h:mm:ss A'));   
  }
  //need to adjust for 12hr format
  setInterval(update, 1000);

  $("#scheduler").on("click", function() {
    let btnAdd = $("<button>")
  })

  $(".hour").on("click", function(){
    let hour = $(".hour");

    $('.modal').modal('show')
    
    $('#time-value').append($(this).text())

    $('.modal').on('hidden.bs.modal', function(){
      $('#time-value').empty()
      
    })
  })    
  

})