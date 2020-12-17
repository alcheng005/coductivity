chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.create({'url':'../html/index.html'});
	
	// window.addEventListener('DOMContentLoaded', (event) => {
	// 	console.log('DOM fully loaded and parsed');
	// });
});

// chrome.storage.local.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });

// const textarea = document.getElementById("textarea");
// const save = document.getElementById("save");
// const checkbox = document.getElementById("checkbox");

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



// => all below from https://dev.to/penge/learn-the-most-useful-chrome-apis-by-creating-block-site-chrome-extension-2de8
// chrome.runtime.onInstalled.addListener(function () {
//   chrome.storage.local.get(["blocked", "enabled"], function (local) {
//     if (!Array.isArray(local.blocked)) {
//       chrome.storage.local.set({ blocked: [] });
//     }

//     if (typeof local.enabled !== "boolean") {
//       chrome.storage.local.set({ enabled: false });
//     }
//   });
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
//   const url = changeInfo.pendingUrl || changeInfo.url;
//   if (!url || !url.startsWith("http")) {
//     return;
//   }

//   const hostname = new URL(url).hostname;

//   chrome.storage.local.get(["blocked", "enabled"], function (local) {
//     const { blocked, enabled } = local;
//     if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
//       chrome.tabs.remove(tabId);
//     }
//   });
// });