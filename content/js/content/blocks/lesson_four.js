import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_four = [
  { type: "button", id: "4act1", text: "الذاكرة السمعية للجمل ", icon: "bi bi-gear" },
  { type: "button", id: "4act2", text: "المقارنة السمعية(الإضافة)", icon: "bi bi-gear" },
  { type: "button", id: "4act3", text: "المقارنة السمعية (الحذف)", icon: "bi bi-gear" },
  { type: "button", id: "4act4", text: "الذاكرة السمعية للأرقام ", icon: "bi bi-gear" },
  { type: "button", id: "4act5", text: "تنفيذ الأوامر السمعية", icon: "bi bi-gear" },
  { type: "button", id: "4act6", text: "ذاكرة القصص ", icon: "bi bi-gear" },
];
/**************************************************************************/
function btn_four(button)
{
let num =lesson_four.findIndex(b => b.id === button.id);
btn_txt=lesson_four[num].text;

  if(button.id === "4act1"){loadForm('');}
  if(button.id === "4act2"){loadForm('');}
  if(button.id === "4act3"){loadForm('');}
  if(button.id === "4act4"){loadForm('');}
  if(button.id === "4act5"){loadForm('');}
  if(button.id === "4act6"){loadForm('');}
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

export {lesson_four,btn_four,L2UT1};

