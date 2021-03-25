<?php
header('Access-Control-Allow-Origin: *');
/// Aqui incluiriamos nuestra clase BD (helper que ayuda con las consultas a la base de datos) ////
/*include('../bd.php');
$bd = new BD();*/

$res = array();

/// Deberiamos tener un usuario identificado en la plataforma para saber de quien coger el progreso de los cursos ///
/*if($_POST['user']!='' && $_POST['password']!=''){*/


  /// Aqui consultariamos si el usuario existe para validar que le podemos devolver la informacion (he hecho un ejemplo de una posible consulta a la base de datos) ///
  /*
    $user = $_POST['user'];
    $password = md5($_POST['password']);
    
    $sel = "SELECT * FROM sec_users WHERE username='".$user."' AND password='".$password."'";
    $existe = $bd->consultar($sel);


	if(!empty($existe)){
  */

    /// Cogeriamos el user_id para las siguientes consultas ///
    //$userId = $existe[0]['user_id'];
    $userId = 1;


    /// Posible consulta que nos devolveria los datos de las sesiones concluidas del usuario ///
    /*$q = "SELECT *, count(primer_trimestre) as firstTerm, count(segundo_trimestre) as secondTerm, count(tercer_trimestre) as thirdTerm FROM temarios WHERE user_id='".$userId."' GROUP BY user_id";
    $qResult = $bd->consultar($q);*/


    /// Finalmente deberiamos hacer una estructura para devolverla en formato json///
    $res[0]['id'] = "term0"; 
    $res[1]['id'] = "term1"; 
    $res[2]['id'] = "term3"; 
    $res[0]['name'] = "1º Trimestre"; 
    $res[1]['name'] = "2º Trimestre"; 
    $res[2]['name'] = "3º Trimestre"; 
		$res[0]['value'] = $qResult[0]['firstTerm'];
    $res[1]['value'] = $qResult[0]['secondTerm'];
    $res[2]['value'] = $qResult[0]['thirdTerm'];

    /// Ejemplo para que funcione el webservice ///
    $res[0]['value'] = 50;
    $res[1]['value'] = 30;
    $res[2]['value'] = 0;

    /// Esta informacion deberia estar tambien en la base de datos para saber cuantas sesiones por trimestre hay ///
    $res[0]['valueMax'] = 50;
    $res[1]['valueMax'] = 50;
    $res[2]['valueMax'] = 50;



    /// Para calcular los valores del graphic pie ///
    for($i=0;$i<count($res);$i++){
      $val1 = $res[$i]['value'] * 100 / $res[$i]['valueMax'];
      $val2 = 100 - $val1;

      $res[$i]['graphData'] = [$val1, $val2];
    }
		
//}
	
/// Si no le pasamos usuario el webservice nos devuelve -1 ///  
/*}
else {
	$res['result'] = -1;
}*/

$res = json_encode($res);
print_r($res);

?>