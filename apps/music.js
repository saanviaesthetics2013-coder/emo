window.apps = window.apps || {};

window.apps.music = function () {
  return `
    <div>
      <h3>🎵 Music Core</h3>

      <p>Volume Control</p>
      <input type="range" min="0" max="100" value="50">

      <p style="margin-top:10px;">
        (UI simulation only — no external audio needed)
      </p>
    </div>
  `;
};
