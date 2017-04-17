(function () {
    var main={
        init:function () {
            $('#tologin').click(function () {
                console.log(123);
                main.pbstyle();
                $('.login').addClass('show');
            });
            $('#register,.close').click(function () {
                main.pbremove();
            });
        },
        pbstyle:function () {
            $('body').addClass('bodyhidden');
            $('.pop').addClass('bgColor');
        },
        pbremove:function () {
            $('body').removeClass('bodyhidden');
            $('.pop').removeClass('bgColor');
        }
    };
    main.init();
    return main;
})();