import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_three = [
  { type: "button", id: "3act1", text: "فهم الرسالة المسموعة ", icon: "bi bi-gear" },
  { type: "button", id: "3act2", text: "المقارنة السمعية للأصوات المتطابقة في بدايه الكلمة ", icon: "bi bi-gear" },
  { type: "button", id: "3act3", text: "المقارنة السمعية للأصوات المتطابقة في نهاية الكلمة ", icon: "bi bi-gear" },
  { type: "button", id: "3act4", text: "التعرف على من لا ينتمي ", icon: "bi bi-gear" },
  { type: "button", id: "3act5", text: "عروستى", icon: "bi bi-gear" },
  { type: "button", id: "3act6", text: "السخافات السمعية ", icon: "bi bi-gear" },
];
/**************************************************************************/
function btn_three(button)
{
let num =lesson_three.findIndex(b => b.id === button.id);
btn_txt=lesson_three[num].text;

switch (button.id) {
  case "3act1": loadForm('./session13/index.html'); break;
  case "3act2": loadForm('./session14/index.html'); break;
  case "3act3": loadForm('./session15/index.html'); break;
  case "3act4": loadForm('./session16/index.html'); break;
  case "3act5": loadForm('./session17/index.html'); break;
  case "3act6": loadForm('./session18/index.html'); break;
}
if (mainVideo.src) {
  videorun(); // Ensure videorun() exists
}
}

/*************************************events ele******************************************/
function loadForm(url,id) {
  // First, clean up any existing form iframe
  const oldIframe = document.getElementById('formFrame');
  if (oldIframe) oldIframe.remove();
  // Create a new iframe
  const newIframe = document.createElement('iframe');
  newIframe.id = 'formFrame';
  newIframe.src = url;
  newIframe.width = '100%';
  newIframe.height = '100%';
  newIframe.style.border = 'none';  // Optional
  // Append new iframe to `eleframe`
  eleframe.appendChild(newIframe);
  // Show the container
  eleframe.classList.remove('hidden');
  eleframe.classList.add('show');
}


function videorun() {
  contentcontainer.classList.remove('close');
  contentcontainer.classList.toggle('show');
  topicname.innerHTML=btn_txt;
}
/*************************************events ele******************************************/

export {lesson_three,btn_three,L2UT1};

