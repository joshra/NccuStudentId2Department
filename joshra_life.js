var department_hash = {
  //文學院
  "101": "中文系",
  "103": "歷史系",
  "104": "哲學系",
  //教育學院
  "102": "教育系",
  //社科院
  "202": "政治系",
  "204": "社會系",
  "205": "財政系",
  "206": "公行系",
  "207": "地震系",
  "208": "經濟系",
  "209": "民族系",
  //國務院
  "203": "外交系",
  //商學院
  "301": "國貿系",
  "302": "金融系",
  "303": "會計系",
  "304": "統計系",
  "306": "資管系",
  "307": "財管系",
  "308": "風管系",
  //傳播學院
  "401": "新聞系",
  "402": "廣告系",
  "403": "廣電系",
  "404": "傳播學程",
  //外語學院
  "501": "英文系",
  "502": "阿語系",
  "504": "斯語系",
  "506": "日文系",
  "507": "韓文系",
  "508": "土語系",
  "509": "歐語學程",
  //法學院
  "601": "法律系",
  //理學院
  "701": "應數系",
  "702": "心理系",
  "703": "科科系",
}
var student_id = prompt("Please enter your student id e.g. 99307023:","");
var department_id = (student_id[0]=="1") ? student_id.substring(3,6) : student_id.substring(2,5);
var department_name = (department_hash.hasOwnProperty(department_id)) ? 
                    department_hash[department_id] : "不要問";
jQuery(document).ready(function(){
    jQuery("#ans").html(department_name);
});
