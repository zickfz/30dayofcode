<?php
    class Difference{
    private $elements=array();
    public $maximumDifference;
    // Write your code her

public function __construct($a) 
{
    $this->elements = $a;
}

public function ComputeDifference()
{
    sort($this->elements);
    $this->maximumDifference = abs($this->elements[count($this->elements)-1] - $this->elements[0]);
}
} //End of Difference class  
     

$N=intval(fgets(STDIN));
$a =array_map('intval', explode(' ', fgets(STDIN)));
$d=new Difference($a);
$d->ComputeDifference();
print ($d->maximumDifference);
?>