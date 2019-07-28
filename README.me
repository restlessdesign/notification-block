# General plan of attack


```
// Wrap `Notification.requestPermission()` so that we can perform custom
// logic and still hook back to default implementation if necessary.
const reqPermLegacy = Notification.requestPermission;
Notification.requestPermission = (...args) => {
  
  // If the function was called after an acceptible delay, all the call to pass through
  if (Date.now() - window.performance.timing.loadEventEnd > 5000) {
    return reqPermLegacy(args);
  }
  
  // Otherwise, ignore the request and log the domain name back to a centralized blacklist
  fetch('https://notification-block/blacklist', {
    method: 'PUT',
    credentials: 'omit',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({host: document.location.hostname});
  });
};
```
