const inputField = document.getElementById("inputString");
const outputSpan = document.getElementById("output");

inputField.addEventListener("input", function () {
    const value = inputField.value;
    if (value.length > 3) {
        const reversed = value.split("").reverse().join("");
        outputSpan.textContent = reversed;
    } else {
        outputSpan.textContent = "";
    }
});
