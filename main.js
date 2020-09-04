fetch("https://script.google.com/macros/s/AKfycbzkro_J56JFQbtbVnWzzokV1WTfBCXSNfg3bzu6iiMokjwmFII/exec",
      {
        method: 'POST',
        body: "起動"
      }
     )

function test(){
  var Number = document.getElementById("namae").value;
  document.write("攻撃力と守備力の合計が"+Number+"のモンスター");
  for (var i = 0; i < Card.length; i++) {
    if(Number*1 == Card[i][1] + Card[i][2]){
      document.write("<p>");
      document.write(Card[i][0]);
      document.write("</p>");
    }
  }
  document.title = "攻撃力と守備力の合計が"+Number+"のモンスター";
  fetch("https://script.google.com/macros/s/AKfycbzkro_J56JFQbtbVnWzzokV1WTfBCXSNfg3bzu6iiMokjwmFII/exec",
        {
          method: 'POST',
          body: Number
        }
       )
  return;
}
