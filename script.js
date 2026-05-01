let windows=[];
let z=1;

/* BOOT */
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("boot").style.display="none";
    document.getElementById("desktop").style.display="block";
    emy("system");
  },2500);
};

/* OPEN APP */
function openApp(app){
  windows.push({
    id:Date.now(),
    app,
    x:120+Math.random()*120,
    y:120+Math.random()*120
  });

  render();
  emy(app);
}

/* RENDER */
function render(){
  const area=document.getElementById("windows");
  area.innerHTML="";

  windows.forEach(w=>{
    const div=document.createElement("div");
    div.className="window";
    div.style.left=w.x+"px";
    div.style.top=w.y+"px";
    div.style.zIndex=z++;

    div.innerHTML=`
      <div class="titlebar">
        <span>${w.app}</span>
        <button onclick="closeWin(${w.id})">X</button>
      </div>
      <div class="content">
        ${runApp(w.app)}
      </div>
    `;

    drag(div,w);
    area.appendChild(div);
  });
}

/* CLOSE */
function closeWin(id){
  windows=windows.filter(w=>w.id!==id);
  render();
}

/* LOAD APP */
function runApp(app){
  return window.apps?.[app] ? window.apps[app]() : "loading...";
}

/* DRAG SYSTEM */
function drag(el,w){
  let d=false,ox=0,oy=0;

  el.querySelector(".titlebar").onmousedown=e=>{
    d=true;
    ox=e.clientX-el.offsetLeft;
    oy=e.clientY-el.offsetTop;
  };

  document.onmousemove=e=>{
    if(!d)return;
    w.x=e.clientX-ox;
    w.y=e.clientY-oy;
    el.style.left=w.x+"px";
    el.style.top=w.y+"px";
  };

  document.onmouseup=()=>d=false;
}

/* EMY AI */
function emy(app){
  const e=document.getElementById("emy");

  const msg={
    clock:"Time engine active 🌍",
    paint:"Creative matrix ON 🎨",
    notes:"Memory system active 🧠",
    music:"Audio core loaded 🎵",
    encyclopedia:"Knowledge system ready 📚",
    crafts:"Builder engine ready 🛠️",
    store:"App marketplace online 🛒",
    system:"GOD OS Infinity fully active ⚡"
  };

  e.innerText="🐧 "+(msg[app]||"System running...");
}
