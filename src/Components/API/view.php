<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With');

$conn = mysqli_connect('localhost', 'root', 'd1');

$sql = "Select * from Names";
$mysqli = mysqli_query($conn,$sql);
$json_data = array();

while($row = mysqli_fetch_assoc($mysqli))
{
    $json_data[] = $row;
}

?>