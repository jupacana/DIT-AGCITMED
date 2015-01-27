<html>

<head>
  <title>Agcitmed.Net - Citas M&eacute;dicas</title>
  <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
  <meta http-equiv="Content-Script-Type" content="text/javascript"/>
  <meta name="Generator" content="Corel PHOTO-PAINT 16.1"/>
  <link rel="stylesheet" type="text/css" href="site.css">  
<style type="text/css">
<!--
body {
	background-color: #FAFBFC;
}
-->
</style>
<script src="librerias/modernizr-2.6.2.js" type="text/javascript"></script>
<script src="librerias/jquery-1.9.0.min.js" type="text/javascript"></script>
<script src="librerias/jquery-ui-1.9.2.min.js" type="text/javascript"></script>
<script src="librerias/js/jquery.equalheights.js" type="text/javascript"></script>
<script src="librerias/js/jquery.cycle.all.js" type="text/javascript"></script>
<script src="librerias/uno27.js" type="text/javascript"></script>
</head>

<body>
<div id="element_to_pop_up">Ingrese un Número Valido
            <a class="b-close">x<a/>
</div>
<table border="0" cellspacing="0" cellpadding="0" width="1025" height="577" align="center">
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" height="1" width="1"></td>
    <td rowspan="1" colspan="1" height="1" width="48"></td>
    <td rowspan="1" colspan="1" height="1" width="297"></td>
    <td rowspan="1" colspan="1" height="1" width="143"></td>
    <td rowspan="1" colspan="1" height="1" width="150"></td>
    <td rowspan="1" colspan="1" height="1" width="47"></td>
    <td rowspan="1" colspan="1" height="1" width="294"></td>
    <td rowspan="1" colspan="1" height="1" width="45"></td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="84"></td>
    <td rowspan="2" colspan="3" width="488" height="122"><img border="0" width="488" height="122" src="imagenes/pantalla1.png" alt=""></td>
    <td rowspan="1" colspan="4" width="536" height="84"><img border="0" width="536" height="84" src="imagenes/pantalla2.png" alt=""></td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="38"></td>
    <td rowspan="1" colspan="4" width="536" height="38" background="imagenes/pantalla3.png" valign="middle">
	<ul id="menu">
		<li class="link"><a href="#" class="a">Citas Medicas</a></li>
		<li class="link"><a href="#" class="a">Reportes</a></li>
                <li class="link"><a href="#" class="a">Administraci&oacute;n</a></li>
		<li class="link"><a href="#" class="a">PQR</a></li>
	</ul>
	</td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="68"></td>
    <td rowspan="3" colspan="1" width="48" height="379"><img border="0" width="48" height="379" src="imagenes/pantalla4.png" alt=""></td>
    <td rowspan="1" colspan="1" width="297" height="68"><img border="0" width="297" height="68" src="imagenes/pantalla5.png" alt=""></td>
    <td rowspan="1" colspan="2" width="293" height="68"><img border="0" width="293" height="68" src="imagenes/pantalla6.png" alt=""></td>
    <td rowspan="3" colspan="1" width="47" height="379"><img border="0" width="47" height="379" src="imagenes/pantalla8.png" alt=""></td>
    <td rowspan="2" colspan="2" width="339" height="108"><img border="0" width="339" height="108" src="imagenes/pantalla9.png" alt=""></td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="40"></td>
    <td rowspan="2" colspan="3" width="590" height="311" background="imagenes/pantalla7.png" valign="middle" align="center">
	<div id="paso0"> 
                <input type="text" name="txtTelefono" placeholder="N&uacute;mero Telef&oacute;nico" id="txtTelefono" class="text">  
		<input class="button1" type="button" name="btnBuscar" value="Buscar" id="btnBuscar">
	</div>
	<div id="paso1" style="display:none;">
		<br><input type="text" name="txtNombre" placeholder="Nombre" id="txtNombre" class="text1">
		<input type="text" name="txtApellido1" placeholder="Apellido1" id="txtApellido1" class="text1">
		<input type="text" name="txtApellido2" placeholder="Apellido2" id="txtApellido2" class="text1">
		<input type="button" name="btnGuardar" value="Guardar" id="btnGuardar" class="button1">
	</div>
	<div id="paso2" style="display:none;">
		<br><select id="cmbTDocumento" class="labe2">
			<option value="0">Seleccione...</option>
			<option value="1">C&eacute;dula</option>
			<option value="2">Tarjeta de Identidad</option>
			<option value="3">Registro Civil</option>
		</select>
		<input type="text" name="txtDocumentoP" placeholder="Documento Paciente" id="txtDocumentoP" class="text">
		<input type="button" name="btnDocumentoP" value="Guardar" id="btnDocumentoP" class="button1">
	</div>
	<div id="paso3" style="display:none;">
		<br><input type="text" name="txtNombreP" placeholder="Nombre" id="txtNombreP" class="text1">
		<input type="text" name="txtApellido1P" placeholder="Apellido1" id="txtApellido1P" class="text1">
		<input type="text" name="txtApellido2P" placeholder="Apellido2" id="txtApellido2P" class="text1">
		<input type="button" name="btnGuardarP" value="Guardar" id="btnGuardarP" class="button1">
	</div>
	<div id="paso4" style="display:none;">
		<br><label class="label1">¿A d&oacute;nde se esta comunicando?</label>
		<label class="label2">HU</label><input type="radio" name="rdbDestino" value="HU" id="rdbDestino">
		<label class="label2">CE</label><input type="radio" name="rdbDestino" value="CE" id="rdbDestino">
	</div>
	<div id="paso5" style="display:none;">
		<br><select id="cmbEspecialidad" class="labe1">
			<option value="0">Seleccione...</option>
			<option value="1">Medicina Interna</option>
			<option value="2">Cardiolog&iacute;a</option>
			<option value="3">Neorolog&iacute;a</option>
		</select>
		<select id="cmbSEspecialidad" class="labe1">
			<option value="0">Seleccione...</option>
			<option value="1">Medicina Interna</option>
			<option value="2">Cardiolog&iacute;a</option>
			<option value="3">Neorolog&iacute;a</option>
		</select>
	</div>
	<div id="paso6" style="display:none;">
		<br><label class="label1">¿Paciente Hospitalizado?</label>
		<label class="label2">SI</label><input type="radio" name="rdbHospitalizado" value="SI" id="rdbHospitalizado">
		<label class="label2">NO</label><input type="radio" name="rdbHospitalizado" value="NO" id="rdbHospitalizado">
	</div>
	<div id="paso7" style="display:none;">
		<br><label class="label1">¿Primera vez?</label>
		<label class="label2">SI</label><input type="radio" name="rdbControl" value="SI" id="rdbControl">
		<label class="label2">NO</label><input type="radio" name="rdbControl" value="NO" id="rdbControl">
	</div>
	</td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="271"></td>
    <td rowspan="1" colspan="1" width="294" height="271" background="imagenes/pantalla10.png" valign="middle" align="center">
	<div id="paso3-1" style="display: none;">
		<label class="label1">El 24-Enero-2015 el señor </label><label class="label2">Juan Manuel LLano</label><label class="label1"> se comunicó al </label>
		<label class="label2">Hospital Universitario</label><label class="label1">, no fue posible asignar cita</label><br><br>
		<label class="label2">Tipificación: </label><label class="label1">Cita NO ASIGNADA por hospitalización</label><br><br>
		<input class="button" type="button" name="btn4" value="Copiar" id="btn4">
	</div>
	</td>
    <td rowspan="1" colspan="1" width="45" height="271"><img border="0" width="45" height="271" src="imagenes/pantalla11.png" alt=""></td>
  </tr>
  <tr align="left" valign="top">
    <td rowspan="1" colspan="1" width="1" height="75"></td>
    <td rowspan="1" colspan="7" width="1024" height="75"><img border="0" width="1024" height="75" src="imagenes/pantalla12.png" alt=""></td>
  </tr>
</table>

</body>

</html>
