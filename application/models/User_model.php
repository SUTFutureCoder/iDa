<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 用于关于用户的和数据库交互
 * 
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/

class User extends CI_Model{
    public function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  添加用户    
     *  @Method Name:
     *  addUser($user_info)    
     *  @Parameter: 
     *  array  $user_info 用户信息
     * 
     *  @Return: 
     *  
    */
    public function addUser($user_info){
        $this->load->library('database');
        $db = $this->database->conn();
        $db->ida->user->
        
        
    }
    
}