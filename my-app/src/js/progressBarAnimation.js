

        var wrapperMenu = document.querySelector('.wrapper-menu');
        wrapperMenu.addEventListener('click', function(){
        wrapperMenu.classList.toggle('open');  
        })

        //--------------------progress bar animation-------------------
        const progressContainer = document.getElementById('progress-section');
        const progressBar = progressContainer.querySelector('.progress-bar');
    
        // Function to check if an element is in the viewport
        function isElementInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function activateAnimation() {
        if (isElementInViewport(progressContainer)) {
            // Add your animation logic here
            targetSection.classList.add('animate'); // Replace 'animate' with your actual CSS class
        } else {
            // If the section is not in viewport, you can remove the animation class
            targetSection.classList.remove('animate');
        }
        }
        //--------------------progress bar animation END--------------------


        //-----------------------scroll animation---------------------------
         var reveals = document.querySelectorAll('.scroll');
        reveals[0].classList.add('active');
        window.addEventListener('scroll', reveal);

        function reveal() {
            var reveals = document.querySelectorAll('.scroll');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                var revealPoint = 80;

                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('active');
                } else {
                    reveals[i].classList.remove('active');
                }
            }
        }
        //---------------------scroll animation END-------------------------
