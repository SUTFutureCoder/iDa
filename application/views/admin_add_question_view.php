<!DOCTYPE html>  
<html>  
<head>  
    <title></title>     
    <link href="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.css" rel="stylesheet">
    
</head>
<body>
    <br/>
    <form action="addQuestion" class="form-horizontal" role="form" id="form_add_question" role="form" method="post">
    <div class="form-group">
        <label for="question_name" class="col-sm-2 control-label">题目名称</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="question_name" id="question_name">
        </div>
    </div>
    <div class="form-group">
        <label for="question_type" class="col-sm-2 control-label">题目类型</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="question_type" id="question_type">
        </div>
    </div>
    <div class="form-group">
        <label for="question_content" class="col-sm-2 control-label">题目正文</label>
        <div class="col-sm-9">
            <textarea class="form-control" name="question_content" id="question_content" rows="3"></textarea>
        </div>
    </div>
        
    <hr>
    
    
    <div class="form-group">
        <label for="question_num" class="col-sm-2 control-label">选项个数</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" id="question_num">
        </div>
    </div>
    <div class="col-sm-10 col-sm-offset-1">
        <input class="form-control btn btn-info" id="confirm_question_num" value="生成选项">
    </div>
    <br/>
    <br/>
    <div class="form-group" id="question_choose_set">
    </div>
    <hr>
    
    <div class="form-group">
        <label for="question_fill" class="col-sm-2 control-label">填空</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="question_fill" id="question_fill">
        </div>
    </div>
    <div class="form-group">
        <label for="question_fill_answer" class="col-sm-2 control-label">填空答案</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="question_fill_answer" id="question_fill_answer">
        </div>
    </div>

    <hr>
    
    <div class="form-group">
        <label for="question_private" class="col-sm-2 control-label">是否私有</label>
        <div class="col-sm-9">
            <input type="checkbox" name="question_private" id="question_private" >
        </div>
    </div>
    <hr>
    <div class="col-sm-10 col-sm-offset-1">
        <input class="form-control btn btn-success" id="submit" value="提交">
    </div>
    <br/>
    <br/>
    <hr>
    </form>
</body>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/jquery.min.js"></script>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.js"></script>
    
    <script src="<?= base_url('js/jquery.form.js')?>"></script>
    <script>
        $(function(){
            var options = {
                dataType    : "json",
                beforeSubmit: function (){
                    $(".btn").attr("value", "正在提交中……请稍后");
                    $(".btn").attr("disabled", "disabled");
                },
                success     : function (data){
                    $("#form_add_question").resetForm();
                },
                error       : function (msg){
                    alert("操作失败");
                    $(".btn").removeAttr("disabled");
                    $(".btn").attr("value", "添加");
                }

            };

            $("#form_add_question").ajaxForm(options);
            
            
            //确定选项数目
            $("#confirm_question_num").click(function(){
                $("#question_choose_set").empty();
                var question_indicator = 65;
                var question_num = $("#question_num").val();
                for (var i = 0; i < question_num; i++, question_indicator++){
                    $("#question_choose_set").append('<label for="question_choose_' + String.fromCharCode(question_indicator) + '" class="col-sm-2 control-label">' + String.fromCharCode(question_indicator) + '</label><div class="col-sm-9"><input type="text" class="form-control question_choose_input" name="question_choose[]" id="question_choose_' + String.fromCharCode(question_indicator) + '"></div><br/><br/>');
                }
            });
        });   
    </script>
</html>