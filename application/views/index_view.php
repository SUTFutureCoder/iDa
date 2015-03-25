<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">    

    <title>工大爱答[Alpha]</title>

    <!-- Bootstrap core CSS -->
    <link href="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.css" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
  <style type="text/css"></style></head>

  <body>

    <!-- Fixed navbar -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">爱答[alpha]</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">主页</a></li>
            <li><a href="<?= base_url('index.php/about')?>">About</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">            
            <!-- <li class="active"><a href="./"></a></li> -->
            <?php if (!$this->session->userdata('user_name')): ?>
                <li class="active"><a id="login_button" href="#" onclick="showLogin()">登录/注册</a></li>
            <?php else: ?>
                <li class="dropdown active">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><?= htmlentities($this->session->userdata('user_name')) ?> <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <!-- <li class="dropdown-header">Nav header</li> -->
                    <li><a id="logout" href="#">注销</a></li>
                    </ul>
                </li>
            <?php endif;?>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
        <br/>
        <br/>
        <br/>
        <div class="alert alert-info" role="alert">正在进行的答题</div>
        <?php if (is_array($act_list)): ?>
        <div class="row">
            <?php foreach ($act_list as $value): ?>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <?php if (!isset($value['act_img'])):?>
                        <img src="img/default.jpg" alt="...">
                    <?php else: ?>
                        <img src="upload/act_img/<?= $value['act_img'] ?>" alt="...">
                    <?php endif; ?>
                    <div class="caption">
                        <h3><?= $value['act_name']?></h3>
                        <p><?= $value['act_comment'] ?></p>
                        <p><botton  class="btn btn-primary" role="button" onclick="joinTest()">参加</botton> <botton id="popover" class="btn btn-default" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">关于</botton></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>
        
        
        <div class="modal fade bs-example-modal-sm" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-sm">
                <div class="modal-content">
                    <form action="<?= base_url('index.php/index/checkUserLogin')?>" class="form-horizontal" role="form" id="form_login" method="post">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">登录/注册</h4>
                    </div>
                    <div class="modal-body">
                            <label class="col-sm-4 control-label" style="font-size:24px;">没有账号？</label>
                            <div class="form-group">
                                <button type="button" class="btn btn-success" onclick="showRegister()">注册</button>
                            </div>  
                        <hr>
                        
                            <div class="form-group">
                                <label for="loginMobile" class="col-sm-2 control-label">手机</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="loginMobile" id="loginMobile">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="loginPassword" id="loginPassword" placeholder="Password">
                                </div>
                            </div>                            
                            <div class="form-group">
                                <label for="loginValidateCode" class="col-sm-2 control-label">验证码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="loginValidateCode" id="loginValidateCode">
                                    <img id="loginImg" title="点击刷新" onclick="this.src='<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>/' + Math.random();"/>
                                </div>
                            </div> 
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <input type="submit" class="btn btn-primary" id="submit_login" value="登录">
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="modal fade bs-example-modal-sm" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-sm">
                <form action="<?= base_url('index.php/index/checkUserRegister')?>" class="form-horizontal" role="form" id="form_register" method="post">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">注册</h4>
                    </div>
                    <div class="modal-body">                        
                            <div class="form-group">
                                <label for="registerTele" class="col-sm-2 control-label">手机号码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" required="required" name="registerTele" id="registerTele">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerMail" class="col-sm-2 control-label">邮箱号码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerMail" id="registerMail">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="registerPassword" id="registerPassword" placeholder="Password">
                                </div>
                            </div>                           
                            <div class="form-group">
                                <label for="registerPasswordConfirm" class="col-sm-2 control-label">密码确认</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" name="registerPasswordConfirm" id="registerPasswordConfirm" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerName" class="col-sm-2 control-label">姓名</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerName" id="registerName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerNumber" class="col-sm-2 control-label">学号</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerNumber" id="registerNumber">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerSchool" class="col-sm-2 control-label">就读学校</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerSchool" id="registerSchool">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerMajor" class="col-sm-2 control-label">专业班级</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerMajor" id="registerMajor">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerValidateCode" class="col-sm-2 control-label">验证码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" name="registerValidateCode" id="registerValidateCode">
                                    <img id="registerImg" title="点击刷新" onclick="this.src='<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>/' + Math.random();"/>
                                </div>
                            </div> 
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="submit" id="submit_register" class="btn btn-primary">注册</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        
    </div> 

    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/jquery.min.js"></script>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.js"></script>
    
    <script src="<?= base_url('js/jquery.form.js')?>"></script>
    <script>
        var logined = 0;
        $(function(){            
            $('#popover').mouseover(function(){
                $(this).popover('show');
            });  
            
            $('#popover').mouseleave(function(){
               $(this).popover('hide');
            });  
            
            var login_options = {
                dataType    : "json",
                beforeSubmit: function (){
                    $("#submit_login").attr("value", "正在提交中……请稍后");
                    $("#submit_login").attr("disabled", "disabled");
                },
                success     : function (data){
                    if (1 != data['code']){
                        alert(data['error']);
                    } else {
                        $("#loginModal").modal('toggle');
                        $(".navbar-right").empty();                        
                        $(".navbar-right").append('<li class="dropdown active">' + 
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + data['user_name'] + '<span class="caret"></span></a>' + 
                    '<ul class="dropdown-menu" role="menu">' + 
                    '<li><a href="#">Action</a></li>' + 
                    '<li><a href="#">Another action</a></li>' + 
                    '<li><a href="#">Something else here</a></li>' + 
                    '<li class="divider"></li>' +                     
                    '<li><a id="logout" href="#">注销</a></li>' + 
                    '</ul>'+
                '</li>');
                        $("#login_button").removeAttr("onclick");
                        $("#form_login").resetForm();
                        logined = 1;
                    }
                    $("#submit_login").removeAttr("disabled");
                    $("#submit_login").attr("value", "登录");
                },
                error       : function (msg){
                    alert("操作失败");
                    $("#submit_login").removeAttr("disabled");
                    $("#submit_login").attr("value", "登录");
                }

            };

            $("#form_login").ajaxForm(login_options);
            
            var register_options = {
                dataType    : "json",
                beforeSubmit: function (){
                    $("#submit_login").attr("value", "正在提交中……请稍后");
                    $("#submit_login").attr("disabled", "disabled");
                },
                success     : function (data){
                    if (1 != data['code']){
                        alert(data['error']);
                    } else {
                        $(".navbar-right").empty();
                        $(".navbar-right").append('<li class="dropdown active">' + 
                    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + $('#registerName').val() + '<span class="caret"></span></a>' + 
                    '<ul class="dropdown-menu" role="menu">' + 
                    '<li><a href="#">Action</a></li>' + 
                    '<li><a href="#">Another action</a></li>' + 
                    '<li><a href="#">Something else here</a></li>' + 
                    '<li class="divider"></li>' +                     
                    '<li><a id="logout" href="#">注销</a></li>' + 
                    '</ul>'+
                '</li>');
                        
                        $("#form_register").resetForm();
                        $("#registerModal").modal('toggle');
                        $("#login_button").html(data['user_name']);
                        $("#login_button").removeAttr("onclick");
                        $("#form_login").resetForm();
                        logined = 1;
                    }
                    $("#submit_register").removeAttr("disabled");
                    $("#submit_register").attr("value", "注册");
                },
                error       : function (msg){
                    alert("操作失败");
                    $("#submit_register").removeAttr("disabled");
                    $("#submit_register").attr("value", "注册");
                }

            };

            $("#form_register").ajaxForm(register_options);
            
            //注销
            $("#logout").click(function(){
               $.post(
                    '<?= base_url('index.php/index/logout')?>',
                    {
                        logout : '1'
                    },
                    function (data){
                        if ('success' == data){
                            $(".dropdown").remove();
                            $(".navbar-right").append('<li class="active"><a id="login_button" herf="#" onclick="showLogin()">登录/注册</a></li>');
                        }
                    }
               ) 
            });
            
        });
    </script>
    
    <script>
        function joinTest(){
            if (logined = 0){
                $('#loginModal').modal('toggle');
            }
        }
        
        function showLogin(){
            $('#loginImg').removeAttr('src');
            $('#loginImg').attr('src', '<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>');
            $('#loginModal').modal('toggle');
        }
        
        function showRegister(){
            $('#loginModal').modal('hide');
            $('#registerImg').removeAttr('src');
            $('#registerImg').attr('src', '<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>');
            $('#registerModal').modal('toggle');
        }
    </script>
    </body>
</html>