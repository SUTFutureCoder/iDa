<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 爱答入口
 * 
 *
 * @copyright  版权所有(C) 2015-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    0.1
 * @link       https://github.com/SUTFutureCoder 
*/
         
class Index extends CI_Controller{
    function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  显示主页    
     *  @Method Name:
     *  Index()    
     *  @Parameter: 
     *     
     *  @Return: 
     *  
     * :WARNING: 请不要地址末尾加上index.php打开 :WARNING:
    */
    public function Index()
    {          
        $this->load->library('session');
        
        //判断是否登录
        if ($this->session->userdata('user_key')){
            
        } else {
            
        }
        $this->load->view('index_view');
    }
    
    /**    
     *  @Purpose:    
     *  显示验证码    
     *  @Method Name:
     *  setValidateCode()    
     *  @Parameter: 
     *     
     *  @Return: 
     *  
    */
    public function setValidateCode(){
        //准备注册/登录
        $this->load->library('session');
        $this->load->library('ValidateCode');
        $_vc = new ValidateCode();            
        $this->session->set_userdata('authnum_session', $_vc->getCode());
        $_vc->doimg();
        
    }
    
    
}