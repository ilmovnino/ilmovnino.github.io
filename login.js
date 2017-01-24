// ilmovnino.tk Login Script

// Login.html
var PageAvaileble = true;
var forcehttps = function() {if (location.protocol != 'https:'){ location.href = 'https:' + window.location.href.substring(window.location.protocol.length);}};
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
var asyncCheckLoginPage = function() {
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
    Backendless.UserService.isValidLogin().then(function(userTokenIsValid) {
        if (userTokenIsValid) {
        
        } else {
            localStorage.removeItem("Backendless");
        };
        Backendless.UserService.getCurrentUser().then(function(currentUser) {
            if (currentUser != null) {
                debugger;
                window.location = "index.html";
            };
        });
    });
  } else {
      document.write("<h1>Connettiti ad Internet</h1>");
  };
};
var checkcustom = function() {
    if(localStorage.lastUpdated && localStorage.lastUpdated != "" && localStorage.offlineLoggedUser && localStorage.offlineLoggedUser != "") {
        var user = JSON.parse(localStorage.offlineLoggedUser); var greeting = ""; var time = "Ultimo acesso " + ( '00' + new Date(localStorage.lastUpdated).getDate()).slice(-2) + '/' + ( '00' + ( new Date(localStorage.lastUpdated).getMonth() + 1 )).slice(-2) + '/' + new Date(localStorage.lastUpdated).getFullYear() + ' ' + ( '00' + new Date(localStorage.lastUpdated).getHours()).slice(-2) + ':' + ( '00' + new Date(localStorage.lastUpdated).getMinutes()).slice(-2);
        if(user.first_name.slice(-1) == "a") { greeting = "Bentornata " + user.first_name + "!" } else { greeting = "Bentornato " + user.first_name + "!" }; var pw = ""; if(localStorage.pw && localStorage.pw != "") { try{ pw = window.atob(localStorage.pw) } catch(e) {} };
        document.getElementById("fields-container").innerHTML = '<div class="ol-header" style="flex-shrink: 0"><a href="javascript:void(0);"><img class="olh-button disabled" src="assets/icons/arrow-black.svg" onclick=""></a><div class="olh-separator"></div><div class="olh-content"><img class="olh-pic" src="assets/icons/key.svg" style="height: 2.3em"><div class="olh-title">Login</div></div></div><div class="ol-body" style="padding-top: 1em;flex-grow: 2;align-items: center;justify-content: center;flex-shrink: 0"><div class="welcome">' + greeting + '</div><div class="desc">' + time + '</div><form id="logform" action="#"><input id="username-field" class="login" type="text" placeholder="nomecognome" disabled style="width: 17em;margin: 2% auto;display: none;height: 2.2em;padding-left: 0.3em;box-sizing: border-box;font-family: NinoFont, Arial, sans-serif;" onkeypress="return EnterInUsername(event)" autofocus="autofocus" value="' + user.name + '"><input id="password-field" class="login" type="password" placeholder="Password" value="' + pw + '" style="width: 17em;margin: 2% auto;display: block;font-size: 1em;height: 2.2em;padding-left: 0.3em;box-sizing: border-box;font-family: NinoFont, Arial, sans-serif;" onkeypress="return EnterInPassword(event)"><button onclick="Login();" id="lgb" class="overlay-button" style="width: 17em;margin: 2% auto;display: block;font-size: 1em;height: 2.2em;box-sizing: border-box;background-color: rgba(0, 0, 0, 0.45);font-family: NinoFont, Arial, sans-serif;">LOGIN</button><label style="display:none;font-size: 0.8em;padding: 1em;margin: 0;width: 21.5em;box-sizing: border-box;"><input type="checkbox" id="savepw" disabled style="font-size: 3em;height: auto;">Salva Password su questo dispositivo</label></form><div onclick="Empty()" class="delete" style="width: 17em;margin: 1% auto;display: flex;justify-content: center;align-items: center;font-size: 1em;height: 2.2em;padding-left: 0.3em;box-sizing: border-box;opacity: 0.8;cursor: default;"><div style="height: 1.2em;width: 1.75em;background-image: url' + "('assets/icons/delete.svg')" + ';background-position: center;background-size: contain;background-repeat: no-repeat;"></div><div>Cancella sessione</div></div></div><div class="ol-header login-footer" style="flex-shrink: 0;"><div class="lf-button" onclick="window.open' + "('loghelp.html', 'pwrec', 'width=450,height=430,fullscreen=no,toolbar=no,status=no,location=no,left=' + ( (screen.width / 2) - 220 ) + ',top=' + ( (screen.height / 2) - 210 ) + ''" + ');"><img class="olh-pic" src="assets/icons/help.svg" style="height: 2.3em"><div class="olh-title" style="margin: 0;font-size: 1.5em;">Ho bisogno di aiuto</div></div><div class="lf-button" onclick="StinoRecovery();"><img class="olh-pic" src="assets/icons/key.svg" style="height: 2.3em"><div class="olh-title" style="margin: 0;font-size: 1.5em;">Password Dimenticata</div></div></div>';
        ShowFields(); Login();
    };
};
var Empty = function() { localStorage.clear(); location.reload(); };

var DisableAll = function(a) { document.getElementsByClassName("olh-button")[0].className += " disabled"; if(!a) { document.getElementById("lgb").className += " disabled"; } document.getElementsByClassName("lf-button")[1].className += " disabled"; };
var EnableAll = function(a) { document.getElementsByClassName("olh-button")[0].className = document.getElementsByClassName("olh-button")[0].className.replace( /(?:^|\s)disabled(?!\S)/g , '' ); if(!a) { document.getElementById("lgb").className = document.getElementById("lgb").className.replace( /(?:^|\s)disabled(?!\S)/g , '' ) }; document.getElementsByClassName("lf-button")[1].className = document.getElementsByClassName("lf-button")[1].className.replace( /(?:^|\s)disabled(?!\S)/g , '' ); };

var ShowFields = function() {
    document.getElementById("page-container").style.overflow = "auto";
    document.getElementById("page-container").style.webkitTransition = "max-height 0.3s";
    document.getElementById("page-container").style.transition = "max-height 0.3s";
    document.getElementById("page-container").style.maxHeight = "100vh";
    document.getElementById("login-container").style.display = "none";
    setTimeout(function() { document.getElementById("page-container").style.webkitTransition = ""; document.getElementById("page-container").style.transition = ""; document.getElementById("page-container").style.maxHeight = "auto"; document.getElementById("fields-container").style.display = "flex"; }, 300);
};

var LoginBack = function() {
    if(PageAvaileble) {
        document.getElementById("password-field").value = "";
        document.getElementById("page-container").style.overflow = "hidden";
        document.getElementById("page-container").style.webkitTransition = "max-height 0.3s";
        document.getElementById("page-container").style.transition = "max-height 0.3s";
        document.getElementById("page-container").style.maxHeight = "23.3em";
        document.getElementById("fields-container").style.display = "none";
        setTimeout(function() { document.getElementById("page-container").style.webkitTransition = ""; document.getElementById("page-container").style.transition = ""; document.getElementById("login-container").style.display = "block"; }, 300);
    };
};

var Login = function() {
  if(PageAvaileble) {
  if (navigator.onLine) {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    if(username != "" && password != "") {
        PageAvaileble = false; DisableAll(true);
        document.getElementById("lgb").className += " buttonloading";
        document.getElementById("lgb").innerText = "ATTENDI...";
        Backendless.UserService.login( username, password, true ).then(function(user) {
            var condition = user.registred;
            if (condition) {
                if(location.hash.slice(1,5) == "from") {
                    if(document.getElementById("savepw").checked) { if(window.btoa) { localStorage.pw = window.btoa( document.getElementById("password-field").value ) } } else {};
                    document.getElementById("logform").submit();
                    window.location = "index.html#" + location.hash.slice(6);
                } else {
                    if(document.getElementById("savepw").checked) { if(window.btoa) { localStorage.pw = window.btoa( document.getElementById("password-field").value ) } } else {};
                    document.getElementById("logform").submit();
                    window.location = "index.html";
                };
            } else {
                window.location = "register.html";
            };
        }).catch(function(err) {
            Backendless.UserService.login( username, password, true ).then(function(user) {
                var condition = user.registred;
                if (condition) {
                    if(location.hash.slice(1,5) == "from") {
                        if(document.getElementById("savepw").checked) { if(window.btoa) { localStorage.pw = window.btoa( document.getElementById("password-field").value ) } } else {};
                        document.getElementById("logform").submit();
                        window.location = "index.html#" + location.hash.slice(6);
                    } else {
                        if(document.getElementById("savepw").checked) { if(window.btoa) { localStorage.pw = window.btoa( document.getElementById("password-field").value ) } } else {};
                        document.getElementById("logform").submit();
                        window.location = "index.html";
                    };
                } else {
                    window.location = "register.html";
                };
            }).catch(function(err) {
                PageAvaileble = true; EnableAll(true);
                document.getElementById("lgb").className = "overlay-button";
                document.getElementById("lgb").innerText = "LOGIN";
                if(err.code == 3003) {
                    alert("Username o Password errati");
                } else {
                    alert("Errore, riprova");
                };
                console.log(err);
            });
        });
    };
  } else {
      alert("Connettiti ad Internet");
  }};
};

var StinoRecovery = function() {
  if(PageAvaileble) {
  if (navigator.onLine) {
    var current_identity = document.getElementById("username-field").value;
    if (current_identity != "") {
        PageAvaileble = false; DisableAll();
        Backendless.UserService.restorePassword(current_identity).then(function() {
            alert("Email di recupero password correttamente spedta a " + current_identity);
            PageAvaileble = true; EnableAll();
        } ).catch(function(err) {
            if(err.code == 3020) {
                alert("Username inesistente");
                PageAvaileble = true; EnableAll();
            } else {
                alert("Errore, riprova");
                PageAvaileble = true; EnableAll();
            };
        });
    } else {
        PageAvaileble = true; EnableAll();
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
