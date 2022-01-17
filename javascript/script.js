var i = 0;
var j = 0;
const cursor = document.querySelector(".animated-text");
var txt = ['std::cout<<"HelloWorld"<<std::endl;', '> Segmentation fault (core dumped)'];
var element = ['first', 'second'];
var speed = 100;

function triggerText() {
  if (j == 1) {
    cursor.style.setProperty('--primary-animation', 'cursor 0.6s infinite');
    document.getElementById(element[j]).innerHTML = txt[j];
  }
  else if (i > txt[j].length) {
    cursor.style.setProperty('--primary-animation', 'cursor 0s infinite');
    j++;
    setTimeout(triggerText, 3000);
  }
  else {
    document.getElementById(element[j]).innerHTML += txt[j].charAt(i);
    i++;
    if (i > txt[j].length)
      speed = 1500;
    setTimeout(triggerText, speed);
  }
}
