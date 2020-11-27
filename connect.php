<?php

if(isset($_POST['register'])){
include('db.php');

	$firstname= mysqli_real_escape_string($conn,$_POST['firstname']);
	$email= mysqli_real_escape_string($conn,$_POST['email']);
	$password=mysqli_real_escape_string($conn,$_POST['password']);
	$lastname= mysqli_real_escape_string($conn,$_POST['lastname']);
	$confirmpassword=mysqli_real_escape_string($conn,$_POST['confirmpassword']);


	
		include('db.php');

	if($password==$confirmpassword){
		$stmt=$conn->prepare('insert into registration(firstname,lastname,email,password) values (?,?,?,?)');
		$stmt->bind_param("ssss",$firstname,$lastname,$email,$password);
		$stmt->execute();
		// echo "Submit success";
		$stmt->close();
		$conn->close();
		header('location:login1.php');
		
		}
		else{

echo ('<script type="text/javascript">alert("not matched"); </script>');
			//include 'JavaScript.js';


		}


}
else{
	echo ('not workin');  
}



?>