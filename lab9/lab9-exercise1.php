<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)

//Q1
//echo "This was output using PHP";

//Q2
//echo "This page was generated: " . date("M dS, Y");

//Q3
//

//Q4
//echo "This page was generated: " . date("M dS, Y") . "<hr/>";

//Q5
//echo "This page was generated: " . date("M dS, Y")   "<hr/>";

//Q6
//echo "This page was generated: " . date("M dS, Y") . "<hr/>";

//Q7
//$d = date("M dS, Y");
//echo "This page was generated: " . $d . "<hr/>";

//Q8
//$date = date("M dS, Y");
//echo "This page was generated: " . $date . "<hr/>";

//Q9
//$date = date("l, F jS, Y H:i:s");
//echo $date . "<br>";

//Q10
//$remaining = 365 - date("z") + 1;
//echo "There are ". $remaining . " days left in the year";

//Q11
//$remaining = 365 + 1 - date("z");
//echo "There are ". $remaining . " days left in the year";
echo "<br>"; //notice we must echo tags in php.

?>
</body>
</html>