<?php
/**
 * Created by tom-sapletta-com on 2015-05-06.
 */

$file = "data/";
$data = "2015.05.w1";
$filext = ".txt";
$filepath = $file . $data .$filext;
$filecache = $file . 'cache/' . $data . date(".d_h.i.s") . $filext;

//TODO odzyskiwanie kopii zapisanego pliku
//TODO sprawdza już zapisane pliki z innych zrodeł i pokazuje zmiany jakie nastapily, na wypadek danych offline
// sprawdzić czy już ten plik nie był zapisywany, czy na innym kopmuterze juz go ktoś nie zapisywał

if( !empty($_POST['data']) )
{
    $data = '';
    $data = $_POST['data'];

    if(strlen($data) > 1)
    {
        // zapisanie kopii zapasowej
        $stat = file_put_contents($filecache, $data);
        // zapisanie aktualnej treści
        $stat = file_put_contents($filepath, $data);
        echo "{'status':".$stat."}";
    }
    else
    {
        echo "{'status':-1}";
    }
}
else
{
    // jeśli nie podano zmiennej do zapisania do odczyt pliku
    echo file_get_contents( $filepath );
}
