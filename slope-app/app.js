var enter = document.getElementById('btn1');
var clear = document.getElementById('btn2');

var result = document.getElementById('result');
var rise = document.getElementById('rise');
var run = document.getElementById('run');

var x1 = document.getElementById('x1');
var y1 = document.getElementById('y1');
var x2 = document.getElementById('x2');
var y2 = document.getElementById('y2');

enter.addEventListener("click", function() {
    var x1Value = x1.value;
    var y1Value = y1.value;
    var x2Value = x2.value;
    var y2Value = y2.value;
    
    var x1Int = parseInt(x1Value);
    var y1Int = parseInt(y1Value);
    var x2Int = parseInt(x2Value);
    var y2Int = parseInt(y2Value);
    
    var result1 = y2Int - y1Int;
    var result2 = x2Int - x1Int;
    
    result1.toString();
    result2.toString();
    result.innerHTML = "The slope is: " + result1 + "/" + result2;
    rise.innerHTML = "Rise: " + result1;
    run.innerHTML = "Run: " + result2;
});

clear.addEventListener("click", function(){
    x1.value = "";
    y1.value = "";
    x2.value = "";
    y2.value = "";
    
    result.innerHTML = "";
    rise.innerHTML = "";
    run.innerHTML = "";

});
