/* ================================
   LMS SHARED CONFIGURATION
   Single Source of Truth
================================ */

const LMS_CONFIG = {
    classes: ["6", "7", "8", "9", "10", "11", "12"],

    subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Computer Science"
    ]
};

/* ================================
   HELPER FUNCTIONS
================================ */

function populateClassDropdown(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    LMS_CONFIG.classes.forEach(cls => {
        const opt = document.createElement("option");
        opt.value = cls;
        opt.textContent = cls;
        select.appendChild(opt);
    });
}

function populateSubjectDropdown(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    LMS_CONFIG.subjects.forEach(sub => {
        const opt = document.createElement("option");
        opt.value = sub;
        opt.textContent = sub;
        select.appendChild(opt);
    });
}
