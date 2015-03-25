<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 
 * 用于活动的数据操作
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/

class Act_model extends CI_Model{
    public function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  设置活动
     *  @Method Name:
     *  setAct($act)    
     *  @Parameter: 
     *  array $act 活动数据
     *  @Return: 
     *  0 添加失败
     *  _id 添加成功
    */ 
    public function setAct($act){
        $this->load->library('database');
        
        $db = $this->database->conn();
        
        $db->ida->act->insert($act, array('safe' => TRUE));
        if ($act['_id']){
            return $act['_id'];
        } else {
            return 0;
        }
    }
    
    /**    
     *  @Purpose:    
     *  获取活动列表
     *  @Method Name:
     *  getActList()    
     *  @Parameter: 
     *  @Return: 
     *  0 无列表
     *  array $act_list 活动列表
    */ 
    public function getActList(){
        $this->load->library('database');
        $db = $this->database->conn();
        
        $cursor = $db->ida->act->find(array('act_start' => array('$lt' => date('Y-m-d H:i:s')), 'act_end' => array('$gt' => date('Y-m-d H:i:s'))));
        
        $act_list = array();
        
        foreach ($cursor as $key => $value){
            if (!$key){
                return 0;
            }
            $act_list[] = $value;
        }
        return $act_list;
    }
}