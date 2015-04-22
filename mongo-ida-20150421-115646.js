
/** act indexes **/
db.getCollection("act").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** answer indexes **/
db.getCollection("answer").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** question indexes **/
db.getCollection("question").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** role indexes **/
db.getCollection("role").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** user indexes **/
db.getCollection("user").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** act records **/
db.getCollection("act").insert({
  "_id": ObjectId("551ebd0c0da82a13058b4573"),
  "act_name": "云办公知识竞答（无纸化）",
  "act_comment": "沈阳工业大学网络文化节",
  "act_rule": "<p>活动主题：云办公知识竞答（无纸化）</p><p>内容：举办一次基于Office使用的知识竞赛，全为客观题，网站在题库中随机选题，答题时间有限【60分钟】。拟设25道单选题【每题2分】、15道判断题【每题2分】及10道多选题【每题4分】。按照分数排名。</p><p>奖项：一等奖、二等奖、三等奖各一名，优胜奖五个</p><p>活动时间：2015年4月4日～2015年5月5日</p><p>注意：注册时学校请写“沈阳工业大学”，并且输入真实信息以便通知和发放证书</p><p><br/></p>",
  "act_school": "沈阳工业大学",
  "act_start": "2015-04-04 00:00:00",
  "act_end": "2015-05-06 00:00:00",
  "act_question_type": "OFFICE",
  "act_question_choose_sum": "25",
  "act_question_multi_choose_sum": "10",
  "act_question_judge_sum": "15",
  "act_question_fill_sum": "0",
  "act_paper_time": "60",
  "act_img": "1428077836bd315c6034a85edf0899dd064b540923dd5475f9.jpg",
  "act_add_user_name": "林星辰",
  "act_add_user_id": "551d61470da82a5e55b5b0de",
  "act_add_time": "2015-04-04 00:17:16"
});
db.getCollection("act").insert({
  "_id": ObjectId("552001630da82a4e4e20312b"),
  "act_name": "网络安全知识竞赛（无纸化）",
  "act_comment": "沈阳工业大学网络文化节",
  "act_rule": "<p>\n    <span >活动主题：网络安全知识竞赛（无纸化）</span>\n</p>\n<p>\n    <span ><br/></span>\n</p>\n<p>\n    <span >内容：举办一次基于网络安全知识的竞赛。全为客观题，网站在题库中随机选题，答题时间有限【30分钟】。拟设10道单选题【每题2分】、5道判断题【每题2分】及5道多选题【每题4分】。按照竞赛完成时间和分数排名。</span>\n</p>\n<p>\n    <span ><br/></span>\n</p>\n<p>\n    <span >奖项：一等奖、二等奖、三等奖各一名，优胜奖五个</span>\n</p>\n<p>\n    <span ><br/></span>\n</p>\n<p>\n    <span >活动时间：2015年4月4日～2015年5月5日</span>\n</p>\n<p>\n    <span ><br/></span>\n</p>\n<p>\n    <span >注意：注册时学校请写“沈阳工业大学”，并且输入真实信息以便通知和发放证书</span>\n</p>\n<p>\n    <br/>\n</p>",
  "act_school": "沈阳工业大学",
  "act_start": "2015-04-04 00:00:00",
  "act_end": "2015-05-06 00:00:00",
  "act_question_type": "网络安全知识",
  "act_question_choose_sum": "10",
  "act_question_multi_choose_sum": "5",
  "act_question_judge_sum": "5",
  "act_question_fill_sum": "0",
  "act_paper_time": "30",
  "act_img": "1428160867d6ca7bcb0a46f21f40d0280df5246b600d33ae8c.jpg",
  "act_add_user_name": "林星辰",
  "act_add_user_id": "551d61470da82a5e55b5b0de",
  "act_add_time": "2015-04-04 23:21:07"
});

/** answer records **/

/** question records **/
db.getCollection("question").insert({
  "_id": ObjectId("551e965b0da82a17058b4567"),
  "question_type": "OFFICE",
  "question_content": "在 Word2003 中提供了多个工具栏，通常在窗口中显示的是 常用的部分，要打开其他的工具栏，执行（）操作。",
  "question_score": "2",
  "question_choose": [
    "【编辑】/【工具栏】",
    "【工具】/【工具栏】",
    "【插入】/【工具栏】",
    "【插入】/【工具栏】"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:32:11",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(1)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e96df0da82a1a058b4567"),
  "question_type": "OFFICE",
  "question_content": "在菜单栏的下拉菜单中，包含了应用 Excel2003 软件所需的所有\n命令，有的命令右侧有一个向右的黑箭头，表明该命令有（）",
  "question_score": "2",
  "question_choose": [
    "对话框",
    "子菜单",
    "快捷键",
    "工具按钮"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:34:23",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(2)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e971b0da82a14058b4567"),
  "question_type": "OFFICE",
  "question_content": "在 Word2003 中，下列叙述不正确的是（）。",
  "question_score": "2",
  "question_choose": [
    "要生成文档目录，首先为每一级标题使用相应的样式，然后执行【插入】/【引用】/【索引和目录】",
    "要生成索引，首先要标记索引项，然后执行【插入】/【引用】 /【索引和目录】",
    "【索引和目录】对话框中索引选项卡页面可以设置索引多栏显示",
    "【索引和目录】对话框中索引选项卡页面可以设置索引多栏显示"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:35:23",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(3)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e975d0da82a16058b4567"),
  "question_type": "OFFICE",
  "question_content": "在 Word2003 中，【文件】菜单的下方通常显示有若干个文件名，它们是（）。",
  "question_score": "2",
  "question_choose": [
    "当前已被打开的文件",
    "最近被打开过的文件",
    "最近被删除的文件",
    "当前正被打印的文件"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:36:29",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(4)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e982d0da82a1b058b4567"),
  "question_type": "OFFICE",
  "question_content": "在 Word2003 文档编辑中，执行（）操作时，在制表位上设置的前导符才能出现。",
  "question_score": "2",
  "question_choose": [
    "单击制表位",
    "单击标尺",
    "双击制表位",
    "按一下 Tab 键"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:39:57",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(5)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e98680da82a12058b4567"),
  "question_type": "OFFICE",
  "question_content": "在Word中插入图形，下列方法不正确的是",
  "question_score": "2",
  "question_choose": [
    "直接利用绘图工具绘制图形",
    "选择“文件”菜单中的“打开”命令，再选择某个图形文件名。",
    "选择“插入”菜单中的“图片”命令，再选择某个图形文件名",
    "利用剪贴板将其它应用程序中的图形粘贴到所需文档中"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:40:56",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(6)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e988e0da82a15058b4567"),
  "question_type": "OFFICE",
  "question_content": "在WORD的编辑状态，选择了一个段落并设置段落的“首行缩进”设置为1厘米，则",
  "question_score": "2",
  "question_choose": [
    "该段落的首行起始位置距页面的左边距1厘米",
    "文档中各段落的首行只由“首行缩进”确定位置",
    "该段落的首行起始位置距段落的“左缩进”位置的右边1厘米",
    "该段落的首行起始位置在段落“左缩进”位置的左边1厘米"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:41:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(7)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e98ad0da82ad7058b4567"),
  "question_type": "OFFICE",
  "question_content": "对于Word中的一个表格",
  "question_score": "2",
  "question_choose": [
    "只能拆分成左、右两个部分",
    "只能拆分成上、下两个部分",
    "可以拆分成上、下、左、右四个部分",
    "不能拆分"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:42:05",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(8)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e98d00da82a19058b4567"),
  "question_type": "OFFICE",
  "question_content": "在Word编辑状态，要在文档中添加符号\"★\"，应当使用哪个菜单中的命令？",
  "question_score": "2",
  "question_choose": [
    "\"文件\"菜单",
    "\"编辑\"菜单",
    "\"格式\"菜单",
    "\"插入\"菜单"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:42:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(9)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae440da82ad7058b456c"),
  "question_type": "OFFICE",
  "question_content": "dotx格式为启用宏的模板格式，而dotm格式无法启用宏",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:14:12",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(105)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae650da82a16058b456f"),
  "question_type": "OFFICE",
  "question_content": "按一次TAB键就右移一个制表位，按一次DELETE键左移一个制表位。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:14:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(108)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae6e0da82a1b058b456a"),
  "question_type": "OFFICE",
  "question_content": "插入一个分栏符能够将页面分为两栏",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:14:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(109)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e98f60da82adf058b4567"),
  "question_type": "OFFICE",
  "question_content": "某单元格数值格式设置为“#,##0.00”，其含义是",
  "question_score": "2",
  "question_choose": [
    "整数4位，保留2位小数",
    "整数4位，小数2位",
    "整数4位，千位加分节符，保留2位小数",
    "整数1位，小数2位"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:43:18",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(10)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9a7c0da82a17058b4569"),
  "question_type": "OFFICE",
  "question_content": "在FrontPage中“字幕”在哪个菜单项中设置",
  "question_score": "2",
  "question_choose": [
    "FrontPage组件",
    "DHTML",
    "表单",
    "网页属性"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:49:48",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(22)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e99200da82ad6058b4567"),
  "question_type": "OFFICE",
  "question_content": "如果在单元格输入数据“12,345.67”，Excel 2000将把它识别为",
  "question_score": "2",
  "question_choose": [
    "文本型",
    "数值型",
    "日期时间型",
    "货币型"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:44:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(11)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e99440da82a14058b4568"),
  "question_type": "OFFICE",
  "question_content": "如果在A1、B1和C1三个单元格分别输入数据1、2和3，再选择单元格D4，然后单击常用工具栏中的按钮“∑”，则在单元格D1显示",
  "question_score": "2",
  "question_choose": [
    "=SUM(A1:C1)",
    "=TOTAL(A1:C1)",
    "=AVERAGE(A1:C1)",
    "=COUNT(A1:C1)"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:44:36",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(12)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e99610da82ae1058b4567"),
  "question_type": "OFFICE",
  "question_content": "工作表Sheet1中，设已对单元格A1、B1分别输入数据20、40，若对单元格C1输入公式“=A1&B1;”，则C1的值为",
  "question_score": "2",
  "question_choose": [
    "60",
    "2040",
    "20&40;",
    "出错"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:45:05",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(13)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e997a0da82a17058b4568"),
  "question_type": "OFFICE",
  "question_content": "工作表Sheet1中，设已对单元格A1、B1分别输入数据20、40，若对单元格C1输入公式“=A1>B1”，则C1的值为",
  "question_score": "2",
  "question_choose": [
    "YES",
    "NOT",
    "TRUE",
    "FALSE"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:45:30",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(14)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e999e0da82a12058b4568"),
  "question_type": "OFFICE",
  "question_content": "工作表中，区域是指连续的单元格，一般用_______标记。",
  "question_score": "2",
  "question_choose": [
    "单元格:单元格",
    "行标:列标",
    "左上角单元格名:右下角单元格名",
    "左单元格名:右单元格名"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:46:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(15)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e99c20da82a15058b4568"),
  "question_type": "OFFICE",
  "question_content": "Excel单元格的列号是用__________来标识的。",
  "question_score": "2",
  "question_choose": [
    "大写英文字母",
    "小写英文字母",
    "阿拉伯数字",
    "任选符号"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:46:42",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(16)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e99e30da82a18058b4567"),
  "question_type": "OFFICE",
  "question_content": "在单元格中输入“=aaverage(10,-3)-pi()”，则该单元格显示的值",
  "question_score": "2",
  "question_choose": [
    "大于零",
    "小于零",
    "等于零",
    "不确定"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:47:15",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(17)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9a070da82adf058b4568"),
  "question_type": "OFFICE",
  "question_content": "下列_________不能对数据表排序。",
  "question_score": "2",
  "question_choose": [
    "单击数据区中任一单元格，然后单击工具栏的“升序”或“降序”按钮",
    "选择要排序的数据区域，然后单击工具栏中的“升序”或“降序”按钮",
    "选择要排序的数据区域，然后使用“编辑”菜单的“排序”命令",
    "选择要排序的数据区域，然后使用“数据”菜单的“排序”命令"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:47:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(18)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9a2a0da82a13058b4567"),
  "question_type": "OFFICE",
  "question_content": "在工作表当中，B5单元格中的内容为公式\"=A2+A3\"，若将此单元格复制到C6，则其中的内容变为：",
  "question_score": "2",
  "question_choose": [
    "=B2+B3",
    "=A3+A4",
    "=B3+B4",
    "不变"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:48:26",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(19)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9a430da82ad6058b4568"),
  "question_type": "OFFICE",
  "question_content": "NOT属于下列函数中的哪一类：",
  "question_score": "2",
  "question_choose": [
    "逻辑函数",
    "查询函数和引用函数",
    "数据库函数",
    "信息函数"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:48:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(20)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9a610da82ae1058b4568"),
  "question_type": "OFFICE",
  "question_content": "下列操作中，不是退出PowerPoint的操作是",
  "question_score": "2",
  "question_choose": [
    "单击“文件”下拉菜单中的“关闭”命令",
    "单击“文件”下拉菜单中的“退出”命令",
    "按组合键Alt+F4",
    "双击PowerPoint窗口的“控制菜单”图标"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:49:21",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(21)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9aa00da82ad5058b4567"),
  "question_type": "OFFICE",
  "question_content": "如要终止幻灯片的放映，可直接按_________ 键。",
  "question_score": "2",
  "question_choose": [
    "Ctrl+C",
    "Esc",
    "End",
    "Alt+F4"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:50:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(23)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9b120da82a19058b4568"),
  "question_type": "OFFICE",
  "question_content": "要使文档中每段的首行自动缩进2个汉字，可以使用标尺上的",
  "question_score": "2",
  "question_choose": [
    "左缩进标",
    "右缩进标记",
    "首行缩进标记",
    "悬挂缩进标记"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:52:18",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(24)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9b320da82a1a058b4568"),
  "question_type": "OFFICE",
  "question_content": "关于Word修订，下列哪项是错误的？",
  "question_score": "2",
  "question_choose": [
    "在Word中可以突出显示修订",
    "不同的修订者的修订会用不同颜色显示 ",
    "所有修订都用同一种比较鲜明的颜色显示",
    "在Word中可以针对某一修订进行接受或拒绝修订"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:52:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(25)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9b550da82ad6058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Word中，丰富的特殊符号是通过（     ）输入的。",
  "question_score": "2",
  "question_choose": [
    "“格式”菜单中的“插入符号”命令",
    "专门的符号按钮",
    "“插入”菜单中的“符号”按钮",
    "“区位码”方式"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:53:25",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(26)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9b7f0da82ae1058b4569"),
  "question_type": "OFFICE",
  "question_content": "为了便于在文档中查找信息，可以使用（     ）来代替任何一个字符进行匹配。",
  "question_score": "2",
  "question_choose": [
    "*",
    "&",
    "%",
    "?"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:54:07",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(27)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ba20da82a16058b4568"),
  "question_type": "OFFICE",
  "question_content": "\"在当前文档中，若需要插入Windows的图片，应将光标移到插入位置，然后选 择（     ）。\" ",
  "question_score": "2",
  "question_choose": [
    "“插入”菜单中的“对象”命令",
    "“插入”菜单中的“图片”命令",
    "“编辑”菜单中的“图片”命令",
    "“文件”菜单中的“新建”命令"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:54:42",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(28)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9bc60da82a17058b456a"),
  "question_type": "OFFICE",
  "question_content": "在Word中，在正文中选定一个矩形区域的操作是（     ）。",
  "question_score": "2",
  "question_choose": [
    "先按住Alt键，然后拖动鼠标",
    "先按住Ctrl键，然后拖动鼠标",
    "先按住Shift键，然后拖动鼠标",
    "先按住Alt+Shift键，然后拖动鼠标"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:55:18",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(29)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9bed0da82ae0058b4567"),
  "question_type": "OFFICE",
  "question_content": "要输入下标，应进行的操作是（     ）。",
  "question_score": "2",
  "question_choose": [
    "插入文本框，缩小文本框中的字体，拖放于下标位置",
    "使用“格式”菜单中的“首字下沉”选项",
    "使用“格式”菜单中的“字体”选项，并选择“下标”",
    "Word中没有输入下标的功能"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:55:57",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(30)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9c080da82a15058b4569"),
  "question_type": "OFFICE",
  "question_content": "水平标尺左方三个“缩进”标记中最下面的是（     ）。",
  "question_score": "2",
  "question_choose": [
    "首行缩进",
    "左缩进",
    "右缩进",
    "悬挂缩进"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:56:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(31)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9c2f0da82a19058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Word中打印文档时，下列说法中不正确的是（     ）。",
  "question_score": "2",
  "question_choose": [
    "在同一页上，可以同时设置纵向和横向两种页面方向",
    "在同一文档中，可以同时设置纵向和横向两种页面方向",
    "在打印预览时可以同时显示多页",
    "在打印时可以指定打印的页面"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:57:03",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(32)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9c4b0da82a13058b4568"),
  "question_type": "OFFICE",
  "question_content": "在编辑文档时，如要看到页面的实际效果，应采用（     ）模式。",
  "question_score": "2",
  "question_choose": [
    "普通视图",
    "页面视图",
    "大纲视图",
    "Web版式"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:57:31",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(33)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9c6d0da82ad6058b456a"),
  "question_type": "OFFICE",
  "question_content": "要使某行处于居中的位置，应使用（     ）中的“居中”按钮。",
  "question_score": "2",
  "question_choose": [
    "常用工具栏",
    "格式工具栏",
    "表格和边框工具栏 ",
    "绘图工具栏"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:58:05",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(34)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9c850da82a14058b4569"),
  "question_type": "OFFICE",
  "question_content": "Word的哪种视图方式下可以显示分页效果？（     ）",
  "question_score": "2",
  "question_choose": [
    "普通",
    "大纲",
    "页面",
    "主控文档"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:58:29",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(35)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ca90da82a16058b4569"),
  "question_type": "OFFICE",
  "question_content": "以下关于Word使用的叙述中，正确的是（     ）。",
  "question_score": "2",
  "question_choose": [
    "被隐藏的文字可以打印出来",
    "直接单击“右对齐”按钮而不用选定，就可以对插入点所在行进行设置",
    "若选定文本后，单击“粗体”按钮，则选定部分文字全部变成粗体或常规字体",
    "双击“格式刷”可以复制一次"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:59:05",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(36)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ccc0da82a12058b4569"),
  "question_type": "OFFICE",
  "question_content": "如果插入的表格的内外框线是虚线，将光标放在表格中，可在（     ）中实现将框线变成实线。",
  "question_score": "2",
  "question_choose": [
    "“表格”菜单的“虚线” ",
    "“格式”菜单的“边框和底纹”",
    "“表格”菜单的“选中表格” ",
    "“格式”菜单的“制表位”"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 21:59:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(37)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ce80da82a17058b456b"),
  "question_type": "OFFICE",
  "question_content": "修改样式时，下列步骤（     ）是错误的。",
  "question_score": "2",
  "question_choose": [
    "选择“视图”菜单中的“样式与格式”命令，出现样式对话框",
    "在样式类型列表框中，选定要修改的样式所属的类型",
    "从样式列表框选择要更改的样式名",
    "如果要更新该样式的指定后续段落样式，可在后续段落样式列表框中选择要指定给后续段落的样式"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:00:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(38)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9d060da82ad7058b4568"),
  "question_type": "OFFICE",
  "question_content": "下列关于Word的叙述中，不正确的是（     ）。",
  "question_score": "2",
  "question_choose": [
    "设置了“保护文档”的文件，如果不知道口令，就无法打开它 ",
    "Word可同时打开多个文档，但活动文件只有一个",
    "表格中可以填入文字、数字、图形",
    "从“文件”菜单中选择“打印预览”命令，在出现的预览视图下，既可以预览打印结果，也可以编辑文本"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:00:38",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(39)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9d220da82a15058b456a"),
  "question_type": "OFFICE",
  "question_content": "Word只有在（     ）模式下才会显示页眉和页脚。",
  "question_score": "2",
  "question_choose": [
    "普通",
    "图形",
    "页面",
    "大纲"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:01:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(40)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9d3c0da82a19058b456a"),
  "question_type": "OFFICE",
  "question_content": "在Word编辑时，文字下面有红色波浪下划线表示（     ）。",
  "question_score": "2",
  "question_choose": [
    "已修改过的文档",
    "对输入的确认",
    "可能是拼写错误",
    "可能的语法错误"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:01:32",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(41)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9e840da82ad7058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Word2010中,给每位家长发送一份《期末成绩通知单》，用（）命令最简便。",
  "question_score": "2",
  "question_choose": [
    "复制 ",
    "信封",
    "标签",
    "邮件合并"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:07:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(42)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ea30da82a15058b456b"),
  "question_type": "OFFICE",
  "question_content": "在Powerpoint2010中，从当前幻灯片开始放映幻灯片的快捷键是（  ）",
  "question_score": "2",
  "question_choose": [
    "Shift+F5",
    "F5",
    "Ctrl+F5",
    "Alt+F5"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:07:31",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(43)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9f450da82a1a058b4569"),
  "question_type": "OFFICE",
  "question_content": "在WORD中，段落格式化的设置不包括(  )",
  "question_score": "2",
  "question_choose": [
    "首行缩进",
    "字体大小",
    "行间距",
    "居中对齐"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:10:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(44)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9f6b0da82a14058b456a"),
  "question_type": "OFFICE",
  "question_content": "在Word中，如果当前光标在表格中某行的最后一个单元格的外框线上，按\nEnter键后，(  )",
  "question_score": "2",
  "question_choose": [
    "光标所在列加宽",
    "对表格不起作用",
    "在光标所在行下增加一行",
    "光标所在行加高"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:10:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(45)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9f880da82ae1058b456a"),
  "question_type": "OFFICE",
  "question_content": "在Word中，为了确保文档中段落格式的一致性，可以使用(  )",
  "question_score": "2",
  "question_choose": [
    "模板",
    "样式",
    "向导",
    "页面设计"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:11:20",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(46)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9fb60da82ad5058b4568"),
  "question_type": "OFFICE",
  "question_content": " Excel 2010默认的新建文件名是(  )。",
  "question_score": "2",
  "question_choose": [
    "Sheet1",
    "Excel1",
    "工作簿1 ",
    "文档 1"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:12:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(47)
});
db.getCollection("question").insert({
  "_id": ObjectId("551e9ff40da82ad7058b456a"),
  "question_type": "OFFICE",
  "question_content": "设打开一个原有文档，编辑后进行“保存”操作，则该文档(  )。",
  "question_score": "2",
  "question_choose": [
    "被保存在原文件夹下",
    "可以保存在已有的其他文件夹下",
    "可以保存在新建文件夹下",
    "保存后文档被关闭"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:13:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(48)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea0190da82adf058b4569"),
  "question_type": "OFFICE",
  "question_content": "下列(  )不是自动填充选项。",
  "question_score": "2",
  "question_choose": [
    "复制单元格",
    "时间填充",
    "仅填充格式",
    "以序列方式填充"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:13:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(49)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea0620da82a1a058b456a"),
  "question_type": "OFFICE",
  "question_content": "下列关于排序操作的叙述中正确的是(  )。",
  "question_score": "2",
  "question_choose": [
    "排序时只能对数值型字段进行排序，对于字符型的字段不能进行排序",
    "排序可以选择字段值的升序或降序两个方向分别进行",
    "用于排序的字段称为“关键字”，在Excel中只能有一个关键字段",
    "一旦排序后就不能恢复原来的记录排列 "
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:14:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(50)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea0820da82a16058b456a"),
  "question_type": "OFFICE",
  "question_content": "下列关于Excel的叙述中，错误的是(  )。",
  "question_score": "2",
  "question_choose": [
    "一个Excel 文件就是一个工作表 ",
    "一个Excel文件就是一个工作簿",
    "一个工作簿可以有多个工作表",
    "双击某工作表标签，可以对该工作表重新命名"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:15:30",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(51)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea09c0da82ae1058b456b"),
  "question_type": "OFFICE",
  "question_content": "已知D2单元格的内容为=B2*C2，当D2单元格被复制到E3单元格时，E3\n单元格的内容为(  )。",
  "question_score": "2",
  "question_choose": [
    "=C3*D3 ",
    "=C2*D2",
    "=B2*C2",
    "=B3*C3"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:15:56",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(52)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea0e70da82ae0058b4568"),
  "question_type": "OFFICE",
  "question_content": "以下常量中(  )是Excel中合法的数值型常量。",
  "question_score": "2",
  "question_choose": [
    "123",
    "[123+E456]",
    "123.456\"",
    "123*10"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:17:11",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(53)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea1090da82a15058b456c"),
  "question_type": "OFFICE",
  "question_content": "在Excel 2010中，结果为非数值的函数是(  )。",
  "question_score": "2",
  "question_choose": [
    "COUNT",
    "SUM",
    "DAVERAGE",
    "LEFT"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:17:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(54)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea1230da82a13058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Excel单元格中输入“=average(10,-3)”，则该单元格显示的值(  )。",
  "question_score": "2",
  "question_choose": [
    "不确定",
    "小于零",
    "大于零",
    "等于零"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:18:11",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(55)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea1410da82a1b058b4568"),
  "question_type": "OFFICE",
  "question_content": "在Excel中，双击某工作表标签将(  )。 ",
  "question_score": "2",
  "question_choose": [
    "重命名该工作表",
    "切换到该工作表",
    "删除该工作表",
    "隐藏该工作表"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:18:41",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(56)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea15c0da82ad6058b456b"),
  "question_type": "OFFICE",
  "question_content": "在Excel中，字符型数据的默认对齐方式是(  )。",
  "question_score": "2",
  "question_choose": [
    "左对齐",
    "右对齐",
    "两端对齐",
    "视具体情况而定"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:19:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(57)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea1750da82a14058b456b"),
  "question_type": "OFFICE",
  "question_content": "在单元格中输入公式时，公式中可含数字及各种运算符号，但不能包含(  )。",
  "question_score": "2",
  "question_choose": [
    "$",
    "空格",
    "%",
    "&"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:19:33",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(58)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea19d0da82ae1058b456c"),
  "question_type": "OFFICE",
  "question_content": "在行号和列号前加$符号，代表绝对引用。绝对引用表Sheet2中A2：C5\n区域的公式为(  )。",
  "question_score": "2",
  "question_choose": [
    "Sheet2!A2:C5",
    "Sheet2!$A2:$C5",
    "Sheet2!$A$2:$C$5",
    "Sheet2!$A2:C5 "
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:20:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(59)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea1c20da82a17058b456c"),
  "question_type": "OFFICE",
  "question_content": "PowerPoint 2010中的动画刷的作用是( )。",
  "question_score": "2",
  "question_choose": [
    "复制母版",
    "复制切换效果",
    "复制字符",
    "复制幻灯片中对象的动画效果"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:20:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(60)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea6c80da82a18058b4568"),
  "question_type": "OFFICE",
  "question_content": "制作演示文稿时，如果要设置每张幻灯片的播放时间，那么需要通过执行( )操作来实现。",
  "question_score": "2",
  "question_choose": [
    "幻灯片切换",
    "幻灯片版式",
    "幻灯片放映",
    "幻灯片母版"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:42:16",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(61)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea6f50da82a13058b456a"),
  "question_type": "OFFICE",
  "question_content": "不是合法的“打印内容”选项_________。",
  "question_score": "2",
  "question_choose": [
    "幻灯片",
    "备注页",
    "讲义",
    "幻灯片浏览"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:43:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(62)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea70c0da82a1a058b456b"),
  "question_type": "OFFICE",
  "question_content": "下列不是PowerPoint视图的是_________ 。",
  "question_score": "2",
  "question_choose": [
    "普通视图",
    "幻灯片视图",
    "备注页视图",
    "大纲视图"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:43:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(63)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea7260da82a16058b456b"),
  "question_type": "OFFICE",
  "question_content": "对于演示文稿中不准备放映的幻灯片可以用 下拉菜单中的“隐藏幻灯片”命令隐藏_________。",
  "question_score": "2",
  "question_choose": [
    "工具",
    "幻灯片放映",
    "视图",
    "编辑"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:43:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(64)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea79d0da82a17058b456d"),
  "question_type": "OFFICE",
  "question_content": "word中系统默认的对齐方式是__________",
  "question_score": "2",
  "question_choose": [
    "两端对齐",
    "右对齐",
    "居中对齐",
    "分散对齐"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:45:49",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(65)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea7be0da82ad5058b4569"),
  "question_type": "OFFICE",
  "question_content": "将文档中的一部分文本移动到别处，先要进行的操作是(  )。",
  "question_score": "2",
  "question_choose": [
    "粘贴",
    "复制",
    "选择",
    "剪切"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:46:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(66)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea7e50da82a1a058b456c"),
  "question_type": "OFFICE",
  "question_content": "在Word的编辑状态打开了“wl.docx”文档，若要将经过编辑后的文档以“w2.docx”为名存盘，应当执行“文件”菜单中的命令是(  )。",
  "question_score": "2",
  "question_choose": [
    "保存",
    "另存为HTML",
    "另存为",
    "版本"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:47:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(67)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea8020da82a1b058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Word文档中,如果删除文档中一部分选定的文字的格式设置，可按组合键(  )。",
  "question_score": "2",
  "question_choose": [
    "【ctrl】＋【shift】＋【Z 】 ",
    "【Ctrl】＋【Shift】",
    "【Ctrl】＋【Alt】＋【Del】",
    "【Ctrl】＋【F6】"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:47:30",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(68)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea8480da82ae1058b456d"),
  "question_type": "OFFICE",
  "question_content": "删除一个段落标记后，前、后两段将合并成一段，原段落格式的编排(  )",
  "question_score": "2",
  "question_choose": [
    "后一段格式未定",
    "前一段将采用后一段的格式 ",
    "后一段将采用前一段的格式",
    "没有变化"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:48:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(69)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea8690da82ae0058b4569"),
  "question_type": "OFFICE",
  "question_content": "Word 2010编辑状态下，利用（  ）可快速、直接调整文档的左右边界。 ",
  "question_score": "2",
  "question_choose": [
    "格式栏",
    "功能区",
    "菜单",
    "标尺 "
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:49:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(70)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea8ea0da82a18058b4569"),
  "question_type": "OFFICE",
  "question_content": "在Word2010中插入图片后，可以通过出现的“图片工具”选项卡对图片进行（）操作进行美化设置。",
  "question_score": "4",
  "question_choose": [
    "删除背景",
    "艺术效果",
    "图片样式",
    "裁剪"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:51:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(71)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea9060da82a1a058b456d"),
  "question_type": "OFFICE",
  "question_content": "Powerpoint2010中的功能区由（）",
  "question_score": "4",
  "question_choose": [
    "选项卡",
    "快速访问工具栏",
    "菜单栏",
    "工具组"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:51:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(72)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea9500da82a16058b456c"),
  "question_type": "OFFICE",
  "question_content": "在word中“审阅”功能区的“翻译”可以进行（）操作。",
  "question_score": "4",
  "question_choose": [
    "翻译文档",
    "翻译所选文字",
    "翻译屏幕提示",
    "翻译批注"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:53:04",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(73)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea96b0da82a14058b456c"),
  "question_type": "OFFICE",
  "question_content": "在word中插入艺术字后，通过绘图工具可以进行（）操作。",
  "question_score": "4",
  "question_choose": [
    "删除背景",
    "艺术字样式",
    "文本",
    "排列"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:53:31",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(74)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea9920da82a17058b456e"),
  "question_type": "OFFICE",
  "question_content": "在word中，“文档视图”方式有哪些（）。",
  "question_score": "4",
  "question_choose": [
    "页面视图",
    "阅读版式视图",
    "web版式视图",
    "大纲视图",
    "草稿"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:54:10",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(75)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea9ba0da82ae1058b456e"),
  "question_type": "OFFICE",
  "question_content": "插入图片后，可以通过出现的“图片工具”功能区对图片进行哪些操作进行美化设置（）。",
  "question_score": "4",
  "question_choose": [
    "删除背景",
    "艺术效果",
    "图片样式",
    "裁剪"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:54:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(76)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ea9e20da82ad5058b456a"),
  "question_type": "OFFICE",
  "question_content": "在word2010中，可以进行哪些插入（）元素。",
  "question_score": "4",
  "question_choose": [
    "图片",
    "剪贴画",
    "形状",
    "屏幕截图",
    "页眉和页脚",
    "艺术字"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:55:30",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(77)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaa000da82adf058b456a"),
  "question_type": "OFFICE",
  "question_content": "在word2010中，插入表格后可通过出现的“表格工具”选项卡中的“设计”、“布局”可以进行哪些操作（）。",
  "question_score": "4",
  "question_choose": [
    "表格样式",
    "边框和底纹",
    "删除和插入行列",
    "表格内容的对齐方式 "
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:56:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(78)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaa190da82a18058b456a"),
  "question_type": "OFFICE",
  "question_content": "“开始”功能区的“字体”组可以对文本进行哪些操作设置（）。",
  "question_score": "4",
  "question_choose": [
    "字体",
    "字号",
    "消除格式",
    "样式"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:56:25",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(79)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaa830da82a17058b456f"),
  "question_type": "OFFICE",
  "question_content": "在word2010的“页面设置”中，可以设置的内容有（）。",
  "question_score": "4",
  "question_choose": [
    "打印份数",
    "打印的页数",
    "打印的纸张方向",
    "页边距"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-03 22:58:11",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(80)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaaa50da82ae0058b456a"),
  "question_type": "OFFICE",
  "question_content": "Excel2010“文件”按钮中的“信息”有哪些（）内容。",
  "question_score": "4",
  "question_choose": [
    "权限",
    "检查问题",
    "管理版本 ",
    "帮助"
  ],
  "question_answer": [
    "A",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:58:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(81)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaabd0da82a19058b456b"),
  "question_type": "OFFICE",
  "question_content": "在Excel2010的打印设置中，可以设置打印的是( )。",
  "question_score": "4",
  "question_choose": [
    "打印活动工作表",
    "打印整个工作薄 ",
    "打印单元格",
    "打印选定区域 "
  ],
  "question_answer": [
    "A",
    "B"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:59:09",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(82)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaadd0da82adf058b456b"),
  "question_type": "OFFICE",
  "question_content": "在Excel2010中，工作簿视图方式有哪些（）。 ",
  "question_score": "4",
  "question_choose": [
    "普通",
    "页面布局",
    "分页预览",
    "自定义视图",
    "全屏显示"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 22:59:41",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(83)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaafd0da82a15058b456d"),
  "question_type": "OFFICE",
  "question_content": "excel的三要素是（）。",
  "question_score": "4",
  "question_choose": [
    "工作薄",
    "工作表 ",
    "单元格",
    "数字"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:00:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(84)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eab2a0da82a18058b456b"),
  "question_type": "OFFICE",
  "question_content": "Excel2010的“页面布局”功能区可以对页面进行（）设置。",
  "question_score": "4",
  "question_choose": [
    "页边距",
    "纸张方向、大小",
    "打印区域",
    "打印标题"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:00:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(85)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eab4b0da82a1a058b456e"),
  "question_type": "OFFICE",
  "question_content": "在“幻灯片放映”选项卡中，可以进行的操作有（）。",
  "question_score": "4",
  "question_choose": [
    "选择幻灯片的放映方式",
    "设置幻灯片的放映方式",
    "设置幻灯片放映时的分辨率",
    "设置幻灯片的背景样式"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:01:31",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(86)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eab6b0da82a16058b456d"),
  "question_type": "OFFICE",
  "question_content": "在进行幻灯片动画设置时，可以设置的动画类型有（）。",
  "question_score": "4",
  "question_choose": [
    "进入",
    "动作路径 ",
    "强调",
    "退出"
  ],
  "question_answer": [
    "A",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:02:03",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(87)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eab8a0da82a14058b456d"),
  "question_type": "OFFICE",
  "question_content": "在“切换”选项卡中，可以进行的操作有（）。",
  "question_score": "4",
  "question_choose": [
    "设置幻灯片的切换效果",
    "设置幻灯片的换片方式",
    "设置幻灯片的版式",
    "设置幻灯片切换效果的持续时间"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:02:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(88)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaba80da82a17058b4570"),
  "question_type": "OFFICE",
  "question_content": "下列属于“设计”选项卡工具命令的是（）。 ",
  "question_score": "4",
  "question_choose": [
    "动画 ",
    "页面设置、幻灯片方向",
    "主题样式、主题颜色、主题字体、主题效果",
    "背景样式"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:03:04",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(89)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eabc50da82ad5058b456b"),
  "question_type": "OFFICE",
  "question_content": "下列属于“插入”选项卡工具命令的是（）。",
  "question_score": "4",
  "question_choose": [
    "表格、公式、符号",
    "视频、音频",
    "图片、剪贴画、形状",
    "图表、文本框、艺术字"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:03:33",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(90)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eabe70da82a15058b456e"),
  "question_type": "OFFICE",
  "question_content": "PowerPoint 2010的功能区由（）组成。 ",
  "question_score": "4",
  "question_choose": [
    "菜单栏",
    "快速访问工具栏",
    "选项卡",
    "工具组"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:04:07",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(91)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eac040da82ad7058b456b"),
  "question_type": "OFFICE",
  "question_content": "在“视图”选项卡中，可以进行的操作有（）。",
  "question_score": "4",
  "question_choose": [
    "选择演示文稿视图的模式",
    "设置显示比例",
    "更改母版视图的设计和版式",
    "显示标尺、网格线和参考线"
  ],
  "question_answer": [
    "A",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:04:36",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(92)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eac1d0da82a1a058b456f"),
  "question_type": "OFFICE",
  "question_content": "PowerPoint 2010的操作界面由（）组成。",
  "question_score": "4",
  "question_choose": [
    "显示区",
    "状态区",
    "工作区",
    "功能区"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:05:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(93)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eac440da82ad6058b456c"),
  "question_type": "OFFICE",
  "question_content": "下列网址书写格式正确的是（ ）",
  "question_score": "4",
  "question_choose": [
    "BB@com",
    "http://www.bb.com",
    "news.163.com",
    "www.bb.com"
  ],
  "question_answer": [
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:05:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(94)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eac5e0da82a16058b456e"),
  "question_type": "OFFICE",
  "question_content": "从地理范围划分标准可以把各种网络类型划分为( )种。",
  "question_score": "4",
  "question_choose": [
    "局域网",
    "广域网",
    "校园网",
    "城域网"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:06:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(95)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ead0a0da82a19058b456c"),
  "question_type": "OFFICE",
  "question_content": "Excel的自动填充功能，可自动填充( )。",
  "question_score": "4",
  "question_choose": [
    "数字",
    "公式",
    "日期",
    "文本 "
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:08:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(96)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ead280da82a15058b456f"),
  "question_type": "OFFICE",
  "question_content": "在Excel 2003中\"数据排序\"的\"选项\"对话框内容包括( )。",
  "question_score": "4",
  "question_choose": [
    "区分大小写",
    "排序方向",
    "排序方法",
    "排序次序"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:09:28",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(97)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ead510da82a18058b456c"),
  "question_type": "OFFICE",
  "question_content": "在EXCEL中，显示或隐藏工具栏的操作是( )。",
  "question_score": "4",
  "question_choose": [
    "迅速隐藏工具栏可用鼠标右键击此工具栏",
    "鼠标右键单击任意工具栏，然后在快捷菜单中单击需要显示或隐藏的工具栏",
    "隐藏\"浮动工具栏\"，可单击它的关闭按钮",
    "没有列在快捷菜单中的工具栏必须通过\"工具\"菜单的\"自定义\"命令来添加"
  ],
  "question_answer": [
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:10:09",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(98)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ead750da82a13058b456b"),
  "question_type": "OFFICE",
  "question_content": "在Excel单元格中输入的日期或时间正确的有(  )。",
  "question_score": "4",
  "question_choose": [
    "98-9-8",
    "12:00a",
    "6-Jun",
    "23:59"
  ],
  "question_answer": [
    "A",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:10:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(99)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ead960da82ad6058b456d"),
  "question_type": "OFFICE",
  "question_content": "Excel 2003窗口的编辑栏中的名称框，可显示( )。",
  "question_score": "4",
  "question_choose": [
    "活动单元格区域的地址",
    "活动单元格中的公式 ",
    "活动单元格中的数据",
    "活动单元格的名称"
  ],
  "question_answer": [
    "A",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:11:18",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(100)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eadb40da82a14058b456e"),
  "question_type": "OFFICE",
  "question_content": "在Word 2003中，可改变文档类型的操作有( )。",
  "question_score": "4",
  "question_choose": [
    "编辑新文档，然后选择\"文件\"菜单下的\"保存\"命令",
    "编辑新文档，然后选择\"文件\"菜单下的\"另存为\"命令",
    "编辑原有文档，然后选择\"文件\"菜单下的\"保存\"命令",
    "编辑原有文档，然后选择\"文件\"菜单下的\"另存为\"命令"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:11:48",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(101)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eadd70da82a17058b4571"),
  "question_type": "OFFICE",
  "question_content": "在Word中，用工具栏创建表格时，所包括的步骤有( )。",
  "question_score": "4",
  "question_choose": [
    "鼠标单击工具栏中的插入表格按钮，然后拖动鼠标选择要求的行数列数 ",
    "把插入点置于想插入表格的地方",
    "当显示的格子达到要求的行列数，释放鼠标键",
    "拖动鼠标到插入点"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:12:23",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(102)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eadf60da82ae1058b456f"),
  "question_type": "OFFICE",
  "question_content": "在Word编辑中，当用鼠标单击常用工具栏中的\"打印\"按钮时，不能完成的功能是( )",
  "question_score": "4",
  "question_choose": [
    "打印当前页",
    "打印当前页及其以后各页",
    "打印指定的页码",
    "打印文档全部"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-03 23:12:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(103)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae350da82a18058b456d"),
  "question_type": "OFFICE",
  "question_content": "Word2010的屏幕截图功能可以将任何最小化后收藏到任务栏的程序屏幕视 图等插入到文档中",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:13:57",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(104)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae4e0da82a13058b456c"),
  "question_type": "OFFICE",
  "question_content": "Word2010在文字段落样式的基础上新增了图片样式，可自定义图片样式并列 入到图片样式库中",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:14:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(106)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae5b0da82a1a058b4570"),
  "question_type": "OFFICE",
  "question_content": "WORD中不但提供了对文档的编辑保护，还可以设置对节分隔的区域内容进行 编辑限制和保护。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:14:35",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(107)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae7c0da82ad6058b456e"),
  "question_type": "OFFICE",
  "question_content": "打印时，在Word2010中插入的批注将与文档内容一起被打印出来，无法隐 藏。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:15:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(110)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae870da82a12058b456a"),
  "question_type": "OFFICE",
  "question_content": "分页符、分节符等编辑标记只能在草稿视图中查看",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:15:19",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(111)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eae900da82ae0058b456b"),
  "question_type": "OFFICE",
  "question_content": "拒绝修订的功能等同于撤销操作。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:15:28",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(112)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaeaa0da82ae1058b4570"),
  "question_type": "OFFICE",
  "question_content": "可以通过插入域代码的方法在文档中插入页码，具体方法是先输入花括号 “{”、再输入“page”、最后输入花括号“}”即可。选中域代码后按下“Shift”+“F9”，即可显示为当前页的页码。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:15:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(113)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaeb60da82a19058b456d"),
  "question_type": "OFFICE",
  "question_content": "如果删除了某个分节符，其前面的文字将合并到后面的节中，并且采用后者 的格式设置。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:16:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(114)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaec10da82adf058b456c"),
  "question_type": "OFFICE",
  "question_content": "如果要在更新域时保留原格式，只要将域代码中“\\*MERGEFORMAT”删除即 可。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:16:17",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(115)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaecb0da82a15058b4570"),
  "question_type": "OFFICE",
  "question_content": "如需对某个样式进行修改，可点击插入选项卡中的“更改样式”按钮",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:16:27",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(116)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaed80da82ad7058b456d"),
  "question_type": "OFFICE",
  "question_content": "如需使用导航窗格对文档进行标题导航，必须预先为标题文字设定大纲级 别。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:16:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(117)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaee40da82a13058b456d"),
  "question_type": "OFFICE",
  "question_content": "书签名必须以字母、数字或者汉字开头，不能有空格，可以有下划线字符来 分隔文字。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:16:52",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(118)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaeed0da82a16058b4570"),
  "question_type": "OFFICE",
  "question_content": "位于每节或者文档结尾，用于对文档某些特定字符、专有名词或术语进行注 解的注释，就是脚注",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:17:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(119)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaef60da82a1b058b456b"),
  "question_type": "OFFICE",
  "question_content": "文档的任何位置都可以通过运用TC域标记为目录项后建立目录。 ",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:17:10",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(120)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf020da82ad6058b456f"),
  "question_type": "OFFICE",
  "question_content": "文档右侧的批注框只用于显示批注。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:17:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(121)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf0e0da82a14058b456f"),
  "question_type": "OFFICE",
  "question_content": "样式的优先级可以在新建样式时自行设置 ",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:17:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(122)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf170da82a17058b4572"),
  "question_type": "OFFICE",
  "question_content": "域就像一段程序代码，文档中显示的内容是域代码运行的结果。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:17:43",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(123)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf220da82ae0058b456c"),
  "question_type": "OFFICE",
  "question_content": "在“根据格式设置创建新样式”对话框中可以新建表格样式，但表格样式在 “样式”任务窗格中不显示",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:17:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(124)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf2c0da82ae1058b4571"),
  "question_type": "OFFICE",
  "question_content": "在审阅时，对于文档中的所有修订标记只能全部接受或全部拒绝。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:18:04",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(125)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf370da82a19058b456e"),
  "question_type": "OFFICE",
  "question_content": "在文档中点击构建基块库中已有的文档部件，会出现构建基块框架",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:18:15",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(126)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf400da82ad5058b456c"),
  "question_type": "OFFICE",
  "question_content": "COUNT函数用于计算区域中单元格个数。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:18:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(127)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf4d0da82adf058b456d"),
  "question_type": "OFFICE",
  "question_content": "Excel2010中的“兼容性函数”实际上已经有新函数替换。 ",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:18:37",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(128)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf5a0da82a18058b456e"),
  "question_type": "OFFICE",
  "question_content": "Excel的同一个数组常量中不可以使用不同类型的值。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:18:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(129)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf6a0da82ad7058b456e"),
  "question_type": "OFFICE",
  "question_content": "Excel使用的是从公元0年开始的日期系统。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:19:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(130)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf730da82a1a058b4571"),
  "question_type": "OFFICE",
  "question_content": "Excel中Rand函数在工作表计算一次结果后就固定下来。 ",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:19:15",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(131)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf7d0da82a13058b456e"),
  "question_type": "OFFICE",
  "question_content": "Excel中的数据库函数的参数个数均为4个。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:19:25",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(132)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf860da82a16058b4571"),
  "question_type": "OFFICE",
  "question_content": "Excel中的数据库函数都以字母D开头。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:19:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(133)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf940da82ad6058b4570"),
  "question_type": "OFFICE",
  "question_content": "Excel中使用分类汇总，必须先对数据区域进行排序。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:19:48",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(134)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaf9e0da82a12058b456b"),
  "question_type": "OFFICE",
  "question_content": "Excel中数组常量中的值可以是常量和公式。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:19:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(135)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafad0da82a17058b4573"),
  "question_type": "OFFICE",
  "question_content": "Excel中数组区域的单元格可以单独编辑。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:20:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(136)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafc70da82a19058b456f"),
  "question_type": "OFFICE",
  "question_content": "PowerPoint中不但提供了对文稿的编辑保护，还可以设置对节分隔的区域内 容进行编辑限制和保护。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:20:39",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(137)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafd10da82ad5058b456d"),
  "question_type": "OFFICE",
  "question_content": "当在一张幻灯片中将某文本行降级时，使该行缩进一个幻灯片层。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:20:49",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(138)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafda0da82a15058b4571"),
  "question_type": "OFFICE",
  "question_content": "可以改变单个幻灯片背景的图案和字体。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:20:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(139)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafe50da82adf058b456e"),
  "question_type": "OFFICE",
  "question_content": "演示文稿的背景色最好采用统一的颜色。 ",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:21:09",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(140)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafee0da82a18058b456f"),
  "question_type": "OFFICE",
  "question_content": "在PowerPoint中，旋转工具能旋转文本和图形对象。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:21:18",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(141)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eaff60da82a13058b456f"),
  "question_type": "OFFICE",
  "question_content": "在幻灯片母版设置中，可以起到统一标题内容作用。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:21:26",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(142)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eafff0da82a16058b4572"),
  "question_type": "OFFICE",
  "question_content": "在幻灯片母版中进行设置，可以起到统一整个幻灯片的风格的作用。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:21:35",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(143)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb00a0da82a14058b4570"),
  "question_type": "OFFICE",
  "question_content": "在幻灯片中，超链接的颜色设置是不能改变的。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:21:46",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(144)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb0290da82ad6058b4571"),
  "question_type": "OFFICE",
  "question_content": "“文件”下拉菜单底部所显示的文件名是正在使用的文件名。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:22:17",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(145)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb03b0da82a12058b456c"),
  "question_type": "OFFICE",
  "question_content": "在Word中，当前正在编辑文档的文档名显示在标题栏。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:22:35",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(146)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb0490da82a17058b4574"),
  "question_type": "OFFICE",
  "question_content": "用户控制各种工具按钮是否显示的命令在视图菜单中。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:22:49",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(147)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb0560da82a19058b4570"),
  "question_type": "OFFICE",
  "question_content": "Word格式栏上的B、I、U，代表字符的斜体、下划线标记 、粗体。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-03 23:23:02",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(148)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb0620da82ad5058b456e"),
  "question_type": "OFFICE",
  "question_content": "Word中导入图片分为两种从文件导入和从剪贴板导入。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:23:14",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(149)
});
db.getCollection("question").insert({
  "_id": ObjectId("551eb07d0da82adf058b456f"),
  "question_type": "OFFICE",
  "question_content": "Word中单击垂直滚动条的▼按钮，可使屏幕下滚一屏",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-03 23:23:41",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(150)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff6680da82a4e4e203127"),
  "question_type": "网络安全知识",
  "question_content": "大学生小吴在网上以一个知名作家的名义写博客,但事先没有征得该作家 同意。小吴应当承担()",
  "question_score": "2",
  "question_choose": [
    "侵权责任",
    "违约责任",
    "刑事责任",
    "行政责任"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:34:16",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(151)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff6ac0da82a654e203127"),
  "question_type": "网络安全知识",
  "question_content": "绿色上网软件可以安装在家庭和学校的()",
  "question_score": "2",
  "question_choose": [
    "电视机上",
    "个人电脑上",
    "电话上",
    "幻灯机上"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:35:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(152)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff6e60da82a524e203127"),
  "question_type": "网络安全知识",
  "question_content": "以下有关秘钥的表述,错误的是()",
  "question_score": "2",
  "question_choose": [
    "密钥是一种硬件",
    "密钥分为对称密钥与非对称密钥",
    "对称密钥加密是指信息发送方和接收方使用同一个密钥去加密和解密数据",
    "非对称密钥加密需要使用不同的密钥来分别完成加密和解密操作"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:36:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(153)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7060da82a5c4e203127"),
  "question_type": "网络安全知识",
  "question_content": "浏览网页时,遇到的最常见的网络广告形式是()",
  "question_score": "2",
  "question_choose": [
    "飘移广告",
    "旗帜广告",
    "竞价广告",
    "邮件列表"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:36:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(154)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7200da82a5f4e203127"),
  "question_type": "网络安全知识",
  "question_content": "下列选项中,不属于个人隐私信息的是()",
  "question_score": "2",
  "question_choose": [
    "恋爱经历",
    "工作单位",
    "日记",
    "身体健康状况"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:37:20",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(155)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff73e0da82a514e203127"),
  "question_type": "网络安全知识",
  "question_content": "根据《互联网上网服务营业场所管理条例》,网吧每日营业时间限于()",
  "question_score": "2",
  "question_choose": [
    "6 时至 24 时",
    "7 时至 24 时",
    "8 时至 24 时",
    "9 时至 24 时"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:37:50",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(156)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff75e0da82a614e203127"),
  "question_type": "网络安全知识",
  "question_content": "李某将同学张某的小说擅自发表在网络上,该行为()",
  "question_score": "2",
  "question_choose": [
    "不影响张某在出版社出版该小说,因此合法",
    "侵犯了张某的著作权",
    "并未给张某造成直接财产损失,因此合法",
    "扩大了张某的知名度,应该鼓励"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:38:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(157)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7770da82a5b4e203127"),
  "question_type": "网络安全知识",
  "question_content": "在设定网上交易流程方面,一个好的电子商务网站必须做到() ",
  "question_score": "2",
  "question_choose": [
    "对客户有所保留",
    "不论购物流程在网站的内部操作多么复杂,其面对用户的界面必须是简单和操作方便的 ",
    "使客户购物操作繁复但安全",
    "让客户感到在网上购物与在现实世界中的购物流程是有区别的"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:38:47",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(158)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7900da82a524e203128"),
  "question_type": "网络安全知识",
  "question_content": "我国出现第一例计算机病毒的时间是()",
  "question_score": "2",
  "question_choose": [
    "1968 年",
    "1978 年",
    "1988 年",
    "1998 年"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:39:12",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(159)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7a60da82a604e203127"),
  "question_type": "网络安全知识",
  "question_content": "表演者对其表演享有许可他人通过网络向公众传播其表演并获得报酬的 权利。该权利的保护期限是()",
  "question_score": "2",
  "question_choose": [
    "50 年",
    "60 年",
    "30 年",
    "没有期限"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:39:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(160)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7bf0da82a644e203127"),
  "question_type": "网络安全知识",
  "question_content": "国际电信联盟将每年的 5 月 17 日确立为世界电信日。2014 年已经是第 46 届,其世界电信日的主题为()",
  "question_score": "2",
  "question_choose": [
    "“让全球网络更安全”",
    "“信息通信技术:实现可持续发展的途径”",
    "“行动起来创建公平的信息社会” ",
    "“宽带促进可持续发展”"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:39:59",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(161)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7d40da82a654e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列有关隐私权的表述,错误的是()",
  "question_score": "2",
  "question_choose": [
    "网络时代,隐私权的保护受到较大冲击",
    "虽然网络世界不同于现实世界,但也需要保护个人隐私 ",
    "由于网络是虚拟世界,所以在网上不需要保护个人的隐私",
    "可以借助法律来保护网络隐私权"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:40:20",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(162)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff7ec0da82a5d4e203127"),
  "question_type": "网络安全知识",
  "question_content": "在原告起诉被告抢注域名案件中,以下不能判定被告对其域名的注册、使用具有恶意的是()",
  "question_score": "2",
  "question_choose": [
    "为商业目的将他人驰名商标注册为域名的 ",
    "为商业目的注册与原告的域名近似的域名,故意造成与原告网站的混淆, 误导网络用户访问其网站的 ",
    "曾要约高价出售其域名获取不正当利益的 ",
    "注册域名后自己准备使用的 "
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:40:44",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(163)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff8040da82a514e203128"),
  "question_type": "网络安全知识",
  "question_content": "根据 《治安管理处罚法》 的规定,煽动民族仇恨、 民族歧视,或者在出版物、 计算机信息网络中刊载民族歧视、侮辱内容的,处 10 日以上 15 日以下拘留,可以 并处()以下罚款。",
  "question_score": "2",
  "question_choose": [
    "500 元",
    "1000 元",
    "3000 元",
    "5000 元"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:41:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(164)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff8200da82a4d4e203127"),
  "question_type": "网络安全知识",
  "question_content": "关于网络游戏的经营规则,下列说法错误的是()",
  "question_score": "2",
  "question_choose": [
    "网络游戏运营企业应当要求网络游戏用户使用有效身份证件进行实名注册",
    "网络游戏运营企业终止运营网络游戏应当提前 60 日予以公告",
    "我国对国产网络游戏实行备案制",
    "我国对进口网络游戏实行备案制"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:41:36",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(165)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff83e0da82a564e203127"),
  "question_type": "网络安全知识",
  "question_content": "“三网合一”的“三网”是指()",
  "question_score": "4",
  "question_choose": [
    "电信网",
    "有线电视网",
    "计算机网",
    "交换网"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:42:06",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(166)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff8580da82a614e203128"),
  "question_type": "网络安全知识",
  "question_content": "未经权利人许可,不得将其作品或录音制品上传到网上和在网上传播。 这里 的权利人包括()",
  "question_score": "4",
  "question_choose": [
    "版权所有人",
    "表演者",
    "录音制品制作者",
    "网站管理者"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:42:32",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(167)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff8770da82a634e203127"),
  "question_type": "网络安全知识",
  "question_content": "下列有关局域网的说法,正确的是() ",
  "question_score": "4",
  "question_choose": [
    "局域网是一种通信网 ",
    "连入局域网的数据通信设备只包括计算机",
    "局域网覆盖有限的地理范围",
    "局域网具有高数据传输率"
  ],
  "question_answer": [
    "A",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:43:03",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(168)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ff9fe0da82a624e203127"),
  "question_type": "网络安全知识",
  "question_content": "用户可设置的文件的属性有()",
  "question_score": "4",
  "question_choose": [
    "只写",
    "隐藏",
    "存档",
    "只读"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:49:34",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(169)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffa170da82a5d4e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列属于网络服务提供者的是()",
  "question_score": "4",
  "question_choose": [
    "网络接入服务提供者",
    "网络空间提供者",
    "搜索引擎服务提供者",
    "传输通道服务提供者"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:49:59",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(170)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffa2d0da82a4e4e203128"),
  "question_type": "网络安全知识",
  "question_content": "多媒体计算机可以处理的信息类型有()",
  "question_score": "4",
  "question_choose": [
    "文字",
    "图形",
    "数字",
    "音频视频"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:50:21",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(171)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffa480da82a5e4e203127"),
  "question_type": "网络安全知识",
  "question_content": "乳业巨头甲公司为了打击竞争对手乙公司,雇佣公关公司在网络上大肆宣传虚假事实,称乙公司生产的牛奶中含有违禁添加剂,造成乙公司巨大损失。对此, 以下观点正确的是()",
  "question_score": "4",
  "question_choose": [
    "该行为可能涉嫌犯罪",
    "该行为属于不正当竞争行为",
    "针对这一犯罪只处罚个人",
    "公关公司直接责任人员无需承担刑事责任"
  ],
  "question_answer": [
    "A",
    "B"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:50:48",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(172)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffac30da82a564e203128"),
  "question_type": "网络安全知识",
  "question_content": "国家机关及其工作人员在对履行职责中知晓的公民个人电子信息,应当()",
  "question_score": "4",
  "question_choose": [
    "予以封存",
    "予以保密",
    "不得泄露、篡改、毁损",
    "可以提供给第三人"
  ],
  "question_answer": [
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:52:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(173)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffae00da82a4c4e203128"),
  "question_type": "网络安全知识",
  "question_content": "网络服务提供者收集和使用个人信息应当符合的条件有()",
  "question_score": "4",
  "question_choose": [
    "告知权利人",
    "明示收集、使用信息的目的、方式和范围",
    "经被收集者同意",
    "经监督管理机构许可或备案"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:53:20",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(174)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffaf90da82a4b4e203127"),
  "question_type": "网络安全知识",
  "question_content": "按照刑法学的分类,网络犯罪可以被分为纯正的计算机犯罪和不纯正的计 算机犯罪。纯正的计算机犯罪指针对计算机信息系统本身的犯罪;不纯正的计算 机犯罪是指将计算机信息系统作为实施传统犯罪的犯罪工具的行为。 下列行为中, 属于不纯正的计算机犯罪的有()",
  "question_score": "4",
  "question_choose": [
    "盗卖他人的游戏“武器装备”,致他人损失巨大 ",
    "侵入高校网站大批量更改学历信息,从而为他人办理假学历获利",
    "在网上大肆散播邪教的教义,发展邪教组织 ",
    "传播木马软件,致使大量网站瘫痪"
  ],
  "question_answer": [
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:53:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(175)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb0f0da82a7954203127"),
  "question_type": "网络安全知识",
  "question_content": "下列选项中 , 构成网络信息违法犯罪行为 ,公民和其他组织有权向有关主 管部门举报、控告的是()",
  "question_score": "4",
  "question_choose": [
    "窃取公民个人的电子信息",
    "出售公民的个人电子信息",
    "为配合公安机关办案需要,披露犯罪嫌疑人的电子信息",
    "将公民个人电子信息提供给第三人"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:54:07",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(176)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb310da82a5a4e203127"),
  "question_type": "网络安全知识",
  "question_content": "对于网络用户利用网络服务实施侵权行为的,以下表述正确的是()",
  "question_score": "4",
  "question_choose": [
    "被侵权人有权通知网络服务提供者采取删除、屏蔽、断开链接等必要措施",
    "网络服务提供者接到通知后应采取必要措施",
    "网络服务提供者接到通知后未及时采取必要措施的,应承担法律责任",
    "网络服务提供者只是提供平台服务,不承担法律责任"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:54:41",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(177)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb470da82a7854203127"),
  "question_type": "网络安全知识",
  "question_content": "网络谣言有可能侵犯他人的()",
  "question_score": "4",
  "question_choose": [
    "知情权",
    "公平竞争权",
    "财产权",
    "人身权"
  ],
  "question_answer": [
    "A",
    "B"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:55:03",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(178)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb5e0da82a504e203127"),
  "question_type": "网络安全知识",
  "question_content": "以下对电子邮件的表述,正确的是()",
  "question_score": "4",
  "question_choose": [
    "通讯双方必须都在场",
    "邮件比人工邮件传送迅速、可靠且范围更广",
    "邮件可以同时发送给多个用户",
    "电子邮件中可以发送文字、图像、语音等信息"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 22:55:26",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(179)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb820da82a584e203127"),
  "question_type": "网络安全知识",
  "question_content": "在网络纠纷案件中,网络游戏客户的号码被盗了,应采取的合理措施是()",
  "question_score": "2",
  "question_choose": [
    "向网站客服投诉请求解决",
    "拨打 120",
    "拨打 119",
    "找网络黑客再盗回来"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:56:02",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(180)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffb970da82a5e4e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列情形中,不构成侵权的是()",
  "question_score": "2",
  "question_choose": [
    "未经他人同意擅自在网络上公布他人隐私",
    "下载网络小说供离线阅读",
    "伪造、篡改个人信息",
    "非法侵入他人电脑窃取资料"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:56:23",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(181)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffbca0da82a7954203128"),
  "question_type": "网络安全知识",
  "question_content": "网络蠕虫一般指利用计算机系统漏洞、通过互联网传播扩散的一类病毒程序。为了防止受 到网络蠕虫的侵害,应当注意对()进行升级更新。",
  "question_score": "2",
  "question_choose": [
    "计算机操作系统",
    "计算机硬件",
    "文字处理软件",
    "视频播放软件"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:57:14",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(182)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffbef0da82a624e203128"),
  "question_type": "网络安全知识",
  "question_content": "甲冒充新闻工作者,以在新闻网站上发布隐私为要挟,向乙、丙、丁等人索取了数十万财物。 甲的行为应当认定为()",
  "question_score": "2",
  "question_choose": [
    "敲诈勒索罪",
    "诈骗罪",
    "招摇撞骗罪",
    "寻衅滋事罪"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:57:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(183)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc050da82a604e203128"),
  "question_type": "网络安全知识",
  "question_content": "某公司未经授权,擅自在其经营的网站提供某电影供在线观看,该公司侵犯了制作该电影的 电影公司的()",
  "question_score": "2",
  "question_choose": [
    "专利权",
    "商标权",
    "信息网络传播权",
    "发明权"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:58:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(184)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc1c0da82a534e203127"),
  "question_type": "网络安全知识",
  "question_content": "以下关于非对称密钥加密的表述,正确的是()",
  "question_score": "2",
  "question_choose": [
    "加密方和解密方使用的是不同的算法",
    "加密密钥和解密密钥是不同的",
    "加密密钥和解密密钥匙相同的",
    "加密密钥和解密密钥没有任何关系"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:58:36",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(185)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc340da82a634e203128"),
  "question_type": "网络安全知识",
  "question_content": "国内第一家网上银行是()",
  "question_score": "2",
  "question_choose": [
    "招商银行网上银行",
    "中国农业银行网上银行",
    "中国银行网上银行",
    "中国建设银行网上银行"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:59:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(186)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc4a0da82a5f4e203128"),
  "question_type": "网络安全知识",
  "question_content": "采用一种或多种传播手段,使大量主机感染病毒,从而在控制者和被感染主机之间形成一个 可一对多控制的网络。该网络通常称为()",
  "question_score": "2",
  "question_choose": [
    "钓鱼网络",
    "游戏网络",
    "僵尸网络",
    "互联网络"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:59:22",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(187)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc5e0da82a654e203129"),
  "question_type": "网络安全知识",
  "question_content": "以下关于宏病毒的表述,正确的是()",
  "question_score": "2",
  "question_choose": [
    "宏病毒主要感染可执行文件",
    "宏病毒仅向办公自动化程序编制的文档进行传染",
    "宏病毒主要感染 U 盘、硬盘的引导扇区或主引导扇区",
    "CIH 病毒属于宏病毒"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 22:59:42",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(188)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc7c0da82a5c4e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列程序能修改高级语言源程序的是()",
  "question_score": "2",
  "question_choose": [
    "调试程序",
    "解释程序",
    "编译程序",
    "编辑程序"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:00:12",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(189)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffc910da82a644e203128"),
  "question_type": "网络安全知识",
  "question_content": "互联网上网服务营业场所不得允许未成年人进入,经营者应当在显著位置设置未成年人 禁入标志;对难以判明是否已成年的,应当要求其出示()",
  "question_score": "2",
  "question_choose": [
    "学生证",
    "身份证",
    "工作证",
    "借书证"
  ],
  "question_answer": [
    "B"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:00:33",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(190)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffca70da82a514e203129"),
  "question_type": "网络安全知识",
  "question_content": "在网络环境下,权利管理信息专指以()出现的信息,它们被嵌在电子文档里,附加于作品的 每件复制品上或作品中向公众传播时显示出来。",
  "question_score": "2",
  "question_choose": [
    "数字化形式",
    "纸面化形式",
    "图像形式",
    "声音形式"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:00:55",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(191)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffcbd0da82a584e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列选项中,使用身份认证双因素法的是()",
  "question_score": "2",
  "question_choose": [
    "电话卡",
    "交通卡",
    "校园饭卡",
    "银行卡"
  ],
  "question_answer": [
    "D"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:01:17",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(192)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffcd40da82a5e4e203129"),
  "question_type": "网络安全知识",
  "question_content": "非法获取计算机信息系统数据、非法控制计算机信息系统罪的犯罪主体是年满()周岁并 具有刑事责任能力的自然人。",
  "question_score": "2",
  "question_choose": [
    "10.0",
    "14.0",
    "16.0",
    "18.0"
  ],
  "question_answer": [
    "C"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:01:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(193)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffce90da82a4f4e203128"),
  "question_type": "网络安全知识",
  "question_content": "下列关于密码安全的描述,正确的是()",
  "question_score": "4",
  "question_choose": [
    "容易被他人记住的密码不安全",
    "相对而言,密码越长越安全",
    "密码要定期更换",
    "密码中使用的字符种类越多越不容易被猜中"
  ],
  "question_answer": [
    "A",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:02:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(194)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd000da82a4a4e203127"),
  "question_type": "网络安全知识",
  "question_content": "甲创作并演唱了《两只麻雀》,乙公司擅自将该歌曲制成彩铃在网络上供免费下载。乙公 司侵犯了甲的()",
  "question_score": "2",
  "question_choose": [
    "信息网络传播权",
    "广播权",
    "表演者权",
    "汇编权"
  ],
  "question_answer": [
    "A"
  ],
  "type": "choose",
  "question_add_time": "2015-04-04 23:02:24",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(195)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd200da82a594e203127"),
  "question_type": "网络安全知识",
  "question_content": "下列不属于侵犯网络隐私权的情形有()",
  "question_score": "4",
  "question_choose": [
    "用户在注册邮箱的时候,要求填写其个人联系方式和真实姓名",
    "根据相关法律,在网络游戏进行注册的时候需要填写个人身份证号码以验证用户是否 为成年人",
    "张某想要开一家淘宝商店,淘宝要求商户注册的时候实名认证",
    "商家收集消费者的购物倾向,制定针对个别消费者的营销策略追求商业利益"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:02:56",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(196)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd400da82a7954203129"),
  "question_type": "网络安全知识",
  "question_content": "下列行为中,侵犯软件著作权的有()",
  "question_score": "4",
  "question_choose": [
    "使用著作权人已公开发行的软件的",
    "未经著作权人许可,修改、翻译其软件的",
    "故意避开或者破坏著作权人为保护其软件著作权而采取的技术措施的",
    "故意删除或者改变软件权利管理电子信息的"
  ],
  "question_answer": [
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:03:28",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(197)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd580da82a624e203129"),
  "question_type": "网络安全知识",
  "question_content": "下列表述中,不正确的有()",
  "question_score": "4",
  "question_choose": [
    "显示器和打印机都是输出设备",
    "显示器只能显示字符",
    "通常的彩色显示器都只有 7 种颜色",
    "打印机只能打印字符和表格"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:03:52",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(198)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd810da82a604e203129"),
  "question_type": "网络安全知识",
  "question_content": "通过信息网络提供他人作品,在下列情形中,可以不经著作权人许可、不向其支付报酬的是 ()",
  "question_score": "4",
  "question_choose": [
    "为介绍、评定某一作品或者说明某一问题,在向公众提供的作品中适当引用已经发表 的作品",
    "国家机关执行公务,在合理范围内向公众提供已经发表的作品",
    "向公众提供在公众集会上发表的讲话",
    "向公众提供在信息网络上已发表的关于政治、经济问题的时事性文章"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:04:33",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(199)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffd9d0da82a614e203129"),
  "question_type": "网络安全知识",
  "question_content": "网络服务提供者在业务活动中收集、使用公民个人电子信息,应当遵循的原则有()",
  "question_score": "4",
  "question_choose": [
    "合法原则",
    "正当原则",
    "必要原则",
    "公开原则"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:05:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(200)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffdb80da82a5f4e203129"),
  "question_type": "网络安全知识",
  "question_content": "可以作为身份认证依据的人的生物特征有()",
  "question_score": "4",
  "question_choose": [
    "指纹",
    "虹膜",
    "脸部",
    "掌纹"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:05:28",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(201)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffdd00da82a5a4e203128"),
  "question_type": "网络安全知识",
  "question_content": "以下属于计算机病毒防治策略的是()",
  "question_score": "4",
  "question_choose": [
    "防毒能力",
    "查毒能力",
    "解毒能力",
    "禁毒能力"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:05:52",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(202)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffde70da82a7854203128"),
  "question_type": "网络安全知识",
  "question_content": "要做好计算机信息系统安全保护工作,必须明确()",
  "question_score": "4",
  "question_choose": [
    "安全是一个过程,是动态的,没有一劳永逸安全措施,要警钟常鸣",
    "安全是个管理的概念,只有加强管理才能保障安全",
    "要不断根据计算机信息网络系统出现的新情况、新问题,加强安全管理",
    "安全是相对的,没有绝对的安全"
  ],
  "question_answer": [
    "A",
    "B",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:06:15",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(203)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe000da82a5d4e203129"),
  "question_type": "网络安全知识",
  "question_content": "国家机关及其工作人员在对履行职责中知晓的公民个人电子信息,应当()",
  "question_score": "4",
  "question_choose": [
    "予以封存",
    "予以保密",
    "不得泄露、篡改、毁损",
    "可以提供给第三人"
  ],
  "question_answer": [
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:06:40",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(204)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe140da82a564e203129"),
  "question_type": "网络安全知识",
  "question_content": "网络抄袭与剽窃是指单位或者个人剽窃使用网络及其他媒体上已经发表的文字、图片、 影音等资源用于非公益目的,即大段抄袭或者剽窃著作权人的作品,在网络上以自己的名义发 表、传播。这种行为侵犯了著作权人的()",
  "question_score": "4",
  "question_choose": [
    "署名权",
    "信息网络传播权",
    "获得报酬权",
    "肖像权"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:07:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(205)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe2b0da82a5e4e20312a"),
  "question_type": "网络安全知识",
  "question_content": "网络侵权和传统侵权的区别有()",
  "question_score": "4",
  "question_choose": [
    "网络侵权中的证据比传统侵权具有不稳定性",
    "网络侵权的主体比传统侵权具有隐秘性",
    "网络侵权造成的后果比传统侵权更易传播、扩散",
    "网络侵权比传统侵权的司法管辖更不好定位"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:07:23",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(206)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe410da82a534e203128"),
  "question_type": "网络安全知识",
  "question_content": "计算机病毒按传染方式分为()",
  "question_score": "4",
  "question_choose": [
    "良性病毒",
    "引导型病毒",
    "文件型病毒",
    "复合型病毒"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:07:45",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(207)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe580da82a4b4e203128"),
  "question_type": "网络安全知识",
  "question_content": "互联网增值服务主要以网络社区为基础平台,通过用户之间的沟通和互动,激发用户自我 表现和娱乐的需求,从而给个人用户提供各类通过付费才可获得的个性化增值服务和虚拟物 品消费服务。互联网增值服务主要包括()",
  "question_score": "4",
  "question_choose": [
    "会员特权",
    "网络虚拟形象",
    "个人空间装饰",
    "个人信息获取"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:08:08",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(208)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe760da82a5a4e203129"),
  "question_type": "网络安全知识",
  "question_content": "威胁网络安全的主要因素有()",
  "question_score": "4",
  "question_choose": [
    "自然灾害",
    "意外事故",
    "计算机犯罪",
    "“黑客”行为"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:08:38",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(209)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffe8d0da82a4b4e203129"),
  "question_type": "网络安全知识",
  "question_content": "根据我国《电信条例》的规定,电信业务分为()",
  "question_score": "4",
  "question_choose": [
    "基础电信业务",
    "增值电信业务",
    "营利电信业务",
    "非营利电信业务"
  ],
  "question_answer": [
    "A",
    "B"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:09:01",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(210)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffeac0da82a4e4e203129"),
  "question_type": "网络安全知识",
  "question_content": "计算机网络的资源共享功能包括()",
  "question_score": "4",
  "question_choose": [
    "安全共享",
    "硬件资源共享",
    "软件资源共享",
    "数据资源共享"
  ],
  "question_answer": [
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:09:32",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(211)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffec50da82a634e203129"),
  "question_type": "网络安全知识",
  "question_content": "有关电子商务的参与者,下列选项正确的是()",
  "question_score": "4",
  "question_choose": [
    "政府是市场经济活动的宏观调控者",
    "企业是是电子商务的主力军",
    "消费者是电子商务最终的服务对象",
    "电子商务的发展是政府、企业和消费者等各类主体协同努力的结果"
  ],
  "question_answer": [
    "A",
    "B",
    "C",
    "D"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:09:57",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(212)
});
db.getCollection("question").insert({
  "_id": ObjectId("551ffedc0da82a604e20312a"),
  "question_type": "网络安全知识",
  "question_content": "网络游戏虚拟货币交易服务企业应当遵守的规定有()",
  "question_score": "4",
  "question_choose": [
    "不得为未成年人提供交易服务",
    "不得为未经审查或者备案的网络游戏提供交易服务",
    "提供服务时,应保证用户使用有效身份证件进行注册",
    "接到利害关系人通知后,应当协助核实交易行为的合法性"
  ],
  "question_answer": [
    "A",
    "B",
    "C"
  ],
  "type": "multi_choose",
  "question_add_time": "2015-04-04 23:10:20",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(213)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff020da82a504e203128"),
  "question_type": "网络安全知识",
  "question_content": "访问控制不能阻止人们利用系统脆弱点以管理员身份获得对系统的访问并查看系统文件。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:10:58",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(214)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff150da82a584e203129"),
  "question_type": "网络安全知识",
  "question_content": "雇佣、组织、教唆或者帮助他人发布、转发网络信息侵害他人人身权益,被侵权人不得请 求行为人承担连带责任。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:11:17",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(215)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff220da82a5e4e20312b"),
  "question_type": "网络安全知识",
  "question_content": "确认电子签名的法律效力,关键在于解决两个问题:一是通过立法确认电子签名的合法性、 有效性;二是明确满足什么条件的电子签名才是合法的、有效的。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:11:30",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(216)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff2d0da82a654e20312a"),
  "question_type": "网络安全知识",
  "question_content": "利用互联网技术向近亲属发送诈骗信息,诈骗到数额较大的财物,即使近亲属谅解,也不能从 宽处理。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:11:41",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(217)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff3a0da82a4b4e20312a"),
  "question_type": "网络安全知识",
  "question_content": "为了防御网络监听,最常用的方法是信息加密。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:11:54",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(218)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff440da82a795420312a"),
  "question_type": "网络安全知识",
  "question_content": "互联网信息服务提供者发现其网站传输的信息明显属于宣扬封建迷信信息的,应当立即停 止传输,保存有关记录,并向国家有关机关报告。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:12:04",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(219)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff4e0da82a594e203128"),
  "question_type": "网络安全知识",
  "question_content": "互联网是通过网络适配器将各个网络互联起来。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:12:14",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(220)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff5c0da82a4a4e203128"),
  "question_type": "网络安全知识",
  "question_content": "欧盟早在 1995 年就在相关数据保护法律中提出了“被遗忘权”概念,任何公民可以在其个 人数据不再需要时提出删除要求。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:12:28",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(221)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff6a0da82a4c4e203129"),
  "question_type": "网络安全知识",
  "question_content": "薄弱点扫描本身并不会保护计算机系统,需在找出薄弱点后采取安全措施。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:12:42",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(222)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff730da82a524e203129"),
  "question_type": "网络安全知识",
  "question_content": "可能给电脑网络系统造成影响或者破坏的人只有黑客。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:12:51",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(223)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff7c0da82a4e4e20312a"),
  "question_type": "网络安全知识",
  "question_content": "网络侵权主体只能是自然人。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:13:00",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(224)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff890da82a614e20312a"),
  "question_type": "网络安全知识",
  "question_content": "《信息交换用汉字编码字符集基本集》国家标准规定:一个汉字用 4 个字节表示。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:13:13",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(225)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff950da82a5f4e20312a"),
  "question_type": "网络安全知识",
  "question_content": "个人电子邮箱不属于个人信息。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:13:25",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(226)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fff9d0da82a634e20312a"),
  "question_type": "网络安全知识",
  "question_content": "某网站为促进社会公共利益,在一定的范围内公开他人的病历资料,此行为受法律的保护。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(0),
  "question_add_time": "2015-04-04 23:13:33",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(227)
});
db.getCollection("question").insert({
  "_id": ObjectId("551fffa60da82a604e20312b"),
  "question_type": "网络安全知识",
  "question_content": "域名争议解决机构作出的裁决只涉及争议域名持有者信息的变更。",
  "question_score": "2",
  "type": "judge",
  "question_answer": NumberLong(1),
  "question_add_time": "2015-04-04 23:13:42",
  "question_add_user_id": "551d61470da82a5e55b5b0de",
  "question_add_user_name": "林星辰",
  "question_id": NumberLong(228)
});

/** role records **/
db.getCollection("role").insert({
  "_id": ObjectId("551022c4821541fa058b4567"),
  "role_name": "命题人",
  "role_right": [
    "act_add",
    "act_update",
    "answer_add",
    "answer_dele",
    "answer_stat",
    "control_center",
    "answer_question"
  ]
});
db.getCollection("role").insert({
  "_id": ObjectId("551021d2821541f60d8b4567"),
  "role_name": "管理员",
  "role_right": [
    "act_add",
    "act_update",
    "act_dele",
    "person_add",
    "person_dele",
    "person_info_update",
    "question_add",
    "question_dele",
    "question_update",
    "answer_add",
    "answer_dele",
    "answer_stat",
    "control_center",
    "answer_question",
    "ida_statis"
  ]
});
db.getCollection("role").insert({
  "_id": ObjectId("55113e2b821541b90f8b4567"),
  "role_name": "普通用户",
  "role_right": [
    "answer_question"
  ]
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ida.act",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ida.answer",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ida.question",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ida.role",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "ida.user",
  "name": "_id_"
});

/** user records **/
