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
s

?>

      //Let's try this one as a replacement for the above script
<?php
    $yourName = $_POST['yourName'];
    $number = $_POST['number'];
    $tableNumber = $_POST['tableNumber'];
    $date = $_POST['date'];
    $comment = $_POST['comment'];
    $fileName = $_POST['fileName'];

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "qiblu";

    // Create connection
    $conn = new mysqli($host, $dbusername, $password, $dbname);
    if (mysqli_connect_error()){
    die('Connect Error ('. mysqli_connect_errno() .') '
    . mysqli_connect_error());
    }
    else{
    $sql = "INSERT INTO review (yourName, number, tableNumber, date, comment, fileName)
    values ('$username','$password')";
    if ($conn->query($sql)){
    echo "New review has been submitted sucessfully";
    }
    else{
    echo "Error: ". $sql ."
    ". $conn->error;
    }
    $conn->close();
    }
    }
    else{
    echo "Something went wrong, please check all the fields and try again";
    die();}
    }
    ?>
    }


?>


//draft2 to test the connection

<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";
?>
