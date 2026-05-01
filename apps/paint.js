window.apps = window.apps || {};

window.apps.paint = function () {
  setTimeout(() => {
    const canvas = document.getElementById("paintCanvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let drawing = false;

    canvas.onmousedown = () => drawing = true;
    canvas.onmouseup = () => drawing = false;

    canvas.onmousemove = (e) => {
      if (!drawing) return;
      ctx.fillStyle = "#00d6d6";
      ctx.fillRect(e.offsetX, e.offsetY, 3, 3);
    };
  }, 50);

  return `
    <div>
      <h3>🎨 Paint Engine</h3>
      <canvas id="paintCanvas" width="300" height="200"
        style="background:white;border-radius:8px;"></canvas>
      <p>Drag mouse to draw</p>
    </div>
  `;
};
