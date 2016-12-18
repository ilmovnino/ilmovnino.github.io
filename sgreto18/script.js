try { if(!CSS.supports('display', 'flex') || !window.FileReader) { window.location = "fallback.html" } } catch(e) { window.location = "fallback.html" };
try { document.addEventListener('touchstart', handler, { passive: true}) } catch(err) { };
window.onbeforeunload = function(e) {
    if (running > 0) {
        if(!e) e = window.event;
        e.cancelBubble = true;
        e.returnValue = "Ci sono ancora " + running + " caricamenti in corso. Sei sicuro di voler uscire?";
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        };
    };
};
var step = 1;
var uploads = [];
var running = 0;
function Back() {
    if (step == 2) {
        var possibility = true;
        if (running > 0) {
            possibility = confirm("Ci sono ancora " + running + " caricamenti in corso. Sei sicuro di voler tornare indietro?");
        };
        if (possibility) {
            document.getElementById("step1").style.display = "block";
            document.getElementById("step2").style.display = "none";
            document.getElementById("back").className = "button disabled";
            document.getElementById("one").style.fontWeight = "bold";
            document.getElementById("two").style.fontWeight = "inherit";
            step = 1;
            window.scrollTo(0, 0);
        };
    } else if (step == 3) {
        document.getElementById("step3").style.display = "none";
        document.getElementById("step2").style.display = "block";
        document.getElementById("forward").className = "button";
        //document.getElementById("forward").style.display = "block";
        //document.getElementById("complete").style.display = "none";
        document.getElementById("two").style.fontWeight = "bold";
        document.getElementById("three").style.fontWeight = "inherit";
        step = 2;
        window.scrollTo(0, 0);
    } else {};
};
function Forward() {
    if (step == 1 && document.getElementById("text").value != "") {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        document.getElementById("back").className = "button";
        document.getElementById("two").style.fontWeight = "bold";
        document.getElementById("one").style.fontWeight = "inherit";
        step = 2;
        window.scrollTo(0, 0);
    } else if (step == 1 && document.getElementById("text").value == "") {
        alert("Scrivi il tuo nome nel campo di testo");
    } else if (step == 2) {
        var possibility = true;
        if (running > 0) {
            possibility = confirm("Ci sono ancora " + running + " caricamenti in corso. Sei sicuro di voler andare avanti?");
        };
        if (possibility) {
            document.getElementById("step3").style.display = "block";
            document.getElementById("step2").style.display = "none";
            document.getElementById("forward").className = "button disabled";
            //document.getElementById("forward").style.display = "none";
            //document.getElementById("complete").style.display = "block";
            document.getElementById("three").style.fontWeight = "bold";
            document.getElementById("two").style.fontWeight = "inherit";
            step = 3;
            window.scrollTo(0, 0);
        };
    } else {}
};
function EnterInText(e) {
    if(e.keyCode == 13) {
        if (document.getElementById("text").value != "") { document.getElementById("text").blur(); Forward() };
        return false;
    } else {
        return true;
    }
};
//function Complete() { window.open('', '_self', ''); window.close(); };
function Drag() {};
function ShowDrag() {
    if (step == 2) { document.getElementById("container").style.opacity = "0.7"; document.getElementById("container").style.filter = "blur(5px)"; document.getElementById("container").style.webkitFilter = "blur(5px)"; document.getElementById("drag").style.display = "flex" } else {};
};
function HideDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("container").style.opacity = ""; document.getElementById("container").style.filter = ""; document.getElementById("container").style.webkitFilter = ""; document.getElementById("drag").style.display = "none";
};
function Add() { document.getElementById("hidden-input").click() };
function UploadFiles() {
    var files = document.getElementById("hidden-input").files;
    if (files.length > 0) {
        for(var i = 0; i < files.length; i++) {
            var my_id = "" + new Date().getTime() + Math.random();
            my_id = my_id.replace(".","");
            var text = encodeURIComponent(document.getElementById("text").value);
            var not_twice = "" + Math.random(); not_twice = not_twice.replace(".",""); not_twice = not_twice.slice(1,6);
            var file_name = document.getElementById("hidden-input").files[i].name;
            file_name = text + "-" + not_twice + "-" + file_name.replace(" ", "%20");
            document.getElementById("upload-list").insertAdjacentHTML('afterbegin', '<div id="' + my_id + '" class="upload-element"><div class="ue-container"><div class="ue-icon"></div><div class="ue-text">' + document.getElementById("hidden-input").files[i].name + '</div></div><div class="loader sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div><div class="suc"></div><div class="err"></div></div>');
            UploadSingleFileFromInput(files[i], file_name, my_id);
        };  
    };
};
function getBuilder(filename, filedata, boundary) {
    var dashdash = '--',
        crlf     = '\r\n',
        builder  = '';

    builder += dashdash;
    builder += boundary;
    builder += crlf;
    builder += 'Content-Disposition: form-data; name="file"';
    builder += '; filename="' + filename + '"';
    builder += crlf;

    builder += 'Content-Type: application/octet-stream';
    builder += crlf;
    builder += crlf;

    builder += filedata;
    builder += crlf;

    builder += dashdash;
    builder += boundary;
    builder += dashdash;
    builder += crlf;

    return builder;
}
function UploadSingleFileFromInput(file, element_name, element_id) {
    var formData = new FormData();
    formData.append(element_name, file);
    var reader = new FileReader();
    reader.onload = function(){
        var binaryString = this.result;
        var boundary    = '-backendless-multipart-form-boundary-' + new Date().getTime();
        var builder = getBuilder(element_name, binaryString, boundary);
        var xhr  = new XMLHttpRequest();
        var type = 'POST';
        var url  = 'https://api.backendless.com/v1/files/web/sent/' + element_name + '?overwrite=true';

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById(element_id).className = "success upload-element";
                console.log(element_id + "success");
                running -= 1;
            } else if (xhr.readyState == 4) {
                document.getElementById(element_id).className = "error upload-element";
                running -= 1;
            };
        };

        xhr.open(type, url, true);

        xhr.setRequestHeader('application-id', 'B86283A8-16A1-82E5-FFEA-CA124622A400');
        xhr.setRequestHeader('secret-key', '527BF298-1013-A5D8-FF77-2E1427795400');
        xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
        xhr.setRequestHeader('application-type', 'REST');

        running += 1;
        xhr.sendAsBinary(builder);
        //uploads.push( { rq: xhr, identifier: element_id });
    };
    reader.readAsBinaryString(file);
};
function UploadSingleFileFromBytes(file, element_name, element_id) {
    var reader = new FileReader();
    reader.onload = function(){
        var arrayBuffer = this.result;
        var xhr  = new XMLHttpRequest();
        var type = 'PUT';
        var url  = 'https://api.backendless.com/v1/files/binary/web/sent/' + element_name + '?overwrite=true';

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById(element_id).className = "success upload-element";
                console.log(element_id + "success");
                running -= 1;
            } else if (xhr.readyState == 4) {
                document.getElementById(element_id).className = "error upload-element";
                running -= 1;
            };
        };

        xhr.open(type, url, true);

        xhr.setRequestHeader('application-id', 'B86283A8-16A1-82E5-FFEA-CA124622A400');
        xhr.setRequestHeader('secret-key', '527BF298-1013-A5D8-FF77-2E1427795400');
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.setRequestHeader('application-type', 'REST');

        running += 1;
        xhr.send(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
};
if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
};
