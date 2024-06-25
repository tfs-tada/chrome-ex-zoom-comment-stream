window.onload = () => {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("./injected.js");
  document.body.appendChild(script);
};
