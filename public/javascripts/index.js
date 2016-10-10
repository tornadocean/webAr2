function get_jsonp() {  
        $.getJSON("map/jsonp?callback=?",  {name : "tornado", time: "34"},
                function(data) {  
                    $('#rjsonp').val('Jsonp info : ' + data.status);  
                });  
    }  
  
function get_json(){  
    var v = $('#rjson').val();
    $.getJSON("map/json", { name: v, time: "2pm" }, 
            function(data) {  
                $('#onegoods').html('Json info : ' + data.status);  
            });  
}  

function loginClick() {
    var v = $('#username').val();
    $.getJSON("map/json", { name: v, time: "2pm" }, 
            function(data) {  
                $('#onegoods').html('Json info : ' + data.status);  
            });  
}