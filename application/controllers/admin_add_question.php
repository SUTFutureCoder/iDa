<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 添加问题
 * 
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    
 * @link       https://github.com/SUTFutureCoder/
*/
class Admin_add_question extends CI_Controller{
    public function __construct() {
        parent::__construct();
    }
    
    
    /**    
     *  @Purpose:    
     *  显示添加题目界面    
     *  @Method Name:
     *  Index()    
     *  @Parameter: 
     *     
     *  @Return: 
     *  
    */
    public function Index(){
        $this->load->view('admin_add_question_view');
    }
    
}