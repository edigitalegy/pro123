import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_five = [
  { type: "button", id: "5act1", text: "مطابقه المفاهيم (اختيار البدائل)", icon: "bi bi-gear" },
  { type: "button", id: "5act2", text: "مطابقة المفاهيم ( استخلاص العلاقات بين الكلمات)", icon: "bi bi-gear" },
  { type: "button", id: "5act3", text: "مطابقة المفاهيم (تعداد عناصر المجموعة)", icon: "bi bi-gear" },
  { type: "button", id: "5act4", text: "الربط السمعي (أين الصورة ؟)", icon: "bi bi-gear" },
  { type: "button", id: "5act5", text: "الربط السمعي (العلاقات)", icon: "bi bi-gear" },
  { type: "button", id: "5act6", text: "دمج الاصوات لتكوين كلمة", icon: "bi bi-gear" },
  { type: "button", id: "5act7", text: "تسلسل الأحداث ", icon: "bi bi-gear" },
];
/**************************************************************************/
function btn_five(button)
{
let num =lesson_five.findIndex(b => b.id === button.id);
btn_txt=lesson_five[num].text;

  if(button.id === "5act1"){loadForm('');}
  if(button.id === "5act2"){loadForm('');}
  if(button.id === "5act3"){loadForm('');}
  if(button.id === "5act4"){loadForm('');}
  if(button.id === "5act5"){loadForm('');}
  if(button.id === "5act6"){loadForm('');}
  if(button.id === "5act7"){loadForm('');}
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

export {lesson_five,btn_five,L2UT1};

