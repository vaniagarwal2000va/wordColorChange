


data = 'JavaScript is a powerful programming language that can create dynamic websites, mobile apps, browser games, server applications, etc. Due to the versatility of this programming language, this language has become the most used programming language in the world.';
words = data.split(' ');
var  colors = [];

var p_tag = document.getElementById('abc');
function setColor(){
  this.colors = words.map(()=>{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#'+ randomColor;
});
}

function applyColor() {
  p_tag.innerHTML = '';
  var html_element = '';
  for(let i=0;i< words.length;i++ ){
    html_element += '<span  style= "color: '+ this.colors[i]+ '">' +words[i]+" " + "</span>"
}

p_tag.innerHTML = html_element
}

var intervalId= '';
intervalId = setInterval(()=>{
  this.setColor();
  this.applyColor();
}, 1000);
console.log(intervalId);

document.addEventListener('click', destroyInterval);

function destroyInterval(){
    clearInterval(intervalId);
}