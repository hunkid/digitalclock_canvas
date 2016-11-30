var drawing = document.getElementById("drawing");
var ctx = drawing.getContext("2d");

function getNowTime() {
    var date = new Date();
    var time = {
        hour: date.getHours(),
        minu: date.getMinutes(),
        sec: date.getSeconds()
    };
    return time;
}

var heng = {
    length: 50,
    orgPos: [0, 0],
    color: '#000',
    lineWidth: 8,
    lineCap: 'round',
    setParm: function(posX, posY, lth, lwh, clr, lcp) {
        if (posX && posY) {
            this.orgPos[0] = posX;
            this.orgPos[1] = posY;
        }
        if (lth) {
            this.length = lth;
        }
        if (clr) {
            this.color = clr;
        }
        if (lwh) {
            this.lineWidth = lwh;
        }
        if (lcp) {
            this.lineCap = lcp;
        }
    },
    setHeng: function() {
        ctx.beginPath();
        ctx.moveTo(this.orgPos[0], this.orgPos[1]);
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.strokeStyle = this.color;
        ctx.lineTo(this.orgPos[0] + this.length, this.orgPos[1]);
        ctx.stroke();
        ctx.closePath();
    }
};

var shu = {
    height: 50,
    orgPos: [0, 0],
    color: '#000',
    lineWidth: 8,
    lineCap: 'round',
    setParm: function(posX, posY, hgt, lwh, clr, lcp) {
        if (posX && posY) {
            this.orgPos[0] = posX;
            this.orgPos[1] = posY;
        }
        if (hgt) {
            this.height = hgt;
        }
        if (clr) {
            this.color = clr;
        }
        if (lwh) {
            this.lineWidth = lwh;
        }
        if (lcp) {
            this.lineCap = lcp;
        }
    },
    setShu: function() {
        ctx.beginPath();
        ctx.moveTo(shu.orgPos[0], this.orgPos[1]);
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = this.lineCap;
        ctx.strokeStyle = this.color;
        ctx.lineTo(this.orgPos[0], this.orgPos[1] + this.height);
        ctx.stroke();
        ctx.closePath();
    }
};

/**
 *  将电子的8分成三个横，四个竖，横id从上到下递增，竖id从上到下，从左到右递增
 *
 */
var setFullEight = {
    clearAnce: 5, //设置横竖之间的间隙
    orgPos: [0, 0],
    length: 50, //整个8的宽度
    height: 100, //整个8的高度
    color: '#000',
    lineWidth: 6,
    setHeng1: function() {
        heng.setParm(this.orgPos[0] + this.clearAnce, this.orgPos[1], this.length - this.clearAnce * 2, setFullEight.lineWidth, setFullEight.color);
        heng.setHeng();
    },
    setHeng2: function() {
        heng.setParm(this.orgPos[0] + this.clearAnce, this.orgPos[1] + this.height / 2, this.length - this.clearAnce * 2, setFullEight.lineWidth, setFullEight.color);
        heng.setHeng();
    },
    setHeng3: function() {
        heng.setParm(this.orgPos[0] + this.clearAnce, this.orgPos[1] + this.height, this.length - this.clearAnce * 2, setFullEight.lineWidth, setFullEight.color);       
        heng.setHeng();
    },
    setShu1: function() {
        shu.setParm(this.orgPos[0], this.orgPos[1] + this.clearAnce, (this.height - this.clearAnce * 4) / 2, setFullEight.lineWidth, setFullEight.color);
        shu.setShu();
    },
    setShu2: function() {
        shu.setParm(this.orgPos[0], this.orgPos[1] + this.clearAnce + this.height / 2, (this.height - this.clearAnce * 4) / 2, setFullEight.lineWidth, setFullEight.color);
        shu.setShu();
    },
    setShu3: function() {
        shu.setParm(this.orgPos[0] + this.length, this.orgPos[1] + this.clearAnce, (this.height - this.clearAnce * 4) / 2, setFullEight.lineWidth, setFullEight.color);
        shu.setShu();
    },
    setShu4: function() {
        shu.setParm(this.orgPos[0] + this.length, this.orgPos[1] + this.clearAnce + this.height / 2, (this.height - this.clearAnce * 4) / 2, setFullEight.lineWidth, setFullEight.color);
        shu.setShu();
    }
};

function set0(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
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

function set1(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
    if (clr) {
        setFullEight.color = clr;
    }
    setFullEight.setShu3();
    setFullEight.setShu4();
}

function set2(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
    if (clr) {
        setFullEight.color = clr;
    }
    setFullEight.setHeng1();
    setFullEight.setShu3();
    setFullEight.setHeng2();
    setFullEight.setShu2();
    setFullEight.setHeng3();
}

function set3(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
    if (clr) {
        setFullEight.color = clr;
    }
    setFullEight.setHeng1();
    setFullEight.setHeng2();
    setFullEight.setHeng3();
    setFullEight.setShu3();
    setFullEight.setShu4();
}

function set4(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
    if (clr) {
        setFullEight.color = clr;
    }
    setFullEight.setShu1();
    setFullEight.setShu3();
    setFullEight.setShu4();
    setFullEight.setHeng2();
}

function set5(posX, posY, lwh, clr) {
    setFullEight.orgPos[0] = posX;
    setFullEight.orgPos[1] = posY;
    if (lwh) {
        setFullEight.lineWidth =lwh;
    }
    if (clr) {
        setFullEight.color = clr;
    }
    setFullEight.setHeng1();
    setFullEight.setHeng2();
    setFullEight.setHeng3();
    setFullEight.setShu1();
    setFullEight.setShu4();
}

function set6(posX, posY, lwh, clr) {
    set5(posX, posY, lwh, clr);
    setFullEight.setShu2();
}

function set7(posX, posY, lwh, clr) {
    set1(posX, posY, lwh, clr);
    setFullEight.setHeng1();
}

function set8(posX, posY, lwh, clr) {
    set6(posX, posY, lwh, clr);
    setFullEight.setShu3();
}

function set9(posX, posY, lwh, clr) {
    set5(posX, posY, lwh, clr);
    setFullEight.setShu3();
}

function drawCircle(posX, posY, lineWidth, clr) {
    ctx.lineWidth = lineWidth || 3;
    ctx.strokeStyle = clr || '#000';
    ctx.beginPath();
    ctx.arc(posX, posY, 2, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.closePath();
}

var clock = {
    hourNum1Pos: [50, 50],
    hourNum2Pos: [0, 0],
    minuNum1Pos: [0, 0],
    minuNum2Pos: [0, 0],
    secNum1Pos: [0, 0],
    secNum2Pos: [0, 0],
    colonInterVal: 20,
    colon1Pos: [0, 0], //表示冒号中心坐标
    colon2Pos: [0, 0],
    numLength: 50,
    numHeight: 100,
    numInterVal: 20,
    lineWidth: 8,
    time: {
        hour: 0,
        minu: 0,
        sec: 0
    },
    setNumLenth: function(val) {
        clock.numLength = val;
    },
    setNumHeight: function(val) {
        clock.numHeight = val;
    },
    setClockPos: function(pos) { //pos:时钟数字位置
        if (pos) {
            clock.hourNum1Pos[0] = pos[0];
            clock.hourNum1Pos[1] = pos[1];
        }
        clock.hourNum2Pos[0] = clock.hourNum1Pos[0] + clock.numLength + clock.numInterVal;
        clock.hourNum2Pos[1] = clock.hourNum1Pos[1];
        clock.minuNum1Pos[0] = clock.hourNum2Pos[0] + clock.numLength + clock.numInterVal * 2;
        clock.minuNum1Pos[1] = clock.hourNum2Pos[1];
        clock.minuNum2Pos[0] = clock.minuNum1Pos[0] + clock.numLength + clock.numInterVal;
        clock.minuNum2Pos[1] = clock.minuNum1Pos[1];
        clock.secNum1Pos[0] = clock.minuNum2Pos[0] + clock.numLength + clock.numInterVal * 2;
        clock.secNum1Pos[1] = clock.minuNum2Pos[1];
        clock.secNum2Pos[0] = clock.secNum1Pos[0] + clock.numLength + clock.numInterVal;
        clock.secNum2Pos[1] = clock.secNum1Pos[1];
        clock.colon1Pos[0] = clock.hourNum2Pos[0] + clock.numInterVal + clock.numLength;
        clock.colon1Pos[1] = clock.hourNum2Pos[1] + clock.numHeight / 2;
        clock.colon2Pos[0] = clock.minuNum2Pos[0] + clock.numInterVal + clock.numLength;
        clock.colon2Pos[1] = clock.minuNum2Pos[1] + clock.numHeight / 2;
    },
    drawSingleNumber: function(num, pos, lwh, clr) {
        switch (num) {
            case 0:
                set0(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 1:
                set1(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 2:
                set2(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 3:
                set3(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 4:
                set4(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 5:
                set5(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 6:
                set6(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 7:
                set7(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 8:
                set8(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            case 9:
                set9(pos[0], pos[1], lwh || clock.lineWidth, clr);
                break;
            default:
                break;
        }
    },
    /**
     *@param {object} time
     *@param {number} time.hour
     *@param {number} time.minu
     *@param {number} time.sec
     *
     */
    setTime: function(time) {
        if (time.hour >= 24 || time.hour < 0) return;
        if (time.minu >= 60 || time.minu < 0) return;
        if (time.sec >= 60 || time.sec < 0) return;
        clock.time = time;
    },
    runTime: function() {
        clock.time.sec++;
        if (clock.time.sec === 60) {
            clock.time.sec = 0;
            clock.time.minu++;
        }
        if (clock.time.minu === 60) {
            clock.time.minu = 0;
            clock.time.hour++;
        }
        if (clock.time.hour === 24) {
            clock.time.hour = 0;
        }
    },
    showColon: function() {
        drawCircle(clock.colon1Pos[0], clock.colon1Pos[1] - clock.colonInterVal / 2);
        drawCircle(clock.colon1Pos[0], clock.colon1Pos[1] + clock.colonInterVal / 2);
        drawCircle(clock.colon2Pos[0], clock.colon1Pos[1] - clock.colonInterVal / 2);
        drawCircle(clock.colon2Pos[0], clock.colon1Pos[1] + clock.colonInterVal / 2);
    },

    showTime: function(time) {
        if (time) {
            if (time.hour >= 24 || time.hour < 0) return;
            if (time.minu >= 60 || time.minu < 0) return;
            if (time.sec >= 60 || time.sec < 0) return;
            clock.time = time;
        }
        clock.drawSingleNumber(Math.floor(clock.time.hour / 10), clock.hourNum1Pos);
        clock.drawSingleNumber(Math.floor(clock.time.hour % 10), clock.hourNum2Pos);
        clock.drawSingleNumber(Math.floor(clock.time.minu / 10), clock.minuNum1Pos);
        clock.drawSingleNumber(Math.floor(clock.time.minu % 10), clock.minuNum2Pos);
        clock.drawSingleNumber(Math.floor(clock.time.sec / 10), clock.secNum1Pos);
        clock.drawSingleNumber(Math.floor(clock.time.sec % 10), clock.secNum2Pos);
    }
};

window.onload = function() {
    clock.setClockPos();
    clock.showColon();
    clock.showTime(getNowTime());
    setInterval(function() {
        ctx.clearRect(0, 0, drawing.width, drawing.height);
        clock.showColon();
        clock.runTime();
        clock.showTime();
    }, 1000);
}
