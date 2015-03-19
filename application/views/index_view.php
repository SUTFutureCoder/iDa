<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">    

    <title>工大爱答</title>

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
            <li class="active"><a href="#">Home</a></li>
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
            <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
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
    
    </body>
</html>