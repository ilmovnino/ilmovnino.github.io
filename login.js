// ilmovnino.tl Login Script

// Login.html
var PageAvaileble = true;
var CheckLoginPage = function() {
  if(window.localStorage) {
      try {
          localStorage.test = "check_if_it_works";
      } catch (e) {
          window.location = "private-error.html";
      };
      delete localStorage.test;
  } else {
      window.location = "private-error.html";
  };
  if (navigator.onLine) {
    var userTokenIsValid = Backendless.UserService.isValidLogin();
    if (userTokenIsValid) {
        
    } else {
        localStorage.clear();
    };
    var currentUser = Backendless.UserService.getCurrentUser();
    if (currentUser != null) {
        window.location = "index.html";
    };
  } else {
      document.write("<h1>Connettiti ad Internet</h1>");
  };
};

var ShowFields = function() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("fields-container").style.display = "block";
};

var LoginBack = function() {
    if(PageAvaileble) {
        document.getElementById("password-field").value = "";
        document.getElementById("fields-container").style.display = "none";
        document.getElementById("login-container").style.display = "block";
    };
};

var Login = function() {
  if(PageAvaileble) {
  if (navigator.onLine) {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    if(username != "" && password != "") {
        PageAvaileble = false;
    try {
        user = Backendless.UserService.login( username, password, true );
        document.getElementById("logform").submit();
        var condition = user.registred;
        if (condition) {
            if(location.hash.slice(1,5) == "from") {
                window.location = "index.html#" + location.hash.slice(6);
            } else {
                window.location = "index.html";
            };
        } else {
            window.location = "register.html";
        };
    } catch( err ) {
        PageAvaileble = true;
        if(err.code == 3003) {
            alert("Username o Password errati");
        } else {
            alert("Errore, riprova");
        }
        console.log(err);
    }};
  } else {
      alert("Connettiti ad Internet");
  }};
};

var StinoRecovery = function() {
  if(PageAvaileble) {
  if (navigator.onLine) {
    var current_identity = document.getElementById("username-field").value;
    if (current_identity != "") {
        PageAvaileble = false;
        try {
            Backendless.UserService.restorePassword(current_identity);
            alert("Email di recupero password correttamente spedta a " + current_identity);
            PageAvaileble = true;
        } catch (err) {
            alert("Errore, riprova");
            PageAvaileble = true;
        };
    } else {
        PageAvaileble = true;
        alert("Scrivi il tuo username nel campo apposito");
    };
  } else {
      alert("Connettiti ad Internet");
  }};
};

var EnterInUsername = function(e) {
    if(e.keyCode == 13) {
        document.getElementById("username-field").blur();
        document.getElementById("password-field").focus();
        return false;
    } else {
        return true;
    }
};

var EnterInPassword = function(e) {
    if(e.keyCode == 13) {
        Login();
        return false;
    } else {
        return true;
    }
};

// Register.html

var OnLoadRegister = function() {
    var currentUser = Backendless.UserService.getCurrentUser();
    if (currentUser == null) {
        window.location = "login.html";
    };
    var condition = currentUser.registred;
    if (condition) {
        window.location = "index.html";
    } else {
        document.getElementById("register-username").innerHTML = currentUser.name;
        document.getElementById("registration-container").style.display = "block";
    };
};

var Register = function() {
  if(PageAvaileble) {
  if (navigator.onLine) {
    var currentUser = Backendless.UserService.getCurrentUser();
    var current_first_name = document.getElementById("first_name-field").value;
    var current_last_name = document.getElementById("last_name-field").value;
    var new_password = document.getElementById("change-password-field").value;
    var current_email = document.getElementById("email-field").value;
    var awarenessOn = document.getElementById("awns_field").checked;
    var filesOn = document.getElementById("file_field").checked;
    if (current_first_name != "" && current_last_name != "" && new_password != "" && current_email != "") {
        PageAvaileble = false;
        try {
            currentUser.first_name = current_first_name;
            currentUser.last_name = current_last_name;
            currentUser.password = new_password;
            currentUser.email = current_email;
            currentUser.receiveFiles = filesOn;
            currentUser.awareness = awarenessOn;
            currentUser.wallpaper_choice = WallpaperChoice;
            currentUser.registred = true;
            Backendless.UserService.update( currentUser );
            localStorage.clear();
            try {
                user = Backendless.UserService.login( currentUser.name, new_password, true );
                var condition = user.registred;
                if (condition) {
                    window.location = "index.html";
                } else {
                    PageAvaileble = true;
                    alert("Errore, riprova");
                };
            } catch( err ) {
                PageAvaileble = true;
                alert("Errore, riprova");
            };
        } catch (err) {
            PageAvaileble = true;
            if(err.code == 3040 || err.code == 8023) {
                alert("Email non valida");
            } else {
                alert("Errore, riprova");
            };
        };
    } else {
        alert("Compita tutti i campi di testo");
    };
  } else {
      alert("Connettiti ad Internet");
  }};
};
