import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_two = [
  { type: "button", id: "2act1", text: "التمييز سمعيا بين الكلمات المتطابقة والغير متطابقة ", icon: "bi bi-gear" },
  { type: "button", id: "2act2", text: "تمييز الصوره التي تعبر عن الجملة المسموعة ", icon: "bi bi-gear" },
  { type: "button", id: "2act3", text: "تميبز صوت البداية ", icon: "bi bi-gear" },
  { type: "button", id: "2act4", text: "تمييز الاصوات المتشابهة ", icon: "bi bi-gear" },
  { type: "button", id: "2act5", text: "تمييز صوت النهاية (السجع )", icon: "bi bi-gear" },
  { type: "button", id: "2act6", text: "تمييز الخطأ سمعيا ", icon: "bi bi-gear" },
];
/**************************************************************************/
function btn_two(button)
{
let num =lesson_two.findIndex(b => b.id === button.id);
btn_txt=lesson_two[num].text;

  if(button.id === "2act1"){loadForm('');}
  if(button.id === "2act2"){loadForm('');}
  if(button.id === "2act3"){loadForm('');}
  if(button.id === "2act4"){loadForm('');}
  if(button.id === "2act5"){loadForm('');}
  if(button.id === "2act6"){loadForm('');}
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

export {lesson_two,btn_two,L2UT1};

