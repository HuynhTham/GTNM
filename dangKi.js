$(document).ready(function(){
    var ktTen =false

    var ktEmail = false

    var ktMatKhau = false

    var email ="";
    $('#name').blur(function(){
        var nameText= $('#name').val()
        if(nameText.length<6){
            alert('Số lượng từ phải lớn hơn 6')
            $('.iname').attr("class","fas fa-user iname")
            ktTen= false
        }
        else {
            $('.iname').attr("class","fas fa-check-circle iname")
            ktTen=true
        }
        
    })
    $('#email').blur(function(){
        email = $('#email').val()
        if(!email.includes("@")){
            alert('Email không đúng định dạng')
            $('.iemail').attr("class","fas fa-envelope iemail")
            ktEmail= false
        }
        else{
            $('.iemail').attr("class","fas fa-check-circle iemail")
            ktEmail=true
        }
    })
    $('#pword-check').blur(function(){
        var passCheck = $('#pword-check').val()
        var pass = $('#pword').val()
        if(passCheck==""){

        }
        else if(passCheck!=pass){
            alert('Mật khẩu không khớp')
            $('.ipword-check').attr("class","fas fa-key ipword-check")
            $('.ipword').attr("class","fas fa-lock ipword")
            ktMatKhau= false
        }
        else{
            $('.ipword-check').attr("class","fas fa-check-circle ipword-check")
            $('.ipword').attr("class","fas fa-check-circle ipword")
            ktMatKhau=true
        }
    })
    $('.btn').click(function () { 
        if(ktTen&&ktMatKhau&&ktEmail){
            $('.result').html("Đăng kí thành công, vui lòng kiểm tra email: "+email+" để xác nhận thông tin");
        }
        else{
            alert('Đăng kí không thành công vì một số trường không đúng')
        }
        
    });

})