$(document).ready(function() {
//     var trigger = false;
//     $(window).scroll(function() {

//         wS = $(this).scrollTop();
//         if (wS > 1627 && trigger === false) {

//             // For a pie chart
//             var popCtx = document.getElementById("popChart");
//             var popData = {
//                 labels: [
//                     "Pop/Rock",
//                     "Dance Pop"
//                 ],
//                 datasets: [{
//                     data: [16, 13],
//                     backgroundColor: [
//                         "#d6702b",
//                         "#6d3815"
//                     ],
//                     hoverBackgroundColor: [
//                         "#d6702b",
//                         "#6d3815"
//                     ]
//                 }]
//             };

//             var popOptions = {
//                 legend: {
//                     display: false
//                 }
//             };
//             var popChart = new Chart(popCtx, {
//                 type: 'doughnut',
//                 data: popData,
//                 options: popOptions
//             });

//             var rockCtx = document.getElementById("rockChart");
//             var rockData = {
//                 labels: [
//                     "Hard Rock",
//                     "Indie Rock"
//                 ],
//                 datasets: [{
//                     data: [2, 2],
//                     backgroundColor: [
//                         "#666",
//                         "#231f20"
//                     ],
//                     hoverBackgroundColor: [
//                         "#666",
//                         "#231f20"
//                     ]
//                 }]
//             };

//             var rockOptions = {
//                 legend: {
//                     display: false
//                 }
//             };
//             var rockChart = new Chart(rockCtx, {
//                 type: 'doughnut',
//                 data: rockData,
//                 options: rockOptions
//             });

//             //Urban
//             var urbanCtx = document.getElementById("urbanChart");
//             var urbanData = {
//                 labels: [
//                     "R&B",
//                     "Rap"
//                 ],
//                 datasets: [{
//                     data: [7, 9],
//                     backgroundColor: [
//                         "#5D93A0",
//                         "#2e494f"
//                     ],
//                     hoverBackgroundColor: [
//                         "#5D93A0",
//                         "#2e494f"
//                     ]
//                 }]
//             };

//             var urbanOptions = {
//                 legend: {
//                     display: false
//                 }
//             };
//             var urbanChart = new Chart(urbanCtx, {
//                 type: 'doughnut',
//                 data: urbanData,
//                 options: urbanOptions
//             });


//             //Dance
//             var danceCtx = document.getElementById("danceChart");
//             var danceData = {
//                 labels: [
//                     "Electronic Dance",
//                     "House"
//                 ],
//                 datasets: [{
//                     data: [3, 1],
//                     backgroundColor: [
//                         "#4C385E",
//                         "#251b2f"
//                     ],
//                     hoverBackgroundColor: [
//                         "#4C385E",
//                         "#251b2f"
//                     ]
//                 }]
//             };

//             var danceOptions = {
//                 legend: {
//                     display: false
//                 }
//             };
//             var danceChart = new Chart(danceCtx, {
//                 type: 'doughnut',
//                 data: danceData,
//                 options: danceOptions
//             });

//             //Other
//             var otherCtx = document.getElementById("otherChart");
//             var otherData = {
//                 labels: [
//                     "Classical",
//                     "Latin",
//                     "Children's Music",
//                     "Reggae",
//                     "Disco"
//                 ],
//                 datasets: [{
//                     data: [3, 1, 5, 1, 1],
//                     backgroundColor: [
//                         "#d6702b",
//                         "#231f20",
//                         "#5D93A0",
//                         "#4C385E",
//                         "#E0B848"
//                     ],
//                     hoverBackgroundColor: [
//                         "#d6702b",
//                         "#231f20",
//                         "#5D93A0",
//                         "#4C385E",
//                         "#E0B848"
//                     ]
//                 }]
//             };

//             var otherOptions = {
//                 legend: {
//                     display: false
//                 }
//             };
//             var otherChart = new Chart(otherCtx, {
//                 type: 'doughnut',
//                 data: otherData,
//                 options: otherOptions
//             });


//             var trigger = true;

//         }
//     });

 // For a pie chart
            var popCtx = document.getElementById("popChart");
            var popData = {
                labels: [
                    "Pop/Rock",
                    "Dance Pop"
                ],
                datasets: [{
                    data: [16, 13],
                    backgroundColor: [
                        "#d6702b",
                        "#6d3815"
                    ],
                    hoverBackgroundColor: [
                        "#d6702b",
                        "#6d3815"
                    ]
                }]
            };

            var popOptions = {
                legend: {
                    display: false
                }
            };
            var popChart = new Chart(popCtx, {
                type: 'doughnut',
                data: popData,
                options: popOptions
            });

            var rockCtx = document.getElementById("rockChart");
            var rockData = {
                labels: [
                    "Hard Rock",
                    "Indie Rock"
                ],
                datasets: [{
                    data: [2, 2],
                    backgroundColor: [
                        "#666",
                        "#231f20"
                    ],
                    hoverBackgroundColor: [
                        "#666",
                        "#231f20"
                    ]
                }]
            };

            var rockOptions = {
                legend: {
                    display: false
                }
            };
            var rockChart = new Chart(rockCtx, {
                type: 'doughnut',
                data: rockData,
                options: rockOptions
            });

            //Urban
            var urbanCtx = document.getElementById("urbanChart");
            var urbanData = {
                labels: [
                    "R&B",
                    "Rap"
                ],
                datasets: [{
                    data: [7, 9],
                    backgroundColor: [
                        "#5D93A0",
                        "#2e494f"
                    ],
                    hoverBackgroundColor: [
                        "#5D93A0",
                        "#2e494f"
                    ]
                }]
            };

            var urbanOptions = {
                legend: {
                    display: false
                }
            };
            var urbanChart = new Chart(urbanCtx, {
                type: 'doughnut',
                data: urbanData,
                options: urbanOptions
            });


            //Dance
            var danceCtx = document.getElementById("danceChart");
            var danceData = {
                labels: [
                    "Electronic Dance",
                    "House"
                ],
                datasets: [{
                    data: [3, 1],
                    backgroundColor: [
                        "#4C385E",
                        "#251b2f"
                    ],
                    hoverBackgroundColor: [
                        "#4C385E",
                        "#251b2f"
                    ]
                }]
            };

            var danceOptions = {
                legend: {
                    display: false
                }
            };
            var danceChart = new Chart(danceCtx, {
                type: 'doughnut',
                data: danceData,
                options: danceOptions
            });

            //Other
            var otherCtx = document.getElementById("otherChart");
            var otherData = {
                labels: [
                    "Classical",
                    "Latin",
                    "Children's Music",
                    "Reggae",
                    "Disco"
                ],
                datasets: [{
                    data: [3, 1, 5, 1, 1],
                    backgroundColor: [
                        "#d6702b",
                        "#231f20",
                        "#5D93A0",
                        "#4C385E",
                        "#E0B848"
                    ],
                    hoverBackgroundColor: [
                        "#d6702b",
                        "#231f20",
                        "#5D93A0",
                        "#4C385E",
                        "#E0B848"
                    ]
                }]
            };

            var otherOptions = {
                legend: {
                    display: false
                }
            };
            var otherChart = new Chart(otherCtx, {
                type: 'doughnut',
                data: otherData,
                options: otherOptions
            });



    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        (!window.requestAnimationFrame) ? setTimeout(function() { showBlocks(timelineBlocks, offset); }, 100): window.requestAnimationFrame(function() { showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function() {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }




    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $(window).scroll(function() {
        if ($('.map-wrapper').visible()) {
            $('.flag:nth-child(2)').css('animation', '1s linear forwards bouncePin');
            $('.flag:nth-child(3)').css('animation', '1s linear 0.25s forwards bouncePin');
            $('.flag:nth-child(4)').css('animation', '1s linear 0.7s forwards bouncePin');
            $('.flag:nth-child(5)').css('animation', '1s linear 0.75s forwards bouncePin');
            $('.flag:nth-child(6)').css('animation', '1s linear 1s forwards bouncePin');
            $('.flag:nth-child(7)').css('animation', '1s linear 1.25s forwards bouncePin');
            $('.flag:nth-child(8)').css('animation', '1s linear 1.5s forwards bouncePin');
            $('.flag:nth-child(9)').css('animation', '1s linear 1.75s forwards bouncePin');
            $('.flag:nth-child(10)').css('animation', '1s linear 2s forwards bouncePin');
        }

        if ($('#low-bpm').visible()) {
            $('#low-bpm').css('animation', '1s linear forwards grow');
            $('.label-1').css('animation', '1s linear 0.5s forwards width');

        }

        if ($('#avg-bpm').visible()) {
            $('#avg-bpm').css('animation', '1s linear 1s forwards grow');
            $('.label-2').css('animation', '1s linear 1.5s forwards width');
           
        }

        if ($('#high-bpm').visible()) {
            $('#high-bpm').css('animation', '1s linear 2s forwards grow');
            $('.label-3').css('animation', '1s linear 2.5s forwards width');
        }
    });

});
