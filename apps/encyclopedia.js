window.apps = window.apps || {};

const data = {
  Plastic:{how:"Petroleum polymers",use:"Packaging",dispose:"Recycle center"},
  Glass:{how:"Molten sand",use:"Bottles/windows",dispose:"Glass recycling"},
  Paper:{how:"Wood pulp",use:"Books",dispose:"Paper recycling"},
  Metal:{how:"Ore refining",use:"Tools",dispose:"Scrap recycling"}
};

window.apps.encyclopedia=function(){
  return `
    <div>
      <h3>📚 Encyclopedia</h3>
      ${Object.keys(data).map(i=>`
        <div onclick="showItem('${i}')"
        style="margin:5px;padding:6px;background:#2dd4bf;color:black;cursor:pointer">
          ${i}
        </div>
      `).join("")}
    </div>
  `;
};

window.showItem=function(name){
  const item=data[name];

  document.getElementById("windows").innerHTML=`
    <div class="window" style="left:200px;top:120px">
      <div class="titlebar">
        <span>${name}</span>
        <button onclick="openApp('encyclopedia')">Back</button>
      </div>
      <div class="content">
        <p><b>Made:</b> ${item.how}</p>
        <p><b>Use:</b> ${item.use}</p>
        <p><b>Dispose:</b> ${item.dispose}</p>
      </div>
    </div>
  `;
};
