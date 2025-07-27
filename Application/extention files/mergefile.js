document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const keys = document.querySelectorAll(".key");
    const backspace = document.getElementById("backspace");

    keys.forEach(key => {
        key.addEventListener("click", () => {
            const value = key.getAttribute("data-value");

            if (value === ".") {
                if (!display.value.includes(".")) {
                    display.value += value;
                }
            } else {
                display.value === "0" ? display.value = value : display.value += value;
            }
        });
    });

    backspace.addEventListener("click", () => {
        display.value = display.value.slice(0, -1) || "0";
    });
});
/*
//Popup TXTs
// Get the elements
const openPopupButton = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");
const popupHeader = document.getElementById("popupHeader");

// Open the popup
openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close the popup
closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

// Drag the popup
let isDragging = false;
let offsetX, offsetY;

popupHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
    document.addEventListener("mousemove", movePopup);
    document.addEventListener("mouseup", stopDragging);
});

function movePopup(e) {
    if (isDragging) {
        popup.style.left = `${e.clientX - offsetX}px`;
        popup.style.top = `${e.clientY - offsetY}px`;
    }
}

function stopDragging() {
    isDragging = false;
    document.removeEventListener("mousemove", movePopup);
    document.removeEventListener("mouseup", stopDragging);
}
    */