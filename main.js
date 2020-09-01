
function test(){
  var Number = document.getElementById("namae").value*1;
  document.write("攻撃力と守備力の合計が"+Number+"のモンスター");
  for (var i = 0; i < Card.length; i++) {
    if(Number == Card[i][1] + Card[i][2]){
      document.write("<p>");
      document.write(Card[i][0]);
      document.write("</p>");
    }
  }
  return;
}
