// 테마 변경
var Body = {
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor : function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        Links.setColor('lightgreen');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('orange');
    }
}

// // 주사위
// function randice(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

//계산기
var input1 = 0
var input2 = 0
var operator = ''

function clrScreen() {
    document.forms.result.value='';
}
function clickNumber(n) {
    document.forms.result.value+=n;
}

function clickPlus() {
    input1 = parseFloat(document.forms.result.value);
    // save value to variable and operator
    operator = '+';
    document.forms.result.value = '';
}

function clickMinus() {
    input1 = parseFloat(document.forms.result.value);
    // save value to variable and operator
    operator = '-';
    document.forms.result.value = '';
}

function clickMulti() {
    input1 = parseFloat(document.forms.result.value);
    // save value to variable and operator
    operator = '*';
    document.forms.result.value = '';
}

function clickDivid() {
    input1 = parseFloat(document.forms.result.value);
    // save value to variable and operator
    operator = '/';
    document.forms.result.value = '';
}

function clickEqual() {
    input2 = parseFloat(document.forms.result.value);
    // 더하기 수행 (operator가 +일때)
    if (operator === '+') {
       answer = input1 + input2;
    } else if (operator === '-') {
        answer = input1 - input2;
    } else if (operator === '*') {
        answer = input1 * input2;
    } else if (operator === '/') {
        answer = input1 / input2;
    } else {
        document.write = "error!"
    }

    // 결과 표시
    document.forms.result.value = answer;
}