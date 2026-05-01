window.apps = window.apps || {};

window.apps.notes = function () {
  setTimeout(() => {
    const box = document.getElementById("notesBox");

    // load saved notes
    box.value = localStorage.getItem("godos_notes") || "";

    box.oninput = () => {
      localStorage.setItem("godos_notes", box.value);
    };
  }, 50);

  return `
    <div>
      <h3>📝 Notes</h3>
      <textarea id="notesBox"
        style="width:100%;height:150px"></textarea>
      <p>Auto-saves to system disk</p>
    </div>
  `;
};
