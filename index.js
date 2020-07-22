var data = [1,2,3,4,5,6,7,8,9];
document.getElementById("gd1").innerHTML = data[0];
document.getElementById("gd2").innerHTML = data[1];
document.getElementById("gd3").innerHTML = data[2];
document.getElementById("gd4").innerHTML = data[3];
document.getElementById("gd5").innerHTML = data[4];
document.getElementById("gd6").innerHTML = data[5];
document.getElementById("gd7").innerHTML = data[6];
document.getElementById("gd8").innerHTML = data[7];
document.getElementById("gd9").innerHTML = data[8];


const orderData = function() {
    document.getElementById("gd1").innerHTML = data[0];
    document.getElementById("gd2").innerHTML = data[1];
    document.getElementById("gd3").innerHTML = data[2];
    document.getElementById("gd4").innerHTML = data[3];
    document.getElementById("gd5").innerHTML = data[4];
    document.getElementById("gd6").innerHTML = data[5];
    document.getElementById("gd7").innerHTML = data[6];
    document.getElementById("gd8").innerHTML = data[7];
    document.getElementById("gd9").innerHTML = data[8];
}




const getShuffle = function() {
    debugger;
    var currIndex = data.length;
    var tempVal;
    var ranIndex;

    while (0 !== currIndex) {
  
      ranIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;
      tempVal = data[currIndex];
      data[currIndex] = data[ranIndex];
      data[ranIndex] = tempVal;
    }
    orderData();

}

const getSort = function() {
    debugger;
    data.sort(function(a,b){return a-b});
    orderData();
}