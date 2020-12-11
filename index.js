let items = [];

$(document).ready(() => {
  let local = window.localStorage.getItem("to-do");
  if (local) {
    items = JSON.parse(local);
    renderItems();
  }
  $("#add").click(() => {
    const input = $("#todo-input");
    items.push(input.val());
    input.val("");
    renderItems();
  });
  $(".btn-reomve").click(() => alert("Hello"));
});

/**
 *
 * @param {number} index
 */
const remove = (index) => {
  if (items.length === 1) {
    items = [];
  }
  items.splice(index, 1);
  console.log(items);
  renderItems();
};

/**
 * @param {Array<string>} items
 * @returns {void}
 */
function renderItems() {
  let html = "";
  items.forEach((item, idx) => {
    html += `
    <div class="card card-item">
      <h5 class="card-header" style="color: white;">${item}</h5>
      <div class="card-body">
        <button onclick="remove(${idx})" type="button" class="btn btn-danger remove-btn">Remove</button>
      </div>
    </div>`;
  });
  $("#items").html(html);
}

function unsave() {
  window.localStorage.removeItem("to-do");
  items = [];
  renderItems();
}

function save() {
  window.localStorage.setItem("to-do", JSON.stringify(items));
}
