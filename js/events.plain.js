/**
 * Created by tom on 2015-05-06.
 */
/*

var resizeBoxes = function(){
    var h = $(window).height() - $('header').innerHeight() - 130;
    $('.content-area').css('height', h + 'px');
    $('textarea').css('height', (h - 11) + 'px');
};

// resize boxes to fit screen
resizeBoxes();

// load data from cookie
$('textarea').val($.cookie('pmee_testdata')).focus();

$('#submit-count').data('count', 0);

// bindings
$(window).resize(resizeBoxes);

$('form').bind("reset", function(){
    $.cookie('pmee_testdata', null);
});

*/


//    $(".tasks_by_tag_done").hide();
//    $(".tasks_by_tag_notdone").hide();
//    $(".tasks_done").hide();
//    $(".tasks_not_done").hide();
changeit = 0;
isChanged = 0;
isTextChanged = 0;

$(document).ready(function ($) {


    $("#navi_todo").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").show();
        $("#projects").hide();
        $("#plans").hide();
        $("#budget").hide();
        $("#contacts").hide();
        $("#settings").hide();
        $("#help").hide();
    });
    $("#navi_projects").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").show();
        $("#plans").hide();
        $("#budget").hide();
        $("#contacts").hide();
        $("#settings").hide();
        $("#help").hide();
    });

    $("#navi_plans").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").hide();
        $("#plans").show();
        $("#budget").hide();
        $("#contacts").hide();
        $("#settings").hide();
        $("#help").hide();
    });

    $("#navi_budget").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").hide();
        $("#plans").hide();
        $("#budget").show();
        $("#contacts").hide();
        $("#settings").hide();
        $("#help").hide();
    });

    $("#navi_contacts").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").hide();
        $("#plans").hide();
        $("#budget").hide();
        $("#contacts").show();
        $("#settings").hide();
        $("#help").hide();
    });

    $("#navi_settings").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").hide();
        $("#plans").hide();
        $("#budget").hide();
        $("#contacts").hide();
        $("#settings").show();
        $("#help").hide();
    });

    $("#navi_help").on("click", function () {
        $(".page").removeClass('text_on');
        $("#todo").hide();
        $("#projects").hide();
        $("#plans").hide();
        $("#budget").hide();
        $("#contacts").hide();
        $("#settings").hide();
        $("#help").show();
    });

    $("#todo").show();
    $("#projects").hide();
    $("#plans").hide();
    $("#budget").hide();
    $("#contacts").hide();
    $("#settings").hide();
    $("#help").hide();


    var eBox = document.getElementById('edit');
    console.log(eBox);
    var txt = new edit(eBox);
    var s = ["\n", " ", "@", "-", "+", "."];



    textChanged();

//changed click

    var changeit = 0;
    var hh = txt.getTree(document.getElementById('edit').value);
//        $(".tags p").html(txt.getListTags('<br/>'));
//        $(".tasks p").html(txt.getListValues('<br/>'));

//            console.log(hh);
    // odświeżenie wszystkich checkboxów, pozaznaczenie tych co są w tekscie zanzaczone
    txt.setValueOnCheckbox($(".weekCheck input"));


    function textOn() {
        $(".edit").prop("disabled", false);
//        $(".tagEdit").css('position', 'relative');
//        $(".weekEdit").css('margin-top', '0');
        $(".page").addClass('text_on');
    }

    function textOff() {
        $(".edit").prop("disabled", true);
//        $(".tagEdit").css('position', 'fixed');
//        $(".weekEdit").css('margin-top', '180px');
        $(".page").removeClass('text_on');
    }

    $('#editon').on("click", function () {
        textOn();
    });
    $('#editoff').on("click", function () {
        textOff();
    });

    // zapisz linjkę
    $("#value_field").on("keyup", function () {
        console.log('keyup', this.value);
        var line = $("#current_line").val();
        txt.setValueByLine(line, this.value);
//            txt = refreshText();
//            console.log( txt );
//            txt.setValueOnCheckbox($(".weekCheck input"));
    });
//
//    $('.weekCheck input[type="checkbox"]').hover(function () {
//        console.log('podswietlenie');
//            //stuff to do on mouse enter
////        },
////
////        $(".weekCheckItem input").on({
////        mouseenter: function () {
////            //stuff to do on mouse enter
////            console.log('podswietlenie');
////        },
////        mouseleave: function () {
////            //stuff to do on mouse leave
////            console.log('podswietlenie');
////        }
//    });

    // WYswietl info o linii
    $('.ui-button-text').hover(function () {
        textOff(); // żeby w momencie przeglądania był pasek na górze
//        console.log('podswietlenie'  );
        var pos = $(this).parent().parent().find('input').val();
//            console.log('pos' , pos);
        var arr = txt.getTagArrayByLine(pos);
//            console.log(arr);
        if (undefined != arr && arr.length > 0) {
            var val = arr[arr.length - 1];
            var valu = txt.getValueByLine(pos);
//
            $("#value_field").val(valu);
            $("#current_line").val(pos);
            $("#search_field").val(txt.getTagByLine(pos));
            // wyswietl info o taskach zrobionych i niezrobionych
            $(".tasks_done").val(txt.getTagValByTagNotDone(val) + txt.getTagValByTagDone(val));
        }
    });


    // aktualizacja checkboxów
    $("#button_done").on("click", function () {
        // zeby nie było efektu przewijania w textarea
        save(1);
        var current_line = $('#current_line').val();
//        var idcheck = $("#check"+current_line).val();
//        $().prop('checked');
        console.log(current_line);
//        console.log( idcheck );
//        txt.setDoneValueByLine( current_line );
        is_checked = 0;
        if (!is_checked) {
            txt.setDoneValueByLine(current_line);
        } else {
            txt.setNotDoneValueByLine(current_line);
        }
        txt.setLineOnStart(current_line);
        refreshText(true);
    });

    // aktualizacja checkboxów
    $(".weekCheck input").on("click", function () {
        // zeby nie było efektu przewijania w textarea
        textOff();
        save(1);
//            console.log( $(this).val() );
//            console.log( this.value );
        if ($(this).prop('checked')) {
            // something when checked
//                console.log('ok');
            txt.setDoneValueByLine(this.value);
            txt.setLineOnStart(this.value);
        } else {
//                console.log('not ok');
            txt.setNotDoneValueByLine(this.value);
            txt.setLineOnStart(this.value);
//                txt.setLineOnEnd( this.value );
            // something else when not
        }
        refreshText(true);
//            console.log( 'input' );
    });


    $(".weekText").on("click", function () {
        console.log('click weekText');
        textOn();
    });

    $(".edit").on("click", function () {
        console.log('click');
        refreshText();
        $('.edit').focus();
        save();
    });

    $(".edit").on("keyup", function () {
//            console.log('keyup');
        txt = refreshText();
//            console.log( txt );
        txt.setValueOnCheckbox($(".weekCheck input"));
        save(1);
    });

    $(".edit").on("paste", function () {
//            console.log('paste');
        refreshText();
        save();
    });


    $(".edit").on("changed", function () {
//            console.log('changed');
        refreshText();
        save(1);

    });

    function refreshText(external) {
        if (undefined == external) external = false;
        var eBox = document.getElementById('edit');
        var txt = new edit(eBox);
//            txt.setValueOnCheckbox( $(".weekCheck input") );
//            $(".tags p").html(txt.getListTags('<br/>'));
//            $(".tasks p").html(txt.getListValues('<br/>'));
//            $(".tasks").html( txt.getHtml(hh) );
//            console.log( "click" );
        var pos = txt.getCurrentLineNumber();
//            console.log('pos' , pos);

        var arr = txt.getTagArrayByLine(pos);
//            console.log(arr);
        var val = arr[arr.length - 1];
        var valu = txt.getValueByLine(pos);
        $("#value_field").val(valu);
        $("#current_line").val(pos);
//            console.log(valu);

//            console.log( txt.getTagValByTag( val ) );
//            console.log( txt.lineTagVal );
//            console.log( txt.getListTaskDone() );
        var taskDone = txt.getTagValByTagDone(val);
        var taskNotDone = txt.getTagValByTagNotDone(val);
//            console.log(taskDone,taskNotDone );
//            console.log( 'getSelection', getSelection( txt.eBox ) );
//            console.log( 'textarea' );
//            console.log( 'val',val );
        if (taskDone.length > 2 || taskNotDone.length > 2 || external == true) {
//                $(".tasks_done").hide();
//                $(".tasks_not_done").hide();
//                $(".tasks_by_tag_done").show();
//                $(".tasks_by_tag_notdone").show();
            $(".tasks_done").val(txt.getTagValByTagNotDone(val) + txt.getTagValByTagDone(val));
//                $(".tasks_by_tag_notdone").val();
        }
        else {
//                $(".tasks_by_tag_done").hide();
//                $(".tasks_by_tag_notdone").hide();
//                $(".tasks_done").show();
//                $(".tasks_not_done").show();
//                $(".tasks_done").val(txt.getListTaskDone());
//                $(".tasks_not_done").val(txt.getListTaskNotDone());
//                $(".tasks_by_tag_done").val(txt.getListTaskDone());
//                $(".tasks_by_tag_notdone").val(txt.getListTaskNotDone());
            $(".tasks_done").val(txt.getListTaskNotDone(val) + txt.getListTaskDone(val));
        }
        // wyszukiwanie wg tagu
        $("#search_field").val(txt.getTagByLine(pos));
//            $(".current_tag").html(txt.getTagByLine(pos) );
//            $(".current_task").html(txt.getValueByLine(pos) );
//            console.log('txt',txt);


        return txt;
    }
});



$(function () {
    $(".weekCheckItem input").button();
//        $( "#format" ).buttonset();
});


//            var dataString = {'data':'test'};
function textChanged() {
    if (0 == isTextChanged) {
        setInterval(save, 1000);
        console.log('setInterval');
    }
    isTextChanged = 1;
}

// TODO usuwaj spacje z value i wtedy porównuj
// TODO
// TODO udostępnianie tagów per email:
// Imię NAzwisko dsad@ddsa.com
// lista tagow na ktore ma działać
function save(st) {
    $(".edit").removeClass('load_on');
    $(".edit").removeClass('save_on');
    // przyspieszanie zpaisy jak sa wprowadzane znaki
    if (st == 1) {
        changeit += 3;
        isChanged = 1;
        textChanged();
    }
    // jesli przekroczy to zapisz, w momencie braku reakcji klawiatury zapis co 1 minute
    if (changeit < 20) {
        changeit++;
//            setTimeout(save(), 1000);
        console.log('changeit', changeit);
    }
    else {
        console.log('isChanged', isChanged);
        // jesli zmieniano tresc, inaczej nie zapisuje
        if (isChanged) {

            $(".edit").addClass('save_on');
            isChanged = 0;
            $.ajax({
                type: 'POST',
                url: 'data.php',
                data: {'data': $(".edit").val()},
                success: function (data) {
//                    console.log(data);
                    console.log('saved');
                    //                    if( data == '0' )
                    //                        alert( 'Błędne dane logowania!!!' );
                    //                    else
                    //                        window.location = window.location;
                }
            });
        } else {
            // jesli nie było zmian załaduj strone na nowo, bo może na innym urządzeniu/przegladarce były zmiany
            // można zrobić inną zasade działania, żeby zmiany były możłiwe do wychwycenia nawet gdy jednocześnie jest zmiana wprowadzana
            $(".edit").addClass('load_on');
            $.ajax({
                url: 'data.php',
                success: function (data) {
                    $(".edit").val(data);
                    console.log('loaded');
                }
            });
        }
        changeit = 0;
    }
}



function scrollToLine($textarea, lineNumber) {
    var lineHeight = parseInt($textarea.css('line-height'));
    $textarea.scrollTop(lineNumber * lineHeight);
}