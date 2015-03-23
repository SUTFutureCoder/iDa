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
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">            
            <!-- <li class="active"><a href="./"></a></li> -->
            <li class="active"><a onclick="showLogin()">登录/注册</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

    <div class="container">
        <br/>
        <br/>
        <br/>
        <div class="alert alert-info" role="alert">正在进行的答题</div>
        <div class="row">
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/default.jpg" alt="...">
                    <div class="caption">
                        <h3>act_name</h3>
                        <p>act_start-act_end</p>
                        <p><a href="#" class="btn btn-primary" role="button" onclick="joinTest()">参加</a> <a href="#" id="popover" class="btn btn-default" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">关于</a></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/default.jpg" alt="...">
                    <div class="caption">
                        <h3>act_name</h3>
                        <p>act_start-act_end</p>
                        <p><a href="#" class="btn btn-primary" role="button">参加</a> <a href="#" id="popover" class="btn btn-default" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">关于</a></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/default.jpg" alt="...">
                    <div class="caption">
                        <h3>act_name</h3>
                        <p>act_start-act_end</p>
                        <p><a href="#" class="btn btn-primary" role="button">参加</a> <a href="#" id="popover" class="btn btn-default" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">关于</a></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="thumbnail">
                    <img src="img/default.jpg" alt="...">
                    <div class="caption">
                        <h3>act_name</h3>
                        <p>act_start-act_end</p>
                        <p><a href="#" class="btn btn-primary" role="button">参加</a> <a href="#" id="popover" class="btn btn-default" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">关于</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bs-example-modal-sm" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">登录/注册</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form-inline">
                            <label class="col-sm-4 control-label" style="font-size:24px;">没有账号？</label>
                            <div class="form-group">
                                <button type="button" class="btn btn-success form-control" onclick="showRegister()">注册</button>
                            </div>  
                        </form>
                        <hr>
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="loginMobileMail" class="col-sm-2 control-label">手机/邮箱</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="loginMobileMail">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="loginPassword" placeholder="Password">
                                </div>
                            </div>                            
                            <div class="form-group">
                                <label for="loginValidateCode" class="col-sm-2 control-label">验证码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="loginValidateCode">
                                    <img id="loginImg" title="点击刷新" onclick="this.src='<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>/' + Math.random();"/>
                                </div>
                            </div> 
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="button" class="btn btn-primary">登录</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade bs-example-modal-sm" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">注册</h4>
                    </div>
                    <div class="modal-body">                        
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label for="registerTele" class="col-sm-2 control-label">手机号码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" required="required" id="registerTele">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerMail" class="col-sm-2 control-label">邮箱号码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerMail">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword" class="col-sm-2 control-label">密码</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="registerPassword" placeholder="Password">
                                </div>
                            </div>                           
                            <div class="form-group">
                                <label for="registerPasswordConfirm" class="col-sm-2 control-label">密码确认</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="registerPasswordConfirm" placeholder="Password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerName" class="col-sm-2 control-label">姓名</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerName">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerNumber" class="col-sm-2 control-label">学号</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerNumber">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerSchool" class="col-sm-2 control-label">就读学校</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerSchool">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerMajor" class="col-sm-2 control-label">专业班级</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerMajor">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="registerValidateCode" class="col-sm-2 control-label">验证码</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="registerValidateCode">
                                    <img id="registerImg" title="点击刷新" onclick="this.src='<?php echo base_url('/index.php/index/setValidateCode/setValidateCode');?>/' + Math.random();"/>
                                </div>
                            </div> 
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                        <button type="submit" class="btn btn-primary">注册</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div> 

    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/jquery.min.js"></script>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.js"></script>
    <script>
        $(function(){            
            $('#popover').mouseover(function(){
                $(this).popover('show');
            });  
           
            $('#popover').mouseleave(function(){
               $(this).popover('hide');
            });  
        });
    </script>
    <script>
        var user_key = '';
        function joinTest(){
            if (user_key == ''){
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