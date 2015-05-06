<?php
/**
 * Created by tom-sapletta-com on 2015-05-06.
 */

$filedata = "data/2015.05.w1.txt";
$fileplans = "data/2015.05.plans.txt";
$filesettings = "data/2015.05.settings.txt";
$filecontacts = "data/2015.05.contacts.txt";
$fileprojects = "data/2015.05.projects.txt";
$filebudget = "data/2015.05.budget.txt";
$fileaffirmations = "data/2015.05.affirmations.txt";
$filehelp = "help.md";

require_once('php/markdown_extended.php');

?>
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>demo PlainEdit .com</title>
    <script src="js/jquery.js"></script>
    <!--<link rel="stylesheet" href="css/plainstyle.css">-->
    <script src="js/edit.plain.js"></script>
    <script src="js/events.plain.js"></script>

    <link rel="stylesheet" href="css/jquery-ui.css">
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/jquery-ui.js"></script>

    <!--    markdown-->
    <!--    <link rel="stylesheet" href="css/style.css?v=4">-->
    <link rel="stylesheet" href="css/libs/sunburst.css"/>
    <!--    markdown-->

    <style>
        .page,
        .ui-overlay-a, .ui-page-theme-a, .ui-page-theme-a .ui-panel-wrapper {
            background-color: #ccc;
            width: 650px;
            margin: 0;
            padding: 0;
            background-color: #222;
            margin-left: 10px;
        }
        .page .parts {
              margin-left: 36px;
        }
        .text {
            border: 1px solid darkgreen;
        }

        .tasks {
            border: 1px solid darkgreen;
        }

        .tags {
            border: 1px solid darkred;
        }

        .debug {
            border: 1px solid darkblue;
            white-space: pre;
        }

        .parts {
            /*border: 1px solid darkorange;*/
            /*display: inline;*/
        }

        .tasks, .tags, .debug, .text {
            width: 350px;
            min-height: 480px;
            display: block;
            float: left;
        }

        .edit {
            /*width: 350px;*/
            /*height: 850px;*/
            margin: 0;
            padding: 0;
            font-size: 12px;
            background-color: #333;
            color: #fafafa;
            text-shadow: 0 0px 0 #111;
            font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
        }

        .tasks_by_tag_done, .tasks_by_tag_notdone, .tasks_done, .tasks_not_done {
            width: 638px;
            height: 110px;
            margin: 0;
            padding: 0;

            background-color: #333;
            color: #fafafa;
            text-shadow: 0 0px 0 #111;
            font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
            border: 0;
        }

        .tasks_by_tag_done, .tasks_by_tag_notdone {
            width: 230px;
            font-size: 12pt;
        }

        .tasks_done, .tasks_by_tag_done {
            background-color: #555;
            font-size: 14pt;
        }

        .tasks_not_done, .tasks_by_tag_notdone {
            background-color: #390000;
        }

        .current_task,
        .current_tag {
            height: 30px;
            width: 800px;
            font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
            font-size: 16px;
            margin: 0;
            padding: 0;
            margin-bottom:2px;
        }

        .current_tag {
            font-size: 19px;
            color: #000;
            height: 27px;
        }

        #search_field, #value_field {
            font-size: 16pt;
            width: 550px;
        }

        #search_field {
            background-color: #212121;
            color: #cccccc;
            border: 0;
        }

        #value_field {
            background-color: #111111;
            color: #fafafa;
            border: 1px solid #aaaaaa;
            width: 440px;
        }

        .weekEdit {
            /*display: block;*/
            width: 100%;
            /*margin-top: 180px;*/
        }

        .text_on .weekEdit {
            margin-top: 2px;
        }

        .weekCheck {
            width: 40px;
            /*height: 300px;*/
            /*display: inline;*/
            float: left;
            /*line-height: 12px;*/
            margin: 0 !important;
            padding: 0 !important;
            /* ten sam odstęp od gory co textarea */
            margin-top: 3px;

        }

        .weekCheck input[type="checkbox"] {
            /*height: 25px;*/
            /*width: 25px;*/
            cursor: pointer;
            /*line-height: 12px;*/
            /*margin: 0!important;*/
            /*padding: 0!important;*/
        }

        .weekText {
            width: 90%;
            /*height: 300px;*/
            /*display: inline;*/
            float: left;
        }

        /* ta sama wartosść dla height i font size w px lub gdy line  jest ustawione to ta sama */
        .weekCheckItem {
            height: 28px;
            /*width: 40px;*/
        }

        .weekText textarea {
            width: 595px;
            /*height = font-size x 119*/
            height: 3332px;
            font-size: 25px;
            padding: 0 0 3px 3px;
            line-height: 28px;
        }

        .about, .tags, .tasks, .taskss {
            overflow: hidden;
            width: 0;
            height: 0;
            display: none;
        }

        .tagEdit {
            /*position: fixed;*/
            /*top: 25px;*/
            height: 150px;
            /*position: absolute;*/
            width: 640px;
            z-index: 999;
            /*background-color: #5f5f5f;*/
            opacity: 0.95;
            /*height: 100px;*/
            margin-left: 0px;
            /* .tagEditLine height: */
            margin-top: 62px;
        }

        .tag_on .tagEdit {
            position: relative;
        }

        .tagEditLine {
            /* .tagEdit margin-top: ...; */
            height: 62px;
            position: fixed;
            top: 0;
            /*position: absolute;*/
            width: 640px;
            z-index: 999;
            background-color: #111;
            opacity: 0.95;
            /*height: 100px;*/
            margin-left: 0px;
        }

        .text_on .tagEditLine {
            /*margin-top: 0px;*/
            /*position: relative;*/
        }

        .ui-button-text-only .ui-button-text {
            padding: .1em 0.08em;
        }

        #current_line {
            width: 39px;
            font-size: 17pt;
            float: left;
            background-color: #212121;
            color: #cccccc;
            border: 0;
            padding-left: 1px;
        }

        #editon, #editoff {
            width: 40px;
            height: 30px;
            float: right;
        }

        .save_on {
            border-color: orange;
            background-color: #111;
        }

        .load_on {
            border-color: green;
            background-color: #444;
        }

        .tagEditLine .navi,
         .left_navi .navi
         {

            margin: 0;
            padding: 0;
            padding-top: 3px;
            padding-bottom: 2px;
            background-color: #111111;
            /*height: 30px;*/

        }

        .tagEditLine .navi li,
        .left_navi .navi li
         {
            display: inline;
        }

        .tagEditLine .navi li div {
            display: inline;
            padding: 2px 5px 2px 5px;
            background-color: #333;
            border: 1px solid #222;
        }

        .navi a {
            color: greenyellow;
            font-size: 17pt;
        }

        #help {
            background: #eeeeee;
        }

        .html {
            padding-top: 40px;
        }
        #affirmations {
            color: rgb(255, 255, 221);
            font-size:14pt;
            font-family: Verdana;
            line-height: 1.6em;
            font-weight:200;
        }
        .left_navi .navi{

            width: 20px;
            text-align:left;
            float:left;
            display: block;
            position: fixed;
            background-color: transparent;
        }
        .left_navi li {
            padding:0;
            border: 0;
        }
        .left_navi li div {

          border: 2px solid #333;
          width: 12px;
          background-color: #444;
          margin: 0;
          padding: 2px 8px 2px 8px;
        }
        .left_navi .navi a {
        font-size: 11pt;
          text-decoration: blink;
        }
    </style>
</head>
<body class="page">


        <div class="left_navi">
            <ul class="navi">
                <li><a href="#todo" id="navi_todo"><div>Z a d a n i a</div></a></li>
                <li><a href="#projects" id="navi_projects"><div>P r o j e k t y</div></a></li>
                <li><a href="#plans" id="navi_plans"><div>P l a n y</div></a></li>
                <li><a href="#budget" id="navi_budget"><div> B u d ż e t</div></a></li>
                <li><a href="#contacts" id="navi_contacts"><div> K o n t a k t y</div></a></li>
                <li><a href="#settings" id="navi_settings"><div> U s t a w i e n i a</div></a></li>
                <li><a href="#affirmations" id="navi_affirmations"><div> +</div></a></li>
                <li><a href="#help" id="navi_help"><div> P o m o c</div></a></li>
            </ul>
        </div>


<div class="parts">
    <!--
        <div class="current_tag">
        </div>
        <div class="current_task">
        </div>

        <div class="text">

<div class="tags">
    <h3>TAGI</h3>

    <p>

    </p>
</div>

<div class="tasks">
    <h3>ZADANIA</h3>

    <p>

    </p>
</div>
<div class="taskss">
    <h3>ZADANIA</h3>

    <p>

    </p>
</div>

    -->


    <div class="tagEditLine">

        <div class="weeks">
            <ul class="navi">

                <li><a href="#2015_04"><div>&ltApril]</div></a></li>
                <li><a href="#2015_04_1-7"><div> [1-7] </div></a></li>
                <li><a href="#2015_04_7-4"><div> [7-14] </div></a></li>
                <li><a href="#2015_04_14_21"><div> [14-21] </div></a></li>
                <li><a href="#2015_04_21-28"><div> [21-28] </div></a></li>
                <li><a href="#2015_04_28"><div> [28-4] </div></a></li>
                <li><a href="#2015_05"><div> [Mai&gt </div></a></li>
            </ul>
        </div>



        <!--        <input type="submit" id="button_done" value="W trakcie"/>-->
        <!--        <input type="submit" id="button_done" value="Projekty"/>-->
        <!--        <input type="submit" id="button_done" value="Plany"/>-->
        <!--        <input type="submit" id="button_done" value="Kontakty"/>-->

        <input type="text" name="value_field" id="value_field" value=""/>
        <input type="text" name="current_line" id="current_line" value="0" disabled/>
        <input type="submit" id="button_remove" value="remove"/>
        <input type="submit" id="button_done" value="done"/>

        <!--        <input type="submit" id="button_not_done" value="not done"/>-->

        <!--        <input type="submit" id="editon" value="on"/>-->
        <!--        <input type="submit" id="editoff" value="off"/>-->
    </div>

    <div class="tagEdit">
        <!--<textarea name="tasks_by_tag_notdone" class="tasks_by_tag_notdone" id="tasks_by_tag_notdone"></textarea>-->
        <!--<textarea name="tasks_by_tag_done" class="tasks_by_tag_done" id="tasks_by_tag_done"></textarea>-->
        <!--<textarea name="tasks_not_done" class="tasks_not_done" id="tasks_not_done" rows="7" cols="25"></textarea>-->
        <textarea name="tasks_done" class="tasks_done" id="tasks_done" disabled></textarea>

        <input type="text" name="search_field" id="search_field" value="" disabled/>
        <!--<input type="submit" value="S"/>-->
    </div>


    <div class="weekEdit" id="todo">
        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check[]" value="' . $x . '" id="check' . $x . '"/><label for="check' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="edit" class="edit" id="edit" disabled><?php echo file_get_contents($filedata) ?></textarea>
        </div>
    </div>


    <div class="html" id="projects">
        <h3>Projekty</h3>

        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check1[]" value="' . $x . '" id="check1' . $x . '"/><label for="check1' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="text_projetcs" class="text_projetcs"
                      id="text_projetcs"><?php echo file_get_contents($fileprojects) ?></textarea>
        </div>
    </div>


    <div class="html" id="plans">
        <h3>Plany</h3>

        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check2[]" value="' . $x . '" id="check2' . $x . '"/><label for="check2' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="text_plans" class="text_plans"
                      id="text_plans"><?php echo file_get_contents($fileplans) ?></textarea>
        </div>
    </div>


    <div class="html" id="contacts">
        <h3>Kontakty</h3>

        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check3[]" value="' . $x . '" id="check3' . $x . '"/><label for="check3' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="text_contacts" class="text_contacts"
                      id="text_contacts"><?php echo file_get_contents($filecontacts) ?></textarea>
        </div>
    </div>


    <div class="html" id="budget">
        <h3>Finanse</h3>

        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check4[]" value="' . $x . '" id="check4' . $x . '"/><label for="check4' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="text_budget" class="text_budget"
                      id="text_budget"><?php echo file_get_contents($filebudget) ?></textarea>
        </div>
    </div>


    <div class="html" id="settings">
        <h3>Ustawienia</h3>

        <div class="weekCheck">
            <?php
            for ($x = 1; $x < 120; $x++) {
                if (strlen($x) < 2)
                    $x = '0' . $x;
                if (strlen($x) < 3)
                    $x = '0' . $x;
                echo '  <div class="weekCheckItem">';
                echo '      <input type="checkbox" name="line_check5[]" value="' . $x . '" id="check5' . $x . '"/><label for="check5' . $x . '">' . $x . '</label>';
                echo '  </div>';
            }
            ?>
        </div>

        <div class="weekText">
            <textarea name="text_settings" class="text_settings"
                      id="text_settings"><?php echo file_get_contents($filesettings) ?></textarea>
        </div>
    </div>

    <div class="html" id="affirmations">
        Affirmations
        <p>
            <?php
            $fileaffirmations = file_get_contents($fileaffirmations);
            if (!empty($fileaffirmations)) {
                // Always add a 'prettyprint' to <pre> elements
                echo MarkdownExtended($fileaffirmations, array('pre' => 'prettyprint'));
            }

            ?>
        </p>
    </div>

    <div class="html" id="help">
        Pomoc
        <p>
            <?php
            $filehelp = file_get_contents($filehelp);
            if (!empty($filehelp)) {
                // Always add a 'prettyprint' to <pre> elements
                echo MarkdownExtended($filehelp, array('pre' => 'prettyprint'));
            }

            ?>
        </p>
    </div>




</div>

<!--<div class="debug">-->

<!--</div>-->

<pre class="about">

</pre>

</body>
</html>