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
    if (($("#txtPasswd").val() =="abc123") && ($("#txtUsuario").val()=="4000")){
         window.location.assign("citmed.php")
        
    }
    else {
        $('#element_to_pop_up').bPopup();
        alert("Usuario Invalido"+ $("#txtPasswd").val() + $("#txtUsuario").val() )
        
    }
   
}
function validartelefono() {
    if ($("#txtTelefono").val() == "") {
    }
    else {
		$("#paso0").hide();
        $("#paso1").show();
    }
};