// $('#frmae_slider').owlCarousel({
//     loop:true,
//     margin:10,
//     autoplay: true,
//     smartSpeed: 1500,
//     nav:false,
//     dots: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// $('#company_slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplay: true,
//     smartSpeed: 1500,
//     dots: true,
//     responsive:{
//         0:{
//             items:2
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


// $('#testimonial_slider').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplay: true,
//     smartSpeed: 2500,
//     dots: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

//const slider = document.getElementById('screen_slider');

$(document).ready(function(){
$('#screen_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    autoplay: true,
    smartSpeed: 2500,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:9
        }
    }
});
});
