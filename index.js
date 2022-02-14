$(function () {

    $("#btn1" ).click(function() {
        $("#box" ).animate({
         width: "300px",
         height: "300px", 
          }, 1500 );
    });
      
    $("#btn2").click(function() {
        $("#box").animate({
         width: "100px",
         height: "100px",    
          }, 1500 );
    });
    
  $("#accept").click(function () {
    if ($("#btnSubmit").is(":disabled")) {
      $("#btnSubmit").removeAttr("disabled");
    } else {
      $("#btnSubmit").attr("disabled", "disabled");
    }
  });

  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#retype_password_error_message").hide();

  var error_email = false;
  var error_password = false;
  var error_retype_password = false;

  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  $("#form_retype_password").focusout(function () {
    check_retype_password();
  });

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#form_email").css("border", "2px solid #F90A0A");
      error_email = true;
    }
  }

  function check_password() {
    var password_length = $("#form_password").val().length;
    if (password_length < 8 || $("#form_password").val() === "") {
      $("#password_error_message").html(
        "You should enter at least 8 characters"
      );
      $("#password_error_message").show();
      $("#form_password").css("border", "2px solid  #F90A0A");
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  function check_retype_password() {
    var password = $("#form_password").val();
    var retype_password = $("#form_retype_password").val();
    if (password !== retype_password) {
      $("#retype_password_error_message").html("Password didn't matched");
      $("#retype_password_error_message").show();
      $("#form_retype_password").css("border", "2px solid #F90A0A");
      error_retype_password = true;
    } else {
      $("#retype_password_error_message").hide();
    }
  }

  $("#registration_form").submit(function () {
    error_email = false;
    error_password = false;
    error_retype_password = false;
    check_email();
    check_password();
    check_retype_password();

    if (
      error_email === false &&
      error_password === false &&
      error_retype_password === false
    ) {
      alert("Registration succesfull");
      return true;
    } else {
      alert("Please fill out the form correctly");
      return false;
    }
  });
});

function showHidePassword() {
  var x = document.getElementById("form_password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(document).ready(function () {
    var imageUrl = "https://ak.picdn.net/shutterstock/videos/24223843/thumb/1.jpg";
    $("box").css("background-image", "url(" + imageUrl + ")");
});


$(document).ready(function () {
    var max_length = 15;
    $('textarea').keyup(function () {
        var len = max_length - $(this).val().length;
        $('.GFG').text(len);
    });
});

$(document).ready(function(){
    $("#fade").click(function(){
      $("p").fadeTo(1000, 0.4);
    });
});

