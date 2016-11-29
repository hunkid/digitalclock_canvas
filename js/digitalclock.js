var drawing = document.getElementById("drawing");
var ctx = drawing.getContext("2d");
var clock = {
	innerRad:  200,
	outerRad: 220,
	center: [230,230],
	setClock : function(){
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.arc(clock.center[0],clock.center[0],clock.innerRad,0,2*Math.PI,false);
		ctx.stroke();
		ctx.closePath();
		ctx.lineWidth = 18;
		ctx.beginPath();
		ctx.arc(clock.center[0],clock.center[0],clock.outerRad,0,2*Math.PI,false);
		ctx.stroke();
		ctx.closePath();
		ctx.save();
	},
	setNumber : function(){
		ctx.font = "bold 28px Sans-Serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		var pos = [];
		pos[0] = clock.center[0];
		pos[1] = clock.center[1]-clock.innerRad +16; 
		for(var i= 1;i < 13;i++){
			pos = countNexPos(pos,30);
			ctx.fillText(i,pos[0],pos[1]);
		}
	}
}

function Hand(length,lineWidth){
	this.length = length;
	this.lineWidth = lineWidth;
}
Hand.prototype.setOrigin = function(){
	this.curPos = [];
	this.curPos[0] = clock.center[0];
	this.curPos[1] = clock.center[1] - this.length;
};
Hand.prototype.setPos = function(curPos){
	ctx.beginPath();
	ctx.moveTo(clock.center[0],clock.center[1]);
	ctx.lineWidth = this.lineWidth;
	ctx.lineTo(this.curPos[0],this.curPos[1]);
	ctx.stroke();
	ctx.closePath();
};

function countNexPos(curPos , theta){  //curPos:[x1,y1],theta:角度值
	var nexPos = [];
	nexPos[0] = (curPos[0]-clock.center[0])*Math.cos(theta / 180 * Math.PI) - (curPos[1] - clock.center[1]) * Math.sin(theta / 180 * Math.PI) +clock.center[0];
	nexPos[1] = (curPos[0]-clock.center[0])*Math.sin(theta / 180 * Math.PI) + (curPos[1] - clock.center[1]) * Math.cos(theta / 180 * Math.PI) +clock.center[1];
	return nexPos;
}

function getNowTime(){
	var date = new Date();
	var time = {
		hour : date.getHours(),
		minu : date.getMinutes(),
		sec : date.getSeconds()
	}
	return time;
}

function setTime(time,handSec,handMinu,handHour){
	var thetaSec = time.sec / 60 * 360;
	var thetaMinu = time.minu / 60 * 360 + thetaSec / 60;
	var thetaHour = time.hour / 12 * 360 + thetaMinu / 12;
	handSec.curPos = countNexPos(handSec.curPos,thetaSec);
	handMinu.curPos = countNexPos(handMinu.curPos,thetaMinu);
	handHour.curPos = countNexPos(handHour.curPos,thetaHour);
}

var heng = {
	length: 50,
	orgPos: [0,0],
	color: '#000',
	lineWidth: 2,
	setHeng: function(){
		ctx.beginPath();
		ctx.moveTo(this.orgPos[0],this.orgPos[1]);
		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.color;
		ctx.lineTo(this.orgPos[0] + this.length,this.orgPos[1]);
		ctx.stroke();
		ctx.closePath();
	}
};

var shu = {
	height: 50,
	orgPos: [0,0],
	color: '#000',
	lineWidth: 2,
	setShu: function(){
		ctx.beginPath();
		ctx.moveTo(shu.orgPos[0], this.orgPos[1]);
		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.color;
		console.log(this.orgPos);
		ctx.lineTo(this.orgPos[0], this.orgPos[1] + this.height);
		ctx.stroke();
		ctx.closePath();
	}
};

/**
*	将电子的8分成三个横，四个竖，横id从上到下递增，竖id从上到下，从左到右递增
*
*/
var setFullEight = {
	clearAnce: 2, //设置横竖之间的间隙
	orgPos: [0,0],
	length: 50,//整个8的宽度
	height: 100,//整个8的高度
	color: '#000',
	lineWidth: 2,
	setHeng1: function(clr) {
		heng.orgPos[0] = this.orgPos[0] + this.clearAnce;
		heng.orgPos[1] = this.orgPos[1];
		heng.length = this.length - this.clearAnce * 2;
		heng.lineWidth = this.lineWidth;
		heng.color = clr || this.color;
		heng.setHeng();
	},
	setHeng2: function(clr) {
		heng.orgPos[0] = this.orgPos[0] + this.clearAnce;
		heng.orgPos[1] = this.orgPos[1] + this.height / 2;
		heng.length = this.length - this.clearAnce * 2;
		heng.lineWidth = this.lineWidth;
		heng.color = clr || this.color;
		heng.setHeng();
	},
	setHeng3: function(clr) {
		heng.orgPos[0] = this.orgPos[0] + this.clearAnce;
		heng.orgPos[1] = this.orgPos[1] + this.height;
		heng.length = this.length - this.clearAnce * 2;
		heng.lineWidth = this.lineWidth;
		heng.color = clr || this.color;
		heng.setHeng();
	},
	setShu1: function(clr) {
		shu.orgPos[0] = this.orgPos[0];
		shu.orgPos[1] = this.orgPos[1] + this.clearAnce;
		shu.height = (this.height - this.clearAnce * 4) / 2;
		shu.lineWidth = this.lineWidth;
		shu.color = clr || this.color;
		shu.setShu();
	},
	setShu2: function(clr) {
		shu.orgPos[0] = this.orgPos[0];
		shu.orgPos[1] = this.orgPos[1] + this.clearAnce + this.height / 2;
		shu.height = (this.height - this.clearAnce * 4) / 2;
		shu.lineWidth = this.lineWidth;
		shu.color = clr || this.color;
		shu.setShu();
	},
	setShu3: function(clr) {
		shu.orgPos[0] = this.orgPos[0] + this.length;
		shu.orgPos[1] = this.orgPos[1] + this.clearAnce;
		shu.height = (this.height - this.clearAnce * 4) / 2;
		shu.lineWidth = this.lineWidth;
		shu.color = clr || this.color;
		shu.setShu();
	},
	setShu4: function(clr) {
		shu.orgPos[0] = this.orgPos[0] + this.length;
		shu.orgPos[1] = this.orgPos[1] + this.clearAnce + this.height / 2;
		shu.height = (this.height - this.clearAnce * 4) / 2;
		shu.lineWidth = this.lineWidth;
		shu.color = clr || this.color;
		shu.setShu();
	}
};

function set0(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setShu1();
	setFullEight.setShu2();
	setFullEight.setShu3();
	setFullEight.setShu4();
	setFullEight.setHeng1();
	setFullEight.setHeng3();
}

function set1(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setShu3();
	setFullEight.setShu4();
}

function set2(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setHeng1();
	setFullEight.setShu3();
	setFullEight.setHeng2();
	setFullEight.setShu2();
	setFullEight.setHeng3();
}

function set3(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setHeng1();
	setFullEight.setHeng2();
	setFullEight.setHeng3();
	setFullEight.setShu3();
	setFullEight.setShu4();
}

function set4(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setShu1();
	setFullEight.setShu3();
	setFullEight.setShu4();
	setFullEight.setHeng2();
}

function set5(posX, posY, clr) {
	setFullEight.orgPos[0] = posX;
	setFullEight.orgPos[1] = posY;
	if (clr) {
		setFullEight.color = clr;
	}
	setFullEight.setHeng1();
	setFullEight.setHeng2();
	setFullEight.setHeng3();
	setFullEight.setShu1();
	setFullEight.setShu4();
}

function set6(posX, posY, clr) {
	set5(posX,posY,clr);
	setFullEight.setShu2();
}

function set7(posX, posY, clr) {
	set1(posX, posY, clr);
	setFullEight.setHeng1();
}

function set8(posX, posY, clr) {
	set6(posX, posY, clr);
	setFullEight.setShu3();
}

function set9(posX, posY, clr) {
	set5(posX, posY, clr);
	setFullEight.setShu3();
}

window.onload = function(){
	// clock.setClock();
	// clock.setNumber();
	// var handHour = new Hand(80,7);
	// var handMinu = new Hand(150,4);
	// var handSec = new Hand(170,1);
	// handHour.setOrigin();//将初始坐标指向12时刻
	// handMinu.setOrigin();
	// handSec.setOrigin();
	// var time = getNowTime();
	// setTime(time,handSec,handMinu,handHour);
	// handSec.setPos();
	// handMinu.setPos();
	// handHour.setPos();
	// setInterval(function(){
	// 	ctx.clearRect(0,0,drawing.width,drawing.height);
	// 	clock.setClock();
	// 	clock.setNumber();
	// 	handSec.curPos = countNexPos(handSec.curPos,360/60);
	// 	handSec.setPos();
	// 	handMinu.curPos = countNexPos(handMinu.curPos,360/3600);
	// 	handMinu.setPos();
	// 	handHour.curPos = countNexPos(handHour.curPos,360/3600/60);
	// 	handHour.setPos();
	// },1000);
	set5(0,0);
}