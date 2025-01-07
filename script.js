// Function to open the modal when the envelope is clicked
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal when the close button is clicked
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal
window.onclick = function(event) {
    var modal = document.getElementById("missMeModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
    var modal2 = document.getElementById("happyModal");
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
}
