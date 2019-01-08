// JavaScript Document
    var usrCloud = new UsrCloud();
    //定义回调
    var callback = {
        USR_onConnAck: USR_onConnAck,
        USR_onConnLost: USR_onConnLost,
    };
    //初始化
    usrCloud.Usr_Init("clouddata.usr.cn", 8080, 2, callback);
    /**
     * 登陆（云组态和云交换机共用）
     */
    function connect() {
        usrCloud.USR_Connect($("#account").val(), hex_md5($("#password").val()));
		        var param = {};
        param.account = $("#account").val();
        param.password = $("#password").val().MD5(32);
        apiHandler(apiUrl.login, param, function (result) {
            if (result.status === 0) {
                token = result.data.token;
                $("#info1").text('登录成功');
				$("#info4").text('');
				$("#info3").text('');
				if (token!="")
				getTimeperiod1();
				$("#box1").hide(0);
				$("#box2").show(boxTime);
				$("#boxsShowButton1").css("margin-left","0px");
				$("#boxsShowButton2").css("margin-left","13px");
            } else {
                alert('登陆失败');
            }
        });
    }
	

    /**
     * 取消登录（云组态和云交换机共用）
     */
    function disConnect() {
        usrCloud.USR_DisConnect();
		clear1();
		clear2();
		clear3();
		clear4();
		clear5();
		clear6();
		token = "";
		$("#info1").text('退出登录');
		clearechrats()
    }

    /**
     * 连接成功回调（云组态和云交换机共用）
     */
    function USR_onConnAck(event) {
        console.log(event);
        if(event.code==0) {
            $("#info1").text("登录成功");
        }else{
            $("#info1").text("连接失败");
        }
    }

    /**
     * 连接丢失回调（云组态和云交换机共用）
     */
    function USR_onConnLost(event) {
        console.log(event);
        $("#info1").text("连接断开");
    }






    function clear1() {
        $("#sendData1").html("");
        $("#sendCount1").text(0);
    }
   function clear2() {
        $("#rcvData1").html("");
        $("#rcvCount1").text(0);
    }


    function clear3() {
        $("#sendData2").html("");
        $("#sendCount2").text(0);
    }
    function clear4(){
        $("#rcvData2").html("");
        $("#rcvCount2").text(0);
    }
	function clear5(){
    $("#historyTime1").hide(0);
	$("#historyTime2").hide(0);
	$("#historyTime3").hide(0);
	$("#historyTime4").hide(0);
	$("#historyTime5").hide(0);
	$("#historyValue1").hide(0);
	$("#historyValue2").hide(0);
	$("#historyValue3").hide(0);
	$("#historyValue4").hide(0);
	$("#historyValue5").hide(0);
	$("#transparentPlace1").hide(0);
	$("#transparentPlace2").hide(0);
	$("#transparentPlace3").hide(0);
	$("#transparentPlace4").hide(0);
	$("#transparentPlace5").hide(0);
	$(".dataPoints").css({
		"background-color":"#4CAF50",
		});
    }
	function clear6(){
    $("#devList").html("");
	$("#container2").hide(0);
	
    }
	
	function clearechrats(){
	
	$("#container").hide(1000);

	}
	
	var i;
	/*表示盒子的数量*/
	var howManyBoxs=4;
	var boxsShowTable=false;
	var boxTime=300;
	var boxsHideTable=0;
	var boxsShowButtonPrevious;
	var boxsShowButtonNow;
	var boxsShowButtonPress=[1,1,2,1,1];
	
	function allBoxsHide(boxlabel) {
		for(i=1;i<=howManyBoxs;i++)
			if(i!=boxlabel){
				$("#box"+""+i+"").hide(boxTime);
			}else{
				continue;
			}
		
	}
	function box1Show(){
	if (token === '') {
            alert("您还未登录，请登录！");
        } else {
				allBoxsHide(1);
				$("#box1").toggle(boxTime);
	}
	}
	
	function box2Show(){
	if (token === '') {
            alert("您还未登录，请登录！");
        } else {
/*	if(boxsShowTable==1){
	$("#box2").toggle(boxTime);
	$("#box3").hide(boxTime);}
	if(boxsShowTable==0){
	$("#box2").show(boxTime);
	$("#box3").hide(boxTime);
	boxsShowTable=1;
	}*/
		allBoxsHide(2);
		$("#box2").toggle(boxTime);
	}
	}
	function box3Show(){
	if (token === '') {
            alert("您还未登录，请登录！");
        } else {
/*	if(boxsShowTable==1){
	$("#box3").toggle(boxTime);
	$("#box2").hide(boxTime);}
	if(boxsShowTable==0){
	$("#box3").show(boxTime);
	$("#box2").hide(boxTime);
	boxsShowTable=1;
	}
	*/
		allBoxsHide(3);
		$("#box3").toggle(boxTime);
	}
	}
	function box4Show(){
	if (token === '') {
            alert("您还未登录，请登录！");
        } else {
/*	if(boxsShowTable==1){
	$("#box4").toggle(boxTime);
	$("#box2").hide(boxTime);
	$("#box3").hide(boxTime);
	}
	if(boxsShowTable==0){
	$("#box4").show(boxTime);
	$("#box2").hide(boxTime);
	$("#box3").hide(boxTime);
	boxsShowTable=1;
	}*/
		allBoxsHide(4);
		$("#box4").toggle(boxTime);
		}
	}
	function allBoxsShow(){
	if (token === '') {
            alert("您还未登录，请登录！");
        } else {
	if(boxsShowTable==false){
		$("#box4").show(boxTime);
		$("#box3").show(boxTime);
		$("#box2").show(boxTime);
		$("#box1").show(boxTime);
		boxsShowTable=true;
	}
	else{
		$("#box4").hide(boxTime);
		$("#box3").hide(boxTime);
		$("#box2").hide(boxTime);
		$("#box1").hide(boxTime);
		boxsShowTable=false;
	}
	}
	}

	
	//boxsShow按钮样式改变
		
	$(function () {
	$(".boxTable").click(function () {
	if (token === '') {
		
        } else {
			if($(this).attr("id")=="boxsShowButton1"){
				i=1;
				for(var j=0;j<boxsShowButtonPress.length;j++){
					if(i==j)
					continue;
					boxsShowButtonPress[j]=1;
				}
			};
			if($(this).attr("id")=="boxsShowButton2"){
				i=2;
				for(var j=0;j<boxsShowButtonPress.length;j++){
				if(i==j)
				continue;
				boxsShowButtonPress[j]=1;
				}
			};
			if($(this).attr("id")=="boxsShowButton3"){
				i=3;
				for(var j=0;j<boxsShowButtonPress.length;j++){
				if(i==j)
				continue;
				boxsShowButtonPress[j]=1;
				}
			};
			if($(this).attr("id")=="boxsShowButton4"){
				i=4;
				for(var j=0;j<boxsShowButtonPress.length;j++){
				if(i==j)
				continue;
				boxsShowButtonPress[j]=1;
				}
			};
			if(boxsShowButtonPress[i]==1){
				$(".boxTable").css("margin-left","0px");
				$(this).css("margin-left","13px");
				boxsShowButtonPress[i]=2;
				}else{
				$(this).css("margin-left","0px");
				boxsShowButtonPress[i]=1;
			};
	
			boxsShowButtonPrevious=boxsShowButtonNow;
	}
	}//click-function
	)//click		
	}//function
	);//boxsShow按钮样式改变结束
	
	
    var apiBaseUrl = 'https://cloudapi.usr.cn/usrCloud/'; //api接口根地址
    var apiUrl = {
        login: 'user/login',
        <!-- getDevs: 'dev/getDevs' -->
    };
    var token = '';//登陆返回的token
	

    /**
     * 读取设备列表
     */
	var areaSelect="华东区"; 
    function getDevs() {
        if (token === '') {
            alert("您还未登录，请登录！");
        } else {
		
            $("#info3").text('');
			showCharts2();
            var param = {};
            param.token = token;
            param.property_needed = ['name', 'pass'];
            apiHandler(apiUrl1.getDevs, param, function (result) {
			$("#devList").html("");
			$("#devList2").html("");
			$("#container2").show(0);
			if(areaSelect=="华东区"){
                if (result.status === 0) {
                    var devs = result.data.dev;
                    $("#devList2").append("<li >" + "." + "</li>");
                    //遍历设备列表
                    devs.forEach(function (dev) {
                        $("#devList").append("<li >" + dev.name + "</li>");
						});
						$('.select > p').text("华东区");
						for(i=0;i<huaDong.length;i++)
						 $("#devList").append("<li >" + huaDong[i] + "</li>");
						
                    }
                 else {
                    alert('获取失败');
                }}//判断华东区结束
				if(areaSelect=="华南区"){
				for(i=0;i<huaNan.length;i++)
				$("#devList").append("<li >" + huaNan[i] + "</li>");
				$("#devList2").append("<li >" + "." + "</li>");
				}//判断华南区结束
				if(areaSelect=="华北区"){
				for(i=0;i<huaBei.length;i++)
				$("#devList").append("<li >" + huaBei[i] + "</li>");
				$("#devList2").append("<li >" + "." + "</li>");
				}//判断华北区结束
				if(areaSelect=="东北区"){
				for(i=0;i<dongBei.length;i++)
				$("#devList").append("<li >" + dongBei[i] + "</li>");
				$("#devList2").append("<li >" + "." + "</li>");
				}//判断东北区结束
				if(areaSelect=="西北区"){
				for(i=0;i<xiBei.length;i++)
				$("#devList").append("<li >" + xiBei[i] + "</li>");
				$("#devList2").append("<li >" + "." + "</li>");
				}//判断西北区结束
				if(areaSelect=="海外区"){
				for(i=0;i<haiWai.length;i++)
				$("#devList").append("<li >" + haiWai[i] + "</li>");
				$("#devList2").append("<li >" + "." + "</li>");
				}//判断海外区结束
				
            })
        }
    }
	
	var huaDong=[
	"青州上埠宏润石化有限公司",
	"中石化上海石化股份有限公司",
	"中石化齐鲁公司练油厂",
	"仪征化纤股份有限公司",
	"扬州惠通聚酯技术公司",
	"张家港欣欣化工集团",
	"江苏吴江盛泽镇",
	"安徽皖维集团",
	"石狮市佳龙石化公司",
	"浙江古纤道新材料有限公司",
	"上海石化股份有限公司",
	"齐鲁石化公司",
	"江苏双良集团",
	"连云港鹏程化工",
	"南京金陵石化公司",
	"宜兴三木集团",
	"徐州永鹏科技公司",
	"济南化纤公司"
	];
	
	var huaNan=[
	"广州茂名石化有限公司",
	"中海油惠州石化分公司",
	"中石化茂名石化分公司",
	"中石化湛江东兴炼油厂",
	"广西维尼纶厂"
	];
	
	var haiWai=[
	"阿尔及利亚SORALCHN炼油厂"
	];
	
	var huaBei=[
	"燕山石化炼油厂",
	"天津大港炼油厂",
	"天津霍珀福尔发展有限公司",
	"天津华硕公司",
	"中国纺织化纤工程公司",
	"中国纺织科学研究院",
	"燕山石化公司",
	"香港建涛集团（河北）公司",
	"唐山旭阳化工公司",
	"石家庄凯利达公司",
	"唐山华天公司",
	"唐山三友集团"
	];
	
	var dongBei=[
	"抚顺石油一厂",
	"抚顺石油二厂",
	"中石油前郭炼油厂",
	"吉化集团公司炼油厂",
	"辽阳石化炼油厂",
	"吉化股份公司",
	"辽阳化纤公司芳烃厂",
	"锦州石化化工公司",
	"吉化股份公司乙烯厂"
	];
	
	var xiBei=[
	"新疆新奥公司",
	"新疆塔河油田",
	"榆林炼油厂",
	"兰州维尼纶厂"
	];
    /**
     * api处理函数
     * @param url api地址（相对）
     * @param param 参数（json对象）
     * @param fun 回调函数
     */
    function apiHandler(url, param, fun) {
        $.post(apiBaseUrl + url,
            JSON.stringify(param),
            function (result) {
                result = JSON.parse(result);
                fun(result);
            }
        );
    }