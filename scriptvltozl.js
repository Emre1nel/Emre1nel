function checkDate() {
    const inputDate = document.getElementById('dateInput').value;
    const correctDate = "2024-12-06";
    if (inputDate === correctDate) {
        document.getElementById('letter').style.display = 'block';
        document.querySelectorAll('.heart').forEach((heart, index) => {
            heart.style.setProperty('--i', index + 1);
        });
    } else {
        alert("Lütfen doğru tarihi girin!");
    }
}
