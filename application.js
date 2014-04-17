$ (function() {

  // $("#submit-button").click(function() {
    
  // });

  function addContactToPage() {
    $ul = $('<ul></ul>')
    $('.page').append($ul);

    $("#new-contact-form input").each(function () {
      var $this = $(this)
      $ul.append($('<li>' + $this.val() + '</li>'));       
    });
  }

  $('#new-contact-button').click(function(){
    var $form = $('#new-contact-form')
    $form.fadeIn();
  });

  $('body').on('click', '#submit-button', function(){
    var firstname = $('#firstname').val();
    
    if (firstname === "") {
      alert("firstname can't be blank");
    } else {
      addContactToPage();
    }
  });
});

