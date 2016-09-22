// ilmovnino.tk Script v3.0
Backendless.enablePromises();

//Byte Converter
function formatBytes(bytes,decimals) {
   if(bytes == 0) return '0 Byte';
   var k = 1000; // or 1024 for binary
   var dm = decimals + 1 || 3;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
//Capitalizer
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
//Youtube Exrtactor
function ExtractVideoID(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if ( match && match[7].length == 11 ){
        return match[7];
    }else{
        return "err";
    }
};
function DetectMobile() { 
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){ return true; } else { return false; }
};
//Pseudo-Async
function async(fn, callback) {
    setTimeout(function() {
        fn();
        if(callback != undefined){callback()};
    }, 0);
};
// Faster?
try{document.addEventListener('touchstart', handler, { passive: true});}catch(err){};

// Global Variables
var loggedAt;
var ScriptLives = true;
var FeedLoaderAvaileble = true;
var SearchLoaderAvaileble = true;
var WikiSearchLoaderAvaileble = true;
var AnswersLoaderAvaileble = true;
var WikiLoaderAvaileble = true;
var Previous = [];
var PrevPage = "";
var LoggedUser;
var feedStorage = [];
  var tempFeed = {};
  var tempSearch = {};
  var tempAnswers = {};
var agendaStorage = [];
var timetableStorage = [];
var userStorage = [];
var openedHistory = [];
var wikiStorage = [];
  var tempWiki = {};
  var tempWikiSearch = {};
  var wikiInitialized = false;
var current_modified_object;
var searchOn = false;
var initialized = false;
var notOffline;
var piantinaHistory = [];
var piantinaMode = "Name";
var originalPiantina = "";
var changenameavaileble = true;
var blurwithcss = false;
var transmissionHistory = [];
var PingViewAvaileble = true;
var current_id;
var currentID;
var svgLoader = '<svg width="104px" height="104px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-spin" style="height: 30px;width: 30px;opacity: 0.6;display: block;/* display:none */position: absolute;left: 0;right: 0;margin: auto;"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g transform="translate(50 50)"><g transform="rotate(0) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.36008 1.36008)"><animate attributeName="opacity" from="1" to="0.1" begin="0s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(45) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.42008 1.42008)"><animate attributeName="opacity" from="1" to="0.1" begin="0.12s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.12s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(90) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.48508 1.48508)"><animate attributeName="opacity" from="1" to="0.1" begin="0.25s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.25s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(135) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.04508 1.04508)"><animate attributeName="opacity" from="1" to="0.1" begin="0.37s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.37s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(180) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.11008 1.11008)"><animate attributeName="opacity" from="1" to="0.1" begin="0.5s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.5s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(225) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.17008 1.17008)"><animate attributeName="opacity" from="1" to="0.1" begin="0.62s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.62s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(270) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.23508 1.23508)"><animate attributeName="opacity" from="1" to="0.1" begin="0.75s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.75s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(315) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff" transform="scale(1.29508 1.29508)"><animate attributeName="opacity" from="1" to="0.1" begin="0.87s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.87s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></g></svg>';
var neverAsked = true;

// Data Types
function Feed(args) {
    args = args || {};
    this.type = args.type || "";
    this.title = args.title || "";
    this.text = args.text || "";
    this.url = args.url || "";
    this.size = args.size || 0;
    this.author_username = args.author_username || "";
    this.author_fullname = args.author_fullname || "";
};
function Agenda(args) {
    args = args || {};
    this.type = args.type || "";
    this.title = args.title || "";
    this.text = args.text || "";
    this.data = args.data || "";
    this.subject = args.subject || "";
    this.check_svolgimento = args.check_svolgimento;
    this.check_media = args.check_media;
    this.val_type = args.val_type || "";
    this.start_hour = args.start_hour || "";
    this.start_min = args.start_min || "";
    this.end_hour = args.end_hour || "";
    this.end_min = args.end_min || "";
    this.place = args.place || "";
    this.quota = args.quota || 0;
    this.check_autorizzazione = args.check_autorizzazione;
    this.partecipanti = args.partecipanti || "";
    this.author_username = args.author_username || "";
    this.author_fullname = args.author_fullname || "";
};
function Timetable(args) {
    args = args || {};
    this.hour = args.hour || "";
    this.monday = args.monday || "";
    this.tuesday = args.tuesday || "";
    this.wednesday = args.wednesday || "";
    this.thursday = args.thursday || "";
    this.friday = args.friday || "";
    this.saturday = args.saturday || "";
};
function Piantina(args) {
    args = args || {};
    this.html = args.html || "";
};
function Wallpaper(args) {
    args = args || {};
    this.title = args.title || "";
    this.data = args.data || "";
};
function Visualizzazioni(args) {
    args = args || {};
    this.related_id = args.related_id || "";
    this.table = args.table || "";
};
function Modifiche(args) {
    args = args || {};
    this.related_id = args.related_id || "";
    this.table = args.table || "";
};
function Answers(args) {
    args = args || {};
    this.title = args.title || "";
    this.type = args.type || "";
    this.related_id = args.related_id || "";
    this.content = args.content || "";
};
function Wiki(args) {
    args = args || {};
    this.type = "Wiki";
    this.subject = args.subject || "";
    this.title = args.title || "";
    this.url = args.url || "";
    this.author_username = args.author_username || "";
    this.author_fullname = args.author_fullname || "";
};

// Start Function
var Start = function() {
    var valid_login = false;
    Backendless.UserService.isValidLogin().then(function(result){
        valid_login = result;
        if (valid_login) {
            var timeFinished = false; var loggedFinished = false; var usersFinished = false; var query = new Backendless.DataQuery(); query.options = {pageSize: 100, sortBy: "last_name"}; query.properties = ["name","first_name","ownerId","last_name","class","objectId","email","receiveFiles","registered"]; var hundred = new Backendless.DataQuery().options = {pageSize: 100}; Backendless.Persistence.of( Timetable ).find(hundred).then( function(result) { tempTimetable = result; timetableStorage = tempTimetable.data; try { localStorage.offlineTimetable = JSON.stringify(timetableStorage) } catch(err) {}; CreateOrario(); timeFinished = true; if(timeFinished && loggedFinished && usersFinished) { AddEventHashChange(); HashFunction(); loggedAt = new Date().getTime(); initialized = true; } }  ).catch( function(err) {  console.log(err)  } ); Backendless.Persistence.of( Backendless.User ).find(query).then( function(result) { tempUsers = result; userStorage = tempUsers.data; try { localStorage.offlineUsers = JSON.stringify(userStorage) } catch(err) {}; CreateClass(); usersFinished = true; if(timeFinished && loggedFinished && usersFinished) { AddEventHashChange(); HashFunction(); loggedAt = new Date().getTime(); initialized = true; } }  ).catch( function(err) {  console.log(err)  } ); Backendless.UserService.getCurrentUser().then( function(result) { LoggedUser = result; try { localStorage.offlineLoggedUser = JSON.stringify(LoggedUser) } catch(err) {}; document.getElementById("mm-fullName").innerHTML = LoggedUser.first_name + " " + LoggedUser.last_name;document.getElementById("greeting-message").innerHTML = "Ciao " + LoggedUser.first_name + " " + LoggedUser.last_name + "!";document.getElementById("set-name").innerHTML = LoggedUser.first_name;document.getElementById("set-surname").innerHTML = LoggedUser.last_name;document.getElementById("settings-username").innerHTML = LoggedUser.name;document.getElementById("settings-email").innerHTML = LoggedUser.email;document.getElementById("notify-file").checked = LoggedUser.receiveFiles; document.getElementById("awareness-check").checked = LoggedUser.awareness; ApplyWallpaper(LoggedUser.wallpaper_choice); console.log("%cil%cmov%cnino%c.tk", "color:black;font-size:5em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:bolder;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:bolder;font-family:NinoFont, Arial, sans-serif;opacity:0.7"); console.log("%cCiao " + LoggedUser.first_name + " " + LoggedUser.last_name + "!", "color:black;font-size:2em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7"); console.log("%cAttenzione! Questa è una funzionalità per sviluppatori, per qualsiasi problema o richiesta rivolgiti all'amministratore del sito","font-size:1.8em;font-weight:bolder;color:darkred;font-family:NinoFont, Arial, sans-serif;opacity:0.7"); if(LoggedUser.awareness) {var channel = "Awareness", callback = function (data) { var messagesArray = data["messages"]; ExecuteTransmission(messagesArray);}, subOps = new SubscriptionOptions({}); Backendless.Messaging.subscribe(channel, callback, subOps);}; loggedFinished = true; if(timeFinished && loggedFinished && usersFinished) { AddEventHashChange(); HashFunction(); loggedAt = new Date().getTime(); initialized = true; } } ).catch( function(err) { console.log(err) } ); try { localStorage.lastUpdated = "" + new Date() } catch(err) {}; EnableActivePiantina();ActivePiantina();
        } else {
            OneSignal.push(["setSubscription", false]);
            localStorage.clear();
            window.location = "login.html#from=" + location.hash.slice(1);
        };
    }).catch(function(err) {
        if ((localStorage.lastUpdated != "") && (localStorage.lastUpdated != undefined) && (localStorage.lastUpdated != null)) {
            try{openedHistory = JSON.parse(localStorage.openedHistory);} catch(e){};
            try{timetableStorage = JSON.parse(localStorage.offlineTimetable);} catch(e){};
            try{userStorage = JSON.parse(localStorage.offlineUsers);} catch(e){};
            try{LoggedUser = JSON.parse(localStorage.offlineLoggedUser);} catch(e){};
            document.getElementsByTagName("body")[0].innerHTML = '<div id="wallpaper"></div><div id="page-container"><div id="main-layer"><div class="nav-bar"><div class="top-nav" style="align-items: center;"><div id="main-button" style="margin-left:4%;"><div id="the-logo"></div><h1 id="bigH1"><span style="font-weight: 400">il</span><span style="font-weight: 700;">mov</span><span style="font-weight: 400">nino</span><span style="font-weight: 700;">.tk</span><span class="menuSymbol" style="color: transparent">▼</span></h1><h1 id="smallH1"><span style="font-weight: 400">i</span><span style="font-weight: 700;">m</span><span style="font-weight: 400">n</span><span class="menuSymbol" style="color: transparent">▼</span></h1><div id="offline-hint" style="display: block !important;">OFFLINE</div></div><img onclick="ShowReason()" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDkyIDkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MiA5MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxwYXRoIGQ9Ik00NS4zODYsMC4wMDRDMTkuOTgzLDAuMzQ0LTAuMzMzLDIxLjIxNSwwLjAwNSw0Ni42MTljMC4zNCwyNS4zOTMsMjEuMjA5LDQ1LjcxNSw0Ni42MTEsNDUuMzc3ICAgYzI1LjM5OC0wLjM0Miw0NS43MTgtMjEuMjEzLDQ1LjM4LTQ2LjYxNUM5MS42NTYsMTkuOTg2LDcwLjc4Ni0wLjMzNSw0NS4zODYsMC4wMDR6IE00NS4yNSw3NGwtMC4yNTQtMC4wMDQgICBjLTMuOTEyLTAuMTE2LTYuNjctMi45OTgtNi41NTktNi44NTJjMC4xMDktMy43ODgsMi45MzQtNi41MzgsNi43MTctNi41MzhsMC4yMjcsMC4wMDRjNC4wMjEsMC4xMTksNi43NDgsMi45NzIsNi42MzUsNi45MzcgICBDNTEuOTA0LDcxLjM0Niw0OS4xMjMsNzQsNDUuMjUsNzR6IE02MS43MDUsNDEuMzQxYy0wLjkyLDEuMzA3LTIuOTQzLDIuOTMtNS40OTIsNC45MTZsLTIuODA3LDEuOTM4ICAgYy0xLjU0MSwxLjE5OC0yLjQ3MSwyLjMyNS0yLjgyLDMuNDM0Yy0wLjI3NSwwLjg3My0wLjQxLDEuMTA0LTAuNDM0LDIuODhsLTAuMDA0LDAuNDUxSDM5LjQzbDAuMDMxLTAuOTA3ICAgYzAuMTMxLTMuNzI4LDAuMjIzLTUuOTIxLDEuNzY4LTcuNzMzYzIuNDI0LTIuODQ2LDcuNzcxLTYuMjg5LDcuOTk4LTYuNDM1YzAuNzY2LTAuNTc3LDEuNDEyLTEuMjM0LDEuODkzLTEuOTM2ICAgYzEuMTI1LTEuNTUxLDEuNjIzLTIuNzcyLDEuNjIzLTMuOTcyYzAtMS42NjUtMC40OTQtMy4yMDUtMS40NzEtNC41NzZjLTAuOTM5LTEuMzIzLTIuNzIzLTEuOTkzLTUuMzAzLTEuOTkzICAgYy0yLjU1OSwwLTQuMzExLDAuODEyLTUuMzU5LDIuNDc4Yy0xLjA3OCwxLjcxMy0xLjYyMywzLjUxMi0xLjYyMyw1LjM1djAuNDU3SDI3LjkzNmwwLjAyLTAuNDc3ICAgYzAuMjg1LTYuNzY5LDIuNzAxLTExLjY0Myw3LjE3OC0xNC40ODdDMzcuOTQ3LDE4LjkxOCw0MS40NDcsMTgsNDUuNTMxLDE4YzUuMzQ2LDAsOS44NTksMS4yOTksMTMuNDEyLDMuODYxICAgYzMuNiwyLjU5Niw1LjQyNiw2LjQ4NCw1LjQyNiwxMS41NTZDNjQuMzY5LDM2LjI1NCw2My40NzMsMzguOTE5LDYxLjcwNSw0MS4zNDF6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" style="opacity: 0.7;margin-right: 4%;cursor: pointer;height: 32px; width: 32px;"></div></div><div class="action-bar"><div id="ab-home" style="display: flex !important;font-size: 1em;height: 30px;text-transform: uppercase;"><div id="greeting-message" style="">Aggiornato al ' + ( '00' + new Date(localStorage.lastUpdated).getDate()).slice(-2) + '/' + ( '00' + ( new Date(localStorage.lastUpdated).getMonth() + 1 )).slice(-2) + '/' + new Date(localStorage.lastUpdated).getFullYear() + ' ' + ( '00' + new Date(localStorage.lastUpdated).getHours()).slice(-2) + ':' + ( '00' + new Date(localStorage.lastUpdated).getMinutes()).slice(-2) + '</div></div></div><div class="content"><div class="body"><div style="display: flex;align-items: center;opacity: 0.7;margin: 1em 0;margin-bottom: 0;"><div style="text-transform: uppercase;font-weight: bolder;margin-right: 1em;">Orario</div><div style="height: 1px;background-color: black;flex-grow: 2;"></div></div><div style="display: flex;overflow-x: scroll;-webkit-overflow-scrolling: touch;"><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Lunedì</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="lun1">' + timetableStorage[0].monday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="lun2">' + timetableStorage[1].monday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="lun3">' + timetableStorage[2].monday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="lun4">' + timetableStorage[3].monday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="lun5">' + timetableStorage[4].monday + '</div></div></div><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Martedì</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="mar1">' + timetableStorage[0].tuesday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="mar2">' + timetableStorage[1].tuesday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="mar3">' + timetableStorage[2].tuesday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="mar4">' + timetableStorage[3].tuesday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="mar5">' + timetableStorage[4].tuesday + '</div></div></div><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Mercoledì</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="mer1">' + timetableStorage[0].wednesday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="mer2">' + timetableStorage[1].wednesday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="mer3">' + timetableStorage[2].wednesday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="mer4">' + timetableStorage[3].wednesday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="mer5">' + timetableStorage[4].wednesday + '</div></div></div><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Giovedì</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="gio1">' + timetableStorage[0].thursday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="gio2">' + timetableStorage[1].thursday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="gio3">' + timetableStorage[3].thursday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="gio4">' + timetableStorage[3].thursday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="gio5">' + timetableStorage[4].thursday + '</div></div></div><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Venerdì</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="ven1">' + timetableStorage[0].friday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="ven2">' + timetableStorage[1].friday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="ven3">' + timetableStorage[2].friday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="ven4">' + timetableStorage[3].friday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="ven5">' + timetableStorage[4].friday + '</div></div></div><div class="cab-timetable" style="width: 80%;max-width: 25em;flex-shrink: 0;padding: 1em;"><div style="font-weight: lighter;font-size: 1.5em;">Sabato</div><div class="cabt-block"><div class="cabt-hour">1</div><div class="cabt-prof" id="sab1">' + timetableStorage[0].saturday + '</div></div><div class="cabt-block"><div class="cabt-hour">2</div><div class="cabt-prof" id="sab2">' + timetableStorage[1].saturday + '</div></div><div class="cabt-block"><div class="cabt-hour">3</div><div class="cabt-prof" id="sab3">' + timetableStorage[2].saturday + '</div></div><div class="cabt-block"><div class="cabt-hour">4</div><div class="cabt-prof" id="sab4">' + timetableStorage[3].saturday + '</div></div><div class="cabt-block"><div class="cabt-hour">5</div><div class="cabt-prof" id="sab5">' + timetableStorage[4].saturday + '</div></div></div></div></div><div class="body"><div style="display: flex;align-items: center;opacity: 0.7"><div style="text-transform: uppercase;font-weight: bolder;margin: 1em 0;margin-right: 1em;">Cronologia</div><div style="height: 1px;background-color: black;flex-grow: 2;"></div></div><div id="chb-body"></div></div></div></div><div id="over-layer"><div id="ol-content"></div></div></div><div style="display:none" id="load-fun"></div>'; location.hash = "offline"; HideAnything = function() { document.getElementById("main-layer").style.display = "none"; document.getElementById("over-layer").style.display = "none";document.getElementById("ol-content").style.display = "none"; document.getElementById("page-container").style.alignSelf = "center"; window.scroll(0,0);}; OnBack = function() {HideAnything();document.getElementById("main-layer").style.display = "block";}; for (ohitem = 0, ohimit = openedHistory.length; ohitem < ohimit; ohitem++) { var current_history = openedHistory[ohitem];var h_title = current_history.title;var h_detail = current_history.detail;var h_id = current_history.id;var h_link = current_history.link; if(current_history.element.type != "Wiki" && current_history.element.type != "Youtube" && current_history.element.type != "Domanda" ) { $("#chb-body").append('<a href="javascript:void(0)" onclick="LoadContent(' + ohitem + ')"><div class="chbb-left" style="max-width: initial;"><div class="chb-title" style="white-space: normal;text-overflow: initial;">' + h_title + '</div><div class="chb-details">' + h_detail + '</div></div></a>'); } }; ApplyWallpaper(null,true); HideAnything();document.getElementById("main-layer").style.display = "block";
        } else {
            // To Be Changed
            document.write("<h1>Errore nel caricare il sito: connettiti ad Internet</h1>");
        };
    });
};
function ShowReason() { alert("Non è stato possibile connettersi ad Internet, ma puoi comunque consultare l'orario e gli ultimi elementi aperti") }; 
// LogOut & Password Recovery
var LogOut = function() {
    OneSignal.push(["setSubscription", false]);
    localStorage.clear();
    Backendless.UserService.logout().then(function(){window.location = "login.html"}).catch(function(err){alert("Errore, riprova");console.log(err)})
};
var RequestStino = function() {
  if (navigator.onLine) {
    Backendless.UserService.getCurrentUser().then(function(result){
        var current_identity = result.name;
        Backendless.UserService.restorePassword(current_identity).then(function(){alert("Email di recupero password correttamente spedta a " + current_identity);LogOut();}).catch(function(err){ alert("Errore, riprova")});
    });
  } else {
      alert("Connettiti ad Internet");
  };
};

// Hash-Based Navigation
  // Load The Event Listener
var AddEventHashChange = function() {
    window.addEventListener("hashchange", function(event){
        if((Previous[0] != event.oldURL) && (PrevPage != event.oldURL)) { Previous.unshift(event.oldURL); PrevPage = ""; };
        HashFunction();
    });
};
  // Main Hash Function
var HashFunction = function() {
    notOffline = true;
    if (location.hash == "#home") {
        if ( jQuery.isEmptyObject(openedHistory) ) {
            CreateHome();
        };
        HideAnything();
        document.getElementById("navigate").value = "home";
        document.getElementById("main-layer").style.display = "block";
        document.getElementById("ab-home").style.display = "flex";
        document.getElementById("c-home").style.display = "block";
    } else if (location.hash == "#feed") {
        if ( jQuery.isEmptyObject(feedStorage) ) {
            document.getElementById("c-feed").innerHTML = '<span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span>';
            var ten = new Backendless.DataQuery().options = {pageSize: 10}; Backendless.Persistence.of( Feed ).find(ten).then( function(result) { document.getElementById("c-feed").innerHTML = '<div id="cf-load-more" class="c-loader" onclick="SetLoader' + "('feed');LoadNext('feed')" + ';"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>'; tempFeed = result; feedStorage = result.data; PushFeed(tempFeed.data); ResetLoader("feed"); try { localStorage.offlineFeed = JSON.stringify(feedStorage) } catch(err) {}; }).catch( function(err) { console.log(err) } );
        };
        HideAnything();
        document.getElementById("navigate").value = "feed";
        document.getElementById("main-layer").style.display = "block";
        document.getElementById("ab-feed").style.display = "block";
        if (document.getElementById("search-field").value == "") {
            document.getElementById("c-feed").style.display = "block";
        } else {
            document.getElementById("c-search").style.display = "block";
        };
        document.getElementById("page-container").style.alignSelf = "flex-start";
    } else if (location.hash == "#agenda") {
        if ( jQuery.isEmptyObject(agendaStorage) ) {
            CreateAgenda();
        };
        HideAnything();
        document.getElementById("navigate").value = "agenda";
        document.getElementById("main-layer").style.display = "block";
        document.getElementById("ab-agenda").style.display = "block";
        document.getElementById("c-agenda").style.display = "block";
    } else if (location.hash.slice(0, 8) == "#content") {
        LoadContent();
    } else if (location.hash.slice(0, 8) == "#publish") {
      if (navigator.onLine) {
        var source = location.hash.slice(9);
        HideAnything();
        $(".olh-publisher").css("display", "flex");
        $(".olh-editor").css("display", "none");
        document.getElementById("olp-body").innerHTML = '';
        document.getElementById("olp-body").className = "";
        $("#olp-body").css("height","");
        $("#ol-publish .ol-header").removeClass("wiki-creation-header");
        if ( source == "notizia") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/newspaper.svg"><div class="olh-title">Notizia</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('notizia')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea id="text-field" placeholder="Es. Sabato 23 Aprile la scuola sar&agrave; chiusa per una disinfestazione straordinaria"></textarea>';
        } else if ( source == "link") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/web-black.svg"><div class="olh-title">Link</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('link')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea id="text-field" placeholder="Commento"></textarea><input maxlength="500" type="url" id="url-field" placeholder="Es. http://ilmovnino.tk/">';
        } else if ( source == "file") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/file-black.svg"><div class="olh-title">File</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('file')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea id="text-field" placeholder="Commento"></textarea><!--<button class="overlay-button alone-button" onclick="">CARICA FILE</button>--><input type="file" id="file-field"><div class="form-hint">Il file deve pesare meno di 24 MB</div>';
        } else if ( source == "youtube") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/youtube.svg"><div class="olh-title">Youtube</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('youtube')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Commento"></textarea><input maxlength="500" type="url" id="url-field" placeholder="Es. https://youtu.be/uHVJ88wVKMI">';
        } else if ( source == "domanda") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/question-black.svg"><div class="olh-title">Domanda</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('domanda')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<textarea maxlength="500" id="text-field" placeholder="Es. Quando cominciano le lezioni?"></textarea>';
        } else if ( source == "compito") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/agenda.svg"><div class="olh-title">Compito</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('compito')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea id="text-field" placeholder="Es. P808 N121-122-123-124-125"></textarea><input type="text" id="date-field" placeholder="Data" readonly><label><input type="checkbox" id="CS-field">Controllo svolgimento</label>'; $( "#date-field" ).datepicker(); document.getElementById("date-field").value = document.getElementById("agenda-field").value;
        } else if ( source == "valutazione") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/test.svg"><div class="olh-title">Valutazione</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('valutazione')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea id="text-field" placeholder="Es. Dal Romanticismo a Samuel Taylor Coleridge"></textarea><input type="text" id="date-field" placeholder="Data" readonly><label><input type="checkbox" checked id="media-field">Fa media</label><form id="valutazione-type"><label><input name="valutazione-type" type="radio" value="scritta" checked>Scritta</label><label><input name="valutazione-type" type="radio" value="orale">Orale</label><label><input name="valutazione-type" type="radio" value="pratica">Pratica</label></form>'; $( "#date-field" ).datepicker(); document.getElementById("date-field").value = document.getElementById("agenda-field").value;
        } else if ( source == "volontario") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/people-black.svg"><div class="olh-title">Volontario</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('volontario')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea id="text-field" placeholder="Commento (opzionale)"></textarea><input type="text" id="date-field" placeholder="Data" readonly>'; $( "#date-field" ).datepicker(); document.getElementById("date-field").value = document.getElementById("agenda-field").value;
        } else if ( source == "evento") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/calendar-black.svg"><div class="olh-title">Evento</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('evento')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Dettagli (opzionale)"></textarea><input type="text" id="date-field" placeholder="Data" readonly><div class="multi-field"><div>Dalle</div><div class="mf-time"><select id="startH-field"><option selected disabled value="">HH</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select><div>:</div><select id="startM-field"><option selected disabled value="">MM</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select></div></div><div class="multi-field"><div>Alle</div><div class="mf-time"><select id="endH-field"><option selected disabled value="">HH</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select><div>:</div><select id="endM-field"><option selected disabled value="">MM</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select></div></div><input maxlength="500" type="text" id="place-field" placeholder="Luogo"><div class="multi-field"><div>Quota (&euro;)</div><input type="number" id="quota-field" placeholder="Es. 8"/></div><label><input type="checkbox" id="autorizzazione-field">Portare autorizzazione</label><div class="time-set-label">Partecipanti</div><label><input type="checkbox" id="0">Domenico Belfiore</input></label><label><input type="checkbox" id="1">Giuseppe Bosco</input></label><label><input type="checkbox" id="2">Mariacarla Castorina</input></label><label><input type="checkbox" id="3">Dario Caudullo</input></label><label><input type="checkbox" id="4">Giovanni Coppola</input></label><label><input type="checkbox" id="5">Marzia Costanzo</input></label><label><input type="checkbox" id="6">Giorgia D' + "'" + 'Aleo</input></label><label><input type="checkbox" id="7">Francesca Di Bella</input></label><label><input type="checkbox" id="8">Laura Forzese</input></label><label><input type="checkbox" id="9">Carolina Gabellone</input></label><label><input type="checkbox" id="10">Fabrizio Garipoli</input></label><label><input type="checkbox" id="11">Alessio Giordano</input></label><label><input type="checkbox" id="12">Giuseppe Gulisano</input></label><label><input type="checkbox" id="13">Vittorio Ingrassia</input></label><label><input type="checkbox" id="14">Greta Intelisano</input></label><label><input type="checkbox" id="15">Luigi La Cagnina</input></label><label><input type="checkbox" id="16">Ginevra Lalicata</input></label><label><input type="checkbox" id="17">Federico Mertoli</input></label><label><input type="checkbox" id="18">Marco Mille</input></label><label><input type="checkbox" id="19">Francesco Mirto</input></label><label><input type="checkbox" id="20">Alessandro Muzzetta</input></label><label><input type="checkbox" id="21">Chiara Nicolosi</input></label><label><input type="checkbox" id="22">Ginevra Papalia</input></label><label><input type="checkbox" id="23">Giorgia Puglisi</input></label><label><input type="checkbox" id="24">Elena Ragusa</input></label><label><input type="checkbox" id="25">Dalila Spadaro</input></label><label><input type="checkbox" id="26">Samuele Spampinato</input></label><label><input type="checkbox" id="27">Filippo Spezioli</input></label><label><input type="checkbox" id="28">Leonardo Tricomi</input></label>'; $( "#date-field" ).datepicker(); document.getElementById("date-field").value = document.getElementById("agenda-field").value;
        } else if ( source == "promemoria") {
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/bell.svg"><div class="olh-title">Promemoria</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('promemoria')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<textarea maxlength="21000" id="text-field" placeholder="Es. Allerta Meteo!"></textarea><input type="text" id="date-field" placeholder="Data" readonly>'; $( "#date-field" ).datepicker(); document.getElementById("date-field").value = document.getElementById("agenda-field").value;
        } else if ( source == "wiki") {
            $("#ol-publish .ol-header").addClass("wiki-creation-header"); $("#olp-body").css("height","100vh");
            document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/letter.svg"><div class="olh-title">Pagina</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('wiki')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<select id="subject" style="max-width: 42em;margin: auto;position: absolute;left: 0;right: 0;top: 5.8em;"><option value="materia" default="" disabled="" selected="">Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option><option value="altro">Altro</option></select><input maxlength="500" type="text" id="title-field" placeholder="Es. The Historical Novel" style="max-width: 42em;position: absolute;left: 0;right: 0;top: 7.8em;margin: auto;"><div id="wiki-html-view" contenteditable="" style="margin-top: 4em;overflow-y: scroll;margin-bottom: 53px!important;padding-bottom: 1em!important;"></div><div id="wet-link" class="wiki-edit-toolbar" style="display: none;"><div onclick="DoCommand(' + "'createlink'" + ')">Link...</div><div onclick="DoCommand(' + "'insertimage'" + ')">Immagine...</div></div><div id="wet-extra" class="wiki-edit-toolbar" style="display: none;"><div onclick="DoCommand(' + "'h1'" + ')">Titolo</div><div onclick="DoCommand(' + "'h3'" + ')">Intestazione</div><div onclick="DoCommand(' + "'p'" + ')">Corpo</div></div><div class="wiki-edit-toolbar"><div><img onclick="DoCommand(' + "'undo'" + ')" src="assets/icons/undo.svg"><img class="unnecessary" onclick="DoCommand(' + "'redo'" + ')" src="assets/icons/redo.svg"></div><div><img onclick="DoCommand(' + "'bold'" + ')" src="assets/icons/bold.svg"><img onclick="DoCommand(' + "'italic'" + ')" src="assets/icons/italic.svg"><img onclick="DoCommand(' + "'underline'" + ')" src="assets/icons/underline.svg"><img class="unnecessary" onclick="DoCommand(' + "'strikeThrough'" + ')" src="assets/icons/barrato.svg"></div><div class="unnecessary"><img onclick="DoCommand(' + "'justifyLeft'" + ')" src="assets/icons/left.svg"><img onclick="DoCommand(' + "'justifyCenter'" + ')" src="assets/icons/center.svg"><img onclick="DoCommand(' + "'justifyFull'" + ')" src="assets/icons/justify.svg"><img onclick="DoCommand(' + "'justifyRight'" + ')" src="assets/icons/right.svg"></div><div class="unnecessary"><img onclick="DoCommand(' + "'insertUnorderedList'" + ')" src="assets/icons/OLlist.svg"><img onclick="DoCommand(' + "'insertOrderedList'" + ')" src="assets/icons/ULlist.svg"></div><div><img id="text-type" src="assets/icons/fontsize.svg" onmouseenter="ShowExtraBar()" onmouseleave="HideExtraBar()"></div><div><img onmouseenter="ShowLinkBar()" onmouseleave="HideLinkBar()" src="assets/icons/paperclip.svg"></div></div>';
            document.getElementById("olp-body").className = "wiki-creation-body";
        };
        $("#olp-help").css("display", "block");
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-publish").style.display = "block";
      } else {
          alert("Connettiti ad Internet");
          OnBack();
      };
    } else if (location.hash.slice(0,5) == "#wiki") {
      var Subject = location.hash.slice(6);
      if(Subject == "") {
        if(!wikiInitialized) {
            document.getElementById("wiki-recent").innerHTML = '<div style="-webkit-filter: invert(100%);filter: invert(100%);height: 40px;">' + svgLoader;
            var five = new Backendless.DataQuery(); five.options = {pageSize: 5}; Backendless.Persistence.of( Wiki ).find(five).then( function(result) { document.getElementById("wiki-recent").innerHTML  = ""; wikiStorage = result.data.concat(wikiStorage); wikiInitialized = true; for(ww=0;ww<result.data.length;ww++) { $("#wiki-recent").append('<a href="#content=wiki&id=' + result.data[ww].objectId + '"><div class="wiki-recent">' + result.data[ww].title + '</div></a>')} } ).catch(function(e){document.getElementById("wiki-recent").innerHTML = "Errore, riprova"});
        };
        HideAnything();
        document.getElementById("navigate").value = "wiki";
        document.getElementById("main-layer").style.display = "block";
        document.getElementById("ab-wiki").style.display = "block";
        if (document.getElementById("search-wiki").value == "") {
            document.getElementById("c-wiki").style.display = "block";
        } else {
            document.getElementById("cw-search").style.display = "block";
        };
      } else { WikiGet(Subject) };
    } else if (location.hash == "#settings") {
      if (navigator.onLine) {
        HideAnything();
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-settings").style.display = "block";
      } else {
          alert("Connettiti ad Internet");
          OnBack();
      };
    } else if (location.hash == "#timetable") {
      if (navigator.onLine) {
        HideAnything();
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-timetable").style.display = "block";
      } else {
          alert("Connettiti ad Internet");
          OnBack();
      };
    } else if (location.hash == "#classroom") {
      if (navigator.onLine) {
        HideAnything();
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-classroom").style.display = "block";
      } else {
          alert("Connettiti ad Internet");
          OnBack();
      };
    } else if (location.hash.slice(0, 5) == "#info") {
        var source = location.hash.slice(6, location.hash.indexOf("&"));
        var currentID = location.hash.slice(location.hash.lastIndexOf("=") + 1);
        HideAnything();
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-info").style.display = "block";
        LoadInfo(source, currentID);
    } else if (location.hash.slice(0, 5) == "#edit") { 
      if (navigator.onLine) {
        var source = location.hash.slice(6, location.hash.indexOf("&"));
        var currentID = location.hash.slice(location.hash.lastIndexOf("=") + 1);
        HideAnything();
        $(".olh-publisher").css("display", "none");
        $(".olh-editor").css("display", "flex");
        document.getElementById("olp-body").innerHTML = '';
        $("#olp-help").css("display", "block");
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-publish").style.display = "block";
        document.getElementById("olp-body").innerHTML = '';
        document.getElementById("olp-body").className = "";
        $("#olp-body").css("height","");
        $("#ol-publish .ol-header").removeClass("wiki-creation-header");
        LoadEdit(source);
      } else {
          alert("Connettiti ad Internet");
          OnBack();
      };
    } else {
        location.hash = "home";
    };
};
  // Hide All UI Elements: used in HashFunction
var HideAnything = function() {
    document.getElementById("ab-home").style.display = "none";
    document.getElementById("ab-feed").style.display = "none";
    document.getElementById("ab-agenda").style.display = "none";
    document.getElementById("ab-wiki").style.display = "none";
    document.getElementById("c-home").style.display = "none";
    document.getElementById("c-feed").style.display = "none";
    document.getElementById("c-search").style.display = "none";
    document.getElementById("c-agenda").style.display = "none";
    document.getElementById("c-wiki").style.display = "none";
    document.getElementById("cw-search").style.display = "none";
    document.getElementById("main-layer").style.display = "none";
    document.getElementById("over-layer").style.display = "none";
    document.getElementById("load-layer").style.display = "none";
    document.getElementById("ol-publish").style.display = "none";
    document.getElementById("ol-wikiselect").style.display = "none";
    document.getElementById("ol-content").style.display = "none";
    document.getElementById("ol-settings").style.display = "none";
    document.getElementById("ol-timetable").style.display = "none";
    document.getElementById("ol-classroom").style.display = "none";
    document.getElementById("ol-info").style.display = "none";
    document.getElementById("banner-container").style.display = "block";
    if(location.hash.slice(0, 10) == "#edit=wiki" || location.hash.slice(0, 13) == "#publish=wiki"){ document.getElementById("banner-container").style.display = "none" };
    HidePiantina();
    if(location.hash.slice(0, 8) != "#content") {document.getElementById("ol-content").innerHTML = ""};
    if(location.hash.slice(0, 5) != "#edit" && location.hash.slice(0, 8) != "#publish") {document.getElementById("olp-body").innerHTML = ""};
    document.getElementById("wikiAlertEditButton").style.display = "none";
    $("#main-button").removeClass("openedMainMenu");
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("page-container").style.alignSelf = "center";
    document.getElementById("page-container").style.backgroundColor = "rgba(255, 255, 255, 0.54902)";
    $(".ol-header").css("filter",""); $(".ol-header").css("-webkit-filter","");
    $(".olc-buttons").css("filter",""); $(".olc-buttons").css("-webkit-filter","");
    $(".ol-body").css("color","");
    window.scroll(0,0);
};
  // Navigation
var OnNavigate = function() {
    var section = document.getElementById("navigate").value;
    if (section == "home") {
        location.hash = "home";
    } else if (section == "feed") {
        location.hash = "feed";
    } else if (section == "agenda") {
        location.hash = "agenda";
    } else if (section == "wiki") {
        location.hash = "wiki";
    };
};
var toggleMainMenu = function() {
    $( "#main-menu" ).fadeToggle(50);
    $( "#main-button" ).toggleClass("openedMainMenu");
};
var OnBack = function() {
    PrevPage = location.href;
    if ( !jQuery.isEmptyObject(Previous) ) {
        document.getElementById("main-menu").style.display = "none";
        var savedPrevious = Previous[0];
        Previous.splice(0,1);
        location = savedPrevious;
    } else {
        location.hash = "home";
    }
};
  // Content: Main Function Used in HashFunction
var LoadContent = function(offline) {
    function CreateContent(Storage) {
        for (var item = 0, item_limit=Storage.length; item < item_limit; item++) {
            var current_item_id = Storage[item].objectId;
            var owner_here = false;
            if ((currentID == current_item_id) || (offline != null)) {
                var current_item = Storage[item];
                var current_author = current_item.ownerId;
                var author_string = "ilmovnino.tk";
                for (var cu_index = 0, cu_index_limit=userStorage.length; cu_index < cu_index_limit; cu_index++) {
                    var current_user = userStorage[cu_index];
                    if (current_author == current_user.ownerId) {
                        author_string = current_user.first_name + " " + current_user.last_name;
                    };
                    if (current_author == LoggedUser.ownerId) {
                        owner_here = true;
                    };
                };
                var current_millisecond = current_item.created;
                var current_time = new Date(current_millisecond);
                var current_day = current_time.getDate();
                var current_month = current_time.getMonth() + 1;
                switch (current_month) {
                    case 1: current_month = "Gennaio"; break;
                    case 2: current_month = "Febbraio"; break;
                    case 3: current_month = "Marzo"; break;
                    case 4: current_month = "Aprile"; break;
                    case 5: current_month = "Maggio"; break;
                    case 6: current_month = "Giugno"; break;
                    case 7: current_month = "Luglio"; break;
                    case 8: current_month = "Agosto"; break;
                    case 9: current_month = "Settembre"; break;
                    case 10: current_month = "Ottobre"; break;
                    case 11: current_month = "Novembre"; break;
                    case 12: current_month = "Dicembre"; break;
                };
                var current_year = current_time.getFullYear();
                var current_creationDate = current_day + " " + current_month + " " + current_year;
                var current_hours =  current_time.getHours();
                var current_minutes =  current_time.getMinutes();
                current_hours = current_hours.toString();
                current_minutes = current_minutes.toString();
                if (current_hours.length === 1) {
                    current_hours = "0" + current_hours;
                };
                if (current_minutes.length === 1) {
                    current_minutes = "0" + current_minutes;
                };
                var current_creationTime = current_hours + ":" + current_minutes;
                var current_id = current_item.objectId;
                var current_type = current_item.type;
                var historyTitle, historyLink, historyDetail = current_type + " da " + author_string + " del " + current_creationDate;
                var olContent_incipit = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a>';
                var database_name = location.hash.slice(9, location.hash.indexOf("&"));
                var editButton = '<a href="#edit=' + database_name + '&id=' + current_id + '"><img src="assets/icons/edit.svg" onclick=""></a>';
                var infoButton = '<a href="#info=' + database_name + '&id=' + current_id + '"><img src="assets/icons/info.svg" style="height: 2em;width: 2em;"  onclick=""></a>';
                if (offline == null) {
                    if (database_name == "feed" && current_type != "Domanda") {
                        if (owner_here) {
                            var modifyBar = '<div class="olc-buttons">' + editButton + infoButton + '</div>';
                        } else {
                            var modifyBar = '<div class="olc-buttons">' + infoButton + '</div>';
                        };
                    } else if (database_name == "agenda" && current_type != "Volontario") {
                        var modifyBar = '<div class="olc-buttons">' + editButton + infoButton + '</div>';
                    } else if (current_type == "Volontario") {
                        if (owner_here) {
                            var modifyBar = '<div class="olc-buttons">' + editButton + infoButton + '</div>';
                        } else {
                            var modifyBar = '<div class="olc-buttons">' + infoButton + '</div>';
                        };
                    } else if (current_type == "Domanda") {
                        if (owner_here) {
                            var modifyBar = '<div class="olc-buttons olcb-answers"><a href="#edit=' + database_name + '&id=' + current_id + '">MODIFICA</a><a href="#info=' + database_name + '&id=' + current_id + '">INFORMAZIONI</a>';
                        } else {
                            var modifyBar = '<div class="olc-buttons olcb-answers"><a href="#info=' + database_name + '&id=' + current_id + '">INFORMAZIONI</a>';
                        };
                    };
                } else {
                    var modifyBar = '';
                };
                if (current_type == "Notizia") {
                    var current_title = current_item.title;
                    historyTitle = current_title;
                    historyLink = "#content=feed&id=" + current_id;
                    var current_text = current_item.text;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_title + '</div><div class="olc-content">' + current_text + '</div></div>';
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if(current_type == "Youtube") {
                    var current_title = current_item.title;
                    historyTitle = current_title;
                    historyLink = "#content=feed&id=" + current_id;
                    var current_text = current_item.text;
                    var current_url = current_item.url;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><iframe onload="LoadYoutubeBackground()" allowfullscreen src="http://www.youtube.com/embed/' + current_url + '?showinfo=0&amp;rel=0&amp;modestbranding=1&amp;iv_load_policy=3&amp;hl=it&amp;disablekb=1" class="olc-youtube"></iframe><div class="olc-title">' + current_title + '</div><div class="olc-content">' + current_text + '</div></div>';
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if(current_type == "Domanda") {
                    var current_title = current_item.title;
                    historyTitle = current_title;
                    historyLink = "#content=feed&id=" + current_id;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_title + '</div></div>';
                    $( "#ol-content .ol-body" ).append(modifyBar);  $( "#ol-content .ol-body" ).append('<div class="olc-answer"><input id="olca-text" type="text" placeholder="Scrivi qualcosa..." oninput="OnAnswerType()" onkeypress="return EnterInAnswers(event,' + "'" + current_id + "'" + ',' + "'" + current_item.author_username + "'" + ')"><div style="height: 100%"><img onclick="EnterInFile()" src="assets/icons/attach-black.svg" title="Allega massimo 5MB" id="olca-draft"><input type="file" id="fileAnswer" onchange="SendFileAnswer(' + "'" + current_id + "'" + ',' + "'" + current_item.author_username + "'" + ')" style="display:none"/><div onclick="SendTextAnswer(' + "'" + current_id + "'" + ',' + "'" + current_item.author_username + "'" + ')" id="olca-send" style="display: none;">Invia</div></div></div><div id="olc-answers"><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>');
                    LoadAnswers(current_id);
                } else if (current_type == "Compito") {
                    var current_subject = current_item.subject;
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    historyTitle = "Compito di " + current_subject;
                    historyLink = "#content=agenda&id=" + current_id;
                    var current_text = current_item.text;
                    var current_date = current_item.data;
                    var current_checkS = current_item.check_svolgimento;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_subject + '</div><div class="content-hint"><img src="assets/icons/agenda.svg" class="content-hint-pic"><div class="content-hint-text">Bisogna fare</div></div><div class="content-info">' + current_text + '</div><div class="content-hint"><img src="assets/icons/calendar-black.svg" class="content-hint-pic"><div class="content-hint-text">Per il</div></div><div class="content-info">' + current_date + '</div></div>';
                    if (current_checkS) {
                        $( "#ol-content .ol-body" ).append( '<div class="content-hint"><img src="assets/icons/warning.svg" class="content-hint-pic"><div class="content-hint-text">Attenzione!</div></div><div class="content-info">Controllo dello svolgimento</div>' );
                    };
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if (current_type == "Volontario") {
                    var current_subject = current_item.subject;
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    current_subject = "Volontario di " + current_subject;
                    historyTitle = current_subject;
                    historyLink = "#content=agenda&id=" + current_id;
                    var current_text = current_item.text;
                    var current_date = current_item.data;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_subject + '</div><div class="olc-content">' + current_text + '</div><div class="content-hint"><img src="assets/icons/calendar-black.svg" class="content-hint-pic"><div class="content-hint-text">Per il</div></div><div class="content-info">' + current_date + '</div></div>';
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if (current_type == "Valutazione") {
                    var current_subject = current_item.subject;
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    current_subject = "Valutazione di " + current_subject;
                    historyTitle = current_subject;
                    historyLink = "#content=agenda&id=" + current_id;
                    var current_text = current_item.text;
                    var current_date = current_item.data;
                    var current_checkM = current_item.check_media;
                    var current_valType = current_item.val_type;
                    current_valType = current_valType.capitalizeFirstLetter();
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_subject + '</div><div class="olc-content">' + current_text + '</div><div class="content-hint"><img src="assets/icons/calendar-black.svg" class="content-hint-pic"><div class="content-hint-text">Per il</div></div><div class="content-info">' + current_date + '</div><div class="content-hint"><img src="assets/icons/edit.svg" class="content-hint-pic"><div class="content-hint-text">Tipologia</div></div><div class="content-info">' + current_valType + '</div></div>';
                    if (current_checkM) {
                        $( "#ol-content .ol-body" ).append( '<div class="content-hint"><img src="assets/icons/warning.svg" class="content-hint-pic"><div class="content-hint-text">Attenzione!</div></div><div class="content-info">Fa Media</div>' );
                    };
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if (current_type == "Promemoria") {
                    var current_text = current_item.text;
                    var current_date = current_item.data;
                    historyTitle = current_text;
                    historyLink = "#content=agenda&id=" + current_id;
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_text + '</div><div class="content-hint"><img src="assets/icons/calendar-black.svg" class="content-hint-pic"><div class="content-hint-text">Per il</div></div><div class="content-info">' + current_date + '</div></div>';
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if (current_type == "Evento") {
                    var current_title = current_item.title;
                    historyTitle = current_title;
                    historyLink = "#content=agenda&id=" + current_id;
                    var current_text = current_item.text;
                    var current_date = current_item.data;
                    var current_startEnd = current_item.start_hour + ":" + current_item.start_min + " - " + current_item.end_hour + ":" + current_item.end_min;
                    var current_place = current_item.place;
                    var current_quota = current_item.quota;
                    if (current_quota === 0) {
                        current_quota = "Gratis";
                    } else {
                        current_quota = "&euro;" + current_quota;
                    };
                    if (current_item.check_autorizzazione) {
                        current_quota = current_quota + " + Autorizzazione";
                    };
                    document.getElementById("ol-content").innerHTML = olContent_incipit + '<div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">' + author_string + '</div></div><div class="author-extradetail">' + current_creationDate + " " + current_creationTime + '</div></div></div></div><div class="ol-body"><div class="olc-title">' + current_title + '</div><div class="olc-content">' + current_text + '</div><div class="content-hint"><img src="assets/icons/location-black.svg" class="content-hint-pic"><div class="content-hint-text">Luogo</div></div><div class="content-info">' + current_place + '</div><div class="content-hint"><img src="assets/icons/calendar-black.svg" class="content-hint-pic"><div class="content-hint-text">Giorno</div></div><div class="content-info">' + current_date + '</div><div class="content-hint"><img src="assets/icons/clock.svg" class="content-hint-pic content-hint-clock"><div class="content-hint-text">Orario</div></div><div class="content-info">' + current_startEnd + '</div><div class="content-hint"><img src="assets/icons/money.svg" class="content-hint-pic"><div class="content-hint-text">Bisogna portare</div></div><div class="content-info">' + current_quota + '</div></div>';
                    var current_partecipanti = current_item.partecipanti;
                    var current_numOfAttendees = 0;
                    $( "#ol-content .ol-body" ).append( '<div class="content-hint"><img src="assets/icons/people-black.svg" class="content-hint-pic"><div id="content-partecipanti-hint" class="content-hint-text">Partecipanti</div></div><label><input type="checkbox" id="0">Domenico Belfiore</input></label><label><input type="checkbox" id="1">Giuseppe Bosco</input></label><label><input type="checkbox" id="2">Mariacarla Castorina</input></label><label><input type="checkbox" id="3">Dario Caudullo</input></label><label><input type="checkbox" id="4">Giovanni Coppola</input></label><label><input type="checkbox" id="5">Marzia Costanzo</input></label><label><input type="checkbox" id="6">Giorgia D' + "'" + 'Aleo</input></label><label><input type="checkbox" id="7">Francesca Di Bella</input></label><label><input type="checkbox" id="8">Laura Forzese</input></label><label><input type="checkbox" id="9">Carolina Gabellone</input></label><label><input type="checkbox" id="10">Fabrizio Garipoli</input></label><label><input type="checkbox" id="11">Alessio Giordano</input></label><label><input type="checkbox" id="12">Giuseppe Gulisano</input></label><label><input type="checkbox" id="13">Vittorio Ingrassia</input></label><label><input type="checkbox" id="14">Greta Intelisano</input></label><label><input type="checkbox" id="15">Luigi La Cagnina</input></label><label><input type="checkbox" id="16">Ginevra Lalicata</input></label><label><input type="checkbox" id="17">Federico Mertoli</input></label><label><input type="checkbox" id="18">Marco Mille</input></label><label><input type="checkbox" id="19">Francesco Mirto</input></label><label><input type="checkbox" id="20">Alessandro Muzzetta</input></label><label><input type="checkbox" id="21">Chiara Nicolosi</input></label><label><input type="checkbox" id="22">Ginevra Papalia</input></label><label><input type="checkbox" id="23">Giorgia Puglisi</input></label><label><input type="checkbox" id="24">Elena Ragusa</input></label><label><input type="checkbox" id="25">Dalila Spadaro</input></label><label><input type="checkbox" id="26">Samuele Spampinato</input></label><label><input type="checkbox" id="27">Filippo Spezioli</input></label><label><input type="checkbox" id="28">Leonardo Tricomi</input></label>' );
                    for (var attendee = 0, attendee_limit=current_partecipanti.length; attendee < attendee_limit; attendee++) {
                        var attendee_id = attendee;
                        $("#" + attendee_id).attr("disabled", true);
                        if (current_partecipanti[attendee] === "1") {
                            current_numOfAttendees = current_numOfAttendees + 1;
                            document.getElementById(attendee_id).checked = true;
                        };
                    };
                    document.getElementById("content-partecipanti-hint").innerText = current_numOfAttendees + " Partecipanti";
                    $( "#ol-content .ol-body" ).append(modifyBar);
                } else if (current_type == "Wiki") {
                    var current_title = current_item.title;
                    var current_nwp = current_item.url.slice(1,-1);
                    historyTitle = current_title;
                    historyLink = "#content=wiki&id=" + current_id;
                    document.getElementById("ol-content").innerHTML = '<div class="ol-header wiki-creation-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-publisher" style="display: flex;"><div class="olh-content"><a href="javascript:void(0)" style="margin: 0 0.5em"><img title="Puoi avere una versione più aggiornata della pagina" id="wikiAlertButton" onclick="UpdateReadWiki()" class="olh-pic" src="assets/icons/alert.svg" style="height:1.6em;width:1.6em;display:none"></a><a href="javascript:void(0)" style="margin: 0 0.6em"><img title="Stampa" onclick="PrintWiki()" class="olh-pic" src="assets/icons/printer.svg"></a><a href="#edit=wiki&id=' + current_id + '"><img title="Modifica" class="olh-pic" src="assets/icons/edit.svg" style="margin: 0 0.6em"></a><a href="#info=wiki&id=' + current_id + '" style="margin: 0 0.6em"><img title="Informazioni" class="olh-pic" src="assets/icons/info.svg"></a></div></div></div><div class="ol-body"><div class="wiki-creation-body"><div id="wiki-html-view"><div style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</div></div></div></div>';
                    var xhr = new XMLHttpRequest(); xhr.open("GET", current_nwp, true); xhr.onload = function () { if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == current_id) { document.getElementById("wiki-html-view").innerHTML = decodeURIComponent(xhr.responseText) } }; xhr.onerror = function (e) {}; xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken); xhr.send();
                } else if (current_type == "File" || current_type == "Link") {
                    var current_url = current_item.url;
                    OnBack();
                    window.location = current_url;
                };
                // Ping View
                try{PingView(current_id,source)}catch(e){};
                // Push into history
                if(offline==null) {
                var alreadyThere = false;
                var incriminatedIndex = 0;
                for (hitem = 0, himit = openedHistory.length; hitem < himit; hitem++) {
                    var current_hitem = openedHistory[hitem];
                    var current_hitem_id = current_hitem.id;
                    if (current_hitem_id == current_id) {
                        alreadyThere = true;
                        incriminatedIndex = hitem;
                    };
                };
                if (alreadyThere) {
                    openedHistory.splice(incriminatedIndex, 1);
                    openedHistory.unshift( {"title": historyTitle, "detail": historyDetail, "id": current_id, "link": historyLink, "element" : current_item } );
                } else {
                    openedHistory.unshift( {"title": historyTitle, "detail": historyDetail, "id": current_id, "link": historyLink, "element" : current_item } );
                };
                localStorage.openedHistory = JSON.stringify(openedHistory);
                if(notOffline) {CreateHome()};};
                is404 = false;
            };
        };
    };
    if(offline==null){
        var source = location.hash.slice(9, location.hash.indexOf("&"));
        var currentID = location.hash.slice(location.hash.lastIndexOf("=") + 1);
        var is404 = true;
        switch (source) {
            case "feed": CreateContent(feedStorage); break;
            case "agenda": CreateContent(agendaStorage); break;
            case "wiki": CreateContent(wikiStorage); break;
        };
        if (is404) {
        document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">Carico...</div></div></div></div></div><div style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</div>';
        HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";
        switch (source) {
            case "feed": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Feed/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); if(is404){document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
            case "agenda": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Agenda/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); if(is404){document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";};}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { if(is404){document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
            case "wiki": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Wiki/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); if(is404){document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";};}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { if(is404){document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
            };
        } else {
            HideAnything();
            document.getElementById("over-layer").style.display = "flex";
            document.getElementById("ol-content").style.display = "block";
        };
    } else {
        CreateContent([openedHistory[parseInt(offline)].element]);
        HideAnything();
        document.getElementById("over-layer").style.display = "flex";
        document.getElementById("ol-content").style.display = "block";
    };
};
var LoadYoutubeBackground = function() {
    document.getElementById("page-container").style.backgroundColor = "rgba(0, 0, 0, 0.74902)";
    $(".ol-header").css("filter","invert()"); $(".ol-header").css("-webkit-filter","invert()");
    $(".olc-buttons").css("filter","invert()"); $(".olc-buttons").css("-webkit-filter","invert()");
    $(".ol-body").css("color","rgba(255,255,255,0.7)");
};
  // Edit: Load Function Used in HashFunction
var LoadEdit = function(source) {
    var currentID = location.hash.slice(location.hash.lastIndexOf("=") + 1);
    var is404 = true;
    function CreateContent(Storage) {
        for (var item = 0, item_limit=Storage.length; item < item_limit; item++) {
            var current_item_id = Storage[item].objectId;
            if (currentID == current_item_id) {
                var current_item = Storage[item];
                current_modified_object = current_item;
                var current_id = current_item.objectId;
                var current_type = current_item.type;
                if (current_type == "Notizia") {
                    document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Es. Sabato 23 Aprile la scuola sar&agrave; chiusa per una disinfestazione straordinaria"></textarea><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'feed'" + ')">Elimina</div></a></div>';
                    document.getElementById("title-field").value = current_item.title;
                    document.getElementById("text-field").value = current_item.text;
                } else if (current_type == "Link") {
                    document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Commento"></textarea><input type="url" id="url-field" placeholder="Es. http://ilmovnino.tk/"><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'feed'" + ')">Elimina</div></a></div>';
                    document.getElementById("title-field").value = current_item.title;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("url-field").value = current_item.url;
                } else if (current_type == "Youtube") {
                    document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Commento"></textarea><input type="url" id="url-field" placeholder="Es. https://youtu.be/uHVJ88wVKMI"><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'feed'" + ')">Elimina</div></a></div>';
                    document.getElementById("title-field").value = current_item.title;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("url-field").value = "https://youtu.be/" + current_item.url;
                }if (current_type == "Domanda") {
                    document.getElementById("olp-body").innerHTML = '<textarea maxlength="500" id="text-field" placeholder="Es. Quando cominciano le lezioni?"></textarea><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'feed'" + ')">Elimina</div></a></div>';
                    document.getElementById("text-field").value = current_item.title;
                } else if (current_type == "Compito") {
                    document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea maxlength="21000" id="text-field" placeholder="Es. P808 N121-122-123-124-125"></textarea><input type="text" id="date-field" placeholder="Data" readonly><label><input type="checkbox" id="CS-field">Controllo svolgimento</label><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'agenda'" + ')">Elimina</div></a></div>';
                    $( "#date-field" ).datepicker();
                    document.getElementById("subject").value = current_item.subject;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("date-field").value = current_item.data;
                    document.getElementById("CS-field").checked = current_item.check_svolgimento;
                } else if (current_type == "Volontario") {
                    document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea maxlength="21000" id="text-field" placeholder="Commento (opzionale)"></textarea><input type="text" id="date-field" placeholder="Data" readonly><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'agenda'" + ')">Elimina</div></a></div>';
                    $( "#date-field" ).datepicker();
                    document.getElementById("subject").value = current_item.subject;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("date-field").value = current_item.data;
                } else if (current_type == "Valutazione") {
                    document.getElementById("olp-body").innerHTML = '<select id="subject"><option value="materia" default disabled selected>Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option></select><textarea maxlength="21000" id="text-field" placeholder="Es. Dal Romanticismo a Samuel Taylor Coleridge"></textarea><input type="text" id="date-field" placeholder="Data" readonly><label><input type="checkbox" id="media-field">Fa media</label><form id="valutazione-type"><label><input name="valutazione-type" type="radio" value="scritta" checked>Scritta</label><label><input name="valutazione-type" type="radio" value="orale">Orale</label><label><input name="valutazione-type" type="radio" value="pratica">Pratica</label></form><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'agenda'" + ')">Elimina</div></a></div>';
                    $( "#date-field" ).datepicker();
                    document.getElementById("subject").value = current_item.subject;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("date-field").value = current_item.data;
                    document.getElementById("media-field").checked = current_item.check_media;
                    if (current_item.val_type == "scritta") {
                        document.getElementById("valutazione-type")[0].checked = true;
                    } else if (current_item.val_type == "orale") {
                        document.getElementById("valutazione-type")[1].checked = true;
                    } else if (current_item.val_type == "pratica") {
                        document.getElementById("valutazione-type")[2].checked = true;
                    };
                } else if (current_type == "Promemoria") {
                    document.getElementById("olp-body").innerHTML = '<textarea maxlength="21000" id="text-field" placeholder="Es. Allerta Meteo!"></textarea><input type="text" id="date-field" placeholder="Data" readonly><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement()">Elimina</div></a></div>';
                    $( "#date-field" ).datepicker();
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("date-field").value = current_item.data;
                } else if (current_type == "Evento") {
                    document.getElementById("olp-body").innerHTML = '<input maxlength="500" type="text" id="title-field" placeholder="Titolo"><textarea maxlength="21000" id="text-field" placeholder="Dettagli (opzionale)"></textarea><input type="text" id="date-field" placeholder="Data" readonly><div class="multi-field"><div>Dalle</div><div class="mf-time"><select id="startH-field"><option selected disabled value="">HH</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select><div>:</div><select id="startM-field"><option selected disabled value="">MM</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select></div></div><div class="multi-field"><div>Alle</div><div class="mf-time"><select id="endH-field"><option selected disabled value="">HH</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option></select><div>:</div><select id="endM-field"><option selected disabled value="">MM</option><option value="00">00</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option><option value="37">37</option><option value="38">38</option><option value="39">39</option><option value="40">40</option><option value="41">41</option><option value="42">42</option><option value="43">43</option><option value="44">44</option><option value="45">45</option><option value="46">46</option><option value="47">47</option><option value="48">48</option><option value="49">49</option><option value="50">50</option><option value="51">51</option><option value="52">52</option><option value="53">53</option><option value="54">54</option><option value="55">55</option><option value="56">56</option><option value="57">57</option><option value="58">58</option><option value="59">59</option></select></div></div><input maxlength="500" type="text" id="place-field" placeholder="Luogo"><div class="multi-field"><div>Quota (&euro;)</div><input type="number" id="quota-field" placeholder="Es. 8"/></div><label><input type="checkbox" id="autorizzazione-field">Portare autorizzazione</label><div class="time-set-label">Partecipanti</div><label><input type="checkbox" id="0">Domenico Belfiore</input></label><label><input type="checkbox" id="1">Giuseppe Bosco</input></label><label><input type="checkbox" id="2">Mariacarla Castorina</input></label><label><input type="checkbox" id="3">Dario Caudullo</input></label><label><input type="checkbox" id="4">Giovanni Coppola</input></label><label><input type="checkbox" id="5">Marzia Costanzo</input></label><label><input type="checkbox" id="6">Giorgia D' + "'" + 'Aleo</input></label><label><input type="checkbox" id="7">Francesca Di Bella</input></label><label><input type="checkbox" id="8">Laura Forzese</input></label><label><input type="checkbox" id="9">Carolina Gabellone</input></label><label><input type="checkbox" id="10">Fabrizio Garipoli</input></label><label><input type="checkbox" id="11">Alessio Giordano</input></label><label><input type="checkbox" id="12">Giuseppe Gulisano</input></label><label><input type="checkbox" id="13">Vittorio Ingrassia</input></label><label><input type="checkbox" id="14">Greta Intelisano</input></label><label><input type="checkbox" id="15">Luigi La Cagnina</input></label><label><input type="checkbox" id="16">Ginevra Lalicata</input></label><label><input type="checkbox" id="17">Federico Mertoli</input></label><label><input type="checkbox" id="18">Marco Mille</input></label><label><input type="checkbox" id="19">Francesco Mirto</input></label><label><input type="checkbox" id="20">Alessandro Muzzetta</input></label><label><input type="checkbox" id="21">Chiara Nicolosi</input></label><label><input type="checkbox" id="22">Ginevra Papalia</input></label><label><input type="checkbox" id="23">Giorgia Puglisi</input></label><label><input type="checkbox" id="24">Elena Ragusa</input></label><label><input type="checkbox" id="25">Dalila Spadaro</input></label><label><input type="checkbox" id="26">Samuele Spampinato</input></label><label><input type="checkbox" id="27">Filippo Spezioli</input></label><label><input type="checkbox" id="28">Leonardo Tricomi</input></label><div class="cfb-footer delete-footer"><a href="javascript:void(0);"><div class="cfb-button delete-button" onclick="DeleteElement(' + "'agenda'" + ')">Elimina</div></a></div>';
                    $( "#date-field" ).datepicker();
                    document.getElementById("title-field").value = current_item.title;
                    document.getElementById("text-field").value = current_item.text;
                    document.getElementById("date-field").value = current_item.data;
                    document.getElementById("startH-field").value = current_item.start_hour;
                    document.getElementById("startM-field").value = current_item.start_min;
                    document.getElementById("endH-field").value = current_item.end_hour;
                    document.getElementById("endM-field").value = current_item.end_min;
                    document.getElementById("place-field").value = current_item.place;
                    document.getElementById("quota-field").value = current_item.quota;
                    document.getElementById("autorizzazione-field").checked = current_item.check_autorizzazione;
                    var current_partecipanti = current_item.partecipanti;
                    for (var attendee = 0, attendee_limit=current_partecipanti.length; attendee < attendee_limit; attendee++) {
                        var attendee_id = attendee;
                        if (current_partecipanti[attendee] === "1") {
                            document.getElementById(attendee_id).checked = true;
                        };
                    };
                } else if (current_type == "Wiki") {
                    var current_title = current_item.title;
                    var current_subject = current_item.subject;
                    var current_nwp = current_item.url.slice(1,-1);
                    historyTitle = current_title;
                    historyLink = "#content=wiki&id=" + current_id;
                    $("#ol-publish .ol-header").addClass("wiki-creation-header"); $("#olp-body").css("height","100vh");
                    document.getElementById("publish-header").innerHTML = '<div class="olh-content" id="publish-header"><img class="olh-pic" src="assets/icons/letter.svg"><div class="olh-title">Pagina</div><a href="javascript:void(0);" class="confirm-arrow"><img class="olh-button olhb-reverse" src="assets/icons/arrow-black.svg" onclick="OnPublish' + "('wiki')" + ';"></a></div>'; document.getElementById("olp-body").innerHTML = '<select id="subject" style="max-width: 42em;margin: auto;position: absolute;left: 0;right: 0;top: 5.8em;"><option value="materia" default="" disabled="" selected="">Materia</option><option value="matematica">Matematica</option><option value="inglese">Inglese</option><option value="italiano">Italiano</option><option value="storia">Storia</option><option value="fiosofia">Filosofia</option><option value="latino">Latino</option><option value="scienze">Scienze</option><option value="fisica">Fisica</option><option value="arteDisegno">Arte e disegno</option><option value="scienzeMotorie">Educazione Fisica</option><option value="altro">Altro</option></select><input maxlength="500" type="text" id="title-field" placeholder="Es. The Historical Novel" style="max-width: 42em;position: absolute;left: 0;right: 0;top: 7.8em;margin: auto;"><div id="wiki-html-view" contenteditable="" style="margin-top: 4em;overflow-y: scroll;margin-bottom: 53px!important;padding-bottom: 1em!important;"><div style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</div></div><div id="wet-link" class="wiki-edit-toolbar" style="display: none;"><div onclick="DoCommand(' + "'createlink'" + ')">Link...</div><div onclick="DoCommand(' + "'insertimage'" + ')">Immagine...</div></div><div id="wet-extra" class="wiki-edit-toolbar" style="display: none;"><div onclick="DoCommand(' + "'h1'" + ')">Titolo</div><div onclick="DoCommand(' + "'h3'" + ')">Intestazione</div><div onclick="DoCommand(' + "'p'" + ')">Corpo</div></div><div class="wiki-edit-toolbar"><div><img onclick="DoCommand(' + "'undo'" + ')" src="assets/icons/undo.svg"><img class="unnecessary" onclick="DoCommand(' + "'redo'" + ')" src="assets/icons/redo.svg"></div><div><img onclick="DoCommand(' + "'bold'" + ')" src="assets/icons/bold.svg"><img onclick="DoCommand(' + "'italic'" + ')" src="assets/icons/italic.svg"><img onclick="DoCommand(' + "'underline'" + ')" src="assets/icons/underline.svg"><img class="unnecessary" onclick="DoCommand(' + "'strikeThrough'" + ')" src="assets/icons/barrato.svg"></div><div class="unnecessary"><img onclick="DoCommand(' + "'justifyLeft'" + ')" src="assets/icons/left.svg"><img onclick="DoCommand(' + "'justifyCenter'" + ')" src="assets/icons/center.svg"><img onclick="DoCommand(' + "'justifyFull'" + ')" src="assets/icons/justify.svg"><img onclick="DoCommand(' + "'justifyRight'" + ')" src="assets/icons/right.svg"></div><div class="unnecessary"><img onclick="DoCommand(' + "'insertUnorderedList'" + ')" src="assets/icons/OLlist.svg"><img onclick="DoCommand(' + "'insertOrderedList'" + ')" src="assets/icons/ULlist.svg"></div><div><img id="text-type" src="assets/icons/fontsize.svg" onmouseenter="ShowExtraBar()" onmouseleave="HideExtraBar()"></div><div><img onmouseenter="ShowLinkBar()" onmouseleave="HideLinkBar()" src="assets/icons/paperclip.svg"></div></div>';
                    document.getElementById("title-field").value = current_title;
                    document.getElementById("subject").value = current_subject;
                    document.getElementById("olp-body").className = "wiki-creation-body";
                    var xhr = new XMLHttpRequest(); xhr.open("GET", current_nwp, true); xhr.onload = function () { if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == current_id) { document.getElementById("wiki-html-view").innerHTML = decodeURIComponent(xhr.responseText) } }; xhr.onerror = function (e) {}; xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken); xhr.send();
                };
                is404 = false;
            };
        };
    };
    switch (source) {
        case "feed": CreateContent(feedStorage); break;
        case "agenda": CreateContent(agendaStorage); break;
        case "wiki": CreateContent(wikiStorage); break;
    };
    if (is404) {
        HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";
        document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div class="content-author"><div class="ct-author-profile"></div><div class="ct-author-name">Carico...</div></div></div></div></div><div style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</div>';
        switch (source) {
            case "feed": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Feed/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); if(is404){Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
            case "agenda": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Agenda/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-publish").style.display = "block"; if(is404){Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';};}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { if(is404){ Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
            case "wiki": var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Wiki/' + currentID;xhr.onload = function() {var result = [JSON.parse(xhr.responseText)]; if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { CreateContent(result); HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-publish").style.display = "block"; if(is404){Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';};}};xhr.onerror = function (e) {console.error(xhr.statusText); if(location.hash.slice(location.hash.lastIndexOf("=") + 1) == currentID) { if(is404){ Previous = [];HideAnything();document.getElementById("over-layer").style.display = "flex";document.getElementById("ol-content").style.display = "block";document.getElementById("ol-content").innerHTML = '<div class="ol-header"><a href="javascript:void(0);"><img class="olh-button" src="assets/icons/arrow-black.svg" onclick="OnBack();"></a><div class="olh-separator"></div><div class="olh-content olh-content-center"><div class="content-metadata"><div style="font-size: 3em; letter-spacing: 0.2em;">404 :(</div></div></div></div><div class="ol-body"><div class="404-message" style="text-align: center; font-size: 2em; font-weight: 200; margin: 5% 10%;">Elemento non trovato. Prova a ricaricare la pagina</div></div>';};}};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null); break;
        };
    };
};
  // Info: Load Function Used in HashFunction
var LoadInfo = function(source,id) {
    document.getElementById("view-title").innerText = "Carico...";
    document.getElementById("edit-body").innerText = "Carico...";
    document.getElementById("view-count").innerText = "Visualizzazioni";
    document.getElementById("view-body").innerText = "Carico...";
    function ThenFirstInfo(result) { for(i=0;i<result.data.length;i++){var current_element = result.data[i]; var current_time = current_element.created; for(h=0;h<userStorage.length;h++){if(userStorage[h].ownerId == current_element.ownerId){ var user_title = userStorage[h].first_name + " " + userStorage[h].last_name; var user_time = '' + ( '00' + new Date(current_time).getDate()).slice(-2) + '/' + ( '00' + ( new Date(current_time).getMonth() + 1 )).slice(-2) + '/' + new Date(current_time).getFullYear(); document.getElementById("view-title").innerText = current_element.type + " da " + user_title + " del " + user_time; }}}; };
    // Basic Info
    switch(source) {
        case "feed": var query = new Backendless.DataQuery(); query.condition = "objectId = '" + id + "'";  query.properties = ["type","ownerId","created"]; Backendless.Persistence.of( Feed ).find(query).then(function(result){ThenFirstInfo(result)}).catch(function(e){document.getElementById("view-title").innerText = "Errore!";});break;
        case "agenda": var query = new Backendless.DataQuery(); query.condition = "objectId = '" + id + "'";  query.properties = ["type","ownerId","created"]; Backendless.Persistence.of( Agenda ).find(query).then(function(result){ThenFirstInfo(result)}).catch(function(e){document.getElementById("view-title").innerText = "Errore!";});break;
        case "wiki": var query = new Backendless.DataQuery(); query.condition = "objectId = '" + id + "'";  query.properties = ["title","created","subject"]; Backendless.Persistence.of( Wiki ).find(query).then(function(result){document.getElementById("view-title").innerText = 'Pagina "' + result.data[0].title + '" del ' + ( '00' + new Date(result.data[0].created).getDate()).slice(-2) + '/' + ( '00' + ( new Date(result.data[0].created).getMonth() + 1 )).slice(-2) + '/' + new Date(result.data[0].created).getFullYear() + ", " + result.data[0].subject.capitalizeFirstLetter();}).catch(function(e){document.getElementById("view-title").innerText = "Errore!";});break;
    };
    // Edits
    var query = new Backendless.DataQuery(); query.condition = "related_id = '" + id + "' AND table = '" + source + "'"; query.options = {pageSize: 100}; query.properties = ["ownerId"];
    Backendless.Persistence.of( Modifiche ).find(query).then(function(result){ document.getElementById("edit-body").innerHTML = ""; var edit_count = 0; for(i=0;i<result.data.length;i++){var current_viewer = result.data[i].ownerId; for(h=0;h<userStorage.length;h++){if(userStorage[h].ownerId == current_viewer){ edit_count += 1; var user_title = userStorage[h].first_name + " " + userStorage[h].last_name; $("#edit-body").append('<div class="view-block"><div class="chb-title">' + user_title + '</div><div class="chb-details"></div></div>'); }}}; var edit_hintText = " Autori"; if(edit_count == 1) {edit_hintText = " Autore"}; document.getElementById("edit-count").innerText = "" + edit_count + edit_hintText;}).catch(function(err){document.getElementById("edit-body").innerText = "Errore, riprova";});
    // Views
    var query = new Backendless.DataQuery(); query.condition = "related_id = '" + id + "' AND table = '" + source + "'"; query.options = {pageSize: 100, sortBy: "updated"}; query.properties = ["ownerId"];
    Backendless.Persistence.of( Visualizzazioni ).find(query).then(function(result){ document.getElementById("view-body").innerHTML = ""; var view_count = 0; for(i=0;i<result.data.length;i++){var current_viewer = result.data[i].ownerId; for(h=0;h<userStorage.length;h++){if(userStorage[h].ownerId == current_viewer){ view_count += 1; var user_title = userStorage[h].first_name + " " + userStorage[h].last_name; $("#view-body").append('<div class="view-block"><div class="chb-title">' + user_title + '</div><div class="chb-details"></div></div>'); }}}; var view_hintText = " Visualizzazioni"; if(view_count == 1) {view_hintText = " Visualizzazione"}; document.getElementById("view-count").innerText = "" + view_count + view_hintText;}).catch(function(err){document.getElementById("view-body").innerText = "Errore, riprova";});
};
  // Answers: Load Function used in LoadContent
var LoadAnswers = function(id) {
    var query = new Backendless.DataQuery(); query.condition = "related_id = '" + id + "'"; query.options = {pageSize: 15}; query.properties = ["type","content","ownerId","created","title","objectId"];
    Backendless.Persistence.of( Answers ).find(query).then(function(result){ document.getElementById("olc-answers").innerHTML = '<div id="as-load-more" class="c-loader" onclick="SetLoader' + "('answers');LoadNext('answers')" + ';"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>';tempAnswers = result; PushAnswers(result.data, "Prepend"); if (tempAnswers.nextPage == null) { AnswersLoaderAvaileble = false; $( "#as-load-more" ).remove(); }; }).catch(function(err){document.getElementById("olc-answers").innerText = "Errore, riprova";});
};

var LoadNext = function(table) {
    switch(table) {
        case "feed": tempFeed.nextPage().then(function(result){tempFeed=result;feedStorage=result.data.concat(feedStorage);PushFeed(result.data);ResetLoader("feed");}).catch(function(err){console.log(err);ResetLoader("feed");}); break;
        case "search": tempSearch.nextPage().then(function(result){tempSearch=result;feedStorage=result.data.concat(feedStorage);PushFeed(result.data,"SearchBef");ResetLoader("search");}).catch(function(err){console.log(err);ResetLoader("search");}); break;
        case "wiki-search": tempWikiSearch.nextPage().then(function(result){tempWikiSearch=result;wikiStorage=result.data.concat(wikiStorage);PushWikiSearch(result.data);ResetLoader("wiki-search");}).catch(function(err){console.log(err);ResetLoader("wiki-search");}); break;
        case "answers": tempAnswers.nextPage().then(function(result){tempAnswers=result;PushAnswers(result.data);ResetLoader("answers");}).catch(function(err){console.log(err);ResetLoader("answers");}); break;
        case "wiki": tempWiki.nextPage().then(function(result){ tempWiki=result; if(location.hash.slice(6) != "tutti") { for(ww=0;ww<result.data.length;ww++) { if(document.getElementById(result.data[ww].title.slice(0,1).toUpperCase()) == null ) { $("#WikiGetBody").append('<div id="' + result.data[ww].title.slice(0,1).toUpperCase() + '" style="font-size:2.5em;">' + result.data[ww].title.slice(0,1).toUpperCase() + '</div>') }; $("#WikiGetBody").append('<a href="#content=wiki&id=' + result.data[ww].objectId + '"><div class="wiki-recent">' + result.data[ww].title + '</div></a>')}; } else {for(ww=0;ww<result.data.length;ww++) { var headerMese; switch(new Date(result.data[ww].created).getMonth()) { case 0: headerMese = "Gennaio"; break; case 1: headerMese = "Febbraio"; break; case 2: headerMese = "Marzo"; break; case 3: headerMese = "Aprile"; break;case 4: headerMese = "Maggio"; break;case 5: headerMese = "Giugno"; break;case 6: headerMese = "Gennaio"; break;case 7: headerMese = "Agosto"; break;case 8: headerMese = "Settembre"; break;case 9: headerMese = "Ottobre"; break;case 10: headerMese = "Novembre"; break;case 11: headerMese = "Dicembre"; break; }; var timeId = '' + ( '00' + new Date(result.data[ww].created).getDate()).slice(-2) + ' ' + ( '00' + ( new Date(result.data[ww].created).getMonth() + 1 )).slice(-2) + '/' + new Date(result.data[ww].created).getFullYear(); var timeText = '' + ( '00' + new Date(result.data[ww].created).getDate()).slice(-2) + ' ' + headerMese + ' ' + new Date(result.data[ww].created).getFullYear(); if(document.getElementById(timeId) == null ) { $("#WikiGetBody").append('<div id="' + timeId + '" style="font-size:2.5em;">' + timeText + '</div>') }; $("#WikiGetBody").append('<a href="#content=wiki&id=' + "'" + result.data[ww].objectId + "'" + '"><div class="wiki-recent">' + result.data[ww].title + '</div></a>')};}; ResetLoader("wiki");}).catch(function(err){console.log(err);ResetLoader("answers");}); break;
    };
};
// Loader
$(window).scroll(function() {
    if (location.hash == "#feed") {
        if(document.getElementById("search-field").value == "") {
            if(FeedLoaderAvaileble) {
                var top_of_element = $("#cf-load-more").offset().top;
                var bottom_of_screen = $(window).scrollTop() + $(window).height();
                if(bottom_of_screen > top_of_element){
                    SetLoader("feed"); LoadNext("feed");
                };
            };
        } else {
            if(SearchLoaderAvaileble) {
                var top_of_element = $("#cs-load-more").offset().top;
                var bottom_of_screen = $(window).scrollTop() + $(window).height();
                if(bottom_of_screen > top_of_element){
                    SetLoader("search"); LoadNext("search");
                };
            };
        };
    } else if (location.hash.slice(0, 8) == "#content") {
        if(AnswersLoaderAvaileble) {
            var top_of_element = $("#as-load-more").offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            if(bottom_of_screen > top_of_element){
                SetLoader("answers"); LoadNext("answers");
            };
        };
    } else if (location.hash == "#wiki") {
      if(document.getElementById("search-wiki").value != "") {
        if(WikiSearchLoaderAvaileble) {
            var top_of_element = $("#cws-load-more").offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            if(bottom_of_screen > top_of_element){
                SetLoader("wiki-search"); LoadNext("wiki-search");
            };
        };
      };
    } else if (location.hash.slice(0, 6) == "#wiki=") {
        if(WikiLoaderAvaileble) {
            var top_of_element = $("#ws-load-more").offset().top;
            var bottom_of_screen = $(window).scrollTop() + $(window).height();
            if(bottom_of_screen > top_of_element){
                SetLoader("wiki"); LoadNext("wiki");
            };
        };
    };
});
var SetLoader = function(table) {
    switch(table) {
        case "feed": FeedLoaderAvaileble = false; $("#cf-load-more div").css("display", "none"); $("#cf-load-more img").css("display", "none"); $("#cf-load-more svg").css("display", "block"); break;
        case "search": SearchLoaderAvaileble = false; $("#cs-load-more div").css("display", "none"); $("#cs-load-more img").css("display", "none"); $("#cs-load-more svg").css("display", "block"); break;
        case "wiki-search": WikiSearchLoaderAvaileble = false; $("#cws-load-more div").css("display", "none"); $("#cws-load-more img").css("display", "none"); $("#cws-load-more svg").css("display", "block"); break;
        case "answers": AnswersLoaderAvaileble = false; $("#as-load-more div").css("display", "none"); $("#as-load-more img").css("display", "none"); $("#as-load-more svg").css("display", "block"); break;
        case "wiki": WikiLoaderAvaileble = false; $("#ws-load-more div").css("display", "none"); $("#ws-load-more img").css("display", "none"); $("#ws-load-more svg").css("display", "block"); break;
    };
}
var ResetLoader = function(table) {
    switch(table) {
        case "feed": FeedLoaderAvaileble = true; $("#cf-load-more div").css("display", "block"); $("#cf-load-more img").css("display", "block"); $("#cf-load-more svg").css("display", "none"); if (tempFeed.nextPage == null) { FeedLoaderAvaileble = false; $( "#cf-load-more" ).remove(); }; break;
        case "search": SearchLoaderAvaileble = true; $("#cs-load-more div").css("display", "block"); $("#cs-load-more img").css("display", "block"); $("#cs-load-more svg").css("display", "none"); if (tempSearch.nextPage == null) { SearchLoaderAvaileble = false; $( "#cs-load-more" ).remove(); }; break;
        case "wiki-search": WikiSearchLoaderAvaileble = true; $("#cws-load-more div").css("display", "block"); $("#cws-load-more img").css("display", "block"); $("#cws-load-more svg").css("display", "none"); if (tempWikiSearch.nextPage == null) { WikiSearchLoaderAvaileble = false; $( "#cws-load-more" ).remove(); }; break;
        case "answers": AnswersLoaderAvaileble = true; $("#as-load-more div").css("display", "block"); $("#as-load-more img").css("display", "block"); $("#as-load-more svg").css("display", "none"); if (tempAnswers.nextPage == null) { AnswersLoaderAvaileble = false; $( "#as-load-more" ).remove(); }; break;
        case "wiki": WikiLoaderAvaileble = true; $("#ws-load-more div").css("display", "block"); $("#ws-load-more img").css("display", "block"); $("#ws-load-more svg").css("display", "none"); if (tempWiki.nextPage == null) { WikiLoaderAvaileble = false; $( "#ws-load-more" ).remove(); }; break;
    };
};

// Pages Script
  //Feed
    // Create the Feed
var PushFeed = function(Storage, Direction) {
    for (var item = 0, item_limit=Storage.length; item < item_limit; item++) {
        var current_item = Storage[item];
        var current_author = current_item.ownerId;
        var author_string = "ilmovnino.tk";
        var editElement = "";
        var editFile = "";
        var current_id = current_item.objectId;
        for (var cu_index = 0, cu_index_limit=userStorage.length; cu_index < cu_index_limit; cu_index++) {
            var current_user = userStorage[cu_index];
            if (current_author == current_user.ownerId) {
                author_string = current_user.first_name + " " + current_user.last_name;
            };
            if (current_author == LoggedUser.ownerId) {
                editElement = '<a href="#edit=feed&id=' + current_id + '"><div class="cfbh-edit"></div></a>';
                if (current_item.type == "File") {
                    var current_url = current_item.url.replace("files//", "files/");
                    editFile = '<a href="javascript:void(0);" onclick="DeleteFile(' + "'" + current_url + "'" + ', ' + "'" + current_id + "'" + ')"><div class="cfbh-delete"></div></a>';
                };
            };
        };
        var current_millisecond = current_item.created;
        var current_time = new Date(current_millisecond);
        var current_day = current_time.getDate();
        var current_month = current_time.getMonth() + 1;
        current_month = current_month.toString();
        current_day = current_day.toString();
        if (current_month.length === 1) {
            current_month = "0" + current_month;
        };
        if (current_day.length === 1) {
            current_day = "0" + current_day;
        };
        var current_4digitYear = current_time.getFullYear();
        var current_year = current_4digitYear.toString().substr(2,2);
        var current_creationDate = current_day + "/" + current_month + "/" + current_year;
        var current_hours =  current_time.getHours();
        var current_minutes =  current_time.getMinutes();
        current_hours = current_hours.toString();
        current_minutes = current_minutes.toString();
        if (current_hours.length === 1) {
            current_hours = "0" + current_hours;
        };
        if (current_minutes.length === 1) {
            current_minutes = "0" + current_minutes;
        };
        var current_creationTime = current_hours + ":" + current_minutes;
        var current_type = current_item.type;
        if (current_type == "Notizia") {
            var current_title = current_item.title;
            var current_text = current_item.text;
            if (current_text.length > 300) {
                current_text = current_text.slice(0, 300) + "...";
            };
            var element = '<div id="' + current_id + '" class="cf-block cf-notizia"><div class="cfb-header"><div class="cfbh-left"><div class="cfbh-pic cfbh-news"></div><div class="cfbh-name">' + author_string + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div>' + editElement + '</div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div><div class="cfb-content">' + current_text + '</div></div><div class="cfb-footer"><a href="#content=feed&id=' + current_id + '"><div class="cfb-button">Apri</div></a></div></div>';
            if ( Direction == "Prepend" ) {
                $( "#c-feed" ).prepend( element );
            } else if ( Direction == "Replace" ) {
                $( "#" + current_id ).replaceWith( element );
            } else if ( Direction == "Search" ) {
                $( "#c-search" ).prepend( element );
            } else if ( Direction == "SearchBef" ) {
                $( "#cs-load-more" ).before( element );
            } else {
                $( "#cf-load-more" ).before( element );
            };
        } else if (current_type == "Link") {
            var current_title = current_item.title;
            var current_text = current_item.text;
            var current_url = current_item.url;
            var element = '<div id="' + current_id + '" class="cf-block cf-link"><div class="cfb-header"><div class="cfbh-left"><div class="cfbh-pic cfbh-link"></div><div class="cfbh-name">' + author_string + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div>' + editElement + '</div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div><div class="cfb-content">' + current_text + '</div><div class="cfb-info">' + current_url + '</div></div><div class="cfb-footer"><a target="_blank" href="' + current_url + '"><div class="cfb-button">Naviga</div></a></div></div>';
            if ( Direction == "Prepend" ) {
                $( "#c-feed" ).prepend( element );
            } else if ( Direction == "Replace" ) {
                $( "#" + current_id ).replaceWith( element );
            } else if ( Direction == "Search" ) {
                $( "#c-search" ).prepend( element );
            } else if ( Direction == "SearchBef" ) {
                $( "#cs-load-more" ).before( element );
            } else {
                $( "#cf-load-more" ).before( element );
            };
        } else if (current_type == "File") {
            var current_title = current_item.title;
            var current_text = current_item.text;
            var current_url = current_item.url.replace("files//", "files/");
            var current_size = current_item.size;
            var current_extension = current_url.slice(current_url.lastIndexOf(".") + 1).toUpperCase();
            current_size = formatBytes(current_size);
            var element = '<div id="' + current_id + '" class="cf-block cf-file"><div class="cfb-header"><div class="cfbh-left"><div class="cfbh-pic cfbh-file"></div><div class="cfbh-name">' + author_string + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div>' + editFile + '</div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div><div class="cfb-content">' + current_text + '</div><div class="cfb-info">' + current_extension + " da " + current_size + '</div></div><div class="cfb-footer"><a target="_blank" href="' + current_url + '"><div class="cfb-button">Scarica</div></a></div></div>';
            if ( Direction == "Prepend" ) {
                $( "#c-feed" ).prepend( element );
            } else if ( Direction == "Search" ) {
                $( "#c-search" ).prepend( element );
            } else if ( Direction == "SearchBef" ) {
                $( "#cs-load-more" ).before( element );
            } else {
                $( "#cf-load-more" ).before( element );
            }
        } else if (current_type == "Youtube") {
            var current_title = current_item.title;
            var current_text = current_item.text;
            var element = '<div id="' + current_id + '" class="cf-block cf-link"><div class="cfb-header"><div class="cfbh-left"><div class="cfbh-pic cfbh-youtube"></div><div class="cfbh-name">' + author_string + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div>' + editElement + '</div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div><div class="cfb-content">' + current_text + '</div></div><div class="cfb-footer"><a href="#content=feed&id=' + current_id + '"><div class="cfb-button">Guarda</div></a></div></div>';
            if ( Direction == "Prepend" ) {
                $( "#c-feed" ).prepend( element );
            } else if ( Direction == "Replace" ) {
                $( "#" + current_id ).replaceWith( element );
            } else if ( Direction == "Search" ) {
                $( "#c-search" ).prepend( element );
            } else if ( Direction == "SearchBef" ) {
                $( "#cs-load-more" ).before( element );
            } else {
                $( "#cf-load-more" ).before( element );
            };
        } else if (current_type == "Domanda") {
            var current_title = current_item.title;
            var element = '<div id="' + current_id + '" class="cf-block cf-notizia"><div class="cfb-header"><div class="cfbh-left"><div class="cfbh-pic cfbh-ask"></div><div class="cfbh-name">' + author_string + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div>' + editElement + '</div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div></div><div class="cfb-footer"><a href="#content=feed&id=' + current_id + '"><div class="cfb-button">Apri</div></a></div></div>';
            if ( Direction == "Prepend" ) {
                $( "#c-feed" ).prepend( element );
            } else if ( Direction == "Replace" ) {
                $( "#" + current_id ).replaceWith( element );
            } else if ( Direction == "Search" ) {
                $( "#c-search" ).prepend( element );
            } else if ( Direction == "SearchBef" ) {
                $( "#cs-load-more" ).before( element );
            } else {
                $( "#cf-load-more" ).before( element );
            };
        };
    };
};
  // Wiki Search
var PushWikiSearch = function(Storage, Direction) {
    for (var item = 0, item_limit=Storage.length; item < item_limit; item++) {
        var current_item = Storage[item];
        var current_id = current_item.objectId;
        var current_subject = current_item.subject;
        var current_title = current_item.title;
        var current_millisecond = current_item.created;
        var current_time = new Date(current_millisecond);
        var current_day = current_time.getDate();
        var current_month = current_time.getMonth() + 1;
        current_month = current_month.toString();
        current_day = current_day.toString();
        if (current_month.length === 1) {
            current_month = "0" + current_month;
        };
        if (current_day.length === 1) {
            current_day = "0" + current_day;
        };
        var current_4digitYear = current_time.getFullYear();
        var current_year = current_4digitYear.toString().substr(2,2);
        var current_creationDate = current_day + "/" + current_month + "/" + current_year;
        var current_hours =  current_time.getHours();
        var current_minutes =  current_time.getMinutes();
        current_hours = current_hours.toString();
        current_minutes = current_minutes.toString();
        if (current_hours.length === 1) {
            current_hours = "0" + current_hours;
        };
        if (current_minutes.length === 1) {
            current_minutes = "0" + current_minutes;
        };
        var current_creationTime = current_hours + ":" + current_minutes;
        switch(current_subject) {
            case "italiano": var iconString = 'style="background: url(assets/icons/literature.svg)"';break;case "matematica": var iconString = 'style="background: url(assets/icons/math.svg)"';break;case "inglese": var iconString = 'style="background: url(assets/icons/united-kingdom.svg)"';break;case "storia": var iconString = 'style="background: url(assets/icons/history.svg)"';break;case "filosofia": var iconString = 'style="background: url(assets/icons/philosophy.svg)"';break;case "latino": var iconString = 'style="background: url(assets/icons/latin.svg)"';break;case "artedisegno": var iconString = 'style="background: url(assets/icons/art.svg)"';break;case "fisica": var iconString = 'style="background: url(assets/icons/physics.svg)"';break;case "scienze": var iconString = 'style="background: url(assets/icons/science.svg)"';break;case "educazionefisica": var iconString = 'style="background: url(assets/icons/sport.svg)"';break;case "religione": var iconString = 'style="background: url(assets/icons/religion.svg)"';break;default: var iconString = 'style="background: url(assets/icons/letter.svg)"';break;
        };
        var element = '<div id="' + current_id + '" class="cf-block cf-notizia"><div class="cfb-header"><div class="cfbh-left"><div ' + iconString + ' class="cfbh-pic"></div><div class="cfbh-name">' + current_subject + '</div></div><div class="cfbh-right"><div class="cfbh-date">' + current_creationDate + '</div><div class="cfbh-time">' + current_creationTime + '</div><a href="#edit=wiki&id=' + current_id + '"><div class="cfbh-edit"></div></a></div></div><div class="cfb-body"><div class="cfb-title">' + current_title +'</div></div><div class="cfb-footer"><a href="#content=wiki&id=' + current_id + '"><div class="cfb-button">Apri</div></a></div></div>';
        if ( Direction == "Prepend" ) {
            $( "#cw-search" ).prepend( element );
        } else {
            $( "#cws-load-more" ).before( element );
        };
    };
}
  // Answers
var PushAnswers = function(Storage, Direction) {
    if(Direction != null){Storage = Storage.reverse()};
    for (var PA = 0;PA < Storage.length; PA++) {
        var current_answer = Storage[PA];
        var current_id = current_answer.objectId;
        var current_author = current_answer.ownerId;
        var author_string = "ilmovnino.tk";
        for (var cu_index = 0, cu_index_limit=userStorage.length; cu_index < cu_index_limit; cu_index++) {
            var current_user = userStorage[cu_index];
            if (current_author == current_user.ownerId) {
                author_string = current_user.first_name + " " + current_user.last_name;
            };
        };
        var answer_time =  ( '00' + new Date(current_answer.created).getDate()).slice(-2) + '/' + ( '00' + ( new Date(current_answer.created).getMonth() + 1 )).slice(-2) + '/' + new Date(current_answer.created).getFullYear() + ' ' + ( '00' + new Date(current_answer.created).getHours()).slice(-2) + ':' + ( '00' + new Date(current_answer.created).getMinutes()).slice(-2);
        if(current_answer.type == "Text") {
            var element = '<div class="olca-answer" id="' + current_id + '"><div class="olca-header"><div class="olca-author">' + author_string + '</div><div class="olca-detail">' + answer_time + '</div></div><div class="olca-body">' + current_answer.content + '</div></div>';
        } else if (current_answer.type == "File") {
            var element = '<div class="olca-answer" id="' + current_id + '"><div class="olca-header"><div class="olca-author">' + author_string + '</div><div class="olca-detail">' + answer_time + '</div></div><div class="olca-body"><a target="_blank" href="' + current_answer.content + '"><div class="olca-file"><img src="assets/icons/file-black.svg"><div>' + current_answer.title + '</div></div></a></div></div>';
        } else { var element = ''; };
        if ( Direction == "Prepend" ) {
            $( "#olc-answers" ).prepend( element );
        } else {
            $( "#as-load-more" ).before( element );
        };
    };
};

  //Agenda
var agendaNext = function() {
    var date = $('#agenda-field').datepicker('getDate');
    date.setTime(date.getTime() + (1000*60*60*24))
    $('#agenda-field').datepicker("setDate", date);
    CreateAgenda();
};

var agendaPrev = function() {
    var date = $('#agenda-field').datepicker('getDate');
    date.setTime(date.getTime() - (1000*60*60*24))
    $('#agenda-field').datepicker("setDate", date);
    CreateAgenda();
};
var CreateAgenda = function() {
    var current_input = document.getElementById("agenda-field").value;
    if (current_input == "") {
        var today_date = new Date, today_day = today_date.getDate(), today_month = today_date.getMonth() + 1, today_year = today_date.getFullYear();
        today_day = today_day.toString();
        today_month = today_month.toString();
        if (today_month.length === 1) {
            today_month = "0" + today_month;
        };
        if (today_day.length === 1) {
            today_day = "0" + today_day;
        };
        document.getElementById("agenda-field").value = today_day + "/" + today_month + "/" + today_year;
        current_input = current_input = document.getElementById("agenda-field").value;
    };
    current_input = current_input.slice(3,5) + "/" + current_input.slice(0,2) + current_input.slice(5);
    var agenda_date = new Date(current_input);
    var agenda_day = agenda_date.getDay();
    for (var item = 0, item_limit=timetableStorage.length; item < item_limit; item++) {
        var current_item = timetableStorage[item];
        var day_choice;
        switch (agenda_day) {
            case 0: day_choice = $(".AgendaTimetable").css("display", "none"); $("#SundayTimetable").css("display", "block"); break;
            case 1: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.monday; break;
            case 2: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.tuesday; break;
            case 3: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.wednesday; break;
            case 4: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.thursday; break;
            case 5: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.friday; break;
            case 6: day_choice = $(".AgendaTimetable").css("display", "block"); $("#SundayTimetable").css("display", "none"); day_choice = current_item.saturday; break;
        };
        if (current_item.hour == "1") {
            document.getElementById("agenda1").innerHTML = day_choice;
        } else if (current_item.hour == "2") {
            document.getElementById("agenda2").innerHTML = day_choice;
        } else if (current_item.hour == "3") {
            document.getElementById("agenda3").innerHTML = day_choice;
        } else if (current_item.hour == "4") {
            document.getElementById("agenda4").innerHTML = day_choice;
        } else if (current_item.hour == "5") {
            document.getElementById("agenda5").innerHTML = day_choice;
        };
    };
    document.getElementById("AgendaHomework").innerHTML = '<div class="cab-empty" id="NoCompito">carico compiti...</div>';
    document.getElementById("AgendaTest").innerHTML = '<div class="cab-empty" id="NoValutazione">carico valutazioni...</div>';
    document.getElementById("AgendaVolunteer").innerHTML = '<div class="cab-empty" id="NoVolontario">carico volontari...</div>';
    document.getElementById("AgendaEvent").innerHTML = '<div class="cab-empty" id="NoEvento">carico eventi...</div>';
    document.getElementById("AgendaReminder").innerHTML = '<div class="cab-header">Promemoria</div><div class="cab-empty" id="NoPromemoria">carico promemoria...</div>';
    var verifySameDate = document.getElementById("agenda-field").value;
    var dataQuery = new Backendless.DataQuery();
    dataQuery.condition = "data = '" + document.getElementById("agenda-field").value + "'";
    dataQuery.options = { pageSize: 100 };
    Backendless.Persistence.of( Agenda ).find(dataQuery).then( function(result) { 
      tempAgenda = result; agendaStorage = tempAgenda.data;
      if(verifySameDate == document.getElementById("agenda-field").value) {
          document.getElementById("AgendaHomework").innerHTML = '<div class="cab-empty" id="NoCompito">nessun compito da svolgere</div>';
          document.getElementById("AgendaTest").innerHTML = '<div class="cab-empty" id="NoValutazione">nessuna valutazione da sostenere</div>';
          document.getElementById("AgendaVolunteer").innerHTML = '<div class="cab-empty" id="NoVolontario">nessun volontario</div>';
          document.getElementById("AgendaEvent").innerHTML = '<div class="cab-empty" id="NoEvento">nessun evento</div>';
          document.getElementById("AgendaReminder").innerHTML = '<div class="cab-header">Promemoria</div><div class="cab-empty" id="NoPromemoria">nessun promemoria</div>';
      };      
      for (var item = 0, item_limit=agendaStorage.length; item < item_limit; item++) {
        var current_item = agendaStorage[item];
        var current_id = current_item.objectId;
        var current_type = current_item.type;
        var current_subject = current_item.subject;
        var current_title = current_item.title;
        var current_text = current_item.text;
        var current_author = current_item.ownerId;
        var author_string = "ilmovnino.tk";
        var current_checkM = current_item.check_media;
        var current_valType = current_item.val_type;
        var current_date = current_item.data;
        // instead of the agenda field
        if(current_date == document.getElementById("agenda-field").value) {
            switch (current_type) {
                case "Compito": 
                    document.getElementById("NoCompito").style.display = "none";
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    $( "#AgendaHomework" ).append('<a href="#content=agenda&id=' + current_id + '"><div class="cab-homework">' + current_subject + '<span class="cab-text">' + current_text + '</span></div></a>');
                    break;
                case "Valutazione":
                    document.getElementById("NoValutazione").style.display = "none";
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    if (current_checkM) {current_checkM="fa media"} else {current_checkM="non fa media"};
                    current_valType = current_valType.capitalizeFirstLetter();
                    $( "#AgendaTest" ).append('<a href="#content=agenda&id=' + current_id + '"><div class="cab-homework">' + current_subject + '<span class="cabh-type">' + current_valType + '</span>' + current_checkM + '</div></a>');
                    break;
                case "Volontario": 
                    document.getElementById("NoVolontario").style.display = "none";
                    current_subject = current_subject.capitalizeFirstLetter();
                    if (current_subject == "ScienzeMotorie") {
                        current_subject = "Educazione Fisica";
                    } else if (current_subject == "ArteDisegno") {
                        current_subject = "Arte e disegno";
                    };
                    for (var cu_index = 0, cu_index_limit=userStorage.length; cu_index < cu_index_limit; cu_index++) {
                        var current_user = userStorage[cu_index];
                        if (current_author == current_user.ownerId) {
                            author_string = current_user.first_name;
                        };
                    };
                    $( "#AgendaVolunteer" ).append('<a href="#content=agenda&id=' + current_id + '"><div class="cab-activity">' + author_string + ', ' + current_subject + '</div></a>');
                    break;
                case "Evento": 
                    document.getElementById("NoEvento").style.display = "none";
                    $( "#AgendaEvent" ).append('<a href="#content=agenda&id=' + current_id + '"><div class="cab-activity">' +  current_title + '</div></a>');
                    break;
                case "Promemoria":
                    document.getElementById("NoPromemoria").style.display = "none";
                    $( "#AgendaReminder" ).append('<a href="#content=agenda&id=' + current_id + '"><div class="cab-reminder"><div class="cabr-pic"></div><div class="cabr-text">' + current_text + '</div></div></a>');
                    break;
            };
        };
      };
      if ( jQuery.isEmptyObject(agendaStorage) ) { agendaStorage = [ "vuoto" ]; };
    }).catch( function(err) { console.log(err) } );
};
  //Wiki
var WikiGet = function(choiche) {
    document.getElementById("WikiGetBody").innerHTML = '<div style="-webkit-filter: invert(100%);filter: invert(100%);height: 40px;">' + svgLoader + '</div>';
    document.getElementById("WikiGetElCount").innerHTML = 'Carico...';
    if(choiche != "tutti") {
        if(choiche == "altro") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Altro';
        } else if(choiche == "italiano") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Italiano';
        } else if(choiche == "matematica") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Matematica';
        } else if(choiche == "inglese") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Inglese';
        } else if(choiche == "storia") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Storia';
        } else if(choiche == "filosofia") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Filosofia';
        } else if(choiche == "latino") {
            var choice =  document.getElementById("WikiGetChoice").innerHTML = 'Latino';
        } else if(choiche == "artedisegno") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Arte e Disegno';
        } else if(choiche == "fisica") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Fisica';
        } else if(choiche == "scienze") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Scienze';
        } else if(choiche == "educazionefisica") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Educazione Fisica';
        } else if(choiche == "religione") {
            var choice = document.getElementById("WikiGetChoice").innerHTML = 'Religone';
        };
        var query = new Backendless.DataQuery(); query.condition = "subject = '" + choiche + "'"; query.options = {pageSize: 15, sortBy: "title"}; Backendless.Persistence.of( Wiki ).find(query).then( function(result) { document.getElementById("WikiGetBody").innerHTML = ''; wikiStorage = result.data.concat(wikiStorage); tempWiki = result; for(ww=0;ww<result.data.length;ww++) { if(document.getElementById(result.data[ww].title.slice(0,1).toUpperCase()) == null ) { $("#WikiGetBody").append('<div id="' + result.data[ww].title.slice(0,1).toUpperCase() + '" style="font-size:2.5em;">' + result.data[ww].title.slice(0,1).toUpperCase() + '</div>') }; $("#WikiGetBody").append('<a href="#content=wiki&id=' + result.data[ww].objectId + '"><div class="wiki-recent">' + result.data[ww].title + '</div></a>')}; var edit_hintText = " Elementi"; if(result.totalObjects == 1) {edit_hintText = " Elemento"}; document.getElementById("WikiGetElCount").innerText = "" + result.totalObjects + edit_hintText; if(result.nextPage != null) { $("#WikiGetBody").append('<div id="ws-load-more" class="c-loader" onclick="SetLoader' + "('wiki');LoadNext('wiki')" + ';"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>'); ResetLoader("wiki") } else { WikiLoaderAvaileble = false } } );
    } else {
        document.getElementById("WikiGetChoice").innerHTML = 'Recenti';
        var query = new Backendless.DataQuery(); query.options = {pageSize: 15}; Backendless.Persistence.of( Wiki ).find(query).then( function(result) { document.getElementById("WikiGetBody").innerHTML = ''; wikiStorage = result.data.concat(wikiStorage); tempWiki = result; for(ww=0;ww<result.data.length;ww++) { var headerMese; switch(new Date(result.data[ww].created).getMonth()) { case 0: headerMese = "Gennaio"; break; case 1: headerMese = "Febbraio"; break; case 2: headerMese = "Marzo"; break; case 3: headerMese = "Aprile"; break;case 4: headerMese = "Maggio"; break;case 5: headerMese = "Giugno"; break;case 6: headerMese = "Gennaio"; break;case 7: headerMese = "Agosto"; break;case 8: headerMese = "Settembre"; break;case 9: headerMese = "Ottobre"; break;case 10: headerMese = "Novembre"; break;case 11: headerMese = "Dicembre"; break; }; var timeId = '' + ( '00' + new Date(result.data[ww].created).getDate()).slice(-2) + ' ' + ( '00' + ( new Date(result.data[ww].created).getMonth() + 1 )).slice(-2) + '/' + new Date(result.data[ww].created).getFullYear(); var timeText = '' + ( '00' + new Date(result.data[ww].created).getDate()).slice(-2) + ' ' + headerMese + ' ' + new Date(result.data[ww].created).getFullYear(); if(document.getElementById(timeId) == null ) { $("#WikiGetBody").append('<div id="' + timeId + '" style="font-size:2.5em;">' + timeText + '</div>') }; $("#WikiGetBody").append('<a href="#content=wiki&id=' + result.data[ww].objectId + '"><div class="wiki-recent">' + result.data[ww].title + '</div></a>')}; var edit_hintText = " Elementi"; if(result.totalObjects == 1) {edit_hintText = " Elemento"}; document.getElementById("WikiGetElCount").innerText = "" + result.totalObjects + edit_hintText; if(result.nextPage != null) { $("#WikiGetBody").append('<div id="ws-load-more" class="c-loader" onclick="SetLoader' + "('wiki');LoadNext('wiki')" + ';"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>'); ResetLoader("wiki") } else { WikiLoaderAvaileble = false } } );
    };
    HideAnything();
    document.getElementById("over-layer").style.display = "block";
    document.getElementById("ol-wikiselect").style.display = "block";
};
var ShowExtraBar = function() { document.getElementById("wet-extra").style.display = "flex" };
var HideExtraBar = function() { document.getElementById("wet-extra").style.display = "none" };
var ShowLinkBar = function() { document.getElementById("wet-link").style.display = "flex" };
var HideLinkBar = function() { document.getElementById("wet-link").style.display = "none" };
var DoCommand = function(command,value) {
    if (command == 'h1' || command == 'h3' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'forecolor' || command == 'backcolor') {
      document.execCommand(command, false, value);
    }
    if (command == 'createlink' || command == 'insertimage') {
      url = prompt('Scrivi il link: ', 'http:\/\/');
      document.execCommand(command, false, url);
    } else { document.execCommand(command, false, null) };
};
var PrintWiki = function() {
    var printWiki = window.open();
    printWiki.document.write('<html><head><title>File &gt; Stampa...</title><style>body{width: 190mm;height: 282.15mm;font-family: Helvetica, sans-serif;} img{max-width:100%}</style></head><body id="body">' + document.getElementById('wiki-html-view').innerHTML + '</body></html>');
};
  //Home
var CreateHome = function() {
    var user_time = new Date();
    var HomeGiorno, HomeMese, HomeAnno = user_time.getFullYear(), HomeNum = user_time.getDate();
    switch(user_time.getDay()) {
        case 0: HomeGiorno = "Domenica"; break;
        case 1: HomeGiorno = "Luned&igrave;"; break;
        case 2: HomeGiorno = "Marted&igrave;"; break;
        case 3: HomeGiorno = "Mercoled&igrave;"; break;
        case 4: HomeGiorno = "Gioved&igrave;"; break;
        case 5: HomeGiorno = "Venerd&igrave;"; break;
        case 6: HomeGiorno = "Sabato"; break;
    };
    switch(user_time.getMonth()) {
        case 0: HomeMese = "Gennaio"; break;
        case 1: HomeMese = "Febbraio"; break;
        case 2: HomeMese = "Marzo"; break;
        case 3: HomeMese = "Aprile"; break;
        case 4: HomeMese = "Maggio"; break;
        case 5: HomeMese = "Giugno"; break;
        case 6: HomeMese = "Gennaio"; break;
        case 7: HomeMese = "Agosto"; break;
        case 8: HomeMese = "Settembre"; break;
        case 9: HomeMese = "Ottobre"; break;
        case 10: HomeMese = "Novembre"; break;
        case 11: HomeMese = "Dicembre"; break;
    };
    document.getElementById("ch-giorno").innerHTML = HomeGiorno + ",";
    document.getElementById("ch-data").innerHTML = HomeNum + " " + HomeMese + " " + HomeAnno;
    for (var item = 0, item_limit=timetableStorage.length; item < item_limit; item++) {
        var current_item = timetableStorage[item];
        var day_choice;
        switch (user_time.getDay()) {
            case 0: day_choice = ""; break;
            case 1: day_choice = current_item.monday; break;
            case 2: day_choice = current_item.tuesday; break;
            case 3: day_choice = current_item.wednesday; break;
            case 4: day_choice = current_item.thursday; break;
            case 5: day_choice = current_item.friday; break;
            case 6: day_choice = current_item.saturday; break;
        };
        if (current_item.hour == "1") {
            document.getElementById("cht-1").innerHTML = day_choice;
        } else if (current_item.hour == "2") {
            document.getElementById("cht-2").innerHTML = day_choice;
        } else if (current_item.hour == "3") {
            document.getElementById("cht-3").innerHTML = day_choice;
        } else if (current_item.hour == "4") {
            document.getElementById("cht-4").innerHTML = day_choice;
        } else if (current_item.hour == "5") {
            document.getElementById("cht-5").innerHTML = day_choice;
        };
    };
    document.getElementById("chb-body").innerHTML = "";
    document.getElementById("NoHistory").style.display = "block";
    document.getElementById("SiHistory").style.display = "none";
    var stringedHistory = localStorage.openedHistory;
    if (stringedHistory == undefined || stringedHistory == "vuoto") {
        localStorage["openedHistory"] = "vuoto";
        openedHistory = [];
    } else {
        openedHistory = JSON.parse(stringedHistory);
        for (ohitem = 0, ohimit = openedHistory.length; ohitem < ohimit; ohitem++) {
            var current_history = openedHistory[ohitem];
            var h_title = current_history.title;
            var h_detail = current_history.detail;
            var h_id = current_history.id;
            var h_link = current_history.link;
            $("#chb-body").append('<div class="chb-block"><a href="' + h_link + '"><div class="chbb-left"><div class="chb-title">' + h_title + '</div><div class="chb-details">' + h_detail + '</div></div></a><div class="chbb-right"><a href="javascript:void(0)" onclick="DeleteSingleHistory(' + "'" + h_id + "'" + ')"><img src="assets/icons/cancel.svg"></a></div></div>');
            document.getElementById("NoHistory").style.display = "none";
            document.getElementById("SiHistory").style.display = "block";
        };
    };
};

var DeleteHistory = function() {
    if (confirm("Sei sicuro di voler svuotare la cronologia?")) {
        localStorage["openedHistory"] = "vuoto";
        openedHistory = [];
        CreateHome();
    };
};
var DeleteSingleHistory = function(objectToRemoveId) {
    var incriminatedIndex = 0;
    for (hitem = 0, himit = openedHistory.length; hitem < himit; hitem++) {
        var current_hitem = openedHistory[hitem];
        var current_hitem_id = current_hitem.id;
        if (current_hitem_id == objectToRemoveId) {
            incriminatedIndex = hitem;
        };
    };
    try { openedHistory.splice(incriminatedIndex, 1); } catch(err) { console.log("Errore: " + err)};
    localStorage.openedHistory = JSON.stringify(openedHistory);
    CreateHome();
};
  //Orario
var CreateOrario = function() {
    for (var item = 0, item_limit=timetableStorage.length; item < item_limit; item++) {
        var current_item = timetableStorage[item];
        if (current_item.hour == "1") {
            document.getElementById("lun1").value = current_item.monday;
            document.getElementById("mar1").value = current_item.tuesday;
            document.getElementById("mer1").value = current_item.wednesday;
            document.getElementById("gio1").value = current_item.thursday;
            document.getElementById("ven1").value = current_item.friday;
            document.getElementById("sab1").value = current_item.saturday;
        } else if (current_item.hour == "2") {
            document.getElementById("lun2").value = current_item.monday;
            document.getElementById("mar2").value = current_item.tuesday;
            document.getElementById("mer2").value = current_item.wednesday;
            document.getElementById("gio2").value = current_item.thursday;
            document.getElementById("ven2").value = current_item.friday;
            document.getElementById("sab2").value = current_item.saturday;
        } else if (current_item.hour == "3") {
            document.getElementById("lun3").value = current_item.monday;
            document.getElementById("mar3").value = current_item.tuesday;
            document.getElementById("mer3").value = current_item.wednesday;
            document.getElementById("gio3").value = current_item.thursday;
            document.getElementById("ven3").value = current_item.friday;
            document.getElementById("sab3").value = current_item.saturday;
        } else if (current_item.hour == "4") {
            document.getElementById("lun4").value = current_item.monday;
            document.getElementById("mar4").value = current_item.tuesday;
            document.getElementById("mer4").value = current_item.wednesday;
            document.getElementById("gio4").value = current_item.thursday;
            document.getElementById("ven4").value = current_item.friday;
            document.getElementById("sab4").value = current_item.saturday;
        } else if (current_item.hour == "5") {
            document.getElementById("lun5").value = current_item.monday;
            document.getElementById("mar5").value = current_item.tuesday;
            document.getElementById("mer5").value = current_item.wednesday;
            document.getElementById("gio5").value = current_item.thursday;
            document.getElementById("ven5").value = current_item.friday;
            document.getElementById("sab5").value = current_item.saturday;
        };
    };
};
var OnUpdateOrario = function() {
  if (navigator.onLine) {
    var timetableFinished = 0;
    var orarioId = "" + new Date().getTime;
    for (var item = 0, item_limit=timetableStorage.length; item < item_limit; item++) {
        var current_item = timetableStorage[item];
        if (current_item.hour == "1") {
            current_item.monday = document.getElementById("lun1").value;
            current_item.tuesday = document.getElementById("mar1").value;
            current_item.wednesday = document.getElementById("mer1").value;
            current_item.thursday = document.getElementById("gio1").value;
            current_item.friday = document.getElementById("ven1").value;
            current_item.saturday = document.getElementById("sab1").value;
        } else if (current_item.hour == "2") {
            current_item.monday = document.getElementById("lun2").value;
            current_item.tuesday = document.getElementById("mar2").value;
            current_item.wednesday = document.getElementById("mer2").value;
            current_item.thursday = document.getElementById("gio2").value;
            current_item.friday = document.getElementById("ven2").value;
            current_item.saturday = document.getElementById("sab2").value;
        } else if (current_item.hour == "3") {
            current_item.monday = document.getElementById("lun3").value;
            current_item.tuesday = document.getElementById("mar3").value;
            current_item.wednesday = document.getElementById("mer3").value;
            current_item.thursday = document.getElementById("gio3").value;
            current_item.friday = document.getElementById("ven3").value;
            current_item.saturday = document.getElementById("sab3").value;
        } else if (current_item.hour == "4") {
            current_item.monday = document.getElementById("lun4").value;
            current_item.tuesday = document.getElementById("mar4").value;
            current_item.wednesday = document.getElementById("mer4").value;
            current_item.thursday = document.getElementById("gio4").value;
            current_item.friday = document.getElementById("ven4").value;
            current_item.saturday = document.getElementById("sab4").value;
        } else if (current_item.hour == "5") {
            current_item.monday = document.getElementById("lun5").value;
            current_item.tuesday = document.getElementById("mar5").value;
            current_item.wednesday = document.getElementById("mer5").value;
            current_item.thursday = document.getElementById("gio5").value;
            current_item.friday = document.getElementById("ven5").value;
            current_item.saturday = document.getElementById("sab5").value;
        };
        Backendless.Persistence.of( Timetable ).save( current_item ).then(function(){ timetableFinished += 1; if(timetableFinished = 5) { try{ SuccessBanner(orarioId) }catch(err){}; SendNotification(null, null, "Orario aggiornato da " + LoggedUser.first_name + " " + LoggedUser.last_name, "Visualizza le modifiche", "http://www.ilmovnino.tk/#timetable")};}).catch(function(err){try{ ErrorBanner(orarioId) }catch(err){}});
    };
    DisplayBanner(orarioId, "Aggiorno Orario...");
    OnBack();
  } else {
      alert("Connettiti ad Internet");
  };
};

  // Wallpaper Script
var GetThumbnail = function(original, scale, predefined) {
    var canvas = document.createElement("canvas");
    if ( scale == null ) {
        canvas.width = predefined;
        canvas.height = predefined;
    } else {
        canvas.width = original.width * scale;
        canvas.height = original.height * scale;
    };    
    canvas.getContext("2d").drawImage(original, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL();
};
var ApplyWallpaper = function(choice,offline) {
    var imgId = "img" + new Date().getTime();
    var wallpaper = document.createElement("img");
    wallpaper.id = imgId;
    document.getElementsByTagName("body")[0].appendChild(wallpaper);
    var originaldata; var dataId;
    switch(choice) {
        case "motion": dataId = "66881C2A-812C-76AA-FF64-78AF7ADA3C00"; $("#wp-motion").addClass("wallselect"); $("#wallselect").text("Motion (Predefinito)"); $("#custopaper").css("display","none"); break;
        case "watercolor": dataId = "4B05A7A2-B893-F2C4-FF2A-EAE697506900"; $("#wp-watercolor").addClass("wallselect"); $("#wallselect").text("Watercolor"); $("#custopaper").css("display","none"); break;
        case "flowerpower": dataId = "EA43B79F-FAF1-B1FA-FFDE-B22C3714EA00"; $("#wp-flower-power").addClass("wallselect"); $("#wallselect").text("Flower Power"); $("#custopaper").css("display","none"); break;
        case "noi": dataId = "A1381821-832F-4ACD-FFD2-042D33741800"; $("#wp-noi").addClass("wallselect"); $("#wallselect").text("Noi"); $("#custopaper").css("display","none"); break;
        case "custom": dataId = LoggedUser.wallpaper_id; $("#wp-custom").addClass("wallselect"); $("#wallselect").text("Personalizzato"); $("#custopaper").css("display","flex"); break;
        default : try{dataId = "66881C2A-812C-76AA-FF64-78AF7ADA3C00"; $("#wp-motion").addClass("wallselect"); $("#wallselect").text("Motion (Predefinito)"); $("#custopaper").css("display","none");}catch(e){}; break;
    };
    function ApplyWallpaperPlus(wallpaper,width,height) {
        var canvasId = "can" + new Date().getTime();
        var canvas = document.createElement("canvas");
        canvas.id = canvasId;
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(wallpaper,0,0);
        document.getElementsByTagName("body")[0].appendChild(canvas);
        try{stackBlurCanvasRGBA( canvasId, 0, 0, canvas.width , canvas.height, 2 );document.getElementById("wallpaper").style.backgroundImage = "url('" + canvas.toDataURL() + "')";blurwithcss=false;}catch(err){document.getElementById("wallpaper").style.backgroundImage = "url('" + wallpaper.src + "')";blurwithcss=true};
        if (blurwithcss) { $("#wallpaper").css("-webkit-filter", "brightness(100%) blur(20px)"); $("#wallpaper").css("filter", "brightness(100%) blur(20px)"); } else {$("#wallpaper").css("-webkit-filter", "brightness(100%)");$("#wallpaper").css("filter", "brightness(100%)");};
        document.getElementsByTagName("body")[0].removeChild(canvas);
        document.getElementsByTagName("body")[0].removeChild(wallpaper);
    };
    if(offline == null) {
        var xhr  = new XMLHttpRequest();var type = 'GET';var url  = 'https://api.backendless.com/v1/data/Wallpaper/' + dataId;xhr.onload = function() { var result = JSON.parse(xhr.responseText); try { localStorage.Wallpaper = JSON.stringify(result) } catch(err) {}; wallpaper.src = result.data; document.getElementById("custopaper-title").innerText = result.title; document.getElementById("custopaper-preview").style.backgroundImage = "url('" + result.data + "')"; ApplyWallpaperPlus(wallpaper,wallpaper.naturalWidth,wallpaper.naturalHeight)};xhr.onerror = function (e) {console.error(xhr.statusText);};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.send(null);
    } else {
         try { var result = JSON.parse(localStorage.Wallpaper); wallpaper.src = result.data; ApplyWallpaperPlus(wallpaper,wallpaper.naturalWidth,wallpaper.naturalHeight); } catch(err) {};
    };
};
var SetWallpaper = function(choice) {
    var wallpaperId = "" + new Date().getTime; DisplayBanner(wallpaperId, "Aggiorno Sfondo..."); window.scroll(0,0);
    Backendless.UserService.getCurrentUser().then(function(result){result.wallpaper_choice = choice; Backendless.UserService.update( result ).then( function() { SuccessBanner(wallpaperId); location.reload()}).catch(function(err){ErrorBanner(wallpaperId)})}).catch(function(err){ErrorBanner(wallpaperId)});
};
var UploadWallpaper = function() {
    var wallpaperId = "" + new Date().getTime; DisplayBanner(wallpaperId, "Aggiorno Sfondo..."); window.scroll(0,0);
    var wallpaper = document.createElement("img");
    var file = document.getElementById("upload-wallpaper").files[0];
    var walltitle = file.name;
    var reader = new FileReader();
    reader.addEventListener("load", function () {
         var dataurl = reader.result;
         wallpaper.src = dataurl;
         wallpaper.onload = function() {
             var w = wallpaper.naturalWidth;
             var h = wallpaper.naturalHeight;
             var scaleparam; var okupload = true;
             if (w > h) {scaleparam = h}else if (h > w) {scaleparam = w}else{scaleparam = w};
             var scale = 100 / scaleparam;
             var finalpaper = GetThumbnail(wallpaper, scale);
             if (finalpaper.length > 21000) {
                 var finalpaper = GetThumbnail(wallpaper, 0.3);
             };
             if (finalpaper.length > 21000) {
                 var finalpaper = GetThumbnail(wallpaper, 0.1);
             };
             if (finalpaper.length > 21000) {
                 var finalpaper = GetThumbnail(wallpaper, null, 100);
             };
             if (finalpaper.length > 21000) {
                 var finalpaper = GetThumbnail(wallpaper, null, 50);
             };
             if (finalpaper.length > 21000) {
                 var finalpaper = GetThumbnail(wallpaper,null, 10);
             };
             if (finalpaper.length > 21000) {
                 alert("Immagine troppo grande");
                 okupload = false;
             };
             if (okupload) {
                 var wallbody = JSON.stringify( { "title" : walltitle, "width" : wallpaper.naturalWidth, "height" : wallpaper.naturalHeight, "data" : finalpaper } );
                 var xhr  = new XMLHttpRequest();var type = 'POST';var url  = 'https://api.backendless.com/v1/data/Wallpaper';xhr.onload = function() { var result = JSON.parse(xhr.responseText); var wall_id = result.objectId; Backendless.UserService.getCurrentUser().then(function(result){result.wallpaper_id = wall_id; Backendless.UserService.update( result ).then( function() { SuccessBanner(wallpaperId); location.reload()}).catch(function(err){ErrorBanner(wallpaperId)})}).catch(function(err){ErrorBanner(wallpaperId)});};xhr.onerror = function (e) {console.error(xhr.statusText);ErrorBanner(wallpaperId)};xhr.open(type, url, true);xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');xhr.setRequestHeader('user-token', JSON.parse(localStorage.Backendless)["user-token"]);xhr.setRequestHeader('Content-Type', 'application/json');xhr.setRequestHeader('application-type', 'REST');xhr.send(wallbody);
             } else {
                 ErrorBanner(wallpaperId);
             };
         };
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    };
};
var HideCustopaper = function() {

};
var ShowUploadPaper = function() {

};
var ShowInfoPaper
  //Classroom
var CreateClass = function() {
    for(user = 0, limit = userStorage.length; user < limit; user++) {
        var current_user = userStorage[user];
        var alunni = new RegExp("Alunno", "i");
        var rappre = new RegExp("Rappresentante", "i");
        var prof = new RegExp("Professore", "i");
        var userEl = '<div class="utente"><div class="ut-name">' + current_user.first_name + ' ' + current_user.last_name + '</div><a href="mailto:' + current_user.email + '" style="margin-right: 5%;"><img class="ut-mail" onclick="" src="assets/icons/mail.svg"/></a></div>';
        if (alunni.test(current_user.class)) { $("#olc-alunni").append(userEl); };
        if (rappre.test(current_user.class)) { $("#olc-rappre").append(userEl); };
        if (prof.test(current_user.class)) { $("#olc-prof").append(userEl); };
    };
};
var EnableActivePiantina = function() {
    $(window).resize(function() {
        var vmin; var pixels = Number(getComputedStyle(document.getElementById("piantina-grandfather"), "").fontSize.match(/(\d*(\.\d*)?)px/)[1]); var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); if(w<h){vmin=w}else if(h<w){vmin=h}else{vmin=w}; var size = vmin / (42*pixels); var scale = "scale(" + size + ")"; $("#piantina-father").css("transform", scale);
    });
};
var ActivePiantina = function() {
    var vmin; var pixels = Number(getComputedStyle(document.getElementById("piantina-grandfather"), "").fontSize.match(/(\d*(\.\d*)?)px/)[1]); var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); if(w<h){vmin=w}else if(h<w){vmin=h}else{vmin=w}; var size = vmin / (42*pixels); var scale = "scale(" + size + ")"; $("#piantina-father").css("transform", scale);
};
var ChangeName = function(id) {
    if(changenameavaileble) {
        var oldName = $( id + " .piantina-name")[0].innerText;
        var newName = prompt("Inserisci nome e cognome", oldName);
        if (newName == null) {
            $( id + " .piantina-name")[0].innerText = oldName;
        } else {
            $( id + " .piantina-name")[0].innerText = newName;
        };
        changenameavaileble = false;
        setTimeout(function(){changenameavaileble = true},100);
    };
};
var SetCancel = function(obId) { var piantinaObject = { id : obId, left : document.getElementById(obId).style.left, top : document.getElementById(obId).style.top, text: $( "#" + obId + " .piantina-name")[0].innerText }; var lastPiantinaObject = {id:"",left:"",top:"",text:""}; if ( !jQuery.isEmptyObject(piantinaHistory) ) { lastPiantinaObject = piantinaHistory[0]; }; if ((piantinaObject.left != lastPiantinaObject.left) || (piantinaObject.top != lastPiantinaObject.top)){ piantinaHistory.splice(0,0,piantinaObject);}};
var BackPiantina = function() { if ( !jQuery.isEmptyObject(piantinaHistory) ) { var current_cancel = piantinaHistory[0]; document.getElementById(current_cancel.id).style.left = current_cancel.left; document.getElementById(current_cancel.id).style.top = current_cancel.top; $( "#" + current_cancel.id + " .piantina-name")[0].innerText = current_cancel.text; piantinaHistory.splice(0,1); } };
var InitializePiantina = function() {
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        $( id ).draggable({ scroll: false });
        $( id ).draggable( "option", "containment", false );
    };
    $( "#pbcatt" ).draggable({ scroll: false });
    $( "#pbcatt" ).draggable( "option", "containment", false );
};
var DisableDraggable = function() {
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        $( id ).draggable( "disable" );
        document.getElementById(sid).setAttribute("onclick", "ChangeName('" + id + "')");
        document.getElementById(sid).setAttribute("onmousedown", "SetCancel('" + sid + "')");
    };
    $( "#pbcatt" ).draggable( "disable" );
    document.getElementById("pbcatt").setAttribute("onmousedown", "SetCancel('pbcatt')");
    $(".piantina-block").css("cursor", "pointer");
    $("#pbcatt").css("cursor", "auto");
};
var EnableDraggable = function() {
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        $( id ).draggable( "enable" );
        document.getElementById(sid).setAttribute("onclick", "");
        document.getElementById(sid).setAttribute("onmousedown", "SetCancel('" + sid + "')");
    };
    $( "#pbcatt" ).draggable( "enable" );
    document.getElementById("pbcatt").setAttribute("onmousedown", "SetCancel('pbcatt')");
    $(".piantina-block").css("cursor", "move");
    $("#pbcatt").css("cursor", "move");
};
var DisableBoth = function() {
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        $( id ).draggable( "disable" );
        document.getElementById(sid).setAttribute("onclick", "");
        document.getElementById(sid).setAttribute("onmousedown", "");
    };
    $( "#pbcatt" ).draggable( "disable" );
    document.getElementById("pbcatt").setAttribute("onmousedown", "");
    $(".piantina-block").css("cursor", "auto");
    $("#pbcatt").css("cursor", "auto");
};
var SavePiantina = function() {
    $("#pbBusy").css("display", "flex");
    $("#piantina").css("display", "none");
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        document.getElementById(sid).setAttribute("onclick", "");
        document.getElementById(sid).setAttribute("onmousedown", "");
    };
    document.getElementById("pbcatt").setAttribute("onmousedown", "");
    $(".piantina-block").css("cursor", "auto");
    $("#pbcatt").css("cursor", "auto");
    var PiantinaToUpload = document.getElementById("piantina").innerHTML;
    var xhr  = new XMLHttpRequest();
    var type = 'POST';
    var url  = 'http://api.backendless.com/v1/data/Piantina';
    xhr.onload = function() { $("#pbBusy").css("display", "none"); $("#piantina").css("display", "block"); originalPiantina = PiantinaToUpload; RestoreRealPiantina(); SendNotification(null, null, "Piantina aggiornata da " + LoggedUser.first_name + " " + LoggedUser.last_name, "Puoi visualizzarla, stamparla o modificarla", "http://www.ilmovnino.tk/#classroom") };
    xhr.onerror = function (e) { alert("Errore, riprova"); };
    xhr.open(type, url, true);
    xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');
    xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');
    xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken);
    var Body = { html: PiantinaToUpload };
    Body = JSON.stringify(Body);
    xhr.send(Body);
};
var PrintPiantina = function() {
    for(i=1;i<31;i++) {
        var id, sid;
        if(i<10) {
            id = "#pb0" + i;
            sid = "pb0" + i;
        } else {
            id = "#pb" + i;
            sid = "pb" + i;
        };
        document.getElementById(sid).setAttribute("onclick", "");
        document.getElementById(sid).setAttribute("onmousedown", "");
    };
    document.getElementById("pbcatt").setAttribute("onmousedown", "");
    $(".piantina-block").css("cursor", "auto");
    $("#pbcatt").css("cursor", "auto");
    var printPiantina = window.open();
    printPiantina.document.write('<html><head><title>File &gt; Stampa...</title><style>#piantina-grandfather {font-size: 16px;margin: auto;height: 190mm;width: 282.15mm;display: flex;justify-content: center;align-items: center;background-color: white;}#piantina {width: 41em;height: 27.98em;margin: 0px auto;border: 1px solid rgba(0, 0, 0, 0.701961);overflow: hidden;background-color: rgba(255,255,255,0.95);}.piantina-block {position: relative!important;width: 3.5em!important;height: 2.6em!important;display: flex;justify-content: center;align-items: center;border: 1px solid rgba(0,0,0,0.7);background-color: rgba(255, 255, 255, 0.6);}.piantina-name {font-size: 0.6em;text-align: center;width: 90%;}body {font-family: NinoFont, sans-serif;height: 190mm;width: 282.15mm;}#pbcatt {position: relative!important;display: flex;justify-content: center;align-items: center;border: 1px solid rgba(0, 0, 0, 0.701961);padding: 1em;width: 4em!important;height: 1em!important;background-color: rgba(255, 255, 255, 0.6);}</style><script>var ScalePiantina = function() { var pixels = Number(getComputedStyle(document.getElementById("piantina-grandfather"), "").fontSize.match(/(d*(.d*)?)px/)[1]); var h = Number(getComputedStyle(document.getElementById("body"), "").height.match(/(d*(.d*)?)px/)[1]); var size = 9 / (pixels -0.3); var scale = "scale(" + size + ")"; document.getElementById("piantina-father").style.transform = scale; }</script></head><body id="body" onload="ScalePiantina()" onresize="ScalePiantina()"><div id="piantina-grandfather" style="display: flex;"><div id="piantina-father" style="transform: scale(1.57895);"><div id="piantina" style="display: block;">' + document.getElementById('piantina').innerHTML + '</div></div></div></body></html>');
};
var LoadPiantina = function() {
    $("#pbBusy").css("display", "flex");
    $("#piantina").css("display", "none");
    var xhr  = new XMLHttpRequest();
    var type = 'GET';
    var url  = 'http://api.backendless.com/v1/data/Piantina';
    xhr.onload = function() { document.getElementById("piantina").innerHTML = JSON.parse(xhr.responseText).data[0].html; originalPiantina = document.getElementById("piantina").innerHTML; InitializePiantina(); ExitModifyPiantina(); $("#pbBusy").css("display", "none"); $("#piantina").css("display", "block"); };
    xhr.onerror = function (e) { HidePiantina() };
    xhr.open(type, url, true);
    xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');
    xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');
    xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken);
    xhr.send();
};
// Add Show/Hide Functions here
var OpenPiantina = function() {
    document.getElementById("piantina-grandfather").style.display = "flex"; document.getElementsByTagName("body")[0].style.overflow = "hidden"; LoadPiantina();
};
var HidePiantina = function() {
    document.getElementById("piantina-grandfather").style.display = "none"; document.getElementsByTagName("body")[0].style.overflow = "";
};
var ModifyPiantina = function() {
    document.getElementById("piantina-modify").style.display = "flex";
    document.getElementById("piantina-view").style.display = "none";
    DisableDraggable();
};
var ExitModifyPiantina = function() {
    document.getElementById("piantina-view").style.display = "flex";
    document.getElementById("piantina-modify").style.display = "none";
    DisableBoth();
    piantinaMode = "Name"; document.getElementById("pbchange").innerHTML = 'RINOMINA<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMSA3aC02bDMtNHoiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTUgOWg2bC0zIDR6Ii8+Cjwvc3ZnPgo=" style="margin-left: 6px;-webkit-filter: invert(100%) brightness(10);filter: invert(100%) brightness(10);">';
};
var ChangePiantinaMode = function() {
    if (piantinaMode == "Name") {
        EnableDraggable(); piantinaMode = "Move"; document.getElementById("pbchange").innerHTML = 'TRASCINA<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMSA3aC02bDMtNHoiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTUgOWg2bC0zIDR6Ii8+Cjwvc3ZnPgo=" style="margin-left: 6px;-webkit-filter: invert(100%) brightness(10);filter: invert(100%) brightness(10);">'; if(DetectMobile() && neverAsked) {alert("Il trascinamento non è compatibile con i dispositivi mobili"); neverAsked = false;};
    } else if (piantinaMode == "Move") {
        DisableDraggable(); piantinaMode = "Name"; document.getElementById("pbchange").innerHTML = 'RINOMINA<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMSA3aC02bDMtNHoiLz4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTUgOWg2bC0zIDR6Ii8+Cjwvc3ZnPgo=" style="margin-left: 6px;-webkit-filter: invert(100%) brightness(10);filter: invert(100%) brightness(10);">';
    };
};
var RestoreRealPiantina = function() {
    piantinaHistory = []; document.getElementById("piantina").innerHTML = originalPiantina; InitializePiantina(); ExitModifyPiantina(); $("#pbBusy").css("display", "none"); $("#piantina").css("display", "block");
};
// Awareness push
var SendTransmission = function(id,table,event,banner,link) {
    var message_object = { "id": id, "table": table,"event": event,"banner":banner, "link":link };
    Backendless.Messaging.publish("Awareness", JSON.stringify(message_object),null,null).then(function(result){transmissionHistory.splice(0,0,result.messageId)}).catch();
};
var ExecuteTransmission = function(array) {
    for(i=0;i < array.length;i++) {
        var data = JSON.parse(array[i].data);
        var okTransmission = true;
        for(j=0;j < transmissionHistory.length;j++) { if(transmissionHistory[j] == array[i].messageId) {okTransmission = false} };
        if(loggedAt > array[i].publishedAt) {okTransmission = false};
        navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if(okTransmission) {
            switch(data.table) {
                case "Feed": if(data.event == "Publish") { if( !jQuery.isEmptyObject(feedStorage)) { Backendless.Persistence.of( Feed ).findById(data.id).then(function(result){feedStorage.unshift(result); PushFeed([result], "Prepend");}).catch()}; TransmissionBanner(data.banner,data.link); try{window.navigator.vibrate([400,400])}catch(e){} } else if(data.event == "Edit") {if( !jQuery.isEmptyObject(feedStorage)) { Backendless.Persistence.of( Feed ).findById(data.id).then(function(result){if ( !jQuery.isEmptyObject(feedStorage) ) { feedStorage.unshift(result); }; PushFeed([result], "Replace");}).catch()}} else if (data.event == "Delete") { try{document.getElementById("c-feed").removeChild(document.getElementById(data.id));}catch(e){}; index_to_get_rid_of = -1; for (var item = 0, item_limit=feedStorage.length; item < item_limit; item++) { var current_item_id = feedStorage[item].objectId; if (current_item_id == data.id) { index_to_get_rid_of = item; }; }; feedStorage.splice(index_to_get_rid_of,1);}; break;
                case "Agenda": if( !jQuery.isEmptyObject(agendaStorage)) { CreateAgenda(); }; if(data.event == "Publish") { TransmissionBanner(data.banner,data.link); try{window.navigator.vibrate([400,400])}catch(e){} }; break;
                case "Answers": if(location.hash == data.link){if( document.getElementById(data.id) == null ){Backendless.Persistence.of( Answers ).findById(data.id).then(function(result){PushAnswers([result],"Prepend")}).catch(function(e){})}} else { TransmissionBanner(data.banner,data.link);try{window.navigator.vibrate([400,400])}catch(e){} };break;
                case "Wiki": if(data.event == "Publish") { TransmissionBanner(data.banner,data.link); try{window.navigator.vibrate([400,400])}catch(e){}; wikiInitialized = false; if(location.hash.slice(0,5) == "#wiki") {HashFunction()}; } else if(data.event == "Edit") { if(data.id == location.hash.slice(location.hash.lastIndexOf("=") + 1)) { if(location.hash.slice(0,13) == "#content=wiki") { document.getElementById("wikiAlertButton").style.display = "block"; try{window.navigator.vibrate([400,400])}catch(e){} }; if(location.hash.slice(0,10) == "#edit=wiki") { document.getElementById("wikiAlertEditButton").style.display = "block"; try{window.navigator.vibrate([400,400])}catch(e){} } } };
            };
        };
    };
};
var UpdateEditWiki = function() { var condition = confirm("Questa pagina è stata modificata. Vuoi aprirla in un'altra scheda?"); if(condition) { window.open(window.location) } }; var UpdateReadWiki = function() { var condition = confirm("Questa pagina è stata modificata. Vuoi aggiornarla?"); if(condition) { HashFunction() } };

// Publish Menus
var OnPublishFeed = function() {
    var selection = document.getElementById("pbf-select").value;
    switch(selection) {
        case "notizia": location.hash = "publish=notizia"; document.getElementById("pbf-select").value = ""; break;
        case "link": location.hash = "publish=link"; document.getElementById("pbf-select").value = ""; break;
        case "file": location.hash = "publish=file"; document.getElementById("pbf-select").value = ""; break;
        case "youtube": location.hash = "publish=youtube"; document.getElementById("pbf-select").value = ""; break;
        case "domanda": location.hash = "publish=domanda"; document.getElementById("pbf-select").value = ""; break;
        default: document.getElementById("pbf-select").value = ""; break;
    };
};
var OnPublishAgenda = function() {
    var selection = document.getElementById("pba-select").value;
    switch(selection) {
        case "compito": location.hash = "publish=compito"; document.getElementById("pba-select").value = ""; break;
        case "valutazione": location.hash = "publish=valutazione"; document.getElementById("pba-select").value = ""; break;
        case "volontario": location.hash = "publish=volontario"; document.getElementById("pba-select").value = ""; break;
        case "evento": location.hash = "publish=evento"; document.getElementById("pba-select").value = ""; break;
        case "promemoria": location.hash = "publish=promemoria"; document.getElementById("pba-select").value = ""; break;
        default: document.getElementById("pba-select").value = ""; break;
    };
};
// Publish Script
var OnPublish = function(selection) {
  if (navigator.onLine) {
    var Author = LoggedUser;
    var FullName = Author.first_name + " " + Author.last_name;
    var bannerID = "" + new Date().getTime();
    if (selection == "notizia") {
        var news_title = document.getElementById("title-field").value;
        var news_text = document.getElementById("text-field").value;
        if (news_title != "" && news_text != "") {
            var dataStore = Backendless.Persistence.of( Feed );
            var feedObject = new Feed( { type: "Notizia", title: news_title, text: news_text, url: null, size: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { feedStorage.unshift(result); PushFeed([result], "Prepend"); try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Publish","Notizia da " + FullName,"#content=feed&id=" + result.objectId); SendNotification(result, bannerID); }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Notizia...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "link") {
        var link_title = document.getElementById("title-field").value;
        var link_text = document.getElementById("text-field").value;
        var link_url = document.getElementById("url-field").value;
        if (link_title != "" && link_url) {
            if(link_url.slice(0,7) != "http://" && link_url.slice(0,8) != "https://") {link_url = "http://" + link_url};
            var dataStore = Backendless.Persistence.of( Feed );
            var feedObject = new Feed( { type: "Link", title: link_title, text: link_text, url: link_url, size: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { feedStorage.unshift(result); PushFeed([result], "Prepend"); try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Publish","Link da " + FullName,link_url); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Link...");
            OnBack();
        } else {
            alert("Compila i campi Titolo e Link");
        };
    } else if (selection == "file") {
        var file_title = document.getElementById("title-field").value;
        var file_text = document.getElementById("text-field").value;
        var file_to_upload = document.getElementById("file-field").files;
        var firstTime = true;
        if (file_title != "" && file_to_upload.length > 0) {
            var file_size = document.getElementById("file-field").files[0].size;
            var file_name = document.getElementById("file-field").files[0].name;
            file_name = file_name.replace(" ", "%20");
            var file_url;
            var file_element;
            if (file_size < 25165824) {
                function FileUpload(where_to_upload) { Backendless.Files.upload( file_to_upload, where_to_upload, false).then( function(result) { file_url = result.fileURL; var databaseFileUrl = file_url.replace("files//", "files/"); var dataStore = Backendless.Persistence.of( Feed ); var feedObject = new Feed( { type: "File", title: file_title, text: file_text, url: databaseFileUrl, size: file_size, author_username: Author.name, author_fullname: FullName } ); dataStore.save( feedObject ).then( function(result) { file_element = result; feedStorage.unshift(result); PushFeed([result], "Prepend"); var recipients = []; for (var i=0, i_limit=userStorage.length; i < i_limit; i++) { var current_user = userStorage[i]; if (current_user.receiveFiles) { if (current_user.registred) { var current_email = current_user.email; recipients.push(current_email); }; }; };current_user = LoggedUser; var subject = "" + current_user.first_name + " " + current_user.last_name + " ha pubblicato il file '" + file_title + "'"; var bodyParts = new Bodyparts(); bodyParts.textmessage = ""; bodyParts.htmlmessage = "<!DOCTYPE html><html><header></header><body style='font-family: sans-serif;'><div style='font-size: 50px;'>il<strong>mov</strong>nino<strong>.tk</strong></div><div style='font-size: 30px; font-weight: lighter;'>email</div><h3 style='font-weight:lighter;'>" + subject + "</h3><p style='font-weight: lighter;'>" + file_text + "</p><h3 style='font-weight:lighter;'>" + file_name + " - " + formatBytes(file_size) + "</h3><p>Trovi questo file tra gli allegati della mail</p><h4>RIGUARDO IL SITO</h6><p>'ilmovnino.tk' &egrave; lo spazio web riservato al 5 Scientifico dove condividere, comunicare, informarsi.</p><a href='http://www.ilmovnino.tk/'>ilmovnino.tk</a></body></html>"; var attachments = []; var file_to_send = file_url.slice(file_url.indexOf("/web/files/")); attachments.push(file_to_send);Backendless.Messaging.sendEmail( subject, bodyParts, recipients, attachments ).then( function(result) { try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Publish","File da " + FullName,databaseFileUrl); SendNotification(file_element, bannerID); } ).catch( function(err) { console.log(err); SendNotification(file_element, bannerID); } ); }).catch( function(err) { ErrorBanner(bannerID); var file_to_remove = file_url.replace("files//", "files/"); Backendless.Files.remove( file_to_remove ); } ); } ).catch( function(err) { if (firstTime) { var randomUrl = "" + Math.random();randomUrl = randomUrl.replace(".","");var where_to_upload = "/web/files/" + randomUrl; FileUpload(where_to_upload);firstTime = false; } else { ErrorBanner(bannerID) }; }); };
                FileUpload("/web/files");
                DisplayBanner(bannerID, "Carico File...");
                OnBack();
            } else {
                 alert("Il file deve pesare meno di 24 MB");
             };
        } else {
            alert("Assicurati di aver dato un titolo e scelto il file da pubblicare");
        };
    } else if (selection == "youtube") {
        var you_title = document.getElementById("title-field").value;
        var you_text = document.getElementById("text-field").value;
        var you_url = ExtractVideoID(document.getElementById("url-field").value);
        if (you_title != "" && you_url != "err") {
            var dataStore = Backendless.Persistence.of( Feed );
            var feedObject = new Feed( { type: "Youtube", title: you_title, text: you_text, url: you_url, size: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { feedStorage.unshift(result); PushFeed([result], "Prepend"); try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Publish","Youtube da " + FullName,link_url); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Youtube...");
            OnBack();
        } else {
            if(document.getElementById("url-field").value == "") { alert("Compila i campi Titolo e Youtube Link") } else { alert("Link Youtube non valido") };
        };
    } else if (selection == "domanda") {
        var ask_title = document.getElementById("text-field").value;
        if (ask_title != "") {
            var dataStore = Backendless.Persistence.of( Feed );
            var feedObject = new Feed( { type: "Domanda", title: ask_title, text: null, url: null, size: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { feedStorage.unshift(result); PushFeed([result], "Prepend"); try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Publish","Domanda da " + FullName,link_url); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Domanda...");
            OnBack();
        } else {
            alert("Scrivi qualcosa nel campo di testo");
        };
    } else if (selection == "compito") {
        var hwork_subject = document.getElementById("subject").value;
        var hwork_text = document.getElementById("text-field").value;
        var hwork_date = document.getElementById("date-field").value;
        var hwork_checkS = document.getElementById("CS-field").checked;
        if (hwork_subject != "materia" && hwork_text != "" && hwork_date != "") {
            var dataStore = Backendless.Persistence.of( Agenda );
            var feedObject = new Agenda( { type: "Compito", title: null, text: hwork_text, data: hwork_date, subject: hwork_subject, check_svolgimento: hwork_checkS, check_media: null, val_type: null, start_hour: null, start_min: null, end_hour: null, end_min: null, place: null, quota: null, check_autorizzazione: null, partecipanti: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Publish","Compito da " + FullName,"#content=agenda&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Compito...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "valutazione") {
        var valu_subject = document.getElementById("subject").value;
        var valu_text = document.getElementById("text-field").value;
        var valu_date = document.getElementById("date-field").value;
        var valu_checkM = document.getElementById("media-field").checked;
        var valu_type = $('input[name="valutazione-type"]:checked').val();
        if (valu_subject != "materia" && valu_date != "") {
            var dataStore = Backendless.Persistence.of( Agenda );
            var feedObject = new Agenda( { type: "Valutazione", title: null, text: valu_text, data: valu_date, subject: valu_subject, check_svolgimento: null, check_media: valu_checkM, val_type: valu_type, start_hour: null, start_min: null, end_hour: null, end_min: null, place: null, quota: null, check_autorizzazione: null, partecipanti: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Publish","Valutazione da " + FullName,"#content=agenda&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID); console.log(err) } );
            DisplayBanner(bannerID, "Carico Valutazione...");
            OnBack();
        } else {
            alert("Compila i campi Materia e Data");
        };
    } else if (selection == "volontario") {
        var volu_subject = document.getElementById("subject").value;
        var volu_text = document.getElementById("text-field").value;
        var volu_date = document.getElementById("date-field").value;
        if (volu_subject != "materia" && volu_date != "") {
            var dataStore = Backendless.Persistence.of( Agenda );
            var feedObject = new Agenda( { type: "Volontario", title: null, text: volu_text, data: volu_date, subject: volu_subject, check_svolgimento: null, check_media: null, val_type: null, start_hour: null, start_min: null, end_hour: null, end_min: null, place: null, quota: null, check_autorizzazione: null, partecipanti: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Publish","Volontario da " + FullName,"#content=agenda&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Valutazione...");
            OnBack();
        } else {
            alert("Compila i campi Materia e Data");
        };
    } else if (selection == "promemoria") {
        var pro_text = document.getElementById("text-field").value;
        var pro_date = document.getElementById("date-field").value;
        if (pro_text != "" && pro_date != "") {
            var dataStore = Backendless.Persistence.of( Agenda );
            var feedObject = new Agenda( { type: "Promemoria", title: null, text: pro_text, data: pro_date, subject: null, check_svolgimento: null, check_media: null, val_type: null, start_hour: null, start_min: null, end_hour: null, end_min: null, place: null, quota: null, check_autorizzazione: null, partecipanti: null, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Publish","Promemoria da " + FullName,"#content=agenda&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Valutazione...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "evento") {
        var event_title = document.getElementById("title-field").value;
        var event_text = document.getElementById("text-field").value;
        var event_date = document.getElementById("date-field").value;
            var event_startH = document.getElementById("startH-field").value;
            var event_startM = document.getElementById("startM-field").value;
        var event_start = event_startH + ":" + event_startM;
            var event_endH = document.getElementById("endH-field").value;
            var event_endM = document.getElementById("endM-field").value;
        var event_end = event_endH + ":" + event_endM;
        var event_place = document.getElementById("place-field").value;
        var event_price = document.getElementById("quota-field").value;
        var event_auth = document.getElementById("autorizzazione-field").checked;
        var event_attendees = "";
        for (var ea_turn = 0; ea_turn < 29; ea_turn++ ) {
            var current_person_id = "" + ea_turn;
            var current_person_choice = document.getElementById(current_person_id).checked;
            if (current_person_choice) {
                event_attendees = event_attendees + "1";
            } else {
                event_attendees = event_attendees + "0";
            };
        };
        if (event_title != "" && event_date != "" && event_place != "" && event_price != "" && (event_startH != "" || event_startM != "" || event_endH != "" || event_endM != "" )) {
            var dataStore = Backendless.Persistence.of( Agenda );
            var feedObject = new Agenda( { type: "Evento", title: event_title, text: event_text, data: event_date, subject: null, check_svolgimento: null, check_media: null, val_type: null, start_hour: event_startH, start_min: event_startM, end_hour: event_endH, end_min: event_endM, place: event_place, quota: event_price, check_autorizzazione: event_auth, partecipanti: event_attendees, author_username: Author.name, author_fullname: FullName } );
            dataStore.save( feedObject ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Publish","Evento da " + FullName,"#content=agenda&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Carico Evento...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    }  else if (selection == "wiki") {
            var wiki_title = document.getElementById("title-field").value;
            var wiki_subject = document.getElementById("subject").value;
            if(wiki_title != "" && wiki_subject != "materia" ) {
                var nwp = encodeURIComponent(document.getElementById("wiki-html-view").innerHTML.replace(/à/g, "&agrave;").replace(/á/g, "&aacute;").replace(/è/g, "&egrave;").replace(/é/g, "&eacute;").replace(/ì/g, "&igrave;").replace(/í/g, "&iacute;").replace(/ò/g, "&ograve;").replace(/ó/g, "&oacute;").replace(/ù/g, "&ugrave;").replace(/ú/g, "&uacute;").replace(/À/g, "&Agrave;").replace(/Á/g, "&Aacute;").replace(/È/g, "&Egrave;").replace(/É/g, "&Eacute;").replace(/Ì/g, "&Igrave;").replace(/Í/g, "&Iacute;").replace(/Ò/g, "&Ograve;").replace(/Ó/g, "&Oacute;").replace(/Ù/g, "&Ugrave;").replace(/Ú/g, "&Uacute;").replace(/€/g, "&euro;"));
                var filename = "" + new Date().getTime() + ".nwp";
                var byteArray = btoa(nwp);
                var xhr = new XMLHttpRequest();
                var type = 'PUT';
                var url  = 'https://api.backendless.com/v1/files/binary/web/wiki/' + filename + '?overwrite=true';
                xhr.onload = function() {
                    var result = xhr.responseText; var file_url = result; var dataStore = Backendless.Persistence.of( Wiki ); var feedObject = new Wiki( { subject: wiki_subject, title: wiki_title, url: file_url, author_username: Author.name, author_fullname: FullName } ); dataStore.save( feedObject ).then( function(result) { wikiInitialized = false; if(location.hash.slice(0,5) == "#wiki") {HashFunction()}; try{PingEdit(result.objectId,"wiki")}catch(e){}; SendTransmission(result.objectId,"Wiki","Publish","Pagina da " + FullName,"#content=wiki&id=" + result.objectId); SendNotification(result, bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
                };
                xhr.onerror = function(e) { ErrorBanner(bannerID) };
                xhr.open(type, url, true);
                xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');
                xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');
                xhr.setRequestHeader('Content-Type', 'text/plain');
                xhr.setRequestHeader('application-type', 'REST');
                xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken);
                xhr.send(byteArray);
                DisplayBanner(bannerID, "Carico Pagina...");
                OnBack();
            } else {
                alert("Compila i campi Titolo e Materia");
            };
    } else {
        alert("Errore, riprova");
    };
  } else {
      alert("Connettiti ad Internet");
  };
};
  // Answers Sending
var EnterInAnswers = function(e,id,answerReciever) {
    if(e.keyCode == 13) {
        SendTextAnswer(id,answerReciever);
        return false;
    } else {
        return true;
    }
};
var EnterInFile = function() {
    document.getElementById("fileAnswer").click();
};
var OnAnswerType = function() {
    if(document.getElementById("olca-text").value != "") {
        document.getElementById("olca-send").style.display = "block";
        document.getElementById("olca-draft").style.display = "none";
    } else {
        document.getElementById("olca-send").style.display = "none";
        document.getElementById("olca-draft").style.display = "block";
    };
};
var SendTextAnswer = function(id,answerReciever) {
    if(document.getElementById("olca-text").value != "") {
        document.getElementById("olca-text").disabled = true;
        var sta = document.getElementById("olca-text").value;
        var Author = LoggedUser;
        var FullName = Author.first_name + " " + Author.last_name;
        var bannerID = "" + new Date().getTime();
        var dataStore = Backendless.Persistence.of( Answers );
        var feedObject = new Answers( {related_id: id, type: "Text", content: sta, title: ""} )
        dataStore.save( feedObject ).then( function(result) { document.getElementById("olca-text").disabled = false;document.getElementById("olca-text").value = ""; OnAnswerType(); PushAnswers([result],"Prepend"); SendTransmission(result.objectId,"Answers","Publish","Risposta da " + FullName,"#content=feed&id=" + id); if(Author.name != answerReciever) { SendNotification(null, null, "Risposta da " + FullName, result.content, "http://www.ilmovnino.tk/#content=feed&id=" + id, answerReciever)}; SuccessBanner(bannerID)}).catch( function(err) { ErrorBanner(bannerID);document.getElementById("olca-text").disabled = false; } );
        DisplayBanner(bannerID, "Invio Risposta...");
    } else {
        document.getElementById("olca-send").style.display = "none";
        document.getElementById("olca-draft").style.display = "block";
    };
};
var SendFileAnswer = function(id,answerReciever) {
    var input = document.getElementById("fileAnswer");
    var limit = input.files[0].size;
    filepicker.setKey("AGlWXmRl5SMHIBR2NKLtkz");
    var Author = LoggedUser;
    var FullName = Author.first_name + " " + Author.last_name;
    if (input.value) {
      if(limit < 5242880) { 
        var bannerID = "" + new Date().getTime();
        filepicker.store( input, 
            function(Blob){
                var url = Blob.url; var fititle = Blob.filename;
                var dataStore = Backendless.Persistence.of( Answers );
                var feedObject = new Answers( {related_id: id, type: "File", content: url, title: fititle} )
                dataStore.save( feedObject ).then( function(result) { PushAnswers([result],"Prepend"); SendTransmission(result.objectId,"Answers","Publish","Risposta da " + FullName,"#content=feed&id=" + id); if(Author.name != answerReciever) { SendNotification(null, null, "Risposta da " + FullName, result.content, "http://www.ilmovnino.tk/#content=feed&id=" + id, answerReciever)}; SuccessBanner(bannerID)}).catch( function(err) { ErrorBanner(bannerID); } );
            },
            function(FPError) {ErrorBanner(bannerID)},
            function(progress) {
                console.log("Loading: "+progress+"%");
            }
        );
        DisplayBanner(bannerID, "Invio Risposta...");
      } else {
        alert("Scegli un file non superiore a 5 MB");
      }
    };
};
var OnEdit = function() {
  if (navigator.onLine) {
    var selection = current_modified_object.type;
    var bannerID = "" + new Date().getTime();
    if (selection == "Notizia") {
        var news_title = document.getElementById("title-field").value;
        var news_text = document.getElementById("text-field").value;
        if (news_title != "" && news_text != "") {
            current_modified_object.title = news_title;
            current_modified_object.text = news_text;
            var dataStore = Backendless.Persistence.of( Feed );
            dataStore.save( current_modified_object ).then( function(result) { try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Edit"); if ( !jQuery.isEmptyObject(feedStorage) ) { feedStorage.unshift(result); }; PushFeed([result], "Replace"); SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Notizia...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "Link") {
        var link_title = document.getElementById("title-field").value;
        var link_text = document.getElementById("text-field").value;
        var link_url = document.getElementById("url-field").value;
        if (link_title != "" && link_url) {
            if(link_url.slice(0,7) != "http://" && link_url.slice(0,8) != "https://") {link_url = "http://" + link_url};
            current_modified_object.title = link_title;
            current_modified_object.text = link_text;
            current_modified_object.url = link_url;
            var dataStore = Backendless.Persistence.of( Feed );
            dataStore.save( current_modified_object ).then( function(result) { try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Edit"); if ( !jQuery.isEmptyObject(feedStorage) ) { feedStorage.unshift(result); }; PushFeed([result], "Replace"); SuccessBanner(bannerID);  try{PingEdit(result.objectId,"feed")}catch(e){};  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Link...");
            OnBack();
        } else {
            alert("Compila i campi Titolo e Link");
        };
    } else if (selection == "Youtube") {
        var you_title = document.getElementById("title-field").value;
        var you_text = document.getElementById("text-field").value;
        var you_url = ExtractVideoID(document.getElementById("url-field").value);
        if (you_title != "" && you_url != "err") {
            current_modified_object.title = you_title;
            current_modified_object.text = you_text;
            current_modified_object.url = you_url;
            var dataStore = Backendless.Persistence.of( Feed );
            dataStore.save( current_modified_object ).then( function(result) { try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Edit"); if ( !jQuery.isEmptyObject(feedStorage) ) { feedStorage.unshift(result); }; PushFeed([result], "Replace"); SuccessBanner(bannerID);  try{PingEdit(result.objectId,"feed")}catch(e){};  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Youtube...");
            OnBack();
        } else {
            if(document.getElementById("url-field").value == "") { alert("Compila i campi Titolo e Youtube Link") } else { alert("Link Youtube non valido") };
        };
    } else if (selection == "Domanda") {
        var ask_title = document.getElementById("text-field").value;
        if (ask_title != "") {
            current_modified_object.title = ask_title;
            var dataStore = Backendless.Persistence.of( Feed );
            dataStore.save( current_modified_object ).then( function(result) { try{PingEdit(result.objectId,"feed")}catch(e){}; SendTransmission(result.objectId,"Feed","Edit"); if ( !jQuery.isEmptyObject(feedStorage) ) { feedStorage.unshift(result); }; PushFeed([result], "Replace"); SuccessBanner(bannerID);  try{PingEdit(result.objectId,"feed")}catch(e){};  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Domanda...");
            OnBack();
        } else {
            alert("Scrivi qualcosa nel campo di testo");
        };
    } else if (selection == "Compito") {
        var hwork_subject = document.getElementById("subject").value;
        var hwork_text = document.getElementById("text-field").value;
        var hwork_date = document.getElementById("date-field").value;
        var hwork_checkS = document.getElementById("CS-field").checked;
        if (hwork_subject != "materia" && hwork_text != "" && hwork_date != "") {
            current_modified_object.subject = hwork_subject;
            current_modified_object.text = hwork_text;
            current_modified_object.data = hwork_date;
            current_modified_object.check_svolgimento = hwork_checkS;
            var dataStore = Backendless.Persistence.of( Agenda );
            dataStore.save( current_modified_object ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Edit"); SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Compito...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "Valutazione") {
        var valu_subject = document.getElementById("subject").value;
        var valu_text = document.getElementById("text-field").value;
        var valu_date = document.getElementById("date-field").value;
        var valu_checkM = document.getElementById("media-field").checked;
        var valu_type = $('input[name="valutazione-type"]:checked').val();
        if (valu_subject != "materia" && valu_date != "") {
            current_modified_object.subject = valu_subject;
            current_modified_object.text = valu_text;
            current_modified_object.data = valu_date;
            current_modified_object.check_media = valu_checkM;
            current_modified_object.val_type = valu_type;
            var dataStore = Backendless.Persistence.of( Agenda );
            dataStore.save( current_modified_object ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Edit");  SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Valutazione...");
            OnBack();
        } else {
            alert("Compila i campi Materia e Data");
        };
    } else if (selection == "Volontario") {
        var volu_subject = document.getElementById("subject").value;
        var volu_text = document.getElementById("text-field").value;
        var volu_date = document.getElementById("date-field").value;
        if (volu_subject != "materia" && volu_date != "") {
            current_modified_object.subject = volu_subject;
            current_modified_object.text = volu_text;
            current_modified_object.data = volu_date;
            var dataStore = Backendless.Persistence.of( Agenda );
            dataStore.save( current_modified_object ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Edit");  SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Volontario...");
            OnBack();
        } else {
            alert("Compila i campi Materia e Data");
        };
    } else if (selection == "Promemoria") {
        var pro_text = document.getElementById("text-field").value;
        var pro_date = document.getElementById("date-field").value;
        if (pro_text != "" && pro_date != "") {
            current_modified_object.text = pro_text;
            current_modified_object.data = pro_date;
            var dataStore = Backendless.Persistence.of( Agenda );
            dataStore.save( current_modified_object ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Edit"); SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Promemoria...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    } else if (selection == "Evento") {
        var event_title = document.getElementById("title-field").value;
        var event_text = document.getElementById("text-field").value;
        var event_date = document.getElementById("date-field").value;
            var event_startH = document.getElementById("startH-field").value;
            var event_startM = document.getElementById("startM-field").value;
        var event_start = event_startH + ":" + event_startM;
            var event_endH = document.getElementById("endH-field").value;
            var event_endM = document.getElementById("endM-field").value;
        var event_end = event_endH + ":" + event_endM;
        var event_place = document.getElementById("place-field").value;
        var event_price = document.getElementById("quota-field").value;
        var event_auth = document.getElementById("autorizzazione-field").checked;
        var event_attendees = "";
        for (var ea_turn = 0; ea_turn < 29; ea_turn++ ) {
            var current_person_id = "" + ea_turn;
            var current_person_choice = document.getElementById(current_person_id).checked;
            if (current_person_choice) {
                event_attendees = event_attendees + "1";
            } else {
                event_attendees = event_attendees + "0";
            };
        };
        if (event_title != "" && event_date != "" && event_place != "" && event_price != "" && (event_startH != "" || event_startM != "" || event_endH != "" || event_endM != "" )) {
            current_modified_object.title = event_title;
            current_modified_object.text = event_text;
            current_modified_object.data = event_date;
            current_modified_object.start_time = event_start;
            current_modified_object.start_hour = event_startH;
            current_modified_object.start_min = event_startM;
            current_modified_object.end_time = event_end;
            current_modified_object.end_hour = event_endH;
            current_modified_object.end_min = event_endM;
            current_modified_object.place = event_place;
            current_modified_object.quota = event_price;
            current_modified_object.check_autorizzazione = event_auth;
            current_modified_object.partecipanti = event_attendees;
            var dataStore = Backendless.Persistence.of( Agenda );
            dataStore.save( current_modified_object ).then( function(result) { CreateAgenda(); try{PingEdit(result.objectId,"agenda")}catch(e){}; SendTransmission(result.objectId,"Agenda","Edit"); SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
            DisplayBanner(bannerID, "Aggiorno Evento...");
            OnBack();
        } else {
            alert("Compila tutti i campi");
        };
    }  else if (selection == "Wiki") {
            var wiki_title = document.getElementById("title-field").value;
            var wiki_subject = document.getElementById("subject").value;
            if(wiki_title != "" && wiki_subject != "materia" ) {
                var nwp = document.getElementById("wiki-html-view").innerHTML.replace(/à/g, "&agrave;").replace(/á/g, "&aacute;").replace(/è/g, "&egrave;").replace(/é/g, "&eacute;").replace(/ì/g, "&igrave;").replace(/í/g, "&iacute;").replace(/ò/g, "&ograve;").replace(/ó/g, "&oacute;").replace(/ù/g, "&ugrave;").replace(/ú/g, "&uacute;").replace(/À/g, "&Agrave;").replace(/Á/g, "&Aacute;").replace(/È/g, "&Egrave;").replace(/É/g, "&Eacute;").replace(/Ì/g, "&Igrave;").replace(/Í/g, "&Iacute;").replace(/Ò/g, "&Ograve;").replace(/Ó/g, "&Oacute;").replace(/Ù/g, "&Ugrave;").replace(/Ú/g, "&Uacute;").replace(/€/g, "&euro;");
                var filename = current_modified_object.url.slice(current_modified_object.url.lastIndexOf("/") + 1,current_modified_object.url.lastIndexOf('"'));
                var byteArray = btoa(nwp);
                var xhr = new XMLHttpRequest();
                var type = 'PUT';
                var url  = 'https://api.backendless.com/v1/files/binary/web/wiki/' + filename + '?overwrite=true';
                xhr.onload = function() {
                    current_modified_object.title = wiki_title;
                    current_modified_object.subject = wiki_subject;
                    var dataStore = Backendless.Persistence.of( Wiki );
                    dataStore.save( current_modified_object ).then( function(result) { try{PingEdit(result.objectId,"wiki")}catch(e){}; SendTransmission(result.objectId,"Wiki","Edit"); if ( !jQuery.isEmptyObject(wikiStorage) ) { wikiStorage.unshift(result); };  SuccessBanner(bannerID);  }).catch( function(err) { ErrorBanner(bannerID) } );
                };
                xhr.onerror = function(e) { ErrorBanner(bannerID) };
                xhr.open(type, url, true);
                xhr.setRequestHeader('application-id', 'EFCE3663-EC61-9735-FF32-1297E1FF6E00');
                xhr.setRequestHeader('secret-key', '3EA08A93-A950-6938-FF02-AF6D04B17200');
                xhr.setRequestHeader('Content-Type', 'text/plain');
                xhr.setRequestHeader('application-type', 'REST');
                xhr.setRequestHeader('user-token', JSON.parse(localStorage["Backendless"].replace("user-token","userToken")).userToken);
                xhr.send(byteArray);
                DisplayBanner(bannerID, "Aggiorno Pagina...");
                OnBack();
            } else {
                alert("Compila i campi Titolo e Materia");
            };
    } else if (selection == "no-selection") {
        alert("Prima seleziona cosa vuoi pubblicare e compila i campi");
    } else {
        alert("Errore, riprova");
    };
  } else {
      alert("Connettiti ad Internet");
  };
};
// Search Script
var OnSearch = function() {
    var searchCond = document.getElementById("search-field").value;
    if(searchCond != "") {
        document.getElementById("c-feed").style.display = "none";
        document.getElementById("feedpub").style.display = "none";
        document.getElementById("search-abb").style.display = "flex";
        document.getElementById("sabb-text").innerText = "Carico...";
        var query = new Backendless.DataQuery(); query.condition = "url LIKE '%" + searchCond + "%' OR text LIKE '%" + searchCond + "%' OR type LIKE '%" + searchCond + "%' OR title LIKE '%" + searchCond + "%'"; query.options = {pageSize: 10};
        Backendless.Persistence.of( Feed ).find(query).then(function(result){
            if(document.getElementById("search-field").value == searchCond) {
                document.getElementById("c-search").innerHTML = '<div id="cs-load-more" class="c-loader" onclick="SetLoader(' + "'search'" + ');LoadNext(' + "'search'" + ');"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>'; tempSearch = result; ResetLoader("search");
                if(result.totalObjects == "1") {var rightWord = " Elemento"} else {var rightWord = " Elementi"};
                document.getElementById("sabb-text").innerText = "" + result.totalObjects + rightWord; 
                if(document.getElementById("search-field").value == searchCond) { PushFeed(result.data.reverse(), "Search"); feedStorage=result.data.concat(feedStorage); }; document.getElementById("c-search").style.display = "block";
            };
        }).catch(function(){});
    } else {
        document.getElementById("c-search").innerHTML = "";
        document.getElementById("c-search").style.display = "none";
        document.getElementById("c-feed").style.display = "block";
        document.getElementById("feedpub").style.display = "block";
        document.getElementById("search-abb").style.display = "none";
    };    
};
var OnAbortSearch = function() {
    document.getElementById("search-field").value = "";
    OnSearch();
};
var OnWikiSearch = function() {
    var searchCond = document.getElementById("search-wiki").value;
    if(searchCond != "") {
        document.getElementById("c-wiki").style.display = "none";
        document.getElementById("wikipub").style.display = "none";
        document.getElementById("wiki-search-abb").style.display = "flex";
        document.getElementById("wsabb-text").innerText = "Carico...";
        var query = new Backendless.DataQuery(); query.condition = "subject LIKE '%" + searchCond + "%' OR title LIKE '%" + searchCond + "%'"; query.options = {pageSize: 10};
        Backendless.Persistence.of( Wiki ).find(query).then(function(result){
            if(document.getElementById("search-wiki").value == searchCond) {
                document.getElementById("cw-search").innerHTML = '<div id="cws-load-more" class="c-loader" onclick="SetLoader(' + "'wiki-search'" + ');LoadNext(' + "'wiki-search'" + ');"><div style="">CARICA DI PIÙ</div><img src="assets/icons/arrow-black.svg" style=""><span style="-webkit-filter: invert(100%);filter: invert(100%);">' + svgLoader + '</span></div>'; tempWikiSearch = result; ResetLoader("wiki-search");
                if(result.totalObjects == "1") {var rightWord = " Elemento"} else {var rightWord = " Elementi"};
                document.getElementById("wsabb-text").innerText = "" + result.totalObjects + rightWord; 
                if(document.getElementById("search-wiki").value == searchCond) { PushWikiSearch(result.data, "Prepend"); wikiStorage=result.data.concat(wikiStorage); }; document.getElementById("cw-search").style.display = "block";
            };
        }).catch(function(){});
    } else {
        document.getElementById("cw-search").innerHTML = "";
        document.getElementById("cw-search").style.display = "none";
        document.getElementById("c-wiki").style.display = "block";
        document.getElementById("wikipub").style.display = "block";
        document.getElementById("wiki-search-abb").style.display = "none";
    };    
};
var OnAbortWikiSearch = function() {
    document.getElementById("search-wiki").value = "";
    OnWikiSearch();
};
// Delete Script
var DeleteElement = function(table) {
    if (confirm("Sei sicuro di voler eliminare l'elemento?")) {
        var dataStore; var index_to_get_rid_of = -1; var fedeleid = current_modified_object.objectId; var bannerID = "" + new Date().getTime();
        switch(table) { case "feed": dataStore = Backendless.Persistence.of( Feed ); for (var item = 0, item_limit=feedStorage.length; item < item_limit; item++) { var current_item_id = feedStorage[item].objectId; if (current_item_id == fedeleid) { index_to_get_rid_of = item; }; }; break; case "agenda": dataStore = Backendless.Persistence.of( Agenda ); break;};
        dataStore.remove( current_modified_object ).then( function() { switch(table) { case "feed": document.getElementById("c-feed").removeChild(document.getElementById(fedeleid)); feedStorage.splice(index_to_get_rid_of,1); SendTransmission(fedeleid,"Feed","Delete"); break; case "agenda":  CreateAgenda(); SendTransmission(fedeleid,"Agenda","Delete"); break;}; if(location.hash.slice(0,8) == "#content"){OnBack()}; SuccessBanner(bannerID); }).catch(function(err) { ErrorBanner(bannerID) });
        DisplayBanner(bannerID, "Elimino Elemento...");
        OnBack();
    };
};
var DeleteFile = function(file_path, id) {
    if (confirm("Sei sicuro di voler eliminare il file?")) {
        var index_to_get_rid_of = 0;
        for (var item = 0, item_limit=feedStorage.length; item < item_limit; item++) {
            var current_item_id = feedStorage[item].objectId;
            if (id == current_item_id) {
                index_to_get_rid_of = item;
                var current_item = feedStorage[item];
                current_modified_object = current_item;
            };
        };
        var bannerID = "" + new Date().getTime();
        Backendless.Files.remove( file_path ).then(function(){Backendless.Persistence.of( Feed ).remove( current_modified_object ).then(function(){var fedeleid = current_modified_object.objectId;document.getElementById("c-feed").removeChild(document.getElementById(fedeleid));feedStorage.splice(index_to_get_rid_of, 1);}).catch(function(err) { ErrorBanner(bannerID) });}).catch(function(err) { ErrorBanner(bannerID) });
        DisplayBanner(bannerID, "Elimino File...");
    };
};

// Info Page Script
var PingView = function(vId,vTable) {
    if(PingViewAvaileble) {
        PingViewAvaileble = false;
        var query = new Backendless.DataQuery(); query.condition = "ownerId = '" + LoggedUser.ownerId + "' AND related_id = '" + vId + "' AND table = '" + vTable + "'";
        Backendless.Persistence.of( Visualizzazioni ).find(query).then(function(result){ if(result.data.length == 0) { Backendless.Persistence.of( Visualizzazioni ).save( new Visualizzazioni( { related_id: vId, table: vTable } ) ).then(function() {PingViewAvaileble=true}).catch(function(e){}); } else {PingViewAvaileble=true}; }).catch(function(e){});
    };
};
var PingEdit = function(vId,vTable) {
    var query = new Backendless.DataQuery(); query.condition = "ownerId = '" + LoggedUser.ownerId + "' AND related_id = '" + vId + "' AND table = '" + vTable + "'";
    Backendless.Persistence.of( Modifiche ).find(query).then(function(result){ if(result.data.length == 0) { Backendless.Persistence.of( Modifiche ).save( new Visualizzazioni( { related_id: vId, table: vTable } ) ).then().catch(function(e){}); } else {}; }).catch(function(e){});
};

// Settings Script
var ToggleUpdateInfo = function() {
    $("#show-user-info").fadeToggle(0);
    $("#update-user-info").fadeToggle(0);
    document.getElementById("first_name-field").value = document.getElementById("set-name").innerText;
    document.getElementById("last_name-field").value = document.getElementById("set-surname").innerText;
    document.getElementById("email-field").value = document.getElementById("settings-email").innerText;
};
var UpdateInfo = function() {
  if (navigator.onLine) {
    var bannerID = "" + new Date().getTime();
    var current_first_name = document.getElementById("first_name-field").value;
    var current_last_name = document.getElementById("last_name-field").value;
    var current_email = document.getElementById("email-field").value;
    if (current_first_name != "" && current_last_name != "" && current_email != "") {
        Backendless.UserService.getCurrentUser().then(function(result){result.first_name = current_first_name; result.last_name = current_last_name; result.email = current_email; Backendless.UserService.update( result ).then(function(){SuccessBanner(bannerID); location.reload();}).catch(function(err){ErrorBanner(bannerID); if(err.code == 3040 || err.code == 8023) {alert("Email non valida");}});}).catch(function(err){ErrorBanner(bannerID)});
        DisplayBanner(bannerID,"Aggiorno impostazioni...");
    } else {
        alert("Compita tutti i campi di testo");
    };
  } else {
      alert("Connettiti ad Internet");
  };
};
var RequestStino = function() {
  if (navigator.onLine) {
    var bannerID = "" + new Date().getTime();
    Backendless.UserService.getCurrentUser().then(function(result){var current_identity = result.name;Backendless.UserService.restorePassword(current_identity).then(function(){SuccessBanner(bannerID); alert("Email di recupero password correttamente spedta a " + current_identity); LogOut();}).catch(function(err){ErrorBanner(bannerID);});}).catch(function(err){ErrorBanner(bannerID);});
    DisplayBanner(bannerID,"Richiedo Recupero...");
  } else {
      alert("Connettiti ad Internet");
  };
};
var FileOnOff = function() {
  if (navigator.onLine) {
    var bannerID = "" + new Date().getTime();
    var choice = document.getElementById("notify-file").checked;
    if(choice) { var revertChoice = false} else { var revertChoice = true};
    document.getElementById("notify-file").disabled = true;
    Backendless.UserService.getCurrentUser().then(function(result) { result.receiveFiles = choice; Backendless.UserService.update( result ).then(function(){document.getElementById("notify-file").disabled = false;SuccessBanner(bannerID);}).catch(function(err){document.getElementById("notify-file").disabled = false; document.getElementById("notify-file").checked = revertChoice; ErrorBanner(bannerID)});}).catch(function(err){document.getElementById("notify-file").disabled = false; document.getElementById("notify-file").checked = revertChoice; ErrorBanner(bannerID)});
    DisplayBanner(bannerID,"Aggiorno impostazioni...");
  } else {
      alert("Connettiti ad Internet");
  };
};
var AwarenessOnOff = function() {
  if (navigator.onLine) {
    var bannerID = "" + new Date().getTime();
    var choice = document.getElementById("awareness-check").checked;
    if(choice) { var revertChoice = false} else { var revertChoice = true};
    document.getElementById("awareness-check").disabled = true;
    Backendless.UserService.getCurrentUser().then(function(result) { result.awareness = choice; Backendless.UserService.update( result ).then(function(){document.getElementById("awareness-check").disabled = false; SuccessBanner(bannerID);location.reload();}).catch(function(err){document.getElementById("awareness-check").disabled = false; document.getElementById("awareness-check").checked = revertChoice; ErrorBanner(bannerID)});}).catch(function(err){document.getElementById("awareness-check").disabled = false; document.getElementById("awareness-check").checked = revertChoice; ErrorBanner(bannerID)});
    DisplayBanner(bannerID,"Aggiorno impostazioni...");
  } else {
      alert("Connettiti ad Internet");
  };
};

// Notifiche e RSS
var SendNotification = function(currentElement, bannerID, custo_title, custo_text, custo_url, answerReciever) {
    var title, content, link; var alertOK = true; var rssOK = true; var bannerOK = true; var alertFinished = false; var rssFinished = false; var notificationRelation = "!=";
    if(currentElement == null) { currentElement = { type: "Custom", author_username : LoggedUser.name }};
    if(currentElement.text == "") {currentElement.text = "Contenuto non disponibile"};
    switch(currentElement.type) {
        case "Notizia": title = "Notizia da " + currentElement.author_fullname + ": '" + currentElement.title + "'"; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=feed&id=" + currentElement.objectId; break;
        case "Domanda": title = "Domanda da " + currentElement.author_fullname ; content = currentElement.title; link = "http://www.ilmovnino.tk/#content=feed&id=" + currentElement.objectId; break;
        case "Link": title = "Link da " + currentElement.author_fullname + ": '" + currentElement.title + "'"; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=feed&id=" + currentElement.objectId; break;
        case "File": title = "File da " + currentElement.author_fullname + ": '" + currentElement.title + "'"; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=feed&id=" + currentElement.objectId; break;
        case "Youtube": title = "Youtube da " + currentElement.author_fullname + ": '" + currentElement.title + "'"; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=feed&id=" + currentElement.objectId; break;
        case "Compito": title = "Compito da " + currentElement.author_fullname + ": " + currentElement.subject.capitalizeFirstLetter() + " per il " + currentElement.data; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=agenda&id=" + currentElement.objectId; break;
        case "Valutazione": title = "Valutazione da " + currentElement.author_fullname + ": " + currentElement.subject.capitalizeFirstLetter() + " per il " + currentElement.data; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=agenda&id=" + currentElement.objectId; break;
        case "Volontario": title = currentElement.author_fullname + " è volontario di " + currentElement.subject.capitalizeFirstLetter() + " per il " + currentElement.data; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=agenda&id=" + currentElement.objectId; break;
        case "Promemoria": title = "Promemoria da " + currentElement.author_fullname + " per il " + currentElement.data; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=agenda&id=" + currentElement.objectId; break;
        case "Evento": title = "Evento da " + currentElement.author_fullname + ": '" + currentElement.title + "' per il " + currentElement.data; content = currentElement.text; link = "http://www.ilmovnino.tk/#content=agenda&id=" + currentElement.objectId; break;
        case "Wiki": title = "Pagina da " + currentElement.author_fullname + " di " + currentElement.subject.capitalizeFirstLetter(); content = currentElement.title; link = "http://www.ilmovnino.tk/#content=wiki&id=" + currentElement.objectId; break;
        case "Custom": title = custo_title; content = custo_text; link = custo_url; bannerOK = false; if(answerReciever!=null){notificationRelation = "=";currentElement.author_username = answerReciever; rssOK = false;}; break;
        default: alertOK = false; rssOK = false; break;
    };
    if(alertOK) {
        var xhr  = new XMLHttpRequest();
        var type = 'POST';
        var url  = 'https://onesignal.com/api/v1/notifications';
        xhr.onload = function() {
            alertFinished = true;
            if(rssFinished && bannerOK) {
                SuccessBanner(bannerID);
            };
        };
        xhr.onerror = function (e) {
            alertFinished = true;
            if(rssFinished && bannerOK) {
                SuccessBanner(bannerID);
            };
            console.error(xhr.statusText);
        };
        xhr.open(type, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Basic MzI5Mjc3NTYtYzA3NS00Mjg1LWE0MGEtMjY3NTlkYzdkYWM1');
        var message = { 
            app_id: "c9bdb421-93af-44e4-b300-b1fde26ddf50",
            headings: {"en": title},
            contents: {"en": content},
            url: link,
            isAnyWeb: true,
            tags: [{"key": "username", "relation": notificationRelation, "value": currentElement.author_username}],
            included_segments: ["All"]
        };
        message = JSON.stringify(message);
        xhr.send(message);
    };
    if(rssOK) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.backendless.com/efce3663-ec61-9735-ff32-1297e1ff6e00/v1/files/web/feed/feed.xml", true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var items = [];
                    var stringItems = [];
                    $(xhr.responseXML).find("item").each(function () {
                        var item = $(this);
                        items.push(item);
					});
                    for(p=0;p<items.length;p++){if(items[p] != undefined){ var tempRSSstring = "<item>" + items[p].context.innerHTML + "</item>"; stringItems.push(tempRSSstring) } };
                    stringItems = stringItems.slice(0,26);
                    var rss = "<?xml version=\"1.0\" encoding=\"utf-8\"?><rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\"><channel><title>ilmovnino.tk RSS</title><atom:link href=\"http://beta.ilmovnino.tk/feed/feed.xml\" rel=\"self\" type=\"application/rss+xml\"/><link>http://ilmovnino.tk/</link><description>\"ilmovnino.tk RSS\" è il feed RSS che propone gli ultimi 25 elementi pubblicati su \"ilmovnino.tk\". Riguardo il sito: \"ilmovnino.tk\" è lo spazio web riservato al 5 Scientifico dove condividere, comunicare, informarsi.</description><item><title><![CDATA[" + title + "]]></title><link><![CDATA[" + link + "]]></link><guid><![CDATA[" + link + "]]></guid><pubDate>" + new Date(currentElement.created).toUTCString() + "</pubDate><description><![CDATA[" + content + "]]></description></item>" + stringItems.join("") + "</channel></rss>";
                    var byteArray = new Blob( [rss] ); 
                    Backendless.Files.saveFile( "/web/feed", "feed.xml", byteArray, true ).then(function(result){ rssFinished = true;if(alertFinished && bannerOK) { SuccessBanner(bannerID); }; }).catch(function(err){ rssFinished = true;if(alertFinished && bannerOK) { SuccessBanner(bannerID); }; console.log(err) });
                } else {
                    rssFinished = true;if(alertFinished) { SuccessBanner(bannerID); };
                }
            }
        };
        xhr.onerror = function (e) {
            rssFinished = true;if(alertFinished) { SuccessBanner(bannerID); };
        };
        xhr.send(null);
    }; 
};

var DisplayBanner = function(id, text) {
    $("#banner-container").append('<div id="' + id + '" style="height: 1.8em;width: 100vw;background-color: rgba(0, 0, 0, 0.5);display: flex;justify-content: space-between;align-items: center;"><div style="margin-left: 5%;color: rgba(255, 255, 255, 0.7);">' + text + '</div><svg width="104px" height="104px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-spin" style="height: 20px;width: 20px;margin-right: 5%;"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g transform="translate(50 50)"><g transform="rotate(0) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(45) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.12s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.12s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(90) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.25s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.25s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(135) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.37s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.37s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(180) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.5s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.5s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(225) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.62s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.62s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(270) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.75s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.75s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g><g transform="rotate(315) translate(34 0)"><circle cx="0" cy="0" r="8" fill="#ffffff"><animate attributeName="opacity" from="1" to="0.1" begin="0.87s" dur="1s" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="scale" from="1.5" to="1" begin="0.87s" dur="1s" repeatCount="indefinite"></animateTransform></circle></g></g></svg></div>');
};
var SuccessBanner = function(id) {
    document.getElementById(id).style.backgroundColor = 'rgba(0, 100, 0, 0.5)';
    document.getElementById(id).innerHTML = '<div style="margin-left: 5%;color: rgba(255, 255, 255, 0.7);">Fatto</div><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MCA0OTAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MCA0OTA7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBvbHlnb24gcG9pbnRzPSI0NTIuMjUzLDI4LjMyNiAxOTcuODMxLDM5NC42NzQgMjkuMDQ0LDI1Ni44NzUgMCwyOTIuNDY5IDIwNy4yNTMsNDYxLjY3NCA0OTAsNTQuNTI4ICIgZmlsbD0iI0ZGRkZGRiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" style="height: 20px;width: 20px;margin-right: 5%;">';
    setTimeout(function(){ DestroyBanner(id) }, 3000);
};
var ErrorBanner = function(id) {
    document.getElementById(id).style.backgroundColor = 'rgba(100, 0, 0, 0.5)';
    document.getElementById(id).innerHTML = '<div style="margin-left: 5%;color: rgba(255, 255, 255, 0.7);">Errore</div><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5NC45OTUgMjk0Ljk5NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk0Ljk5NSAyOTQuOTk1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnPgoJPHBhdGggZD0iTTI5MS44NzQsMjQ4LjI3OUwxNjUuNjA1LDI2LjUyNmMtNC4wMDctNy4wMzctMTAuNzc2LTExLjI2LTE4LjEwNy0xMS4yNnMtMTQuMTAxLDQuMjAyLTE4LjEwNywxMS4yMzlMMy4xMjEsMjQ4LjIzOCAgIGMtMy45NzksNi45ODktNC4xNjQsMTUuMDEzLTAuNDkzLDIxLjMyNmMzLjY3LDYuMzEzLDEwLjY2MywxMC4xNjUsMTguNzA1LDEwLjE2NWgyNTIuMzI5YzguMDQyLDAsMTUuMDM1LTMuODUyLDE4LjcwNS0xMC4xNjUgICBDMjk2LjAzOCwyNjMuMjUxLDI5NS44NTQsMjU1LjI2OCwyOTEuODc0LDI0OC4yNzl6IE0xNDYuNjY1LDg2LjIyOWM5LjY2NSwwLDE3LjUsNy44MzUsMTcuNSwxNy41djYzYzAsOS42NjUtNy44MzUsMTcuNS0xNy41LDE3LjUgICBjLTkuNjY1LDAtMTcuNS03LjgzNS0xNy41LTE3LjV2LTYzQzEyOS4xNjUsOTQuMDY0LDEzNyw4Ni4yMjksMTQ2LjY2NSw4Ni4yMjl6IE0xNDcuNDk4LDIwNC4wMDVjOS42NjUsMCwxNy41LDcuODM1LDE3LjUsMTcuNSAgIGMwLDkuNjY1LTcuODM1LDE3LjUtMTcuNSwxNy41Yy05LjY2NSwwLTE3LjUtNy44MzUtMTcuNS0xNy41QzEyOS45OTgsMjExLjg0LDEzNy44MzMsMjA0LjAwNSwxNDcuNDk4LDIwNC4wMDV6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" style="height: 20px;width: 20px;margin-right: 5%;">'
    setTimeout(function(){ DestroyBanner(id) }, 3000);
};
var DestroyBanner = function(id) {
    document.getElementById("banner-container").removeChild(document.getElementById(id));
};
var TransmissionBanner = function(text,url) {
    var id = "" + new Date().getTime();
    $("#banner-container").append('<a href="' + url + '" id="' + id + '" onclick="DestroyBanner(' + "'" + id + "'" + ')" class="transmission-link"><div class="transmission-banner" style="height: 1.8em;width: 100vw;background-color: rgba(0, 0, 0, 0.5);display: flex;justify-content: space-between;align-items: center;"><div style="margin-left: 5%;color: rgba(255, 255, 255, 0.7);">' + text + '</div><div></div></div></a>');
    setTimeout(function(){ try{DestroyBanner(id) }catch(e){} }, 4000);
};

//Datepicker Stuff
var OnDatepickerShow = function() {
    $( "#agenda-field" ).blur();
    $( "#date-field" ).blur();
    if (blurwithcss) {
        $("#wallpaper").css("-webkit-filter", "brightness(100%) blur(20px)");
        $("#wallpaper").css("filter", "brightness(100%) blur(20px)");
    } else {
        $("#wallpaper").css("-webkit-filter", "brightness(100%)");
        $("#wallpaper").css("filter", "brightness(100%)");
    };
    $("#page-container").css("-webkit-filter", "brightness(40%) blur(1px)");
    $("#page-container").css("filter", "brightness(40%) blur(1px)");
    $("#datepicker-underlayer").css("display", "block");
};
var OnDatepickerHide = function() {
    if (blurwithcss) {
        $("#wallpaper").css("-webkit-filter", "brightness(100%) blur(20px)");
        $("#wallpaper").css("filter", "brightness(100%) blur(20px)");
    } else {
        $("#wallpaper").css("-webkit-filter", "brightness(100%)");
        $("#wallpaper").css("filter", "brightness(100%)");
    };
    $("#page-container").css("-webkit-filter", "brightness(100%)");
    $("#page-container").css("filter", "brightness(100%)");
    $("#datepicker-underlayer").css("display", "none");
};

var BlurTheDP = function() {
    $( "#agenda-field" ).datepicker(hide);
    $( "#date-field" ).datepicker(hide);
};

// Datepicker
$(function() {
    $.datepicker.setDefaults( $.datepicker.regional[ "it" ], {
         beforeShow: function() {
             OnDatepickerShow();
         },
         onClose: function() {
             OnDatepickerHide();
         }
    } );
    $( "#agenda-field" ).datepicker();
    $( "#date-field" ).datepicker();
});
