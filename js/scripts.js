$(function() {
    $(".carousel").carousel({
        interval: 2000
    });
    $("#carouselButton").click(function() {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    $("#reserveButton").click(function() {
        $('#reserveModal').modal('show');
    });

    $("#loginButton").click(function() {
        $('#loginModal').modal('show');
    });
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    // $('#dismiss, .overlay').on('click', function () {
    //     // hide sidebar
    //     $('#sidebar').removeClass('active');
    //     // hide overlay
    //     $('.overlay').removeClass('active');
    // });

    // $('#sidebarCollapse').on('click', function () {
    //     // open sidebar
    //     $('#sidebar').addClass('active');
    //     // fade in the overlay
    //     $('.overlay').addClass('active');
    //     $('.collapse.in').toggleClass('in');
    //     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // });
    
    function toggleResetPswd(e){
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle() // display:block or none
        $('#logreg-forms .form-reset').toggle() // display:block or none
    }
    
    function toggleSignUp(e){
        e.preventDefault();
        $('#logreg-forms .form-signin').toggle(); // display:block or none
        $('#logreg-forms .form-signup').toggle(); // display:block or none
    }
    
    $(()=>{
        // Login Register Form
        $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
        $('#logreg-forms #cancel_reset').click(toggleResetPswd);
        $('#logreg-forms #btn-signup').click(toggleSignUp);
        $('#logreg-forms #cancel_signup').click(toggleSignUp);
    })
});