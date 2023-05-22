function Send() {
    number1 =document.getElementById("number1").value;
    number2 =document.getElementById("number2").value;
    actual_answer =parseInt(number1) * parseInt(number2);
}

 var question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
 var input_box = "<br>Answer: <inout type='text' id='unput_check_box'>";
 var check_button = "<br><br><button class ='btn btn-info' onclick='check()>Check</button>"
 var question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
     input_box = "<br>Answer: <inout type='text' id='unput_check_box'>";
    check_button = "<br><br><button class ='btn btn-info' onclick='check()>Check</button>"
    row = question_number + input_box + check_button ;

    document.getElementById("output").innerHTML = row

    document.getElementById("number1").value = ""
    document.getElementById("number2").value = ""