<?php
If ($_SERVER['PHP_AUTH_USER'] != 'tom' || md5($_SERVER['PHP_AUTH_PW']) != '83e7cb0c1de93b5aa3b524616ee0661b' )
	{
	header("WWW-Authenticate: Basic realm=Logowanie do systemu");
	header("HTTP/1.0 401 Unauthorized");
	echo '
        <!DOCTYPE html>
        <html>
        <head lang="en">
            <meta charset="UTF-8">
          <TITLE>Logowanie</TITLE>
        </head>
        <BODY>
            <h1>b³¹d logowania</h1>
        </BODY>
        </HTML>
	';
	exit();
	}