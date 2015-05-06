/**
 * Created by tom on 2015-05-01.
 */

//Array.prototype.contains = function(v) {
//    for(var i = 0; i < this.length; i++) {
//        if(this[i] === v) return true;
//    }
//    return false;
//};
//
//Array.prototype.unique = function() {
//    var arr = [];
//    for(var i = 0; i < this.length; i++) {
//        if(!arr.contains(this[i])) {
//            arr.push(this[i]);
//        }
//    }
//    return arr;
//}

function eliminateDuplicates( arr ) {
    return arr.filter(function (elem, pos) {
        return arr.indexOf(elem) == pos;
    });
};


function replaceSelection (textbox, str) {
    if (textbox.setSelectionRange) {
        var     start = textbox.selectionStart,
            end = textbox.selectionEnd,
            offset = (start + str.length);
        textbox.value = (textbox.value.substring(0, start) + str + textbox.value.substring(end));
        textbox.setSelectionRange(offset, offset);
    } else if (document.selection) { // If IE (Opera has setSelectionRange and Selection objects)
        var range = document.selection.createRange();
        range.text = str;
        range.select();
    }
};

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

/*
function eliminateDuplicates(arr) {
    var i,
        len=arr.length,
        out=[],
        obj={};

    for (i=0;i<len;i++) {
        obj[arr[i]]=0;
    }
    for (i in obj) {
        out.push(i);
    }
    return out;
}
*/

function edit(eBox) {
    var $ = this;
    console.log('init edit:',eBox);
    $.eBox = eBox;
    $.lineTags = [];
    $.lineValues = [];
    $.lineTagsArray = [];
    $.lineTagVal = {};

    //var depth_sep = "\t";
    var depth_sep = " ";
    $.options = {
        'sentence_separator': "\n",
        'word_separator': " ",
        'textarea_id': "edit",
        's': {
            'line': "\n",
//            'word' : " ",
            'depth6': depth_sep + depth_sep + depth_sep + depth_sep + depth_sep + depth_sep,
            'depth5': depth_sep + depth_sep + depth_sep + depth_sep + depth_sep,
            'depth4': depth_sep + depth_sep + depth_sep + depth_sep,
            'depth3': depth_sep + depth_sep + depth_sep,
            'depth2': depth_sep + depth_sep,
            'depth1': depth_sep,
            'type_tag': "@",
            'type_done': "+",
            'type_notdone': "-",
            'type_question': "?",
            'type_word': " ",
            //'type_tab': "\t"
            'type_tab': " "

        }
    };

    $.separator = ["\n", " ", "@", "-", "+", "."];
    /*
    $.setCaretPosition = function( pos ) {
        var ctrl = $.eBox;
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(pos, pos);
        }
        else if (ctrl.createTextRange) {
            var range = ctrl.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }

        //ctrl.focus();
    };
    */
    $.setCaretPosition = function ( pos ) {
        var el = $.eBox;
        var st = pos+1;
        //var end = pos+1;
        var end = pos+1;
        //console.log('setCaretPosition',st,end);
        if (el.setSelectionRange) {
            el.focus();
            el.setSelectionRange(st, end);
        } else {
            if (el.createTextRange) {
                range = el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', st);
                range.select();
            }
        }
    }
    $.getStartPositionByLine = function(pos) {
        var lista = $.getLines();
//    console.log( el );
//        console.log(lista);
        var suma = 0;
        //zlicz od poczatku ilosc
        for (var x = 0; x < pos-1; x++) {
            //console.log(lista[x].length);
            //console.log(lista[x] != null);
            //console.log(lista[x] != undefined);
            if (lista[x] != undefined && lista[x] != null)
                suma += lista[x].length +1;
            // jesli nie pusta linijka (tylko \n)
            //if( lista[x].length == 0) suma++;
//        console.log( lista[x].length );
        }
        //console.log(suma);
        return suma;
    };
    $.getEndPositionByLine = function(pos) {
        var lista = $.getLines();
//    console.log( el );
        console.log(lista);
        var suma = 0;
        //zlicz od poczatku ilosc
        for (var x = 0; x < pos; x++) {
            //console.log(lista[x]);
            //console.log(lista[x] != null);
            //console.log(lista[x] != undefined);
            if (lista[x] != undefined && lista[x] != null)
                suma += lista[x].length + 1;
//        console.log( lista[x].length );
        }
        //console.log(suma);
        return suma-1;
    };
    $.setLineOnStart = function( line) {
        var pos = $.getStartPositionByLine( line );
        var shift = $.getLevel( $.getLines()[line-1] );
        //console.log(shift);
        $.setCaretPosition( pos + shift);
    };
    $.setLineOnEnd = function( line) {
        var pos = $.getEndPositionByLine( line);
        $.setCaretPosition( pos);
    };

    $.getValue = function () {
        if( undefined != $.eBox && undefined != $.eBox.value && $.eBox.value.length >0 )
            return $.eBox.value;
        console.log( $.eBox.value );
        console.log(  $.eBox.value.length );
        console.log('getValue empty');
        return false
    };
    $.setValue = function ( value )
    {
        if( undefined != value && value.length >0 ) {
            $.eBox.value = value;
            return true;
        }
        console.log('setValue undefined or length = 0');
        return false
    };

    $.getLines = function () {
        return $.getValue().split($.options.sentence_separator);
    };

    $.setLine = function ( line, value ) {
        if(line>0 && undefined != value)
        {
            var lines = $.getLines();
                lines[line - 1] = value;
            $.setValue( lines.join($.options.sentence_separator) );
            return true;
        }
        return false;
    };

    $.getLine = function ( line )
    {
        // different beetween lines (>0) and array index (=0)
        line--;
        if( undefined != line && line > 0 )
        {
            if( undefined != $.getLines()[line] )
                return $.getLines()[line];
            console.log('getLine: line not exist');
        }
        else
            console.log('getLine: line is empty');
        return false
    };

    $.getTotalLines = function () {
        return $.getLines().length;
    };

    $.getCurrentLineNumber = function () {
        var pos = 0;
        var el = $.eBox;
        if (el.selectionEnd) {
            pos = el.selectionEnd;
        } else if (document.selection) {
            el.focus();

            var r = document.selection.createRange();
            if (r == null) {
                pos = 0;
            } else {

                var re = el.createTextRange(),
                    rc = re.duplicate();
                re.moveToBookmark(r.getBookmark());
                rc.setEndPoint('EndToStart', re);

                pos = rc.text.length;
            }
        }
        return el.value.substr(0, pos).split("\n").length;
    };
    $.getCurrentLineValue = function () {
        var pos = $.getCurrentLineNumber();
        var line = $.getLines();
        return line[pos - 1];
    };

    $.getStruct = function () {
        var data = $.getValue().split($.separator[0]);
        //console.log(data);
        for (var a = 0; a < data.length; a++) {
            //console.log(data[a]);
            data[a] = data[a].split($.separator[1]);
//                console.log( data[a] );

            for (var b = 0; b < data[a].length; b++) {
                //console.log(data[a][b]);
                data[a][b] = data[a][b].split($.separator[2]);
//                    console.log( data[a][b] );

                for (var c = 0; c < data[a][b].length; c++) {
                    //console.log(data[a][b][c]);
                    data[a][b][c] = data[a][b][c].split($.separator[3]);
//                        console.log( data[a][b][c] );
                }
            }
        }
        return data;
    };
    $.cleanArrayValue = function (arr) {
        if (Array.isArray(arr) && arr.length > 0 ) {
            for (var i = 0; i < arr.length; i++)
                arr[i] = arr[i].trim();
        }
        return arr;
    }
    $.cleanStr = function (str) {
        //str = str.replace('  ','');
        if( undefined != str && str.length >0 ) {
            var str = str.replace(' ', '');
            return str.trim();
        }
        return false;
    }
    $.isEmpty = function (str) {
        return (!str || 0 === str.length || !str.trim());
    }
    $.isNotEmpty = function (str) {
        return !(!str || 0 === str.length || !str.trim());
    }
    $.getLevel = function (str) {
        //console.log( str );
        //var lang = [$.options.s.depth6,$.options.s.depth5,$.options.s.depth4,$.options.s.depth3,$.options.s.depth2,$.options.s.depth1];
        var lang = [$.options.s.depth1, $.options.s.depth2, $.options.s.depth3, $.options.s.depth4, $.options.s.depth5, $.options.s.depth6];
        for (var x = 5; x >= 0; x--) {
            //console.log( x );
            var n = str.indexOf(lang[x]);
            //console.log( n );
            if (n == 0)
                return x + 1;
        }
        return 0;
    }
    $.joinString = function (arr, x)
    {
        var element =  arr[x];
        x = 2;
        //console.log('$.joinString', element);
        if (Array.isArray( element ) &&  element.length > 0 ) {
            //element = $.cleanArrayValue( element );
            // zeby nie by³o na poczatku spacji
            if (x == 0)
                return element.join("");
            else
                return element.join($.options.s.type_tab);
        }
        return element;
    }
    $.isNotValue = function(str)
    {
        return !($.isValue(str));
    }
    $.isValue = function(str)
    {
        return ( $.isFirstLetter(str,"-") ||  $.isFirstLetter(str,"+") || $.isFirstLetter(str,"?") );
    };
    $.isFirstLetter = function( str, chart )
    {
        //if(Arrray.isArray( str ))
        //console.log( str.substr(0,1), chart );
        return (chart == str.substr(0,1));
    }
    $.isValueInString = function ( str ) {
        str.trim();
        if( str.length > 0 &&
            ( str.substr(0,1) == $.options.s.type_notdone ||
            str.substr(0,1) == $.options.s.type_done ||
            str.substr(0,1) == $.options.s.type_question)
        ) return true;
    };
    $.isValueNotDone = function ( str ) {
        str.trim();
        if( str.length > 0 && str.substr(0,1) == $.options.s.type_notdone ) return true;
        return false;
            //str.substr(0,1) == $.options.s.type_done ||
            //str.substr(0,1) == $.options.s.type_question
    };
    $.isValueDone = function ( str ) {
        //str.trim();
        str = $.cleanStr(str);
        if( str != false && str.length > 0 && str.substr(0,1) == $.options.s.type_done ) return true;
        //console.log( str.substr(0,1) );
        return false;
    };
    $.isNotValueInArray = function (arr) {
        //var arr = arr.filter( $.isNotEmpty );
        if (Array.isArray(arr) && arr.length > 0 ) {
            for (var i = 0; i < arr.length; i++)
            {
                if( $.isValueInString( arr[i] ) ) return false;
                //console.log('isNotValueInArray', );
            }
        }
        return true;
    }
    $.getTags = function (arr) {
        var tags = '';
        var ss = true;
        //console.log('$.getTags',arr);
        for (var x = 0; x < arr.length ; x++)
        {
            //console.log('$.getTags=x',x);
            if( undefined != arr[x] && null != arr[x] )
            {
                //console.log('$.getTags=arr[x]',arr[x]);
                // jesli na koncu jest wartosc to jej nie dodaje jako TAG
                if( ss = $.isNotValueInArray(arr[x]) ){ // przy WORD
                    //console.log('$.isNotValueInArray=ss',ss);
                    // zeby nie by³o na poczatku spacji
                    tags += $.joinString(arr, x);
                }
                //console.log('$.getTags+',tags);
            }
            //var n = str.indexOf( lang[x] );
        }
        //console.log(tags);
        return tags;
    }
    $.getTree = function (str) {
        var textarea = '';
        if ( !$.isEmpty(textarea ) )
            textarea = str;
        else if ( $.getValue() )
            textarea = $.getValue();

        var arr = [];
        var data = [];
        var line = [];
        var s = $.options.s;
        //console.log(s);
        var data = textarea.split(s.line);
        var tagA = [];
        //console.log(data);
        var level = old_level = 0;
        var nameObj = '';
        // Pobierz kolejn¹ linijkê
        $.lineTags = [];
        $.lineTagVal = [];
        $.lineTagsArray = [];
        $.lineValues = [];
        for (var a = 0; a < data.length; a++)
        {
            //console.log('data[a]', data[a]);
            if( data[a].length > 1)
            {
                // sprawdŸ level na podstawie iloœci spacji
                level = $.getLevel(data[a]);
                //console.log('level', level);
                //console.log('old_level', old_level);
                //console.log('tagA 1', tagA);

                // odœwie¿enie xPath jeœli nowe drzewo
                if (old_level > level) {
                    for (var b = level; level < tagA.length; b++) {
                        tagA.pop();
                        //console.log('b', b);
                    }
                }
                //console.log('tagA 2', tagA);
                level = $.getLevel(data[a]);
                //console.log('level', level);
                //var tags = data[a].split(s.type_tag); // dla @ tagów
                //var tags = data[a].split(s.type_word); // dla " " bez tagow same slowa
                var tags = data[a].split(s.type_tab); // dla " " bez tagow same slowa

                // if nie jest TAG tylko Value
                //console.log(tags.length);
                //if (tags.length > 1) { // przy tagach @
                if (tags.length > 0) { // przy slowie WORD
                    //console.log(tags);
                    //console.log('tags', tags);
                    tagA[level] = tags;
                    //tagA[level] = tags;
                    //line[a] = {'tags': $.getTags(tagA), 'value': $.cleanStr(data[a])};
                }
                else {
                    //line[a] = {'tags': $.getTags(tagA), 'value': $.cleanStr(data[a])};
                }
                //console.log( tagA );
                $.lineTags[a] = $.getTags(tagA);
                //console.log( $.lineTags[a] );

                $.lineValues[a] = $.cleanStr(data[a]);
                //console.log( $.lineValues[a] );
                arr = $.getTagArrayFromString( $.getTags(tagA) );
                //console.log( arr );
                $.lineTagsArray[a] = arr;
                nameObj = arr[arr.length-1].toLowerCase();
                //console.log( nameObj );
                if( undefined != nameObj && nameObj.length > 0 ) {
                    var nameObj = nameObj.toLowerCase();
                    if ( undefined == $.lineTagVal[nameObj] ) {
                        $.lineTagVal[nameObj] = [];
                    }
                    //console.log( $.lineTagVal[nameObj] );
                    $.lineTagVal[nameObj].push(a)
                }
                //if( $.lineTagVal[nameObj] == undefined || $.lineTagVal[nameObj] == null )
                //console.log($.getTags(tagA));
                //console.log('data[a]', data[a]);
                old_level = level;
            }
            else
            {
                $.lineTags[a] = $.getTags(tagA);
                $.lineValues[a] = '';
                arr = $.getTagArrayFromString( $.getTags(tagA) );
                $.lineTagsArray[a] = arr;
                nameObj = arr[arr.length-1].toLowerCase();
                //console.log( nameObj );
                if( undefined != nameObj && nameObj.length > 0 ) {
                    var nameObj = nameObj.toLowerCase();
                    if ( undefined == $.lineTagVal[nameObj] ) {
                        $.lineTagVal[nameObj] = [];
                    }
                    //console.log( $.lineTagVal );
                    $.lineTagVal[nameObj].push(a)
                }
                //if( $.lineTagVal[nameObj] == undefined || $.lineTagVal[nameObj] == null )
                //    $.lineTagVal[nameObj];
            }
        }
        return data;
    };
    $.getTagValByTagDone = function ( nameObj ) {
        return $.getTagValByTag(nameObj,"+");
    }
    $.getTagValByTagNotDone = function ( nameObj )
    {
        return $.getTagValByTag(nameObj,"-");
        //return "ddd";
    }
    $.getTagValByTag = function ( nameObj, prefix ) {
        if( nameObj == undefined || nameObj.length < 1 )
            return false;
        else {
            var nameObj = nameObj.toLowerCase();
            if( $.lineTagVal[nameObj] != undefined && $.lineTagVal[nameObj] != null )
            {
                var values = eliminateDuplicates( $.lineTagVal[nameObj] );
                var str = '';
                for( i in values)
                {
                    //console.log(  values[i] );
                    var current = $.lineValues[ values[i] ];
                    //console.log(  current );
                    if(  undefined != current && current.length > 0 )
                    {

                        if(prefix == "-" && $.isValueNotDone( current ) ) str += current + "\n";
                        else if(prefix == "+" && $.isValueDone( current ) ) str += current + "\n";
                        //else ($.isValueNotDone( current ) ) str += current + "\n";
                    }
                }
                    //console.log( str );
                //values = values.join("<br/>");
                return str;
            }
        }
        return false;

    };
    $.getListTaskDone = function ()
    {

        //console.log( 'getListTaskDone',$.lineTagVal );
        //
        var str = '';
        for( i in $.lineTagVal)
        {
            var values = $.lineTagVal[i];
            //console.log( 'getListTaskDone',values );
            for( i in values) {
                var current = $.lineValues[values[i]];
                if ($.isValueDone(current)) str += current + "\n";
            }
        }
        return str;
        //return arr.filter(function (elem, pos) {
        //    return arr.indexOf(elem) == pos;
        //});
        //return false;
    };
    $.getListTaskNotDone = function ()
    {

        //console.log( 'getListTaskDone',$.lineTagVal );
        //
        var str = '';
        for( i in $.lineTagVal)
        {
            var values = $.lineTagVal[i];
            //console.log( 'getListTaskDone',values );
            for( i in values) {
                var current = $.lineValues[values[i]];
                if ($.isValueNotDone(current)) str += current + "\n";
            }
        }
        return str;
        //return arr.filter(function (elem, pos) {
        //    return arr.indexOf(elem) == pos;
        //});
        //return false;
    };
    $.getValueByLine = function ( line ) {
        if(line-1<0) line = 0;
        return $.lineValues[line-1];
    };
    $.getTagByLine = function ( line ) {
        if(line-1<0) line = 0;
        return $.lineTags[line-1];
    };
    $.calculateHours = function( date )
    {

    };
    // count day from, or to date
    $.calculateDays = function( date )
    {
        //check if it is past or future

    };
    $.detectDate = function( date ) {

    };
    // convert to object
    $.detectTime = function( time )
    {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        var suffix = "AM";
        if (hours >= 12) {
            suffix = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
        document.write("<b>" + hours + ":" + minutes + " " + suffix + "</b>");
    };

    $.getTagArrayFromString = function ( str ) {
        //console.log(str);
        str = str.replace('-',' ');
        str = str.replace('+',' ');
        str = str.replace(',',' ');
        str = str.replace('\t',' ');
        str = str.replace('   ',' ');
        str = str.replace('  ',' ');
        //console.log(str);
        var arr = str.split(' ');
        //console.log(arr);
        //var arr
        return arr;
    }
    // Musi byæ odœwie¿one, jeœli nie jest to  pokazuje nieprawid³owe dane
    $.getTagArrayByLine = function ( line ) {
        if(line-1<0) line = 0;
        //var str = $.lineTags[line-1];
        //return $.getTagArrayFromString( str );
        return $.lineTagsArray[line-1];
    };
    $.getListValtag = function ( separator ) {

    };
    $.getListValues = function ( separator ) {
        var str = '';
        for (var a = 0; a < $.lineValues.length; a++) {
            if( $.isValue( $.lineValues[a] ) )
                str += $.lineValues[a] + separator;
        }
        return str;
    };
    $.getListTags = function (separator) {
        var str = '';
        var uniq = eliminateDuplicates( $.lineTags );
        for (var a = 0; a < uniq.length; a++)
        {
            str += uniq[a] + separator;
        }
        return str;
    };
    $.getValueByLine = function( line ) {
        var lines = $.getLines();
        return lines[line - 1];
    };
    $.setValueByLine = function( line, value) {
        var lines = $.getLines();
        lines[line - 1] = value;
        $.eBox.value = lines.join("\n");
        return true;
    };
    $.setValueOnCheckbox = function( checkboxes  ) {
        console.log('setValueOnCheckbox');
        if( $.getValue() )
        {
            var lines = $.getLines();
            checkboxes.each(function()
            {
                //console.log(this);
                //console.log(this.value);
                //var lines = $.getValue().split("\n");

                //console.log( lines );
                if(this.value.length > 0 && this.value < lines.length )
                {
                    //console.log(this.value);
                    //console.log( lines[this.value - 1] );
                    var is = $.isValueDone( lines[this.value - 1] );
                    //console.log( is);
                    if( is ) this.checked = true;
                    else this.checked = false;
                }
                //console.log( lines[line - 1] = lines[line - 1].trim() );
                //lines[line - 1] = lines[line - 1].replace('-', '+');
                //if( str.length > 0 && str.substr(0,1) == $.options.s.type_done ) return true;
                //$.eBox.value = lines.join("\n");
            });
        }
    };
    $.setDoneValueByLine = function( line )
    {
        if( $.getValue() ) {
            $.setLine(line, $.getLine(line).replace('-', '+') );
            //var lines = $.getLines();
            //lines[line - 1] = lines[line - 1].replace('-', '+');
            //$.eBox.value = lines.join("\n");
            return true;
        }
        console.log('setValueOnCheckbox empty');
        return false;
    };
    $.setNotDoneValueByLine = function( line ) {
        if( $.getValue() ) {
            //var lines = $.getLine();
            //lines[line - 1] = $.getLine(line).replace('+', '-');
            //$.eBox.value = lines.join("\n");
            $.setLine(line, $.getLine(line).replace('+', '-') );
            return true;
        }
        console.log('setNotDoneValueByLine empty');
        return false;
    };
    $.getHtml = function (array) {
        var data = array;
        //console.log(data);
        var html = '';
        for (var a = 0; a < data.length; a++) {
            //console.log(data[a]);
            if (Array.isArray(data[a])) {
//                    html += '<ul>' + $.getHtml(data[a]) + '</ul>';
                html += $.getHtml(data[a]);
            }
            else {
                html += '<li>' + data[a] + '</li>';
            }
        }
        return '<ul>' + html + '</ul>';
    };

    $.getJson = function (array, x) {
        var data = array;
        var p = x + 1;
//            console.log( data );
        var html = '';
        for (var a = 0; a < data.length; a++) {
//                console.log( data[a] );
            if (Array.isArray(data[a])) {
                html += $.getJson(data[a], p) + ',';
            }
            else {
                html += '"' + data[a] + '",';
//                     + p + ':'
            }
        }
        return '\n[' + html + ']\n';
    };

    $.getParam = function () {
        var currentLineValue = $.getCurrentLineValue();
        var currentLineText = currentLineValue.split($.options.word_separator);

        return {
            'line_total': $.getTotalLines(),
            'line_current': $.getCurrentLineNumber(),
            'text': currentLineValue,
            'prefix': currentLineText[0],
            'value': currentLineText[1]
        };
    };
/*
    function enableTab() {
        var el = $.eBox;
        el.onkeydown = function(e) {
            if (e.keyCode === 9) { // tab was pressed

                // get caret position/selection
                var val = this.value,
                    start = this.selectionStart,
                    end = this.selectionEnd;

                // set textarea value to: text before caret + tab + text after caret
                this.value = val.substring(0, start) + '\t' + val.substring(end);

                // put caret at right position again
                this.selectionStart = this.selectionEnd = start + 1;

                // prevent the focus lose
                return false;
            }
        };
    }
*/
    // Enable the tab character onkeypress (onkeydown) inside textarea...
    //enableTab();
    $.getTree();
    return $;
}


