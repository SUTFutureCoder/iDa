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
     *  array (0 => array ('question_id' => 0, 'question_answer' => 'A B C'), '1' => '')
    */
    public function getUserHistoryAnswer($user_id, $act_id){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $cursor = $db->ida->answer->find(array('user_id' => $user_id, 'act_id' => $act_id));
        
        foreach ($cursor as $key => $value){
            $data = $value;
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
}