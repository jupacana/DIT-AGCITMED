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

    //

    ;
    (function ($) {

        // DOM Ready
        $(function () {
            $('#btnBuscar').bind('click', function (e) {
                if (/^\d{7}$/.test($("#txtTelefono").val())) {
                    $("#paso1").show();
                }
                else if ((/^\d{10}$/.test($("#txtTelefono").val()))) {
                    $("#paso1").show();
                }
                else {
                    e.preventDefault();
                        $('#element_to_pop_up').bPopup({
                        easing: 'easeOutBack', //uses jQuery easing plugin
                        speed: 450,
                        transition: 'slideDown',
                    });
                }
            });
        });

    })(jQuery);


    //
    ;
    (function ($) {

        // DOM Ready
        $(function () {
            $('#btnDocumentoP').bind('click', function (e) {
                if (/^\d{7}$/.test($("#txtDocumentoP").val())) {
                    $("#paso3").show();
                }
                else if ((/^\d{8}$/.test($("#txtDocumentoP").val()))) {
                    $("#paso3").show();
                }
                else if ((/^\d{10}$/.test($("#txtDocumentoP").val()))) {
                    $("#paso3").show();
                }
                else {
                    e.preventDefault();

                    // Triggering bPopup when click event is fired
                    $('#CedulaPopup').bPopup({
                        easing: 'easeOutBack', //uses jQuery easing plugin
                        speed: 450,
                        transition: 'slideDown',
                    });
                }
            });
        });

    })(jQuery);


    // Guardar paciente.
    ;
    (function ($) {

        // DOM Ready
        $(function () {

            // Binding a click event
            $('#btnGuardarP').bind('click', function (e) {
                if (($("#txtNombreP").val() != '')) {
                    if (($("#txtApellido1P").val() != '')) {
                        
                            $("#paso0").hide();
                            $("#paso1").hide();
                            $("#paso2").hide();
                            $("#paso3").hide();
                            $("#paso4").show();
                        
               
                    }
                    else {
                        // Prevents the default action to be triggered. 
                        e.preventDefault();

                        // Triggering bPopup when click event is fired
                        $('#ApellidoPopup').bPopup({
                            easing: 'easeOutBack', //uses jQuery easing plugin
                            speed: 450,
                            transition: 'slideDown',
                        });

                    }

                }
                // Prevents the default action to be triggered. 
                else {
                    // Prevents the default action to be triggered. 
                    e.preventDefault();

                    // Triggering bPopup when click event is fired
                    $('#NombrePopup').bPopup({
                        easing: 'easeOutBack', //uses jQuery easing plugin
                        speed: 450,
                        transition: 'slideDown',
                    });

                }
            });

        });

    })(jQuery);

    //
   

    $("#cmbSEspecialidad").change(function () {
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
                $('#UsuarioPopup').bPopup({
                    easing: 'easeOutBack', //uses jQuery easing plugin
                    speed: 450,
                    transition: 'slideDown',
                });

            }
        });

    });

})(jQuery);


function rdbDestinoHU() {
    $("#paso5").show();
}
;

function rdbDestinoCE() {
    $("#paso5").show();
}
;

function rdbHospitalizadoSi() {
    alert("Ir a guión de Despedida");
    location.reload();
}
;

function rdbHospitalizadoNo() {
    $("#paso7").show();
}
;

function rdbControlSi() {
    $("#paso4").hide();
    $("#paso5").hide();
    $("#paso6").hide();
    $("#paso7").hide();
    alert("Proceso continúa en SAP");
    $("#paso8").show();
}
;

function rdbControlNo() {
    $("#paso4").hide();
    $("#paso5").hide();
    $("#paso6").hide();
    $("#paso7").hide();
    alert("Proceso continúa en SAP");
    $("#paso8").show();
}
;




function validartelefono() {
    if (/^\d{7}$/.test($("#txtTelefono").val())) {
        $("#paso1").show();
    }
    else if ((/^\d{10}$/.test($("#txtTelefono").val()))) {
        $("#paso1").show();
    }
    else {
        alert("Ingrese un numero Valido")
    }
}
//solo valida numeros y los muestra.
function justNumbers(e)
{
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum == 8) || (keynum == 46))
        return true;

    return /\d/.test(String.fromCharCode(keynum));
}
// solo valida letras y los muestra
function val(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8)
        return true;
    patron = /[A-Za-z]/;
    te = String.fromCharCode(tecla);
    return patron.test(te);
}



;
(function ($) {

    // DOM Ready
    $(function () {

        // Binding a click event
        // From jQuery v.1.7.0 use .on() instead of .bind()
        $('#btnGuardar').bind('click', function (e) {
            if (($("#txtNombre").val() != '')) {
                if (($("#txtApellido1").val() != '')) {
                    
                        $("#paso2").show();
                    
                   
                }
                else {
                    // Prevents the default action to be triggered. 
                    e.preventDefault();

                    // Triggering bPopup when click event is fired
                    $('#ApellidoPopup').bPopup({
                        easing: 'easeOutBack', //uses jQuery easing plugin
                        speed: 450,
                        transition: 'slideDown',
                    });

                }

            }
            // Prevents the default action to be triggered. 
            else {
                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#NombrePopup').bPopup({
                    easing: 'easeOutBack', //uses jQuery easing plugin
                    speed: 450,
                    transition: 'slideDown',
                });

            }
        });

    });

})(jQuery);


