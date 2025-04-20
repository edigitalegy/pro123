import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_six = [
  { type: "button", id: "6act1", text: "الإغلاق السمعي لكلمات مألوفة السياق", icon: "bi bi-gear" },
  { type: "button", id: "6act2", text: "الإغلاق السمعي لكلمات مألوفة السياق بعد دمج مقاطعها ", icon: "bi bi-gear" },
  { type: "button", id: "6act3", text: "التداعي وتوليد كلمات ", icon: "bi bi-gear" },
  { type: "button", id: "6act4", text: "الإغلاق السمعي الناقد ", icon: "bi bi-gear" },
  { type: "button", id: "6act5", text: "الإغلاق السمعي للمقطع المفقود ", icon: "bi bi-gear" },
  { type: "button", id: "6act6", text: "التداعي السمعي", icon: "bi bi-gear" },
];
/**************************************************************************/
function btn_six(button)
{
let num =lesson_six.findIndex(b => b.id === button.id);
btn_txt=lesson_six[num].text;

switch (button.id) {
  case "6act1": loadForm('./session32/index.html'); break;
  case "6act2": loadForm('./session33/index.html'); break;
  case "6act3": loadForm('./session34/index.html'); break;
  case "6act4": loadForm('./session35/index.html'); break;
  case "6act5": loadForm('./session36/index.html'); break;
  case "6act6": loadForm('./session37/index.html'); break;
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

export {lesson_six,btn_six,L2UT1};

