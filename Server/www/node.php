<?php
/**
 * @author Brian Floersch <gh123man@gmail.com>
 */

function nodeConnect() {

    echo '<script type="text/javascript" src="http://' . $_SERVER["SERVER_NAME"] . ':8000/socket.io/socket.io.js"></script>'; 
    echo "<script>"; 

    echo "var sID = '";
    echo session_id();
    echo "';";

    echo "var server = 'http://";
    echo  $_SERVER["SERVER_NAME"];
    echo ":8000';";

    echo "</script>"; 
    echo '<script type="text/javascript" src="/static/js/nodeConnect.js"></script>';
    
}














?>

