function checkPassword() { //.toLowerCase();
  const c1 = document.getElementById("c1").value.trim()
  const c2 = document.getElementById("c2").value.trim()
  const c3 = document.getElementById("c3").value.trim()
  const c4 = document.getElementById("c4").value.trim()
  const c5 = document.getElementById("c5").value.trim()
  const c6 = document.getElementById("c6").value.trim()
  const correct = "130547";

  const sumChar = c1 + c2 + c3 + c4 + c5 + c6;

  if (sumChar === correct) {
    
    const textdisplay = document.getElementById("hbdtext");
    const endtext = document.getElementById("showtext");
    const picturedisplay = document.getElementById("polarnorth");
    const body = document.querySelector("body");
    body.style.height = "auto";    


    textdisplay.style.display = "block";
    textdisplay.style.animation = "fadeInUp 2s ease-in-out";
    picturedisplay.style.display = "grid";
    picturedisplay.style.justifyContent = "center";
    picturedisplay.style.alignItems = "center";
    picturedisplay.style.placeItems = "center";
    picturedisplay.style.gridTemplateColumns = "repeat(2, 1fr)";
    picturedisplay.style.gridTemplateRows = "repeat(2, auto)";
    picturedisplay.style.gap = "10px";
    picturedisplay.style.animation = "fadeInUp 2s ease-in-out";

    endtext.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    
    alert("ลองอีกครั้งน้า~");
  }
}

var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const boxes = document.querySelectorAll(".charip");

boxes.forEach((box, index) => {
  // Event listener สำหรับการกรอกข้อความ
  box.addEventListener("input", () => {
    if (box.value.length === 1 && index < boxes.length - 1) {
      boxes[index + 1].focus();
    }
  });

  // Event listener สำหรับการกด Backspace
  box.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && box.value === "" && index > 0) {
      boxes[index - 1].focus();
    }
  });
});
window.onload = function () {
  setTimeout(() => {
    document.body.classList.add("fade-in");
  }, 500);
};
