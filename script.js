
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><div id="modal-body"></div></div>';
  document.body.appendChild(modal);

  const modalElement = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = modal.querySelector(".close");

  document.querySelectorAll(".work a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const title = this.parentElement.querySelector("h3").textContent;
      const description = this.parentElement.querySelector("p").textContent;
      const imageSrc = this.parentElement.querySelector("img").src;

      modalBody.innerHTML = `
        <h2>${title}</h2>
        <img src="${imageSrc}" alt="${title}" />
        <p>${description}</p>
      `;
      modalElement.style.display = "block";
    });
  });

  closeBtn.onclick = function () {
    modalElement.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modalElement) {
      modalElement.style.display = "none";
    }
  };
});
