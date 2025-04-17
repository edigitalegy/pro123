import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L1UT1 ="";
/*************************************elements******************************************/
const lesson_one = [
  { type: "button", id: "1act1", text: "الانتباه لوجود الصوت من عدمه", icon: "bi bi-gear" },
  { type: "button", id: "1act2", text: "الإنتباه لمصدر الصوت ", icon: "bi bi-gear" },
  { type: "button", id: "1act3", text: "الإنتباه الانتقائي للصوت (الانتباه  للصوت في وجود الضوضاء)", icon: "bi bi-gear" },
  { type: "button", id: "1act4", text: "الإنتباه لأصوات البيئة ", icon: "bi bi-gear" },
  { type: "button", id: "1act5", text: "الإنتباه لدرجه الصوت (الاصوات المرتفعة)", icon: "bi bi-gear" },
  { type: "button", id: "1act6", text: "الإنتباه لدرجه الصوت (الاصوات المنخفضة)", icon: "bi bi-gear" },
];

function btn_one(button) {
  let num = lesson_one.findIndex(b => b.id === button.id);
  if (num !== -1) {
      btn_txt = lesson_one[num].text;
  }

  switch (button.id) {
      case "1act1": loadForm('./session1/index.html'); break;
      case "1act2": loadForm('./session2/index.html'); break;
      case "1act3": loadForm('./session3/index.html'); break;
      case "1act4": loadForm('./session4/index.html'); break;
      case "1act5": loadForm('./session5/index.html'); break;
      case "1act6": loadForm('./session6/index.html'); break;
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
export {lesson_one, btn_one,L1UT1};
