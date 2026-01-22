  document.addEventListener("DOMContentLoaded", () => {


    
    var username = "birdQuestTest";
    var password = "abc123";

    var pfp = document.getElementById("upload");
    var newPfp = document.getElementById("pic");
    var miniPfp = document.getElementById("mini-pfp");
    var savedPic = localStorage.getItem("profilePic");
    var welcome = document.getElementById("output-welcome");

    var displayNameInput = document.getElementById("display-name");
    var saveAcc = document.getElementById("save");
    
    // index.html function - hardcoded login and password
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
        alert("Username or password is incorrect.")
      }
      return authorized;
    }

    // homePage.html information
    if (displayNameInput && saveAcc) {
      const savedName = localStorage.getItem("displayName");
      if (savedName){
        displayNameInput.value = savedName;
      }

      saveAcc.addEventListener("click", () => {
        var name = displayNameInput.value.trim();
        if (name !== "") {
          localStorage.setItem("displayName", name);
          alert("Saved Changes!");
        }
      });
    }

    if (welcome) {
      const savedName = localStorage.getItem("displayName");
      welcome.textContent = savedName || "User";
    }


    

    if (pfp && newPfp) {
    // account.html profile change
      pfp.addEventListener("change", function () {
        const file = this.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function () {
          newPfp.src = reader.result;
          localStorage.setItem("profilePic", reader.result);
        };

        reader.readAsDataURL(file);
      });
    }

    if (miniPfp && savedPic) {
      miniPfp.src = savedPic;
    }

    if (newPfp && savedPic) {
      newPfp.src = savedPic;
    }
});




