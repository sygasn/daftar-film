<script>
    function marqueeText() {
        let text = document.getElementById("marquee-text");
        let position = window.innerWidth;
        
        function moveText() {
            position -= 2;
            text.style.transform = `translateX(${position}px)`;
            
            if (position < -text.clientWidth) {
                position = window.innerWidth;
            }
            
            requestAnimationFrame(moveText);
        }
        
        moveText();
    }

    window.onload = marqueeText;
</script>
