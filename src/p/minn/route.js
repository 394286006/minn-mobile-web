'use strict';
/**
* @auth:minn
* @qq:394286006
*/

w3IncludeHTML();
angular.module('ngMinnWeb', ['ui.bootstrap','ngAnimate','ngTouch'])
.config(['$httpProvider',function ($httpProvider) {

}]);

function login(event){
    var target = event.target;
    event.preventDefault();
    var name=$('#name').val();
    var pwd=$('#password').val();
    var lang='zh';
    if(name==''||pwd==''){
        $.alert({title: '提示',content: '用户名或密码不能为空',confirmButton:'知道'});
      return;
    }
    $.ajax({
      type: 'POST',
      url: '../j_spring_security_check',
      data: {username: name, password: pwd ,logintype:'3',key:'',lang:lang}
    }).done((data) => {
      $('#name').val('');
      $('#password').val('');
        $('#username').text("用户名:"+data.data.loginName);
        $('#loginpanel').attr('href','#login-info');
        $("#login-form" ).panel( "close"  );
        $('#logo').hide('slow');
        $('#wellcome').show('slow');
      })
      .fail((jqXhr) => {
        $.alert({title: '提示',content: '用户名或密码不正确',confirmButton:'知道'});

      });
}
function checkLogin(){
  $.ajax({
    type: 'POST',
    url: '../login?lang=zh',
    data: {}
  }).done((data) => {
    if(data.success){
      $('#username').text("用户名:"+data.data.loginName);
      $('#loginpanel').attr('href','#login-info');
      $('#logo').hide('slow');
      $('#wellcome').show('slow');
    }else{
      $('#logo').show('slow');
      $('#wellcome').hide('slow');
      $('#loginpanel').attr('href','#login-form');
       $("#login-info" ).panel( "close"  );
    }
    })
    .fail((jqXhr) => {
     console.log("检测失败:"+jqXhr);
    });
}
function logout(){
   $.ajax({
     url: '../logout',
     data: { }
   }).done((data) => {
     $('#logo').show('slow');
     $('#wellcome').hide('slow');
     $('#loginpanel').attr('href','#login-form');
      $("#login-info" ).panel( "close"  );
     }).fail(() => {

     });
}
$( document ).ready(function() {
  $('#logo').show();
  $('#wellcome').hide();
  checkLogin();
 $('#userAnalysis-page' ).on( "pagecreate", function( event ) {
         showuserchart();
 } );
});
