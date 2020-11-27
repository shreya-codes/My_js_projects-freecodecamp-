<?php
echo('1st step');

if(isset($_POST['newpoll'])){

echo('entered');

$Pollname=$_POST['pollname'];
$poll_type=$_POST['voter'];
$entries_count=$_POST['entry-count'];


include 'db.php';
if($poll_type=='Free'){
include 'db.php';

$password='xyz';

$stmt=$conn->prepare('insert into poll(Poll_Name,Poll_Type,Total_Entries,Password) values (?,?,?,?)');
		$stmt->bind_param("ssss",$Pollname,$poll_type,$entries_count,$password);
		$stmt->execute();
		// echo "Submit success";
		$stmt->close();
		$conn->close();
		

}

if($poll_type=='Controlled'){



}
if($poll_type=='FullControlled'){

echo('we are here in FullControlled');

}

}

?>