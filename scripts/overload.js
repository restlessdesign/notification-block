const actualCode = `
const reqPermLegacy = Notification.requestPermission;
Notification.requestPermission = function(callback) {
  if (Date.now() - window.performance.timing.loadEventEnd > 5000) {
    console.log('Notification.requestPermission called after 5s');
    console.log('Allowing notification…');
    return reqPermLegacy(callback);
  }

  console.log('Notification.requestPermission called within 5s');
  console.log('Blocking…');
  return Promise.reject(new Error('Your request to spam this user with notifications has been rejected.'));
}
`;

const script = document.createElement('script');
script.appendChild(document.createTextNode(actualCode));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);