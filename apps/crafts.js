window.apps = window.apps || {};

const crafts={
  "Paper Plane":{
    steps:[
      "Take a sheet of paper",
      "Fold it in half",
      "Fold wings down",
      "Launch gently"
    ]
  },
  "Origami Boat":{
    steps:[
      "Fold paper in half",
      "Fold corners inward",
      "Open base",
      "Shape into boat"
    ]
  }
};

window.apps.crafts=function(){
  return `
    <div>
      <h3>🛠️ Crafts Builder</h3>

      ${Object.keys(crafts).map(c=>`
        <div onclick="showCraft('${c}')"
        style="margin:5px;padding:6px;background:#fca5a5;color:black;cursor:pointer">
          ${c}
        </div>
      `).join("")}

    </div>
  `;
};

window.showCraft=function(name){
  const c=crafts[name];

  document.getElementById("windows").innerHTML=`
    <div class="window" style="left:180px;top:120px">
      <div class="titlebar">
        <span>${name}</span>
        <button onclick="openApp('crafts')">Back</button>
      </div>
      <div class="content">
        ${c.steps.map(s=>`<p>• ${s}</p>`).join("")}
      </div>
    </div>
  `;
};
