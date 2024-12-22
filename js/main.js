$(document).ready(function(){
    $(function() {
        $('.hero-text-box').animatedHeadline({
            animationType: 'clip'
        });
    });

    function initParticles() {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 5, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 2 }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }
            },
            "retina_detect": true
        });
    }

    initParticles();

    // Destroy Particles
    $('#destroy-particles').click(function () {
        $('#particles-js canvas').remove();
    });

    // Restore Particles
    $('#restore-particles').click(function () {
        initParticles();
    });



});