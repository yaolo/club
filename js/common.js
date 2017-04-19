(function () {
    var main={
        init:function () {
            $('#tologin').click(function () {
                console.log(123);
                main.pbstyle();
                $('.login').addClass('show');
            });
            $('#btn,.close').click(function () {
                main.pbremove();
            });
            $('#upload').change(function () {
                //判断浏览器是否支持FileReader接口
                if (typeof FileReader == 'undefined') {
                    $('.tips').html('当前浏览器不支持FileReader接口，请更换为最新版本的浏览器!');
                    //使选择控件不可操作
                    $('.tochange').attr("disabled", "disabled");
                }
                var file = $('#upload')[0].files[0];
                console.log(file);
                var reader = new FileReader();
                console.log(reader);
                reader.onload = function (e) {
                    var img = document.getElementById("uploadimg");
                    img.src = e.target.result;
                }
                reader.readAsDataURL(file);
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