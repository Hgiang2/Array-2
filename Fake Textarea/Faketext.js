let string = "Đây là mô dòng chữ";
let arr = Array.from(string);
let result = "";
function fakeText() {
    let input=document.getElementById('text');
    for (let i = 0; i < input.value.length; i++) {
        result += arr[i];
        if (i === arr.length) {
            result = "";
            input.value="";
        }
    }
    input.value = result;
    result = "";
    setTimeout("fakeText()",1)
}