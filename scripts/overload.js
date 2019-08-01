const actualCode = `

const TIME_LIMIT = 5000;
const nrp = Notification.requestPermission;

Notification.requestPermission = function(callback) {
  if (Date.now() - window.performance.timing.loadEventEnd > TIME_LIMIT) {
    return nrp(callback);
  }

  return Promise.reject(new Error('Your request to spam this user with notifications has been rejected.'));
}
`;

const script = document.createElement('script');
script.appendChild(document.createTextNode(actualCode));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
