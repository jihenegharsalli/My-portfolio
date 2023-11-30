// $(document).ready(function(){

//     $('#menu').click(function(){
//         $(this).toggleClass('fa-times');
//         $('header').toggleClass('toggle');
//     });

//     $(window).on('scroll load',function(){
//         $('#menu').removeClass('fa-times');
//         $('header').removeClass('toggle');

//         if($(window).scrollTop()>0){
//             $('.top').show();
//         }else{
//             $('.top').hide();
//         }
//     });

//     $('a[href*="]').on('click',function(e){
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: $($(this).attr('href')).offset().top,

//         },
//             500,
//             'linear'
//         );
        
//     });

    
// });



$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    });

    $('header .navbar ul li a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });
});



// function openModal(imageSrc, description, tools) {
//     document.getElementById("modal-image").src = imageSrc;
//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("project-modal").style.display = "none";
// }


// function openModal(videoSrc, description, tools) {
//     var modalVideo = document.getElementById("modal-video");
//     modalVideo.src = videoSrc;
//     modalVideo.load();  // Recharge la vidéo pour éviter les problèmes de lecture

//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

// function openModal(videoSrc, description, tools) {
//     var modalVideo = document.getElementById("modal-video");
//     modalVideo.src = videoSrc;
//     modalVideo.load();  // Recharge la vidéo pour éviter les problèmes de lecture

//     document.getElementById("modal-description").innerText = description;
//     document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');
//     document.getElementById("project-modal").style.display = "block";
// }

function openModal(videoSrc, description, tools, githubLink) {
    var modalVideo = document.getElementById("modal-video");
    modalVideo.src = videoSrc;
    modalVideo.load();  // Recharge la vidéo pour éviter les problèmes de lecture

    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal-tools").innerHTML = tools.split(',').map(tool => `<li>${tool.trim()}</li>`).join('');

    // Ajouter le lien GitHub
    var githubLinkElement = document.getElementById("modal-github-link");
    githubLinkElement.href = githubLink;

    document.getElementById("project-modal").style.display = "block";
}



function closeModal() {
    var modalVideo = document.getElementById("modal-video");
    modalVideo.pause();  // Pause la vidéo lors de la fermeture du modal
    document.getElementById("project-modal").style.display = "none";
}
