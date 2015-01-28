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
    
    $("#btnGuardar").click(function () {
        $("#paso2").show();
    });
    
    $("#btnDocumentoP").click(function () {
        $("#paso3").show();
    });
    
    $("#btnGuardarP").click(function () {
        $("#paso0").hide();
		$("#paso1").hide();
		$("#paso2").hide();
		$("#paso3").hide();
		$("#paso4").show();
    });

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
        $("#paso1").show();        
    }
}

function rdbDestinoHU(){
	$("#paso5").show();
};

function rdbDestinoCE(){
	$("#paso5").show();
};

function rdbHospitalizadoSi(){
	alert("Ir a guión de Despedida");
	location.reload();
};

function rdbHospitalizadoNo(){
	$("#paso7").show();
};

function rdbControlSi(){
	$("#paso4").hide();
	$("#paso5").hide();
	$("#paso6").hide();
	$("#paso7").hide();
	alert("Proceso continúa en SAP");
	$("#paso8").show();
};

function rdbControlNo(){
	$("#paso4").hide();
	$("#paso5").hide();
	$("#paso6").hide();
	$("#paso7").hide();
	alert("Proceso continúa en SAP");
	$("#paso8").show();
};