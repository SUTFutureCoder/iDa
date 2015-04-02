<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 
 * 回答表
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/

class Answer_model extends CI_Model{
    public function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  检查用户是否已经回答    
     *  @Method Name:
     *  checkUserAnswer($user_id, $act_id)    
     *  @Parameter: 
     *  string $user_id 用户id
     *  string $act_id  活动id
     * 
     *  @Return: 
     *  0 尚未回答
     *  array answer 回答情况
    */
    public function checkUserAnswer($user_id, $act_id){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $cursor = $db->ida->answer->find(array('user_id' => $user_id, 'act_id' => $act_id), array('start_time' => 1, 'end_time' => 1, 'answer_score' => 1));
        
        foreach ($cursor as $key => $value){
            $answer_history = $value;
        }
        
        if (!isset($key)){
            return 0;
        } else {
            return $answer_history;
        }
    }
    
    /**    
     *  @Purpose:    
     *  获取用户历史回答    
     *  @Method Name:
     *  getUserHistoryAnswer($user_id, $act_id)    
     *  @Parameter: 
     *  string $user_id 用户id
     *  string $act_id  活动id
     * 
     *  @Return: 
     *  0 用户未参与此问卷
     *  $data 用户回答记录
    */
    public function getUserHistoryAnswer($user_id, $act_id){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $cursor = $db->ida->answer->find(array('user_id' => $user_id, 'act_id' => $act_id));
        
        foreach ($cursor as $key => $value){
            $data = $value;
        }
        
        if (!isset($key)){
            return 0;
        }
        
        return $data;
    }
    /**    
     *  @Purpose:    
     *  初始化回答    
     *  @Method Name:
     *  setInitAnswer($answer_init_data)   
     *  @Parameter: 
     *  array $answer_init_data 回答初始化
     * 
     *  @Return: 
     *  0 失败
     *  1 成功
    */
    public function setInitAnswer($answer_init_data){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $db->ida->answer->insert($answer_init_data, array('safe' => TRUE));
        
        if (isset($answer_init_data['_id'])){
            return $answer_init_data['_id'];
        } else {
            return 0;
        }
    }
    
    /**    
     *  @Purpose:    
     *  更新回答    
     *  @Method Name:
     *  setSaveAnswer($user_id, $act_id, $answer_data)   
     *  @Parameter: 
     *  array $answer_data 用户即时回答
     * 
     *  @Return: 
     *  0 失败
     *  1 成功
    */
    public function setSaveAnswer($user_id, $act_id, $answer_data){
        $this->load->library('database');
        $db = $this->database->conn();
        $result = $db->ida->answer->update(array('user_id' => $user_id, 'act_id' => $act_id), array('$set' => array('user_answer_list' => $answer_data)));
        return $result;
    } 
    
    /**    
     *  @Purpose:    
     *  更新分数    
     *  @Method Name:
     *  setScore($user_id, $act_id, $score, $fin)   
     *  @Parameter: 
     *  $score 分数
     *  $fin   终结答卷
     *  @Return: 
     *  0 失败
     *  1 成功
    */
    public function setScore($user_id, $act_id, $score, $fin){
        $this->load->library('database');
        $db = $this->database->conn();
        if ($fin){
            $result = $db->ida->answer->update(array('user_id' => $user_id, 'act_id' => $act_id), array('$set' => array('answer_score' => $score, 'end_time' => date('Y-m-d H:i:s'))));
        }else {
            $result = $db->ida->answer->update(array('user_id' => $user_id, 'act_id' => $act_id), array('$set' => array('answer_score' => $score)));
        }
        
        return $result;
    } 
    
    
}