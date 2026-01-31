function renderFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    footer.innerHTML = `
        © <span id="year"></span> Developed by 
  <strong>
    <a href="https://www.biansuv.com" target="_blank" rel="noopener">
      Biansuv Technologies LLP
    </a>
  </strong>
  
    `;






    document.body.appendChild(footer);

    document.getElementById("year").textContent = new Date().getFullYear();
}
