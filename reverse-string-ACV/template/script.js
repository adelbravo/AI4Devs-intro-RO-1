const inputField = document.getElementById("inputString");
const reverseBtn = document.getElementById("reverseBtn");

inputField.addEventListener("input", function () {
    if (inputField.value.length > 3) {
        reverseBtn.style.display = "inline-block";
    } else {
        reverseBtn.style.display = "none";
        document.getElementById("output").textContent = ""; // Limpiar resultado si no hay texto suficiente
    }
});

function reverseString() {
    const input = inputField.value;
    const reversed = input.split("").reverse().join("");
    document.getElementById("output").textContent = reversed;
}
