$(document).ready(function(){

    $('#loginForm').ajaxForm({
        success : function(data){
            var d = data.replace(/\"/g,"").split('&');
            if(d[0] === 'toIndex'){
                localStorage.setItem('username',d[1]);
                window.location.href = "index.html";
            }else{
                //这里要修改为 提示框
                console.log("error");
            }
        }
    });

});

$(document).keydown(function(event){
    if(event.keyCode == 13){
        $('#loginBtn').click();
    }
});