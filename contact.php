<?php

  $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
  $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
  
  $nombre = $POST['nombre'];
  $mail = $_POST['mail'];
  $tel = $_POST['telefono'];
  $texto = $_POST['texto'];
  $fecha = date('dd/mm/yyyy h:m:s');

  $mensaje = $nombre . "\r\n" . $mail . "\r\n" . $tel . "\r\n" . $texo;

  if(mail('contacto@bacs.cl' , 'Form contacto' . $fecha. $mensaje,$mensaje, $cabeceras))
  	 echo '1';
  else
  	 echo '0';
  
?>