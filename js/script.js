window.onload = function(){
  // 悬浮 手机提示框
  document.getElementById("source").onmouseover = function(){
    document.getElementById("expect").style.display = 'block';
  }
  document.getElementById("source").onmouseout = function(){
    document.getElementById("expect").style.display = 'none';
  }
  //登陆框
  document.getElementById("login-box-call").onclick = function(){
    document.getElementById("login-box").style.display = 'block';
  }
  document.getElementById("login-button").onclick = function(){
    document.getElementById("login-box").style.display = 'none';
  }
  // 注册窗口
    document.getElementById("register-call").onclick = function(){
    document.getElementById("register-box").style.display = 'block';
  }
  document.getElementById("register-button").onclick = function(){
    document.getElementById("register-box").style.display = 'none';
  }
}