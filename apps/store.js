window.apps = window.apps || {};

window.apps.store = function () {
  return `
    <div>
      <h3>🛒 GOD OS Store</h3>

      <button onclick="installApp('paint')">Install Paint</button>
      <button onclick="installApp('notes')">Install Notes</button>
      <button onclick="installApp('clock')">Install Clock</button>

      <hr>

      <button onclick="uninstallApp('paint')">Remove Paint</button>

      <p>Apps are stored in virtual OS memory</p>
    </div>
  `;
};

/* install system (must exist in kernel) */
function installApp(name){
  if(!window.installedApps){
    window.installedApps = [];
  }
  if(!window.installedApps.includes(name)){
    window.installedApps.push(name);
    alert(name + " installed into GOD OS");
  }
}

function uninstallApp(name){
  if(window.installedApps){
    window.installedApps = window.installedApps.filter(a => a !== name);
    alert(name + " removed from GOD OS");
  }
}
