/*
var sid = prompt("Please enter your student id e.g. 101356510:","");
var year = sid.substring(0,1);
var key = "";
var sem ="";
    if(year=="1"){
        key=sid.substring(3,3+3);
    }
    else {
        key=sid.substring(2,2+3);
    }    
switch(key)
{
//文學院
case "101":
  sem="中文系";
  break;
case "103":
  sem="歷史系";
  break;    
case "104":
  sem="哲學系";
  break;
//教育學院
case "102":
  sem="教育系";
  break;
//社科院
case "202":
  sem="政治系";
  break;
case "204":
  sem="社會系";
  break;
case "205":
  sem="財政系";
  break;
case "206":
  sem="公行系";
  break;
case "207":
  sem="地震系";
  break;
case "208":
  sem="經濟系";
  break;
case "209":
  sem="民族系";
  break;
//國務院
case "203":
  sem="外交系";
  break;
//商學院
case "301":
  sem="國貿系";
  break;
case "302":
  sem="金融系";
  break;
case "303":
  sem="會計系";
  break;
case "304":
  sem="統計系";
  break;
case "306":
  sem="資管系";
  break;
case "307":
  sem="財管系";
  break;
case "308":
  sem="風管系";
  break;
//傳播學院
case "401":
  sem="新聞系";
  break;
case "402":
  sem="廣告系";
  break;
case "403":
  sem="廣電系";
  break;
case "404":
  sem="傳播學程";
  break;
//外語學院
case "501":
  sem="英文系";
  break;
case "502":
  sem="阿語系";
  break;
case "504":
  sem="斯語系";
  break;
case "506":
  sem="日文系";
  break;
case "507":
  sem="韓文系";
  break;
case "508":
  sem="土語系";
  break;
case "509":
  sem="歐語學程";
  break;
//法學院
case "601":
  sem="法律系";
  break;
//理學院
case "701":
  sem="應數系";
  break;
case "3702":
  sem="心理系";
  break;
case "703":
  sem="科科系";
  break;
default:
  sem ="不要問";
}

jQuery(document).ready(function(){
    jQuery("#ans").html(sem);
    //jQuery("#ans").html(key);
});
*/

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