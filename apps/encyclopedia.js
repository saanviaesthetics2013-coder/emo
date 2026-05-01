window.apps = window.apps || {};

window.apps.encyclopedia = function () {

  const items = Array.from({length:40}, (_,i)=>({
    name:`Object ${i+1}`,
    info:`Full lifecycle analysis: creation → usage → disposal of Object ${i+1}`
  }));

  return `
    <h2>📚 Knowledge Matrix</h2>

    ${items.map(i=>`
      <div class="tile" onclick="alert('${i.info}')">
        ${i.name}
      </div>
    `).join("")}
  `;
};
