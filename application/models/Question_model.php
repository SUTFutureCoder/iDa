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
            $type[] = $value['question_type'];
        }
                
        return $type;
    }
}