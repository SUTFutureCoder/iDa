<?php
/**
 * A simple exec file can exec git pull from gitlab by Web Hooks
 * 
 * @author linxingchen
 */

//Please add the URL of this file to Web Hooks

//Get the dir name to prepare git pull
$dir_name = dirname(__FILE__);

//Construct the command
//$command = 'cd ' . $dir_name . '; git pull';

//Test Log & Git Hook
$command = 'cd ' . $dir_name . '; git status';

//Exec git pull
exec($command, $out, $status);


//Write the log file
$fp = fopen('pull_log.txt', 'a');
if (!$fp){
    exit();
} else {
    if (is_array($out)){
        $fileData = '---' . date('Y-m-d H:i:s') . '---' . "\n";
	$fileData .= 'Shell Exec Command' . "\n";
	$fileData .= $command . "\n";
        $fileData .= 'Shell Exec Return' . "\n";
        foreach ($out as $out_value){
            $fileData .= $out_value . "\n";
        }
    }
    $fileData .= 'Status' . "\n";
    $fileData .= $status . "\n";
    fwrite($fp, $fileData);
    fclose($fp);
}
