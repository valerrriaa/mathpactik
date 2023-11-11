function areaOfTriangle(obj){
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value = s.toFixed(2);
}
areaOfTriangle(res);

function random(obj){
    var min=1*obj.min.value;
    var max=1*obj.max.value;
    var randomNum=Math.floor(Math.random()*(max-min+1))+min;
    obj.res2.value = randomNum; 
}
random(res2);

function equat(obj)
{
 var a=1*obj.a.value;
 var b=1*obj.b.value;
 var c=1*obj.c.value;
 var dis=b*b-4*a*c;
 obj.resultEquation.value = dis; 
 
 
 if(dis>0){
    var x1=(-b+Math.sqrt(dis))/(2*a);
    var x2=(-b-Math.sqrt(dis))/(2*a);
    obj.resultx1.value = x1; 
    obj.resultx2.value = x2; 
    obj.not.value = "2 корня"; 
  
 }
 else if(dis===0)
 {
    var x=-b/(2*a);
    obj.resultx2.value = x; 
    obj.not.value = "1 корень"; 
 }
else{
    obj.not.value = "Нет корней"; 
}
}

equat(resultEquation);
