document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM has loaded');

    document.getElementById('test').innerHTML = "red"; // changes text

    document.getElementById('test').style.color = "red"; //changes style/color

    let mobileMenu = document.getElementById ('mobile-menu');

    let ctaButton = document.getElementById ('cta-button');

    ctaButton.addEventListener('click', function() {
        console.log('button clicked')

        mobileMenu.style.display="block";
    });
});