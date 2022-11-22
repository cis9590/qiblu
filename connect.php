<?php
    $yourName = $_POST['yourName'];
    $number = $_POST['number'];
    $tableNumber = $_POST['tableNumber'];
    $date = $_POST['date'];
    $comment = $_POST['comment'];
    $fileName = $_POST['fileName'];

    //Database connection 
    $conn = new mysqli('localhost','root','','qiblu');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt - $conn->prepare("insert into registration(yourName, number, tableNumber, date, comment, fileName)
            values(?,?,?,?,?,?)");
        $stmt->bind_param("siisss",$yourName,$number,$tableNumber,$date,$comment,$fileName);
        $stmt->execute():
        echo "Submitted Successfully...";
        $stmt->close();
        $conn->close();
}


?>