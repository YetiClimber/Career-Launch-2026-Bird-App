    var username = "birdQuestTest";
    var password = "abc123";
    var birdnum = 0;
    
    function authenticate() {
      var authorized;

      // Retrieves input values
      var user = document.getElementById("username").value;
      var pass = document.getElementById("password").value;

      // Checks if input values match
      if (user == username && pass == password){
        authorized = true;
      } else {
        authorized = false;
        alert("Username or password  is incorrect.")
      }
      return authorized;
    }

    document.getElementById("output_welcome").textContent = "Welcome, " + username + "!";
    document.getElementById("output_birdnum").textContent = "You have discovered " + birdnum + " birds so far. Neat!";