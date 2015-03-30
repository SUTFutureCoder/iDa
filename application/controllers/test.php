<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');
/**
 * 
 * 答题页
 * 
 *
 * @copyright  版权所有(C) 2014-2015 沈阳工业大学ACM实验室 沈阳工业大学网络管理中心 *Chen
 * @license    http://www.gnu.org/licenses/gpl-3.0.txt   GPL3.0 License
 * @version    0.1
 * @link       https://github.com/SUTFutureCoder/
*/

class Test extends CI_Controller{
    public function __construct() {
        parent::__construct();
    }
    
    /**    
     *  @Purpose:    
     *  调取数据并显示    
     *  @Method Name:
     *  Index()    
     *  @Parameter: 
     *     
     *  @Return: 
     *  
    */
    public function Index(){
        $this->load->library('session');
        $this->load->library('cache');
        $this->load->model('act_model');
        $this->load->model('answer_model');
        $this->load->model('question_model');
        
        if (!$this->session->userdata('user_id')){
            header("Content-type: text/html; charset=utf-8");
            echo '<script>alert("抱歉，请您登录");window.location.href="' . base_url() . '";</script>';
            return 0;
        }
        
        if (!$this->input->post('act_id', TRUE)){
            header("Content-type: text/html; charset=utf-8");
            echo '<script>alert("抱歉，传值错误");window.location.href="' . base_url() . '";</script>';
            return 0;
        }
            
        //提取信息
        $mc = $this->cache->memcache();
        $act_data = array();
        if (!$act_data = $mc->get('ida_' . $this->cache->getNS('act') . '_act_' . $this->input->post('act_id', TRUE))){
            if ($act_data = $this->act_model->getActInfoById($this->input->post('act_id', TRUE))){
                $mc->set('ida_' . $this->cache->getNS('act') . '_act_' . $this->input->post('act_id', TRUE), $act_data);
            } else {
                header("Content-type: text/html; charset=utf-8");
                echo '<script>alert("抱歉，未能在活动库中找到此活动");window.location.href="' . base_url() . '";</script>';
                return 0;
            }
        }

        //检查用户是否已经正在进行完成
        if ($history = $this->answer_model->checkUserAnswer($this->session->userdata('user_id'), $this->input->post('act_id', TRUE))){
            $history_question_data = array();
            if ($history['end_time'] > date('Y-m-d H:i:s')){
                //正在进行
                //遍历历史数据并自动填入
                //!当用户提交回答后end_time为当前时间
                $history_answer = $this->answer_model->getUserHistoryAnswer($this->session->userdata('user_id'), $this->input->post('act_id', TRUE));
                $history_answer['left_time'] = strtotime($history_answer['end_time']) - time();
                foreach ($history_answer['question_id_list'] as $value){
                    $history_question_list[] = 'ida_' . $this->cache->getNS('question') . '_' . $value;
                }
                $history_question_data = $this->setMulti($mc->getMulti($history_question_list, $null, Memcached::GET_PRESERVE_ORDER));
                
                $this->load->view('test_view', array('history' => 1, 
                    'question_data_list' => $history_question_data,
                    'user_act_data' => $history_answer));
                return 0;
                
            } else {
                //已经完成
                $this->load->view('test_view', array('answer_fin' => 1, 'history' => $history));
                return 0;
            }
        }
        
        //检查是否在答题时间范围内
        if ($act_data['act_start'] > date('Y-m-d H:i:s') || $act_data['act_end'] < date('Y-m-d H:i:s')){
            $this->load->view('test_view', array('out_of_time' => 1));
            return 0;
        }
        
        //生成题库
        $question_id_list = array();
        $question_data_list = array();
        $null = null;
        
        //choose
        if ($choose_sum = $act_data['act_question_choose_sum']){
            $question_id_list['choose'] = $this->getQuestionIdListByType($act_data['act_question_type'], 'choose');
            if (count($question_id_list['choose']) > $choose_sum){
                $question_id_list['choose'] = array_slice($question_id_list['choose'], $choose_sum - 1);
            }
            
            //遍历以便getMulti
            if (is_array($question_id_list['choose'])){
                foreach ($question_id_list['choose'] as $value){
                    $choose_mc_list[] = 'ida_' . $this->cache->getNS('question') . '_' . $value;
                }
                $choose_item = $mc->getMulti($choose_mc_list, $null, Memcached::GET_PRESERVE_ORDER);
                $question_data_list = array_merge($question_data_list, $this->setMulti($choose_item));
            }
        }
        
        //multi_choose
        if ($multi_choose_sum = $act_data['act_question_multi_choose_sum']){
            $question_id_list['multi_choose'] = $this->getQuestionIdListByType($act_data['act_question_type'], 'multi_choose');            
            if (count($question_id_list['multi_choose']) > $choose_sum){
                $question_id_list['multi_choose'] = array_slice($question_id_list['multi_choose'], $multi_choose_sum - 1);
            }
            
            if (is_array($question_id_list['multi_choose'])){
                foreach ($question_id_list['multi_choose'] as $value){
                    $multi_choose_mc_list[] = 'ida_' . $this->cache->getNS('question') . '_' . $value;
                }
                $multi_choose_item = $mc->getMulti($multi_choose_mc_list, $null, Memcached::GET_PRESERVE_ORDER);
                $question_data_list = array_merge($question_data_list, $this->setMulti($multi_choose_item));
            }
        }
        
        //fill
        if ($fill_sum = $act_data['act_question_fill_sum']){
            $question_id_list['fill'] = $this->getQuestionIdListByType($act_data['act_question_type'], 'fill');
            if (count($question_id_list['fill']) > $choose_sum){
                $question_id_list['fill'] = array_slice($question_id_list['fill'], $fill_sum - 1);
            }
            
            if (is_array($question_id_list['fill'])){
                foreach ($question_id_list['fill'] as $value){
                    $fill_mc_list[] = 'ida_' . $this->cache->getNS('question') . '_' . $value;
                }
                $fill_item = $mc->getMulti($fill_mc_list, $null, Memcached::GET_PRESERVE_ORDER);
                $question_data_list = array_merge($question_data_list, $this->setMulti($fill_item));
            }
        }
        
        //judge
        if ($judge_sum = $act_data['act_question_judge_sum']){
            $question_id_list['judge'] = $this->getQuestionIdListByType($act_data['act_question_type'], 'judge');
            if (count($question_id_list['judge']) > $choose_sum){
                $question_id_list['judge'] = array_slice($question_id_list['judge'], $judge_sum - 1);
            }
            
            if (is_array($question_id_list['judge'])){
                foreach ($question_id_list['judge'] as $value){
                    $judge_mc_list[] = 'ida_' . $this->cache->getNS('question') . '_' . $value;
                }
                $judge_item = $mc->getMulti($judge_mc_list, $null, Memcached::GET_PRESERVE_ORDER);
                $question_data_list = array_merge($question_data_list, $this->setMulti($judge_item));
            }
        }
        
//        var_dump($question_id_list);
        //获取id列表完毕，根据id批量取数据
//        var_dump($fill_item);
        
        //提取写入数据库
        $db_data = array();
        $db_data['user_id'] = $this->session->userdata('user_id');
        $db_data['user_name'] = $this->session->userdata('user_name');
        $db_data['act_id'] = $this->input->post('act_id', TRUE);
        $db_data['start_time'] = date('Y-m-d H:i:s');
        $db_data['answer_score'] = 0;
        if ($act_data['act_end'] < date('Y-m-d H:i:s', strtotime($db_data['start_time']  . ' +' . $act_data['act_paper_time'] . ' min'))){
            //极限情况
            $db_data['end_time'] = $act_data['act_end'];
        } else {
            $db_data['end_time'] = date('Y-m-d H:i:s', strtotime($db_data['start_time']  . ' +' . $act_data['act_paper_time'] . ' min'));
        }
        
        foreach ($question_data_list as $value){
            $db_data['question_id_list'][] = $value['question_id'];
            $db_data['correct_answer_list'][] = $value['question_answer'];
//            $db_data['user_answer_list'][] = 0;
        }
        
        //写入answer中
        if (!$this->answer_model->setInitAnswer($db_data)){
            //未写入数据库
            header("Content-type: text/html; charset=utf-8");
            echo '<script>alert("抱歉，数据库出现未知问题，请联系开发者QQ：506200331，为您的带来的不便致歉");window.location.href="' . base_url() . '";</script>';
            return 0;
        }
        $db_data['left_time'] = strtotime($db_data['end_time']) - time();
        //显示答题界面
        $this->load->view('test_view', array('new_act' => 1,
            'question_data_list' => $question_data_list,
            'user_act_data' => $db_data));
        
    }
    
    /**    
     *  @Purpose:    
     *  通过类型得到问题id列表并随机打乱    
     *  @Method Name:
     *  getQuestionIdListByType($question_section, $question_type)
     *  @Parameter: 
     *  string $question_section 问题分组
     *  string $question_type    问题类型
     *  @Return: 
     *  0 未找到
     *  array $data 已被打乱顺序的列表数组
    */
    private function getQuestionIdListByType($question_section, $question_type){
        $this->load->library('cache');
        $this->load->model('question_model');
        
        $mc = $this->cache->memcache();
        if (!$data = $mc->get('ida_' . $this->cache->getNS('question_type') . '_' . $question_section . '_' . $question_type)){
            //从数据库中dump到分类
            if ($question_id_set = $this->question_model->dumpQuestion($question_section, $question_type)){
                $mc->set('ida_' . $this->cache->getNS('question_type') . '_' . $question_section . '_' . $question_type, $question_id_set);
                if (count($question_id_set)){
                    shuffle($question_id_set);
                }
                return $question_id_set;
            } else {
                return 0;
            }
        } else {
            if (count($data)){
                shuffle($data);
            }
            return $data;
        }
    }
    
    /**    
     *  @Purpose:    
     *  批量设置问题memcache    
     *  @Method Name:
     *  setMulti($item)
     *  @Parameter: 
     *  array $item 已填充或未填充列表
     *  @Return: 
     *  0 未找到
     *  array $data 完全填充问题列表 
    */
    private function setMulti($item){
        $this->load->model('question_model');
        $this->load->library('cache');
        
        $mc = $this->cache->memcache();
        
        foreach ($item as $key => $value){
            $id = explode('_', $key);
            //注意是string格式
//            echo $id[2];
//            var_dump($value);
            if (!$value){
                //已确认memcache没有数据。从数据库中开始获取并导出
                $item[$key] = $this->question_model->getQuestionById($id[2]);
                $mc->set('ida_' . $this->cache->getNS('question') . '_' . $id[2], $item[$key]);
                
                //dump到问题列表中
                if (!$mc_data_list = $mc->get('ida_' . $this->cache->getNS('question_type') . '_' . $item[$key]['question_type'] . '_' . $item[$key]['type'])){
                    //从数据库中dump到分类
                    if ($question_id_set = $this->question_model->dumpQuestion($item[$key]['question_type'], $item[$key]['type'])){
                        $mc->set('ida_' . $this->cache->getNS('question_type') . '_' . $item[$key]['question_type'] . '_' . $item[$key]['type'], $question_id_set);
                    }
                } else {
                    $mc_data_list[] = (int)$id[2];
                    $mc->set('ida_' . $this->cache->getNS('question_type') . '_' . $item[$key]['question_type'] . '_' . $item[$key]['type'], $mc_data_list);
                }
            }
        }
        return $item;
    }
}