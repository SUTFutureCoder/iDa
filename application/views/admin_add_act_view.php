<!DOCTYPE html>  
<html>  
<head>  
    <title></title>     
    <link href="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.css" rel="stylesheet">
    
</head>
<body>
    <br/>
    <form action="addAct" class="form-horizontal" role="form" id="form_add_act" role="form" method="post">
    <div class="form-group">
        <label for="act_name" class="col-sm-2 control-label">活动名称</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="act_name" id="act_name">
        </div>
    </div>
    <div class="form-group">
        <label for="act_comment" class="col-sm-2 control-label">活动说明</label>
        <div class="col-sm-9">
            <textarea class="form-control" name="act_comment" id="act_comment" rows="3"></textarea>
        </div>
    </div>
        
    <div class="form-group">
        <label for="act_private" class="col-sm-2 control-label">活动私有</label>
        <div class="col-sm-9">
            <input type="checkbox" name="act_private" id="act_private" >
        </div>
    </div>
    
    <div class="form-group">
        <label for="act_school" class="col-sm-2 control-label">活动单位</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="act_school" id="act_school">
        </div>
    </div>
        
    <div class="form-group">
        <label for="act_start" class="col-sm-2 control-label">开始时间</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="act_start" id="act_start">
        </div>
    </div>
    <div class="form-group">
        <label for="act_end" class="col-sm-2 control-label">结束时间</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="act_end" id="act_end">
        </div>
    </div>
        
    <div class="form-group">
        <label for="act_question_type" class="col-sm-2 control-label">题库类型</label>
        <div class="col-sm-9">
            <select class="form-control" name="act_question_type" id="act_question_type">
                <?php foreach ($type as $key => $value): ?>
                    <option><?= $value['role_name'] ?></option>
                <?php endforeach; ?>
            </select> 
        </div>
        
    </div>
    
    <div class="form-group">
        <label for="act_question_sum" class="col-sm-2 control-label">题目数量</label>
        <div class="col-sm-9">
            <input type="text" class="form-control" name="act_question_sum" id="act_question_sum">
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