<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 
 * 问题相关
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/
class Question_model extends CI_Model{
    public function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  获取问题类型
     *  @Method Name:
     *  getQuestionType()    
     *  @Parameter: 
     *  
     *  @Return: 
     *  array $type 类型
    */ 
    public function getQuestionType(){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $type = array();
        $type_cursor = $db->ida->command(array('distinct' => 'question', 'key' => 'question_type'));
        
        foreach ($type_cursor as $key => $value){              
            $type = $value;
            break;
        }
        return $type;
    }
    
    /**    
     *  @Purpose:    
     *  添加问题
     *  @Method Name:
     *  addQuestion($question)    
     *  @Parameter: 
     *  array $question 问题数组
     *  @Return: 
     *  0 添加失败
     *  $_id 添加成功
    */ 
    public function addQuestion($question){
        $this->load->library('database');        
        
        $db = $this->database->conn();
        
        //设置或获取自增
        $cursor = $db->ida->question->find(array(), array('question_id' => 1))->sort(array('question_id' => -1))->limit(1);
        foreach ($cursor as $key => $value){
        }
        
        if (!isset($key)){
            $question['question_id'] = 1;
        } else {
            $question['question_id'] = ++$value['question_id'];
        }
        
        $db->ida->question->insert($question, array('safe' => TRUE));
        if ($question['_id']){
            return $question['question_id'];
        } else {
            return 0;
        }
    }
    
    /**    
     *  @Purpose:    
     *  添加问题
     *  @Method Name:
     *  dumpQuestion($question_type, $type)
     *  @Parameter: 
     *  string $question_type 问题类型
     *  string $type 类型
     *  @Return: 
     *  0 无数据
     *  array $data id
    */ 
    public function dumpQuestion($question_type, $type){
        $this->load->library('database');
        
        $db = $this->database->conn();
        $data = array();
        
        $cursor = $db->ida->question->find(array('type' => $type, 'question_type' => $question_type), array('question_id' => 1));
        
        foreach ($cursor as $key => $value){
            if (!$key){
                return 0;
            } else {
                $data[] = $value;
            }
        }
        
        return $data;
    }
}