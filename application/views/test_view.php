<!DOCTYPE html>  
<html>  
<head>  
    <title></title>  
    <meta charset="utf-8">
    <link href="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.css" rel="stylesheet">
    <link href="<?= base_url('ueditor/themes/default/css/umeditor.css')?>" type="text/css" rel="stylesheet">
</head>
<body>
    <div class="container">
    <br/>
    <?php if(isset($answer_fin) && $answer_fin == 1): ?>
    <div class="panel panel-default ">
        <div class="panel-heading">您已经完成此试题</div>
        <table class="table">
            <tr>
                <td>您的得分</td><td><?= $history['answer_score'] ?></td>
            </tr>
            <tr>
                <td>开始时间</td><td><?= $history['start_time'] ?></td>
            </tr>
            <tr>
                <td>结束时间</td><td><?= $history['end_time'] ?></td>
            </tr>
            <tr>
                <td colspan="2"><button type="button" onclick="window.location.href='<?= base_url() ?>'" class="btn btn-primary btn-md btn-block">返回</button></td>
            </tr>
        </table>
    </div>
    <?php else: ?>
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="alert alert-success navbar-fixed-top" role="alert">距离结束还有<a id="time_counter_hour"></a>时<a id="time_counter_minute"></a>分<a id="time_counter_second"></a>秒 <button type="button" class="btn btn-danger navbar-right">完成</button></div>
        </div>
    </nav>
    <br/>
    <br/>
    <br/>
    
    <?php $now_type = ''; ?>
    <?php $question_id = 1; ?>
    <?php foreach ($question_data_list as $key => $value):?>
        <?php if ($now_type != $value['type']): ?>
            <?php switch ($value['type']){
                case 'choose' :
                    echo '<h2>单选题</h2>';
                    break;
                case 'multi_choose' :
                    echo '<h2>多选题</h2>';
                    break;
                case 'fill' :
                    echo '<h2>填空题</h2>';
                    break;
                case 'judge' :
                    echo '<h2>判断题</h2>';
                    break;
            }
            ?>
            <hr>
        <?php $now_type = $value['type']?>
        <?php endif; ?>
            <div class="panel panel-default">
                <div class="panel-heading"><?= $question_id?> . <?= $value['question_content']?></div>
                <div class="panel-body">
                    <form>
                        <?php if ($value['type'] == 'choose'): ?>
                            <div class="form-group question_choose" id="<?= $value['question_id']?>">
                            <?php foreach ($value['question_choose'] as $question_choose):?>
                                <input type="radio"  name="<?= $value['question_id']?>" value="<?= $question_choose?>"><?= $question_choose?><br/>
                            <?php endforeach;?>
                            </div>
                        <?php endif; ?>

                        <?php if ($value['type'] == 'multi_choose'): ?>
                            <div class="form-group question_multi_choose" id="<?= $value['question_id']?>">
                            <?php foreach ($value['question_choose'] as $question_choose):?>
                                <input type="checkbox"><?= $question_choose?><br/>
                            <?php endforeach;?>
                            </div>
                        <?php endif; ?>

                        <?php if ($value['type'] == 'fill'): ?>
                            <div class="form-group question_fill" id="<?= $value['question_id']?>">
                                <input type="text" class="form-control">
                            </div>
                        <?php endif; ?>

                        <?php if ($value['type'] == 'judge'): ?>
                            <div class="form-group question_judge" id="<?= $value['question_id']?>">
                                <input type="checkbox" >正确
                            </div>
                        <?php endif; ?>
                    </form>
                </div>
            </div>
            <br/>
        <?php $question_id++?>
    <?php endforeach; ?>
<?php endif; ?>
                    
    <?php if (isset($out_of_time) && $out_of_time):?>
    <div class="panel panel-default ">
        <div class="panel-heading">此活动未开始或已过期</div>
        <table class="table">
            <tr>
                <td colspan="2"><button type="button" onclick="window.location.href='<?= base_url() ?>'" class="btn btn-primary btn-md btn-block">返回</button></td>
            </tr>
        </table>
    </div>
    <?php endif;?>
    </div>
</body>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/jquery.min.js"></script>
    <script src="http://nws.oss-cn-qingdao.aliyuncs.com/bootstrap.min.js"></script>    
    <script>
        <?php if (isset($user_act_data)): ?>
            //开始倒计时
            var runtimes = 0;
            var left_time = <?= $user_act_data['left_time'] ?>;
            //倒计时
            setInterval("time_counter()",1000);
            
            //自动保存
            setInterval("save()",1000);
            
            function time_counter(){
                var MS = left_time * 1000 - runtimes * 1000;
                var H = Math.floor(MS / (1000 * 60 * 60)) % 24;
                var M = Math.floor(MS / (1000 * 60)) % 60;
                var S = Math.floor(MS / 1000) % 60;
                
                $("#time_counter_hour").html(H);
                $("#time_counter_minute").html(M);
                $("#time_counter_second").html(S);
                runtimes++;
                
                if (MS == 5 * 59 * 1000){
                    $(".navbar-fixed-top").removeClass('alert-success');
                    $(".navbar-fixed-top").addClass('alert-danger');
                    
                    alert('请注意，还有最后五分钟');
                }
                
                if (MS == 0){
                    //时间到！
                    alert('ewrw');
                }
            }
        <?php endif; ?>
    </script>
</html>