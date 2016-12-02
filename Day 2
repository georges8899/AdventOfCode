<?php

function getCode($grid, $pos, $data) {
	$code = "";

	$data = explode("\n", $data);

	foreach ($data as $line) {
		$dirs = str_split($line);
		foreach ($dirs as $dir) {
			$temp = $pos;

			switch ($dir) {
				case "U":
					$temp[0] -= 1;
					break;
				case "D":
					$temp[0] += 1;
					break;
				case "L":
					$temp[1] -= 1;
					break;
				case "R":
					$temp[1] += 1;
					break;
			}

			if (isset($grid[$temp[0]][$temp[1]])) {
				$pos = $temp;
			}
		}

		$code .= $grid[$pos[0]][$pos[1]];
	}

	return $code;
}

$pos = array(1,1);
$grid = array(
	array("1", "2", "3"),
	array("4", "5", "6"),
	array("7", "8", "9"),
);

$pos2 = array(2,0);
$grid2 = array(
	array(null, null, "1", null, null),
	array(null, "2", "3", "4", null),
	array("5", "6", "7", "8", "9"),
	array(null, "A", "B", "C", null),
	array(null, null, "D", null, null),
);

?>

<?php if (isset($_POST["instructions"])):
	$data = $_POST["instructions"];

	echo "The first code is: " . getCode($grid, $pos, $data);
	echo "<br/>";
	echo "The second code is: " . getCode($grid2, $pos2, $data);
?>

<br/>
<a href="/">Back</a>

<?php else: ?>

	<form action="" method="POST">
		<textarea name="instructions" cols="100" rows="10"></textarea>
		<br/>
		<input type="submit"/>
	</form>

<?php endif;
