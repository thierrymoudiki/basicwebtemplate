document.addEventListener("DOMContentLoaded", function() {
    const outputParagraph = document.getElementById("output");
    const changeTextButton = document.getElementById("changeTextBtn");

    changeTextButton.addEventListener("click", function() {
        outputParagraph.textContent = "Text changed! You clicked the button.";
    });
});
