var username = "";

  function send_message(message){


    var prevState = $("#container").html();

    if (prevState.length > 3){
      prevState = prevState + "<br>";
    }

    $("#container").html(prevState+ "<span class='current_message'>" + "<span class = 'bot'>Chatbot: </span>" + message+"</span>");
    $(".current_message").hide();
    $(".current_message").delay(500).fadeIn("slow");
    $(".current_message").removeClass("current_message");

  }

  function get_username(){
    send_message("Hello, what is your name?");
  }

  function ai(message){
    if (username.length<3){
      username = message;
      send_message("Nice to meet you " + username + ", how are you doing?");
    } else{
    switch(true){
      case (message.toLowerCase().indexOf("how are you")>=0 || message.toLowerCase().indexOf("and you")>=0):
        send_message("I'm well, thank you!");
        break;
      case (message.toLowerCase().indexOf("what's going on")>=0 || message.toLowerCase().indexOf("what's up")>=0 ||message.toLowerCase().indexOf("what up")>=0) :
        send_message("Everything is same ole, same ole. Did you catch walking dead last night?");
        break;
      case message.toLowerCase().indexOf("yes")>=0:
        send_message("awesome!");
        break;
      case (message.toLowerCase().indexOf("thank you")>=0 || message.toLowerCase().indexOf("thanks")>=0 ||message.toLowerCase().indexOf("thanx")>=0):
        send_message("You're welcome "+username+"...");
        break;
      case message.toLowerCase().indexOf("stupid")>=0:
        send_message("I'm not stupid...");
        break;
      case (message.toLowerCase().indexOf("fuck")>=0 || message.toLowerCase().indexOf("thanks")>=0 ||message.toLowerCase().indexOf("thanx")>=0):
        send_message("Your mother knows you talk like that?");
        break;
      case message.toLowerCase().indexOf("no")>=0:
        send_message("Oh too bad...it was a great episode.");
        break;
      case message.toLowerCase().indexOf("time")>=0:
        var date = new Date();
        function hour(){
         if (date.getHours() > 12){
              return (date.getHours() -12);
         } else{
          return date.getHours();
         }
        };
        function minute(){
         if (date.getMinutes() > 10){
              return (date.getMinutes());
         } else{
          return ("0"+date.getMinutes());
         }
        };
        var h = hour();

        var m = minute();
        send_message("It's "+h+":"+m+" dude!");
        break;
      default:
        send_message("Ok...");
    }
  }
}

  $(function(){

    get_username();

    $("#textbox").keypress(function(event){
      if ( event.which == 13){
        if ( $("#enter").prop("checked") ){
 
          $("#send").click();
          event.preventDefault();

        }

      }

    });


    $("#send").click(function(){

      var username = "<span class ='username' = >You: </span>";

      var newMessage = $("#textbox").val();

      $("#textbox").val("");

      var prevState = $("#container").html();

      if (prevState.length > 3){
        prevState = prevState + "<br>";
      }

      $("#container").html(prevState + username + newMessage);
      
      $("#container").scrollTop($("#container").prop("scrollHeight"));

      ai(newMessage);

    });

  });