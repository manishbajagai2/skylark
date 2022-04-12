$(function () {
  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function (e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      // var url = "contact.php";

      var messageAlert = "alert-success";
      var messageText =
        "Thank you for submitting. We will get back to you as soon as possible ...";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
        messageText +
        "</div>";

      var name = $("#form_name").val();
      var email = $("#form_email").val();
      var subject = $("#form_subject").val();
      var message = $("#form_message").val();

      // var body = $('#body').val();

      var Body =
        "Name: " +
        name +
        "<br>Phone Number : " +
        phone +
        "<br>Email: " +
        email +
        "<br>Subject: " +
        subject +
        "<br>Message: " +
        message;
      //console.log(name, phone, email, message);
      // First make the gmail account less secure and it will work
      Email.send({
        SecureToken: "",
        To: "",
        From: "",
        Subject: "New message on contact from " + name,
        Body: Body,
      }).then((message) => {
        if (message == "OK") {
          console.log("Your mail has been sent. Thank you for connecting.");
        } else {
          console.error(message);
        }
      });

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});
