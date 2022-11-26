

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
