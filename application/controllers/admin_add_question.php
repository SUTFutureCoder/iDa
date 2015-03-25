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
    
    
    /**    
     *  @Purpose:    
     *  添加题目    
     *  @Method Name:
     *  addQuestion()    
     *  @Parameter: 
     *     
     *  @Return: 
     *  
    */
    public function addQuestion(){
        $this->load->model('question_model');
        $this->load->library('authorizee');
        $this->load->library('session');
        
        if (!$this->authorizee->CheckAuthorizee($this->session->userdata('user_role'), 'question_add')){
            echo json_encode(array('code' => -1, 'error' => '抱歉，您的权限不足'));
            return 0;
        }
        
        $clean = array();
        if (!$this->input->post('question_type', TRUE) || 20 < $this->input->post('question_type', TRUE)){
            echo json_encode(array('code' => -2, 'error' => '抱歉，问题类型不能为空或大于20个字符'));
            return 0;
        } else {
            $clean['question_type'] = $this->input->post('question_type', TRUE);
        }
        
        if (!$this->input->post('question_content', TRUE) || 300 < mb_strlen($this->input->post('question_content', TRUE))){
            echo json_encode(array('code' => -3, 'error' => '抱歉，题干不能为空或超过300个字符'));
            return 0;
        } else {
            $clean['question_content'] = $this->input->post('question_content', TRUE);
        }
        
        
        //选择或填空
        //如果question_num不为''则为选择，否则为填空
        if ($this->input->post('question_num', TRUE)){
            $clean['type'] = 'choose';
            if (!$this->input->post('question_choose')){
                echo json_encode(array('code' => -4, 'error' => '选项不能为空'));
                return 0;
            }
            $clean['question_choose'] = $this->input->post('question_choose', TRUE);
            
            if (!$this->input->post('question_choose_answer', TRUE) || !ctype_alpha($this->input->post('question_choose_answer', TRUE))){
                echo json_decode(array('code' => -7, 'error' => '选项答案不能为空或非字符'));
                return 0;
            } else {
                $clean['question_answer'] = strtoupper($this->input->post('question_choose_answer', TRUE));
            }
        } else {
            //填空题
            if (!$this->input->post('question_fill', TRUE) || 300 < mb_strlen($this->input->post('question_fill', TRUE))){
                echo json_encode(array('code' => -5, 'error' => '填空题干不能为空'));
                return 0;
            } else {
                $clean['type'] = 'fill';
                $clean['question_fill'] = $this->input->post('question_fill', TRUE);
            }
            
            if (!$this->input->post('question_fill_answer', TRUE) || 300 < mb_strlen($this->input->post('question_fill_answer',TRUE))){
                echo json_encode(array('code' => -6, 'error' => '填空题答案不能为空'));
                return 0;
            } else {
                $clean['question_answer'] = $this->input->post('question_fill_answer', TRUE);
            }
        }
        
        if ($this->input->post('question_private', TRUE) && 'on' == $this->input->post('question_private', TRUE)){
            $clean['question_private'] = 1;
        }  
        
//        $this->question_model->add_question();
    }    
    
}