document.addEventListener('DOMContentLoaded', function () {
    var birthdayCard = document.getElementById('birthdayCard');

    birthdayCard.addEventListener('touchstart', function () {
        birthdayCard.classList.toggle('open');
    });
});
