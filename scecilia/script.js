// ilmovnino.tk S. Cecilia DV Script
var menuOpened = false;
var player;
var Previous = [];
var PrevPage = "";
var VideoSrcs = { hd: "", sd: ""};
var seekto = null;
var isHD = true;
var intentionallyOn = false;
var countdown;
var busy = false;
var doyes = true;
var mouseover = true;
var scrubbing = false;
function SetKeyUp() {
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(document.getElementById("video").paused) {
            Play();
            setTimeout(function(){ if(!mouseover && !document.getElementById("video").paused) { HideControls() } }, 1000);
        } else {
            Pause();
        };
    };
  };
};
function isHidden(e) { return !( e.offsetWidth || e.offsetHeight || e.getClientRects().length ) };
function DetectMobile() { 
 if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ){ return true; } else { return false; }
};
function DetectiOS() { 
 if( navigator.userAgent.match( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ) ){ return true; } else { return false; }
};
try{document.addEventListener('touchstart', document.getElementsByTagName("body")[0], { passive: true});
}catch(err){};
window.addEventListener("hashchange", function(event){ if((Previous[0] != event.oldURL) && (PrevPage != event.oldURL)) { Previous.unshift(event.oldURL); PrevPage = ""; }; HashFunction() });
function HashFunction(first) {
    HideAnything();
    if (location.hash == "#home") {
        $("header").css("display", "flex");
        $("#home-header").css("display", "flex");
        $("#home").css("display", "block");
        $("footer").css("display", "flex");
    } else if (location.hash == "#scene") {
        $("header").css("display", "flex");
        $("#folder-header").css("display", "flex");
        document.getElementById("fh-title").innerText = "Selezione Scene";
        $("#folder-scene").css("display", "flex");
        $("footer").css("display", "flex");
    } else if (location.hash == "#extra") {
        $("header").css("display", "flex");
        $("#folder-header").css("display", "flex");
        document.getElementById("fh-title").innerText = "Extra";
        $("#folder-extra").css("display", "flex");
        $("footer").css("display", "flex");
    } else if (location.hash.slice(0,6) == "#watch") {
        if(!first) { window.history.go(-1) };
    } else {
        location.hash = "home";
    };
    AnimateShow();
};
function HideAnything() {
    //$("header").animateCss("fadeOut");$("#container").animateCss("fadeOut");$("footer").animateCss("fadeOut");
    $("header").css("display", "none");
    $("#home-header").css("display", "none");
    $("#folder-header").css("display", "none");
    $("#home").css("display", "none");
    $("#folder-scene").css("display", "none");
    $("#folder-extra").css("display", "none");
    $("#player").css("display", "none");
    $("footer").css("display", "none");
    $("#video-controls").fadeOut(0);
    $("#back-gradient").fadeOut(0);
    window.scrollTo(0, 0);
};
function AnimateShow() { $("header").animateCss("fadeIn");$("#container").animateCss("fadeIn"); };
function Start() {
    if(!DetectMobile()) {
        document.getElementById("share-menu").removeChild(document.getElementById("toremifnotm"));
        document.getElementById("share-menu").style.maxHeight = "9.6em";
    };
    player = new Gapless5("background", {
        tracks: ["background.mp3"],
        loop: true,
        playOnLoad: true
    });
    if( navigator.userAgent.match(/iPad/i) ) { document.getElementsByTagName("body")[0].style.minHeight = "95vh"; document.getElementById("video").style.height = "93vh"; $("#closemenu ,#home ,.center-body ,.folder-container").addClass("iPad"); $("#container").addClass("miniPad"); };
    HashFunction(true);
    $("#video-controls").removeClass("firstload"); $("#back-gradient").removeClass("firstload");
    try { SetKeyUp() } catch(e) {};
    console.log("%cil%cmov%cnino%c.tk%c DV", "color:black;font-size:5em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:bolder;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:bolder;font-family:NinoFont, Arial, sans-serif;opacity:0.7", "color:black;font-size:5em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7");
    console.log("%cSales Festival Night - Serata di S. Cecilia", "color:black;font-size:2em;font-weight:lighter;font-family:NinoFont, Arial, sans-serif;opacity:0.7");
    console.log("%cAttenzione! Questa è una funzionalità per sviluppatori, per qualsiasi problema o richiesta rivolgiti all'amministratore del sito", "font-size:1.8em;font-weight:bolder;color:darkred;font-family:NinoFont, Arial, sans-serif;opacity:0.7");
    var testify = false; try { if(CSS) { testify = !CSS.supports('display', 'flex') } } catch(e) {};
    if (testify) {
        window.location = "fallback.html";
    } else if (( navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ) && !('playsInline' in document.createElement('video'))) {
        GetFallback();
    } else if ('ontouchstart' in window) {
        document.getElementById("player").addEventListener("mouseenter", function(event){ ShowControls(); mouseover = true; });
        document.getElementById("player").addEventListener("mouseleave", function(event){ HideControls(); mouseover = false; });
        document.getElementById("video").addEventListener("touchstart", function(event){ ShowControls() });
        document.getElementById("touchstart").addEventListener("touchstart", function(event){ HideControls() });
    } else if ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
        if(window.PointerEvent) {
            document.getElementById("player").addEventListener("pointerenter", function(event){ if(event.pointerType == "mouse") { ShowControls(); mouseover = true; } });
            document.getElementById("player").addEventListener("pointerleave", function(event){ if(event.pointerType == "mouse") { HideControls(); mouseover = false; } });
            document.getElementById("video").addEventListener("pointerdown", function(event){ if(event.pointerType == "touch") { ShowControls() } });
            document.getElementById("touchstart").addEventListener("pointerdown", function(event){ if(event.pointerType == "touch") { HideControls() } });
        } else if (window.MSPointerEvent || window.navigator.msPointerEnabled) {
            document.getElementById("player").addEventListener("MSPointerEnter", function(event){ if(event.pointerType == "mouse") { ShowControls(); mouseover = true; } });
            document.getElementById("player").addEventListener("MSPointerLeave", function(event){ if(event.pointerType == "mouse") { HideControls(); mouseover = false; } });
            document.getElementById("video").addEventListener("MSPointerDown", function(event){ if(event.pointerType == "touch") { ShowControls() } });
            document.getElementById("touchstart").addEventListener("MSPointerDown", function(event){ if(event.pointerType == "touch") { HideControls() } });
        } else {
            GetFallback();
        };
    } else {
        document.getElementById("player").addEventListener("mouseenter", function(event){ ShowControls(); mouseover = true; });
        document.getElementById("player").addEventListener("mouseleave", function(event){ HideControls(); mouseover = false; });
    };
    document.addEventListener("mozfullscreenchange", function( event ) {
        if ( document.mozFullScreen ) {
            document.getElementById("video").setAttribute("controls", "controls");
        } else {
            document.getElementById("video").removeAttribute("controls");
        };
    }, false);
    window.addEventListener("contextmenu", function(event){ if(event.preventDefault != undefined) event.preventDefault(); if(event.stopPropagation != undefined) event.stopPropagation(); event.target.click() });
    location.hash = "home";
};
function GetFallback() {
    $("#h-backVideo").remove();
    $("#def-controls").remove();
    $('#garbage').append( $('#back-gradient') );
    $('#garbage').append( $('#loader') );
    $('#garbage').append( $('#video-controls') );
    $("#video").css("top", "auto");
    $("#video").css("height", "-webkit-calc(95vh - 4em)");
    $("#video").css("height", "calc(95vh - 4em)");
    document.getElementById("video").setAttribute("controls", "");
    document.getElementById("fallback-controls").innerHTML = '<div title="Indietro" class="h-button" onclick="ExitPlay()" ontouchstart="Stopp(event)" id="h-backVideo"></div><div id="def-controls" style="width: auto;"><div id="h-hd" onclick="SwitchDef()" ontouchstart="Stopp(event)" style="display: none;"><div class="hhs1">HD</div><div class="hhs2">SD</div></div><div id="h-sd" onclick="SwitchDef()" ontouchstart="Stopp(event)" style="display: none;"><div class="hhs1">SD</div><div class="hhs2">HD</div></div></div><div title="Scarica" class="h-button" onclick="Download()" ontouchstart="Stopp(event)" id="h-backVideo" style="background-image: url(download.svg);"></div>';
};
function Download() { if("download" in document.createElement("a")) { document.getElementById("a").href = document.getElementById("video").src; document.getElementById("a").click() } else { window.open( document.getElementById("video").src ) } };
function iOSaudio() {
    if(DetectiOS()) { player.stop(); $("#h-volume1").css("background-image", "url('volume-off.svg')"); $("#h-volume2").css("background-image", "url('volume-off.svg')"); };
};
function OpenShareMenu() {
    if(!menuOpened) {
        $("#share-menu").fadeToggle(50);
        $("#share-container").toggleClass("sc-selected");
        $("#closemenu").css("display","block");
        menuOpened = true;
    };
};
function CloseShareMenu() {
    if(menuOpened) {
        $("#share-menu").fadeToggle(50);
        $("#share-container").toggleClass("sc-selected");
        $("#closemenu").css("display","none");
        menuOpened = false;
    };
};
function SwitchVolume() {
    if (player.isPlaying()) {
        player.stop();
        $("#h-volume1").css("background-image", "url('volume-off.svg')");
        $("#h-volume2").css("background-image", "url('volume-off.svg')");
    } else {
        player.play();
        $("#h-volume1").css("background-image", "url('volume-up.svg')");
        $("#h-volume2").css("background-image", "url('volume-up.svg')");
    };
};
function Reload() {
    location.reload();
}
function Back() {
    location.hash = "home";
};
function OpenFolder(folder) {
    location.hash = folder;
};
/*$("footer").animateCss("fadeIn");*/

function Play(e, pps) { if(pps && !isHidden(document.getElementById("video-controls"))) { document.getElementById("video").play() } else if (!pps) { document.getElementById("video").play() } };
function Pause(e, pps) { if(pps && !isHidden(document.getElementById("video-controls"))) { document.getElementById("video").pause() } else if (!pps) { document.getElementById("video").pause() } };
function Prev(e) { if(!isHidden(document.getElementById("video-controls"))) { document.getElementById("video").currentTime = document.getElementById("video").currentTime - 30 } };
function Next(e) { if(!isHidden(document.getElementById("video-controls"))) { document.getElementById("video").currentTime = document.getElementById("video").currentTime + 30 } };
function FullOn(e) { if(!isHidden(document.getElementById("video-controls"))) { try { document.getElementById("video").requestFullscreen() } catch(e) { try { document.getElementById("video").webkitRequestFullscreen() } catch(e) { try { document.getElementById("video").mozRequestFullScreen() } catch(e) { try { document.getElementById("video").msRequestFullscreen() } catch(e) { try { document.getElementById("video").webkitEnterFullscreen() } catch(e) { alert("Il tuo browser non supporta lo schermo intero"); } } } } } } };
function UpdateTime() { document.getElementById("time-passed").innerText = new Date(document.getElementById("video").currentTime * 1000).toISOString().substr(11, 8); UpdateDuration(); UpdateScrubBar(); document.getElementById("video").volume = 1; document.getElementById("video").muted = false; document.getElementById("video").playbackRate = 1.0; };
function UpdateDuration() { try { document.getElementById("total-time").innerText = new Date(document.getElementById("video").duration * 1000).toISOString().substr(11, 8); document.getElementById("total-scrub").innerText = new Date(document.getElementById("video").duration * 1000).toISOString().substr(11, 8); /*document.getElementById("scrub").max = document.getElementById("video").duration;*/ } catch(e) {} };
function ExitPlay() { if(!isHidden(document.getElementById("video-controls"))) {
    $("body").removeClass("playing-body");
    Ended();
    $("#player").fadeToggle(150);
    if (intentionallyOn) { SwitchVolume(); intentionallyOn = false; };
    window.history.go(-1);
}};
function SwitchDef() { if(!isHidden(document.getElementById("video-controls"))) {
  if(VideoSrcs.sd != "") {
      Pause();
      $("#loader").css("display", "block");
    var whereToSeek = document.getElementById("video").currentTime;
    if(isHD) {
        $("#h-hd").css("display", "none");
        $("#h-sd").css("display", "block");
        $("#h-sd").animateCss("fadeIn");
        document.getElementById("video").src = VideoSrcs.sd;
        $("#video").one("durationchange", function(){
            document.getElementById("video").currentTime = whereToSeek;
            Play();
        });
        document.getElementById("video").load();
        isHD = false;
    } else {
        $("#h-sd").css("display", "none");
        $("#h-hd").css("display", "block");
        $("#h-hd").animateCss("fadeIn");
        document.getElementById("video").src = VideoSrcs.hd;
        document.getElementById("video").load();
        $("#video").one("durationchange", function(){
            document.getElementById("video").currentTime = whereToSeek;
            Play();
        });
        Play();
        isHD = true;
    };
  };
}};
function WatchVideo(hdef,sdef, where) {
    history.pushState(null, "ilmovnino.tk Player", "#watch");
    ShowControls();
    Paused();
    if (player.isPlaying()) { SwitchVolume(); intentionallyOn = true; };
    $("body").addClass("playing-body");
    $("#loader").css("display", "block");
    if(sdef == null) {
        VideoSrcs = { hd: hdef, sd: ""};
        $("#h-hd").css("display", "none");
        $("#h-sd").css("display", "none");
        document.getElementById("video").src = hdef;
    } else {
        VideoSrcs = { hd: hdef, sd: sdef};
        if(isHD) {
            $("#h-hd").css("display", "block");
            document.getElementById("video").src = hdef;
        } else {
            $("#h-sd").css("display", "block");
            document.getElementById("video").src = sdef;
        };
    };
    document.getElementById("time-passed").innerText = "00:00:00";
    document.getElementById("total-time").innerText = "00:00:00";
    $("#player").fadeToggle(150);
    document.getElementById("video").load();
    UpdateDuration();
    if(where) { seekto = where } else { seekto = null };
};
function AfterWV() { if(seekto != null) { document.getElementById("video").currentTime = seekto } };
function CanPlay() {
    $("#loader").css("display", "none");
    Play()
};
function CannotPlay() {
    $("#loader").css("display", "block");
    Pause()
};
function Playing() {
    doyes = false;
    $("#h-pause").css("display", "block");
    $("#h-play").css("display", "none");
    $("#loader").css("display", "none");
    setTimeout(function(){ doyes = true; }, 101);
};
function Paused() {
    doyes = false;
    $("#h-play").css("display", "block");
    $("#h-pause").css("display", "none");
    ShowControls();
    setTimeout(function(){ doyes = true; }, 101);
};
function Ended() {
    Paused(); document.getElementById("video").src = "empty"; $("#played").css("width", "0%"); document.getElementById("scrub").value = 0; $("#buffered").css("width", "0%"); $("#buffered").css("margin-right", "0%");
};
function ShowControls() {
    if(document.getElementById("video-controls").style.display == "none") {
        $("#video-controls").fadeIn(100);
        $("#back-gradient").fadeIn(100);
        document.getElementById("scrub").removeAttribute("disabled");
    };
};
function HideControls() {
    if(doyes && !scrubbing) {
        $("#video-controls").fadeOut(100);
        $("#back-gradient").fadeOut(100);
        document.getElementById("scrub").setAttribute("disabled", "disabled");
    };
};
function OnScrubInput() {
    $("#real-time").css("display", "none");
    $("#scrub-time").css("display", "flex");
    var cTime = ( parseInt(document.getElementById("scrub").value * parseInt(document.getElementById("video").duration) ) / 100 );
    document.getElementById("scrub-passed").innerText = new Date(cTime * 1000).toISOString().substr(11, 8);
};
function OnScrubDown() {
    scrubbing = true;
};
function OnScrubUp() {
    var cTime = ( parseInt(document.getElementById("scrub").value * parseInt(document.getElementById("video").duration) ) / 100 );
    document.getElementById("video").currentTime = cTime;
    $("#real-time").css("display", "flex");
    $("#scrub-time").css("display", "none");
    scrubbing = false;
};
function UpdateScrubBar() {
    abs = Math.abs;
    var ct = document.getElementById("video").currentTime;
    //var percentage = Math.floor( ( parseInt(document.getElementById("scrub").value * 100 ) / parseInt(document.getElementById("scrub").max) ) );
    var percentage = ( parseInt(ct * 100 ) / parseInt(document.getElementById("video").duration) );
    try { var margin = ( abs(parseInt(document.getElementById("video").buffered.end(0)) - parseInt(document.getElementById("video").duration)) * 100 ) / parseInt(document.getElementById("video").duration ); } catch(e) { var margin = 0 };
    //var width = ( abs(parseInt(document.getElementById("video").buffered.end(0)) - parseInt(document.getElementById("video").buffered.start(0))) * 100 ) / parseInt(document.getElementById("scrub").max );
    var width = abs(parseInt(document.getElementById("video").buffered.end(0)) - parseInt(document.getElementById("video").buffered.start(0)));
    /*if(parseInt(document.getElementById("video").buffered.start(0)) <= ct) {
        width = width - abs(parseInt(document.getElementById("video").buffered.start(0)) - parseInt(ct));
    };*/
    width = ( width * 100 ) / parseInt(document.getElementById("video").duration );
    if(width==0 && percentage == 100) { width = 1 };
    if(( width + percentage + margin) < 105 ) { width += 105 - margin - width - percentage };
    $("#played").css("width",percentage + "%");
    if(!scrubbing) { document.getElementById("scrub").value = percentage };
    $("#buffered").css("width",width + "%");
    $("#buffered").css("margin-right",margin + "%");
};
function Stopp(event) {
    event.stopPropagation();
};
