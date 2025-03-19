$(document).ready(function() {
    // Progress Bar Animation
    $('.progress-bar').each(function() {
        var value = $(this).attr('style').match(/--value:\s*(\d+)/)[1];
        $(this).find('::before').width('0%');
        $(this).animate({
            width: value + '%'
        }, 1500);
    });

    // Form Validation and Submission
    $('#donation-form').submit(function(e) {
        e.preventDefault();
        var amount = $('#amount').val().trim();
        var name = $('#name').val().trim();

        if (!amount || !name) {
            alert('Please fill all fields');
            return;
        }

        // Show success modal
        $('.modal').remove();
        $('body').append(`
            <div class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Thank you, ${name}! Your $${amount} donation will make a big difference.</p>
                </div>
            </div>
        `);

        $('.modal').fadeIn();
        $('.close').click(function() {
            $('.modal').fadeOut(function() {
                $(this).remove();
            });
        });
    });

    // Testimonial Slider
    let currentSlide = 0;
    const slides = $('.testimonial-item');
    const totalSlides = slides.length;

    function showSlide(n) {
        slides.eq(currentSlide).fadeOut();
        currentSlide = (n + totalSlides) % totalSlides;
        slides.eq(currentSlide).fadeIn();
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Smooth Scroll to Donate Section
    $('.donate-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#donate').offset().top
        }, 1000);
    });
});
