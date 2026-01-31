/* =====================================================
   BASIC UI PROTECTION (Everyone)
   Deterrent only – not real security
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) return; // only after login

    let lastAlertTime = 0;

    function showAlert(message) {
        const now = Date.now();
        if (now - lastAlertTime < 2000) return; // avoid alert spam
        lastAlertTime = now;
        alert(message);
    }

    // Disable right click
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
        showAlert("Right-click is disabled on this page.");
    });

    // Disable keyboard shortcuts
    document.addEventListener("keydown", e => {

        // F12
        if (e.key === "F12") {
            e.preventDefault();
            showAlert("Developer tools are disabled.");
            return;
        }

        // Ctrl + Shift + I / J / C
        if (e.ctrlKey && e.shiftKey &&
            ["I", "J", "C"].includes(e.key.toUpperCase())) {
            e.preventDefault();
            showAlert("Developer tools are disabled.");
            return;
        }

        // Ctrl + U (view source)
        if (e.ctrlKey && e.key.toLowerCase() === "u") {
            e.preventDefault();
            showAlert("Viewing page source is disabled.");
            return;
        }

        // Ctrl + S (save)
        if (e.ctrlKey && e.key.toLowerCase() === "s") {
            e.preventDefault();
            showAlert("Saving this page is disabled.");
            return;
        }
    });

});
