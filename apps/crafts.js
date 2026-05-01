window.apps = window.apps || {};

window.apps.crafts = function () {

  const crafts = Array.from({length:40}, (_,i)=>[
    `Initialize craft ${i+1}`,
    `Process structure`,
    `Finalize output`
  ]);

  return `
    <h2>🛠️ Crafts Engine</h2>

    ${crafts.map((c,i)=>`
      <div class="tile" onclick="alert('${c.join(" → ")}')">
        Craft ${i+1}
      </div>
    `).join("")}
  `;
};
