function Judge(){

}
Judge.prototype.judge1= function() {
var radioArray1 = document.getElementsByName("judge1");
var radValue = "";
//alert(radioArray1.length);
for(var i=0; i<radioArray1.length; i++) {
//alert(radArr[i].checked+" "+radArr[i].name + " "+ radArr[i].value);
if(radioArray1[i].checked){
radValue = radioArray1[i].value;
}else {
  	radValue === 0;
  }
}
return radValue;
}
Judge.prototype.judge2=function() {
var radioArray2 = document.getElementsByName("judge2");
var radValue2 = "";
//alert(radioArray2.length);
for(var i=0; i<radioArray2.length; i++) {
//alert(radArr[i].checked+" "+radArr[i].name + " "+ radArr[i].value);
if(radioArray2[i].checked){
radValue2 = radioArray2[i].value;
}else {
  	radValue2 === 0;
  }
}
return radValue2;
}

Judge.prototype.getJudgeScore=function() {

	return this.judge2 + this.judge1;
}