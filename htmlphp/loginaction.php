<?php
$check=1;
    if(isset($_POST['logged']))
    {
        $firstname=$_POST['firstname'];
        $password=$_POST['password'];
        // echo $userEmail." ";

    
        session_start();
        $_SESSION['firstname']=$firstname;
        $_SESSION['password']=$password;

        include 'db.php';
        $query="SELECT * FROM registration";
        $sql=mysqli_query($conn,$query);
        while($row=mysqli_fetch_assoc($sql))
        {
           
            $id=$row['id'];
            $Firstname=$row['firstname'];
           
            $Lastname=$row['lastname'];
            $Email=$row['email'];
            $Password=$row['password'];
            if($Firstname==$_SESSION['firstname'] && $Password==$_SESSION['password'])
            {
                header('location:candidate.php');


            }
                
              

       
        }

     include'JavaScript.js';

    }

        

    

?>
