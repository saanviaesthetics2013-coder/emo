let state = "home";

window.onload = () => {
  setTimeout(() => {
    document.getElementById("boot").remove();
    renderHome();
  }, 2600);
};

/* HOME */
function renderHome() {
  state = "home";

  document.getElementById("app").innerHTML = `
    <h1>GOD OS</h1>

    <div class="tile" onclick="openApp('features')">⚡ Features Hub</div>
    <div class="tile" onclick="openApp('encyclopedia')">📚 Encyclopedia</div>
    <div class="tile" onclick="openApp('crafts')">🛠️ Crafts System</div>
    <div class="tile" onclick="openApp('tools')">🎨 Tools</div>
  `;
}

/* APP ROUTER */
function openApp(app) {
  state = app;

  const apps = {
    features: featuresHub,
    encyclopedia: window.apps.encyclopedia,
    crafts: window.apps.crafts,
    tools: toolsHub
  };

  document.getElementById("app").innerHTML = apps[app]();
}

/* FEATURES (40–60 ITEMS DENSE SYSTEM) */
function featuresHub() {
  let items = Array.from({length:60}, (_,i)=>`System Feature ${i+1}`);

  return `
    <h2>⚡ Features Hub</h2>
    ${items.map(i=>`<div class="tile">${i}</div>`).join("")}
  `;
}

/* TOOLS */
function toolsHub() {
  return `
    <h2>🎨 Tools</h2>
    <div class="tile">Paint Engine</div>
    <div class="tile">Notes Memory</div>
    <div class="tile">Music Core</div>
    <div class="tile">Clock System</div>
  `;
}

/* EMY AI */
function emyTalk() {
  const messages = {
    home: "Hi, I'm Emy. I'm your guide.",
    features: "Exploring system capabilities...",
    encyclopedia: "Accessing knowledge matrix...",
    crafts: "Entering creation system...",
    tools: "Loading utility engine..."
  };

  alert("🐧 Emy:\n\n" + (messages[state] || "System active"));
}
