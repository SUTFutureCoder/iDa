<?php

/**
 * 爱答补丁
 * 修复0分问题和添加学校项到answer中
 * 
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/

$db = new Mongo();
$cursor = $db->ida->answer->find(array('answer_score' => 0, 'user_answer_list' => array('$ne' => null)));
if ($cursor){
    foreach ($cursor as $data){
        if ($data['end_time'] <= date('Y-m-d H:i:s')){
            
            $length = count($data['correct_answer_list']);

            $score = 0;

            for ($i = 0; $i < $length; $i++){
                //（单/多）选题
                if (is_array($data['correct_answer_list'][$i])){
                    if (!isset($data['correct_answer_list'][$i][1])){
                        //单选题
                        if ($data['correct_answer_list'][$i][0] == $data['user_answer_list'][$i]){
                            $score += (int)$data['question_socre_list'][$i];
                        }
                    } else {
                        //多选题
                        if (implode(' ', $data['correct_answer_list'][$i]) == $data['user_answer_list'][$i]){
                            $score += (int)$data['question_socre_list'][$i];
                        }
                    }
                } else {
                    //填空或判断题
                    if ($data['correct_answer_list'][$i] == $data['user_answer_list'][$i]){
                        $score += (int)$data['question_socre_list'][$i];
                    }
                }
            }

            $db->ida->answer->update(array('user_id' => $data['user_id'], 'act_id' => $data['act_id']), array('$set' => array('answer_score' => $score)));
            
            echo $score . PHP_EOL . '-';
        }
    }
}


$cursor_school = $db->ida->answer->find(array());
foreach ($cursor_school as $value){
    $user_id = new MongoId($value['user_id']);
    if (!isset($value['user_school'])){
        //添加学校字段
        $user_school = $db->ida->user->findOne(array('_id' => (object)$user_id), array('user_school' => 1));
    //    echo ($user_school['user_school']);
        $db->ida->answer->update(array('user_id' => $value['user_id'], 'act_id' => $value['act_id']), array('$set' => array('user_school' => $user_school['user_school'])));
    }
    
    if (!isset($value['answer_time'])){
        //添加用时字段
        //和 end_time 同时被设置
        $time = strtotime($value['end_time']) - strtotime($value['start_time']);
//        var_dump($time);
        $db->ida->answer->update(array('user_id' => $value['user_id'], 'act_id' => $value['act_id']), array('$set' => array('answer_time' => $time)));
    }
}
