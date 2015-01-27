jQuery(document).ready(function () {
    $('#banners')
            .cycle({
                fx: 'fade',
                delay: 4000,
                timeout: 4000,
                manualTrump: false,
                cleartypeNoBg: true,
                next: '#next',
                prev: '#prev'
            });
    $("#btnBuscar").click(function () {
        validartelefono();
    });
    $("#btnHU").click(function () {
        $("#paso1").hide();
        $("#paso2").show();
    });
    $("#btnCE").click(function () {
        $("#paso1").hide();
        $("#paso5").show();
    });
    $("#btn1").click(function () {
        $("#paso2").hide();
        $("#paso3").show();
        $("#paso3-1").show();
    });
    $("#btn3").click(function () {
        $("#paso3").hide();
        $("#paso4").show();
    });
    $("#btn5").click(function () {
        $("#paso4").hide();
        $("#paso3-1").hide();
        location.reload();
    });
    $("#btn4").click(function () {
        $("#paso6").show();
    });
    $("#select1").change(function () {
        $("#paso6").show();
    });

});
function citmed() {
    if (($("#txtUsuario").val() == 'james') && ($("#txtPasswd").val() == 'abc123')) {
        window.location.assign("citmed.php")
    }
    else {
        bootbox.alert("hola");
    }
}

;
(function ($) {

    // DOM Ready
    $(function () {

        // Binding a click event
        // From jQuery v.1.7.0 use .on() instead of .bind()
        $('#btnIngresar').bind('click', function (e) {
            if (($("#txtUsuario").val() == 'james') && ($("#txtPasswd").val() == 'abc123')) {
                window.location.assign("citmed.php")
            }
            // Prevents the default action to be triggered. 
            else {
            // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup({
	    easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown',
           
        });
             
        }
                });

    });

})(jQuery);

var mi_variable = "Hola Mundo";

function validartelefono() {
    if ($("#txtTelefono").val() == "") {
            alert("Ingrese un Número Valido")
    }
    else {
        $("#paso0").hide();
        $("#paso1").show();
        
    }
}
