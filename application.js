$ (function() {
  $("#submit-button").click(function() {
    $ul = $('<ul></ul>')
    $('.page').append($ul)
    $("#new-contact-form input").each(function () {
      var $this = $(this)
      
      $ul.append($('<li>' + $this.val() + '</li>'));
        
    });
  });
});