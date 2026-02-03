/* ================================
   SHARED HEADER COMPONENT
================================ */

function renderHeader(titleText) {
    const user = JSON.parse(localStorage.getItem("loggedUser"));

    const header = document.createElement("div");
    header.className = "top-bar";

    header.innerHTML = `
        <div class="header-left">
            <h2>${titleText}</h2>
        </div>

        <div class="header-right">
            ${
                user
                ? `<span class="user-info">
                        👤 ${user.name} (${user.role})
                   </span>`
                : ""
            }
            <button class="logout-btn" onclick="logout()">Logout</button>
        </div>
    `;

    document.body.prepend(header);
}
