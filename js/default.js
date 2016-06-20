//こたえ
var number = Math.floor(Math.random()*3);

for(answer === number){
var answer = parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください。'));

var message;
if(answer === number){
  message = 'あたりー！';
}else if(answer < number){
  message = 'もう少し大きいよ';
}else if(number < answer){
  message = 'もうすこし小さいよ';
}else{
  message = '0～2のの数字を入力してください';
}

//結果表示
document.getElementById('choice').textContent = message;
}
