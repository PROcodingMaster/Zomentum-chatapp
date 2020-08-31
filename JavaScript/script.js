var header = document.getElementById("all-chat-box");
var chat = header.getElementsByClassName("chat-person");

for (var i = 0; i < chat.length; i++) {
    chat[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
  }