/* ================================
   AUTH UTILITIES (Shared)
================================ */

/* ---------- LOGIN ---------- */
function login(role) {

    const id = document.getElementById("login_id").value.trim();
    const pwd = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u =>
        u.login_id === id &&
        u.password === pwd &&
        u.role === role
    );

    if (!user) {
        alert("Invalid login credentials");
        return;
    }

    // 🔒 BLOCK DEACTIVATED USERS
    if (user.active === false) {
        alert("Your account is deactivated. Please contact admin.");
        return;
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));

    if (role === "admin") {
        location.href = "admin.html";
    } else if (role === "teacher") {
        location.href = "teacher.html";
    } else if (role === "student") {
        location.href = "student.html";
    }
}

/* ---------- LOGOUT ---------- */
function logout() {
    if (!confirm("Do you want to logout?")) return;
    localStorage.removeItem("loggedUser");
    location.href = "login.html";
}
