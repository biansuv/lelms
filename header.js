/* ================================
   SHARED HEADER COMPONENT
================================ */

function renderHeader(titleText) {
    const header = document.createElement("div");
    header.className = "top-bar";

    header.innerHTML = `
        <h2>${titleText}</h2>
        <button class="logout-btn" onclick="logout()">Logout</button>
    `;

    document.body.prepend(header);
}
