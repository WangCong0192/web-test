// JavaScript Document
    var apiBaseUrl1 = 'https://cloudapi.usr.cn/usrCloud/'; //api接口根地址
    var apiUrl1 = {
        login: 'user/login',
        getDataHisByTimePeriod: 'datadic/getDataHisByTimePeriod',
		getDevs: 'dev/getDevs',
		getLastData:'datadic/getLastData',
		getData:'datadic/getData',
		getAlarmHistory:'trigger/getAlarmHistory'
    };
	var token = '';
	var parametersSubmitLabel='';
	var getHistorysLabel='';
	var myDevId;
	
	var dataLength1;
	var dataLength2;
	var dataLength3;
	var dataLength4;
	var dataLength5;
		
	var startTime;
	var stopTime;	
	
	var myDataId1;
	var myDataId2;
	var myDataId3;
	var myDataId4;
	var myDataId4;

	var historys1 = [];
	var historyData1=[];
	var historyDatatime1=[];
	var historyDatatimeNormal1=[];
	
	var historys2 = [];
	var historyData2=[];
	var historyDatatime2=[];
	var historyDatatimeNormal2=[];
	
	var historys3 = [];
	var historyData3=[];
	var historyDatatime3=[];
	var historyDatatimeNormal3=[];
	
	var historys4 = [];
	var historyData4=[];
	var historyDatatime4=[];
	var historyDatatimeNormal4=[];
	
	var historys5 = [];
	var historyData5=[];
	var historyDatatime5=[];
	var historyDatatimeNormal5=[];
	
	//所有数组数据长度取最小值
	var dataLengthMin=0;
	
	var param1;
	var paramPrevious;
	
	var testLabel;
	
	var historyData1Show=0;
	var historyData2Show=0;
	var historyData3Show=0;
	var historyData4Show=0;
	var historyData5Show=0;
	
	var buttonPressTimes=[1,1,1,1,1,1];
	
	//下拉菜单开始
        $(function(){
            $('.select').on('click',function(e){
                $('.select').toggleClass('open');
                e.stopPropagation();
            });
            // 检查是否由这个属性，没就添加样式
            // 绑定单击事件e.stopPropagation();加了以后四处点击都i回收
            $('.select ul li').on('click',function(e){
                var _this = $(this);
                $('.select > p').text(_this.attr('data-value'));
				areaSelect=_this.attr('data-value');
                _this.addClass('selected').siblings().removeClass('selected');
                $('.select').removeClass('open');
                e.stopPropagation();
            });
            $('html').on('click',function(){
                $('.select').removeClass('open');
            });
        });//下拉菜单结束
		

		
		
	
	
	
		//数据点显示按钮样式改变
		$(function () {
		$(".dataPoints").click(function () {
		if (token === '') {
        } else {
		if($(this).attr("id")=="dataPoint1"){
		i=1;
		};
		if($(this).attr("id")=="dataPoint2"){
		i=2;
		};
		if($(this).attr("id")=="dataPoint3"){
		i=3;
		};
		if($(this).attr("id")=="dataPoint4"){
		i=4;
		};
		if($(this).attr("id")=="dataPoint5"){
		i=5;
		};
		if(buttonPressTimes[i]==1){
		buttonPressTimes[i]=2;
		$(this).css({
		"background-color":"#00BFFF",
		});//CSS结束
		return;
		}//判断按钮次数
		
		if(buttonPressTimes[i]==2){
		buttonPressTimes[i]=1;
		$(this).css({
		"background-color":"#4CAF50",
		});//CSS结束
		return;
		};//判断按钮次数
		};//判断登录结束
		}//click-function结束
		);//click结束
		}
		);
	
	//5个数据点按钮显示
	function dataPoint1Hide(){

	$("#historyTime1").toggle(0);
	$("#historyValue1").toggle(0);
	$("#transparentPlace1").toggle(0);
	submitParameters();
	if (token === '') {
	return;
        } else {
	if(JSON.stringify(param1)!=JSON.stringify(paramPrevious)||historyData1Show==0){
	historyData1Show=1;
	$("#historyTime1").html("");
	$("#historyValue1").html("");
	$("#transparentPlace1").html("");
    $("#info4").text('');
	$("#historyTime1").append("<li class='historyDataTitle'>" +"数据点1"+"</br>"+"</li>");
	$("#historyValue1").append("<li class='historyDataTitle'>" + " "+"</br>"+"</li>");
	$("#historyTime1").append("<li class='historyDataTitle'>" +"时间"+"</br>"+"</li>");
	$("#historyValue1").append("<li class='historyDataTitle'>" + "数据"+"</br>"+"</li>");
	$("#transparentPlace1").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#transparentPlace1").append("<li>" + "数据点1"+"-"+"位移"+"</br>"+"</li>");
	for (var i =0;i<dataLengthMin;i++){
	$("#transparentPlace1").append("<li >" + "时间: \n" +historyDatatimeNormal1[i]+ "\n数据: " + historyData1[i]+  "</li>");
	$("#historyTime1").append("<li >"+historyDatatimeNormal1[i]+"</li>");
	$("#historyValue1").append("<li >"+historyData1[i]+"</li>");
	};//循环页面添加数据结束	
	}
	else{}//判断param变化结束
	}//判断登录结束
	}//数据点1结束
		function dataPoint2Hide(){
	
	$("#historyTime2").toggle(0);
	$("#historyValue2").toggle(0);
	$("#transparentPlace2").toggle(0);
	submitParameters();
	if(JSON.stringify(param1)!=JSON.stringify(paramPrevious)||historyData2Show==0){
	historyData2Show=1;
	$("#historyTime2").html("");
	$("#historyValue2").html("");
	$("#transparentPlace2").html("");
    $("#info4").text('');
	$("#historyTime2").append("<li class='historyDataTitle'>" +"数据点2"+"</br>"+"</li>");
	$("#historyValue2").append("<li class='historyDataTitle'>" + " "+"</br>"+"</li>");
	$("#historyTime2").append("<li class='historyDataTitle'>" +"时间"+"</br>"+"</li>");
	$("#historyValue2").append("<li class='historyDataTitle'>" + "数据"+"</br>"+"</li>");
	$("#transparentPlace2").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#transparentPlace2").append("<li>" + "数据点2"+"-"+"位移"+"</br>"+"</li>");
	for (var i =0;i<dataLengthMin;i++){
	$("#transparentPlace2").append("<li >" + "时间: \n" +historyDatatimeNormal2[i]+ "\n数据: " + historyData2[i]+  "</li>");
	$("#historyTime2").append("<li >"+historyDatatimeNormal2[i]+"</li>");
	$("#historyValue2").append("<li >"+historyData2[i]+"</li>");
	};//循环页面添加数据结束		
	}
	else{
	
	};//判断param结束
	}//数据点2结束
		function dataPoint3Hide(){
	
	$("#historyTime3").toggle(0);
	$("#historyValue3").toggle(0);
	$("#transparentPlace3").toggle(0);
	submitParameters();
	if (token === '') {
	return;
        } else {
	if(JSON.stringify(param1)!=JSON.stringify(paramPrevious)||historyData3Show==0){
	historyData3Show=1;
	$("#historyTime3").html("");
	$("#historyValue3").html("");
	$("#transparentPlace3").html("");
    $("#info4").text('');
	$("#historyTime3").append("<li class='historyDataTitle'>" +"数据点3"+"</br>"+"</li>");
	$("#historyValue3").append("<li class='historyDataTitle'>" + " "+"</br>"+"</li>");
	$("#historyTime3").append("<li class='historyDataTitle'>" +"时间"+"</br>"+"</li>");
	$("#historyValue3").append("<li class='historyDataTitle'>" + "数据"+"</br>"+"</li>");
	$("#transparentPlace3").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#transparentPlace3").append("<li>" + "数据点3"+"-"+"位移"+"</br>"+"</li>");
	for (var i =0;i<dataLengthMin;i++){
	$("#transparentPlace3").append("<li >" + "时间: \n" +historyDatatimeNormal3[i]+ "\n数据: " + historyData3[i]+  "</li>");
	$("#historyTime3").append("<li >"+historyDatatimeNormal3[i]+"</li>");
	$("#historyValue3").append("<li >"+historyData3[i]+"</li>");
	};//循环页面添加数据结束		
	}
	else{
	
	};//判断param结束
	}//判断登录结束
	}//数据点3结束
		function dataPoint4Hide(){
	
	$("#historyTime4").toggle(0);
	$("#historyValue4").toggle(0);
	$("#transparentPlace4").toggle(0);
	submitParameters();
	if (token === '') {
	return;
        } else {
	if(JSON.stringify(param1)!=JSON.stringify(paramPrevious)||historyData4Show==0){
	historyData4Show=1;
	$("#historyTime4").html("");
	$("#historyValue4").html("");
	$("#transparentPlace4").html("");
    $("#info4").text('');
	$("#historyTime4").append("<li class='historyDataTitle'>" +"数据点4"+"</br>"+"</li>");
	$("#historyValue4").append("<li class='historyDataTitle'>" + " "+"</br>"+"</li>");
	$("#historyTime4").append("<li class='historyDataTitle'>" +"时间"+"</br>"+"</li>");
	$("#historyValue4").append("<li class='historyDataTitle'>" + "数据"+"</br>"+"</li>");
	$("#transparentPlace4").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#transparentPlace4").append("<li>" + "数据点4"+"-"+"位移"+"</br>"+"</li>");
	for (var i =0;i<dataLengthMin;i++){
	$("#transparentPlace4").append("<li >" + "时间: \n" +historyDatatimeNormal4[i]+ "\n数据: " + historyData4[i]+  "</li>");
	$("#historyTime4").append("<li >"+historyDatatimeNormal4[i]+"</li>");
	$("#historyValue4").append("<li >"+historyData4[i]+"</li>");
	};//循环页面添加数据结束	
			}
	else{

	
	};//判断param结束
	}//判断登录结束
	}//数据点4结束
		function dataPoint5Hide(){
	
	$("#historyTime5").toggle(0);
	$("#historyValue5").toggle(0);
	$("#transparentPlace5").toggle(0);
	submitParameters();
	if (token === '') {
	return;
        } else {
	if(JSON.stringify(param1)==JSON.stringify(paramPrevious)||historyData5Show==0){
	historyData5Show=1;
	$("#historyTime5").html("");
	$("#historyValue5").html("");
	$("#transparentPlace5").html("");
    $("#info4").text('');
	$("#historyTime5").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#historyValue5").append("<li class='historyDataTitle'>" + " "+"</br>"+"</li>");
	$("#historyTime5").append("<li class='historyDataTitle'>" +"时间"+"</br>"+"</li>");
	$("#historyValue5").append("<li class='historyDataTitle'>" + "数据"+"</br>"+"</li>");
	$("#transparentPlace5").append("<li class='historyDataTitle'>" +"数据点5"+"</br>"+"</li>");
	$("#transparentPlace5").append("<li>" + "数据点5"+"-"+"位移"+"</br>"+"</li>");
	for (var i =0;i<dataLengthMin;i++){
	$("#transparentPlace5").append("<li >" + "时间: \n" +historyDatatimeNormal5[i]+ "\n数据: " + historyData5[i]+  "</li>");
	$("#historyTime5").append("<li >"+historyDatatimeNormal5[i]+"</li>");
	$("#historyValue5").append("<li >"+historyData5[i]+"</li>");
	};//循环页面添加数据结束	
	}
	else{
	
	};//判断param结束
	}//判断登录结束
	}//数据点5结束
	

	
	//确认时间并转换为unix时间戳并确认参数并得到数据
	function submitParameters(){
		parametersSubmitLabel=1;
		myDevId=$("#myDevId").val();
		myDataId1=$("#myDataId1").val();
		myDataId2=$("#myDataId2").val();
		myDataId3=$("#myDataId3").val();
		myDataId4=$("#myDataId4").val();
		myDataId5=$("#myDataId5").val();
		var a = $("#textYear").val()+"-"+$("#textMonth").val()+"-"+$("#textDay").val()+"  "+$("#textHour").val()+":"+$("#textMinute").val()+":"+$("#textSecond").val();
		var b = $("#textYear1").val()+"-"+$("#textMonth1").val()+"-"+$("#textDay1").val()+"  "+$("#textHour1").val()+":"+$("#textMinute1").val()+":"+$("#textSecond1").val();
		startTime=new Date(Date.parse(a.replace(/-/g, "/"))).getTime();
		stopTime=new Date(Date.parse(b.replace(/-/g, "/"))).getTime();
		startTime=startTime/1000;
		stopTime=stopTime/1000;
		//alert("起始时间："+a +"\n"+"结束时间："+b);
		getDataHisByTimePeriod();
		}
		
		
	//以下前溯一天
	function getTimeperiod(){
	let data3 = new Date(),data3oneweekago = new Date(data3.getTime() - 1 * 24 * 3600 * 1000);;   //data3没啥特殊含义

    let y=data3.getFullYear(),
        month=data3.getMonth() + 1,
        m=month<10 ? "0"+month : month,
        d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
        h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
        mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
        s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();
	let y1=data3oneweekago.getFullYear(),
        month1=data3oneweekago.getMonth() + 1,
        m1=month1<10 ? "0"+month1 : month1,
        d1=(data3oneweekago.getDate()<10) ? "0"+data3oneweekago.getDate() : data3oneweekago.getDate(),
        h11=(data3oneweekago.getHours()<10) ? "0"+data3oneweekago.getHours() : data3oneweekago.getHours(),
        mi1=(data3oneweekago.getMinutes()<10) ? "0"+data3oneweekago.getMinutes() : data3oneweekago.getMinutes(),
        s1=(data3oneweekago.getSeconds()<10) ? "0"+data3oneweekago.getSeconds() : data3oneweekago.getSeconds();
		
		$("#textYear").val(y1);
		$("#textYear1").val(y);
		$("#textMonth").val(m1);
		$("#textMonth1").val(m);
		$("#textDay").val(d1);
		$("#textDay1").val(d);
		$("#textHour").val(h11);
		$("#textHour1").val(h);
		$("#textMinute").val(mi1);
		$("#textMinute1").val(mi);
		$("#textSecond").val('00');
		$("#textSecond1").val('00');
		
		
	};
	
	//以下测试时间
	function testTime(){
		$("#textDay").val("03");
		$("#textDay1").val("03");
		$("#textHour").val(15)
		$("#textHour1").val(15);
		$("#textMinute").val(30);
		$("#textMinute1").val(40);
	};
	
	
	//以下前溯一小时
	function getTimeperiod1(){
	let data3 = new Date(),data3oneweekago = new Date(data3.getTime() - 1 * 3600 * 1000);;   //data3没啥特殊含义

    let y=data3.getFullYear(),
        month=data3.getMonth() + 1,
        m=month<10 ? "0"+month : month,
        d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
        h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
        mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
        s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();
	let y1=data3oneweekago.getFullYear(),
        month1=data3oneweekago.getMonth() + 1,
        m1=month1<10 ? "0"+month1 : month1,
        d1=(data3oneweekago.getDate()<10) ? "0"+data3oneweekago.getDate() : data3oneweekago.getDate(),
        h11=(data3oneweekago.getHours()<10) ? "0"+data3oneweekago.getHours() : data3oneweekago.getHours(),
        mi1=(data3oneweekago.getMinutes()<10) ? "0"+data3oneweekago.getMinutes() : data3oneweekago.getMinutes(),
        s1=(data3oneweekago.getSeconds()<10) ? "0"+data3oneweekago.getSeconds() : data3oneweekago.getSeconds();
		
		$("#textYear").val(y1);
		$("#textYear1").val(y);
		$("#textMonth").val(m1);
		$("#textMonth1").val(m);
		$("#textDay").val(d1);
		$("#textDay1").val(d);
		$("#textHour").val(h11);
		$("#textHour1").val(h);
		$("#textMinute").val(mi1);
		$("#textMinute1").val(mi);
		$("#textSecond").val('00');
		$("#textSecond1").val('00');
		
		
	};

	
	//向服务器申请历史数据
	function getDataHisByTimePeriod() {
        if (token === '') {
            alert("您还未登录，请登录！");
        } else {
		
            $("#info4").text('');
//第一个数据点********************************************
			param1 = {
						"deviceDataPoints":[
							{
								"deviceId":myDevId,
								"slaveIndex":"1",
								"dataPointId":myDataId1
							},
							{
								"deviceId":myDevId,
								"slaveIndex":"1",
								"dataPointId":myDataId2
							},
							{
								"deviceId":myDevId,
								"slaveIndex":"1",
								"dataPointId":myDataId3
							},
							{
								"deviceId":myDevId,
								"slaveIndex":"1",
								"dataPointId":myDataId4
							},
							{
								"deviceId":myDevId,
								"slaveIndex":"1",
								"dataPointId":myDataId5
							}
							],
						"startTime":startTime,
						"endTime":stopTime,
						"token": token
					};
			if(JSON.stringify(param1)==JSON.stringify(paramPrevious)){
			}
			else{
			historys1 = [];
			historyData1=[];
			historyDatatime1=[];
			historyDatatimeNormal1=[];
			
			historys2 = [];
			historyData2=[];
			historyDatatime2=[];
			historyDatatimeNormal2=[];
			
			historys3 = [];
			historyData3=[];
			historyDatatime3=[];
			historyDatatimeNormal3=[];
			
			historys4 = [];
			historyData4=[];
			historyDatatime4=[];
			historyDatatimeNormal4=[];
			
			historys5 = [];
			historyData5=[];
			historyDatatime5=[];
			historyDatatimeNormal5=[];
			
			paramPrevious=param1;
			
			historyData1Show=0;
			historyData2Show=0;
			historyData3Show=0;
			historyData4Show=0;
			historyData5Show=0;
            <!-- param1.token = token; -->
            <!-- param1.property_needed = ['name', 'pass']; -->
			param1 = JSON.stringify(param1);
			$.ajaxSettings.async = false;
			$.post(
			'https://cloudapi.usr.cn/usrCloud/datadic/getMultiCurveDataPointHistory', param1,
				function(result,status){
				if(result.status==5126){
				alert("查询太频繁，请3秒后再试！");
				historyData1Show=0;
				historyData2Show=0;
				historyData3Show=0;
				historyData4Show=0;
				historyData5Show=0;
				}
				dataLengthMin=result.data[0].dataHistorys.length;
				for (var i=1;i<5;i++){
				if(result.data[i].dataHistorys.length<dataLengthMin)
				dataLengthMin=result.data[i].dataHistorys.length;
				};;
				for(var i=0;i < (dataLengthMin);i++){
				historys1[i]=result.data[0].dataHistorys[i];
				historys2[i]=result.data[1].dataHistorys[i];
				historys3[i]=result.data[2].dataHistorys[i];
				historys4[i]=result.data[3].dataHistorys[i];
				historys5[i]=result.data[4].dataHistorys[i];
				historyData1[i]=historys1[i].value;
				historyData2[i]=historys2[i].value;
				historyData3[i]=historys3[i].value;
				historyData4[i]=historys4[i].value;
				historyData5[i]=historys5[i].value;
				//此处时间是unix时间戳格式
				historyDatatime1[i]=historys1[i].createTime;
				historyDatatime2[i]=historys2[i].createTime;
				historyDatatime3[i]=historys3[i].createTime;
				historyDatatime4[i]=historys4[i].createTime;
				historyDatatime5[i]=historys5[i].createTime;
				//for循环把value time给不同变量 end
				};
				for(var j=0;j<(dataLengthMin);j++){
						let data3 = new Date(historyDatatime1[j] * 1000);      
						let y=data3.getFullYear(),
						month=data3.getMonth() + 1,
						m=month<10 ? "0"+month : month,
						d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
						h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
						mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
						s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();
						historyDatatimeNormal1[j]=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;

				};
				for(var j=0;j<(dataLengthMin);j++){
						let data3 = new Date(historyDatatime2[j] * 1000);      
						let y=data3.getFullYear(),
						month=data3.getMonth() + 1,
						m=month<10 ? "0"+month : month,
						d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
						h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
						mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
						s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();

						historyDatatimeNormal2[j]=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;
				};
				for(var j=0;j<(dataLengthMin);j++){
						let data3 = new Date(historyDatatime3[j] * 1000);      
						let y=data3.getFullYear(),
						month=data3.getMonth() + 1,
						m=month<10 ? "0"+month : month,
						d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
						h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
						mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
						s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();

						historyDatatimeNormal3[j]=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;
				};
				for(var j=0;j<(dataLengthMin);j++){
						let data3 = new Date(historyDatatime4[j] * 1000);      
						let y=data3.getFullYear(),
						month=data3.getMonth() + 1,
						m=month<10 ? "0"+month : month,
						d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
						h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
						mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
						s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();

						historyDatatimeNormal4[j]=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;
				};
				for(var j=0;j<(dataLengthMin);j++){
						let data3 = new Date(historyDatatime5[j] * 1000);      
						let y=data3.getFullYear(),
						month=data3.getMonth() + 1,
						m=month<10 ? "0"+month : month,
						d=(data3.getDate()<10) ? "0"+data3.getDate() : data3.getDate(),
						h=(data3.getHours()<10) ? "0"+data3.getHours() : data3.getHours(),
						mi=(data3.getMinutes()<10) ? "0"+data3.getMinutes() : data3.getMinutes(),
						s=(data3.getSeconds()<10) ? "0"+data3.getSeconds() : data3.getSeconds();

						historyDatatimeNormal5[j]=y + "-" +m + "-" +d + " " +h + ":" +mi + ":" +s;
				};
				
				historyData1=historyData1.reverse();
				historyData2=historyData2.reverse();
				historyData3=historyData3.reverse();
				historyData4=historyData4.reverse();
				historyData5=historyData5.reverse();
				historyDatatimeNormal1=historyDatatimeNormal1.reverse();
				historyDatatimeNormal2=historyDatatimeNormal2.reverse();
				historyDatatimeNormal3=historyDatatimeNormal3.reverse();
				historyDatatimeNormal4=historyDatatimeNormal4.reverse();
				historyDatatimeNormal5=historyDatatimeNormal5.reverse();

				//post-function end
				},"json"
				//post end
				);

		
		};//param判断结束
		};//else结束
		};//获取历史数据fuction结束		


	

	//开始作图
		function showTheCharts(){
		$("#container").show(0);
		submitParameters();
		if (token === '') {
		return;
        } else {
            $("#info4").text('');
			//显示隐藏的内容
			$("#container").show(1000);
			//结束 显示隐藏的内容
		var dom = document.getElementById("container");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		var echartsX1=[0]
		var echartsY1=[0];
		var echartsY2=[0];
		var echartsY3=[0];
		var echartsY4=[0];
		var echartsY5=[0];
		for (i=0;i<dataLengthMin;i++){
		echartsX1[i]=i};
		echartsY1=historyData1;
		echartsY2=historyData2;
		echartsY3=historyData3;
		echartsY4=historyData4;
		echartsY5=historyData5;
option = {
    title: {
        text: '阀门监测ARCA',
        left:'center'
    },
    dataset: {
        // 提供一份数据。
		
        source: [
		    echartsX1,
            echartsY1,
            echartsY2,
			echartsY3,
			echartsY4,
			echartsY5
        ]
    },
    tooltip: {
        trigger: 'axis',
        triggerOn:'mousemove',
        axisPointer: {
            label: {
                formatter:'{value}'
            }
        }
    },
	dataZoom:{
        type:'slider'
    },
    legend: {
        data:['位移','压力','电压','电流','温度'],
        selectedMode:'multiple',
        top:'8%'
    },
    grid: {
        top:'15%',
        left: '12%',
        right: '9%',
        bottom: '8%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
    
	axisLabel : {//坐标轴刻度标签的相关设置。
                formatter : function(params){
                   var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的字符数
                            //alert(params.length);
                            var provideNumber = 10;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = rowNumber-1; p >=0 ; p--) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p === 0) {
                                        // 再选取月-日字符从0+5  -  10 即不选取年
                                        tempStr = params.substring(start+5, end);
                                    } else {
                                        // 先选取时间字符，从10-20
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }

                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                }

            },
			},
    yAxis: [
        {
        type: 'value',
        name:'位移',
        position:'right',
        boundaryGap: ['0%', '50%'],
        offset:0,
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:0,
            },
        axisLabel: {
             formatter: '{value}mm'
            }
        },
        {
        type: 'value',
        name:'压力',

        position:'left',
        boundaryGap: ['0%', '20%'],
        axisTick:{
            inside:'true',
            length:5,
            },
        axisLine:{
        show:true,
        symbol:['none', 'none'],
        symbolSize:[10,8]
        },

        axisLabel: {
             formatter: '{value}Pa'
            }
        },
         
        {
        type: 'value',
        name:'电压',
        position:'left',
        boundaryGap: ['0%', '20%'],
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:5,
            },
        offset:40,
        //splitNumber:10,坐标间隔
        axisLabel: {
             formatter: '{value}V'
            }
        },
		{
        type: 'value',
        name:'电流',
        position:'right',
        boundaryGap: ['0%', '20%'],
        offset:40,
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:0,
            },
        axisLabel: {
             formatter: '{value}mA'
            }
        },
		{
        type: 'value',
        name:'温度',
        position:'left',
        boundaryGap: ['0%', '20%'],
        offset:80,
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:0,
            },
        axisLabel: {
             formatter: '{value}℃'
            }
        },
         
        ],
		color:
		['#c23531','#2f4554', '#61a0a8', '#32CD32', '#7f00ff','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    series: [
        {
            name:'位移',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:0,
        },
        {
            name:'压力',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:1,
        },
        {
            name:'电压',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:2,
        },
		{
            name:'电流',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:3,
        },
		{
            name:'温度',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:4,
        },
    ]
};


;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
	window.onresize = myChart.resize;
}
//画完图后重置测试图像标志
chartTestSignal=0;
}};


//饼图开始
function showCharts2(){
var dom = document.getElementById("container2");
var myChart2 = echarts.init(dom);
var app = {};
option2 = null;
option2 = {
    title : {
        text: 'ARCA业务',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
		show:false,
        orient: 'vertical',
        left: 'left',
        data: ['华东区','华南区','华北区','东北区','西北区','海外区']
    },
    series : [
        {
            name: 'ARCA业务',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:18, name:'华东区'},
                {value:5, name:'华南区'},
                {value:12, name:'华北区'},
                {value:9, name:'东北区'},
                {value:4, name:'西北区'},
                {value:1, name:'海外区'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option2 && typeof option2 === "object") {
    myChart2.setOption(option2, true);
}
}

//测试图像按钮
var chartTestSignal=0;
function showTestChart(){
		$("#container").show(0);
		if (token === '') {
		alert("您还未登录，请登录！");
        } else {
            $("#info4").text('');
			//显示隐藏的内容
			$("#container").show(1000);
			//结束 显示隐藏的内容
		var dom = document.getElementById("container");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		var echartsX1=[0]
		var echartsY1=[0];
		var echartsY2=[0];
		var echartsY3=[0];
		echartsX1=historyDataTestX;
		echartsY1=historyDataTest1;
		echartsY2=historyDataTest2;
		echartsY3=historyDataTest3;
option = {
    title: {
        text: '阀门监测ARCA',
        left:'center'
    },
    dataset: {
        // 提供一份数据。
		
        source: [
		    echartsX1,
            echartsY1,
            echartsY2,
			echartsY3,
        ]
    },
    tooltip: {
        trigger: 'axis',
        triggerOn:'mousemove',
        axisPointer: {
            label: {
                formatter:'{value}'
            }
        }
    },
	dataZoom:{
        type:'slider'
    },
    legend: {
        data:['位移','压力','电流'],
        selectedMode:'multiple',
        top:'8%'
    },
    grid: {
        top:'15%',
        left: '10%',
        right: '9%',
        bottom: '8%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
    
		<!-- axisLabel:{ -->
		<!-- //坐标轴刻度标签的相关设置。 -->
                <!-- formatter : function(params){ -->
                   <!-- var newParamsName = "";// 最终拼接成的字符串 -->
                            <!-- var paramsNameNumber = params.length;// 实际标签的字符数 -->
                            <!-- //alert(params.length); -->
                            <!-- var provideNumber = 10;// 每行能显示的字的个数 -->
                            <!-- var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整 -->
                            <!-- /** -->
                             <!-- * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签 -->
                             <!-- */ -->
                            <!-- // 条件等同于rowNumber>1 -->
                            <!-- if (paramsNameNumber > provideNumber) { -->
                                <!-- /** 循环每一行,p表示行 */ -->
                                <!-- for (var p = rowNumber-1; p >=0 ; p--) { -->
                                    <!-- var tempStr = "";// 表示每一次截取的字符串 -->
                                    <!-- var start = p * provideNumber;// 开始截取的位置 -->
                                    <!-- var end = start + provideNumber;// 结束截取的位置 -->
                                    <!-- // 此处特殊处理最后一行的索引值 -->
                                    <!-- if (p === 0) { -->
                                        <!-- // 再选取月-日字符从0+5  -  10 即不选取年 -->
                                        <!-- tempStr = params.substring(start+5, end); -->
                                    <!-- } else { -->
                                        <!-- // 先选取时间字符，从10-20 -->
                                        <!-- tempStr = params.substring(start, end) + "\n"; -->
                                    <!-- } -->
                                    <!-- newParamsName += tempStr;// 最终拼成的字符串 -->
                                <!-- } -->

                            <!-- } else { -->
                                <!-- // 将旧标签的值赋给新标签 -->
                                <!-- newParamsName = params; -->
                            <!-- } -->
                            <!-- //将最终的字符串返回 -->
                            <!-- return newParamsName -->
                <!-- } -->

            <!-- }, -->
			},
    yAxis: [
        {
        type: 'value',
        name:'位移',
        position:'right',
        boundaryGap: ['0%', '50%'],
        offset:0,
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:0,
            },
        axisLabel: {
             formatter: '{value}mm'
            }
        },
        {
        type: 'value',
        name:'压力',
        position:'left',
        boundaryGap: ['0%', '20%'],
        axisTick:{
            inside:'true',
            length:5,
            },
        axisLine:{
        show:true,
        symbol:['none', 'none'],
        symbolSize:[10,8]

        },

        axisLabel: {
             formatter: '{value}Pa'
            }
        },
		{
        type: 'value',
        name:'电流',
        position:'left',
        boundaryGap: ['0%', '20%'],
        offset:40,
        axisLine:{
            show:true
        },
        axisTick:{
            inside:'true',
            length:0,
            },
        axisLabel: {
             formatter: '{value}mA'
            }
        },
        ],
		color:
		['#c23531','#2f4554', '#61a0a8', '#32CD32', '#7f00ff','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    series: [
        {
            name:'位移',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:0,
        },
        {
            name:'压力',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:1,
        },
		{
            name:'电流',
            type:'line',
            seriesLayoutBy: 'row',
            yAxisIndex:2,
        },
    ]
};


;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
	window.onresize = myChart.resize;
}
//画完图后重置测试图像标志
chartTestSignal=0;
};
};


/**
     * md5加密函数
     */
    String.prototype.MD5 = function (bit) {
        var sMessage = this;

        function RotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }

        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = (lX & 0x80000000);
            lY8 = (lY & 0x80000000);
            lX4 = (lX & 0x40000000);
            lY4 = (lY & 0x40000000);
            lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
            if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
            if (lX4 | lY4) {
                if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            } else return (lResult ^ lX8 ^ lY8);
        }

        function F(x, y, z) {
            return (x & y) | ((~x) & z);
        }

        function G(x, y, z) {
            return (x & z) | (y & (~z));
        }

        function H(x, y, z) {
            return (x ^ y ^ z);
        }

        function I(x, y, z) {
            return (y ^ (x | (~z)));
        }

        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }

        function ConvertToWordArray(sMessage) {
            var lWordCount;
            var lMessageLength = sMessage.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = (lWordArray[lWordCount] | (sMessage.charCodeAt(lByteCount) << lBytePosition));
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }

        function WordToHex(lValue) {
            var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = "0" + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }

        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        // Steps 1 and 2. Append padding bits and length and convert to words
        x = ConvertToWordArray(sMessage);
        // Step 3. Initialise
        a = 0x67452301;
        b = 0xEFCDAB89;
        c = 0x98BADCFE;
        d = 0x10325476;
        // Step 4. Process the message in 16-word blocks
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD);
        }
        if (bit == 32) {
            return WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        }
        else {
            return WordToHex(b) + WordToHex(c);
        }
    }
