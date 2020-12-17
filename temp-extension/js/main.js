const elapsedTime = document.querySelector("#running-timer");
const userTime = document.querySelector("#static-time");

const banned = ["tiktok.com", "facebook.com", "instagram.com", "twitter.com"];

// creates a prompt as soon as page loads + countdown
window.onload = function userInput() {
  let wantToStudyTime = 60;
  let startingTime = 0;
  let userInput = prompt("Please enter how long you want to stay Coductive in minutes:", "60");
  
  if (userInput !== null || userInput !== "") {
    wantToStudyTime = userInput;
  }

  userTime.innerHTML = wantToStudyTime;
  elapsedTime.innerHTML = startingTime;

  const countUp = setInterval(function(){
    if (startingTime > wantToStudyTime) {
      clearInterval(countUp);
      alert(`You stayed Coductive for ${wantToStudyTime} minutes`);
    } else {
      elapsedTime.innerHTML = startingTime;
    }
    startingTime += 1;
  }, 60000)
}


// const websiteChecker = setInterval(function() {
//   function findAllURL(website) {
//     let current = window.location.href;
//     console.log('current:', current);
    
//     if(current.startsWith(website)){
//       document.documentElement.innerHTML = '';
//       document.documentElement.innerHTML = 'Domain is blocked';
//       document.documentElement.scrollTop = 0;
//     }
//   }

//   for (const website of banned) {
//     findAllURL(website);
//   }
// }, 1000)
  
  
  // findURL("https://www.quora.com/");
  // findAllURL("https://www.facebook.com/");

// => all below from https://dev.to/penge/learn-the-most-useful-chrome-apis-by-creating-block-site-chrome-extension-2de8
// const textarea = document.getElementById("textarea");
// const save = document.getElementById("save");
// const checkbox = document.getElementById("checkbox");

// save.addEventListener("click", () => {
//   const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
//   console.log('blocked:', blocked); // ["facebook.com", "instagram.com", "youtube.com", "twitter.com", "reddit.com", "tiktok.com"]
//   chrome.storage.local.set({ blocked });
// });

// checkbox.addEventListener("change", (event) => {
//   const enabled = event.target.checked;
//   chrome.storage.local.set({ enabled });
// });

// window.addEventListener("DOMContentLoaded", () => {
//   chrome.storage.local.get(["blocked", "enabled"], function (local) {
//     const { blocked, enabled } = local;
//     if (Array.isArray(blocked)) {
//       textarea.value = blocked.join("\n");
//       checkbox.checked = enabled;
//     }
//   });
// });