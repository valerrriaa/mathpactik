function calculatePayment(obj) {
    var st1=1*obj.st1.value;
    var st2=1*obj.st2.value;
    var st3=1*obj.st3.value;
    var p = (st2 / 12) / 100;
    var period = st3 * 12;

    var d = 1 - Math.pow(1 + p, -period);

    var A = st1 * (p / d);
    
    obj.res.value=A;
  }

  calculatePayment(res);

function areaOfTriangle(obj) {
    var st1 = 1*obj.st1.value;
    var st2 = 1*obj.st2.value;
    var resultat=(st1*st2)/2;
    obj.res.value = resultat.toFixed(2); 
}
areaOfTriangle(res);

function randomchik(obj){
    var min=1*obj.min.value;
    var max=1*obj.max.value;
    var numbs=[7,-3,10,23,-100,0,55]
    max=Math.max(...numbs);
    min=Math.min(...numbs);
    obj.max.value = max; 
    obj.min.value = min; 
}
randomchik();