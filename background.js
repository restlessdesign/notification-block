chrome.runtime.onInstalled.addListener(() => {
  console.log('Thank you for installing Notification Block!');
});

chrome.webNavigation.onCompleted.addListener((details) => {
  console.log(`Navigated to ${details.url}`);
});
