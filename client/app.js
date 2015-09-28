/**
 * Created by gfrethem on 9/27/15.
 */
$(function() {
    $.ajax({
        url: '/getStudents'
    }).done(function (response) {
        for (i = 0; i < response.length; i++) {
            var studentName = response[i].name;
            var studentDescription = response[i].description;
            var studentShoutOut = response[i].shoutOut;
            var $htmlToAppend = '<li><h1>' + studentName + '</h1><p>' + studentDescription + '</p><p class="shoutOut">'
                + studentShoutOut + '</p></li>';
            $('.students').append($htmlToAppend);
        };
            $('.jcarousel').jcarousel({wrap:'both'});

            $('.jcarousel-control-prev')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '-=1'
                });

            $('.jcarousel-control-next')
                .on('jcarouselcontrol:active', function() {
                    $(this).removeClass('inactive');
                })
                .on('jcarouselcontrol:inactive', function() {
                    $(this).addClass('inactive');
                })
                .jcarouselControl({
                    target: '+=1'
                });

            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .jcarouselPagination();

    });


});

