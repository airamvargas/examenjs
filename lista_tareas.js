$(document).ready(function(){
    console.log("hola")
    let myElement = document.getElementById('cuenta');
    simplyCountdown(myElement, { 
        year: 2024, // required
        month: 7, // required
        day: 13, // required
        hours: 18, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { //words displayed into the countdown
            days: { singular: 'día', plural: 'días' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: 'segundo', plural: 'segundos' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: false, //Use UTC or not - default : false
        onEnd: function() {
            return; }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // amount css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false
    });
    audioElement = document.getElementById('cancion');
    audioElement.autoplay = true;
    audioElement.load();
});

$(document).on('click', '#recepcion', function(){
    location.href = "https://maps.app.goo.gl/nQgzZBvkX1pZGc9x5";
});

$(document).on('click', '#ceremonia', function(){
    location.href = "https://maps.app.goo.gl/bc7K6tkPqb6zF86t7";
});

$(document).on('click', '#confirmacion', function(){
    location.href = "https://wa.me/5215513916413";
});

var grid = document.querySelector('.grid');
    imagesLoaded(grid, function() {
    // init Isotope after all images have loaded
    var $msnry = new Masonry(grid, {
        // options
        itemSelector: '.grid-item',
        percentPosition: true,
        isFitWidth: true,
        originLeft: false,
        columnWidth: 100,
        gutter: 2,
        /*columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        columnWidth: 50,
        gutter: 2,
        isFitWidth: true,
        originLeft: false*/
    });

    //-------------------------------------//
    // hack CodePen to load pens as pages

    function getPenPath() {
        const nextPenSlugs = [
            '3d9a3b8092ebcf9bc4a72672b81df1ac',
            '2cde50c59ea73c47aec5bd26343ce287',
            'd83110c5f71ea23ba5800b6b1a4a95c4',
        ];

        let slug = nextPenSlugs[this.loadCount];
        if (slug) return `/desandro/debug/${slug}`;
    }

    /*    $('.grid').infiniteScroll({
        path: getPenPath,
        append: '.grid-item',
        outlayer: false,
        scrollThreshold: true,
        Threshold: 8,
        status: '.infinite-scroll-last'
    }); */
});
