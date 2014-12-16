function getTotalScore() {
  var score = getScore();
  document.getElementById("myscore").value = score;
}
function getScore() {
  var score = 0;
  var radioArray = document.getElementsByName("1b");
  if(radioArray[1].checked) {
    score += 10;
  }

  var radioArray = document.getElementsByName("2a");
  if(radioArray[0].checked) {
    score += 10;
  }

  var getName =  document.getElementById("uml").value;
  if(getName ==='统一建模语言') {
    score += 10;
  }
  var getObject1 =  document.getElementById("object1").value;
  if(getObject1 === '封装性') {
    score += 10;
  }
  var getObject1 =  document.getElementById("object1").value;
  if(getObject1 === '继承性') {
    score += 10;
  }
  var getObject1 =  document.getElementById("object1").value;
  if(getObject1 === '多态性') {
    score += 10;
  }
  var radioArray = document.getElementsByName("judge1");
  if(radioArray[1].checked) {
    score += 10;
  }
  var radioArray = document.getElementsByName("judge2");
  if(radioArray[0].checked) {
    score += 10;
  }

  var str = document.getElementsByName("box1");
  var arrbox = [];
  for( var i = 0; i < str.length ; i++ ) {
  	if (str[i].checked) {
  	 arrbox.push(str[i].value);	
  	}
  }

  if (arrbox.toString() === 'ABD') {
      score += 10;
    } 

  var str2 = document.getElementsByName("box2");
  var arrbox2 = [];
  for( var i = 0; i < str2.length ; i++ ) {
  	if (str2[i].checked) {
  	 arrbox2.push(str2[i].value);	
  	}
  }	

  if (arrbox2.toString() === 'ABC') {
      score += 10;
  } 
    var text = "模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形"+
    "式。可以是物理实体;可以是某种图形;或者是一种数学表达式";
    var textArea = document.getElementsByName("textarea").value;
    if(textArea === text) {
      score += 20;
    }
    return score;
  }
