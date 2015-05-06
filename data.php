<?php
// zapisywanie ka�dego dnia kopii zapasowej


$file = "data/";
$data = "2015.05.w1";
$filext = ".txt";
$filepath = $file . $data .$filext;
$filecache = $file . 'cache/' . $data . date(".d_h.i.s") . $filext;

// sprawdzić czy już ten plik nie był zapisywany, czy na innym kopmuterze juz go ktoś nie zapisywał
// lub w oknie przeglądarki,
// sprawdza już zapisane pliki z innych zrodeł i pokazuje zmiany jakie nastapily, na wypadek danych offline
if( !empty($_POST['data']) )
{
    //robienie cache pliku za kazdym id
    $data = '';
//$data = $_POST['data'];
    $data = $_POST['data'];

    if(strlen($data) > 1)
    {
        $stat = file_put_contents($filecache, $data);
        $stat = file_put_contents($filepath, $data);
//        date_default_timezone_set("E");

        //if( = !fwrite($handle, $data ) )
        echo "{'status':".$stat."}";
        //else
        //  echo "{'status':false}";
    }
    else
    {
        echo "{'status':-1}";
    }
}
else
{
    echo file_get_contents( $filepath );
}
