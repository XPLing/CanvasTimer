(function (window, document, $){
	/**
	 * [ditgit description]
	 * @type {数字数组}
	 */
	var ditgits = {
		Alphabet: {
			x: [
				[1, 1, 1, 0, 1, 1, 1],
				[1, 1, 1, 0, 1, 1, 1],
				[0, 1, 1, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0],
				[0, 1, 1, 1, 1, 1, 0],
				[1, 1, 1, 0, 1, 1, 1],
				[1, 1, 1, 0, 1, 1, 1]
			],
			p: [
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 0, 0, 0]
			],
			l: [
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1]
			],
			b: [
				[1, 1, 1, 1, 0, 0, 0],
				[1, 1, 1, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1]
			],
			y: [
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1],
				[1, 0, 1, 1, 1, 0, 1],
				[0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 1, 0, 0, 0],
				[0, 0, 1, 1, 1, 0, 0],
				[1, 1, 1, 1, 1, 1, 1]
			],
		},
		Symbol: {
			":": [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
				[0, 1, 1, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			".": [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 1, 1, 0],
				[0, 1, 1, 0]
			]
		},
		Num: {
			0: [
				[0, 0, 1, 1, 1, 0, 0],
				[0, 1, 1, 0, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 0, 1, 1, 0],
				[0, 0, 1, 1, 1, 0, 0]
			],
			1: [
				[0, 0, 0, 1, 1, 0, 0],
				[0, 1, 1, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[1, 1, 1, 1, 1, 1, 1]
			],
			2: [
				[0, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 1, 1, 1, 1, 1]
			],
			3: [
				[1, 1, 1, 1, 1, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 1, 1, 1, 0, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 0]
			],
			4: [
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 1, 0],
				[0, 0, 1, 1, 1, 1, 0],
				[0, 1, 1, 0, 1, 1, 0],
				[1, 1, 0, 0, 1, 1, 0],
				[1, 1, 1, 1, 1, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 1, 1]
			],
			5: [
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 1, 1, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 0]
			],
			6: [
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 1, 1, 0, 0, 0],
				[0, 1, 1, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 0],
				[1, 1, 0, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 0]
			],
			7: [
				[1, 1, 1, 1, 1, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0],
				[0, 0, 1, 1, 0, 0, 0]
			],
			8: [
				[0, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 1, 1, 0]
			],
			9: [
				[0, 1, 1, 1, 1, 1, 0],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[1, 1, 0, 0, 0, 1, 1],
				[0, 1, 1, 1, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 0, 1, 1],
				[0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 1, 1, 0, 0],
				[0, 1, 1, 0, 0, 0, 0]
			]
		}
	};
	var Canvas = function(elem, opt) {					
		this.canvasTimer = null;
		this.elem = elem;
		this.ctx = this.elem[0].getContext('2d');
		this.optionsInit(this,opt);
		this.balls = [];//小球数组(掉落的小球)
		this.currentT = this.options.dateType?this.getTimeSeconds(this.options.endT,this.options.countDown) : new Date();
		this.ischange = false;//标识balls数组是否已经被存过数据
	};	
	Canvas.Default = {
		endT: new Date(2017, 1, 8, 0, 0, 0).getTime(),
		countDown: true,
		ctx_width: $(window).outerWidth(),
		ctx_height: $(window).outerHeight(),
		ctx_wPercentage: 0.8,
		ctx_hPercentage: 0.9,
		ctx_ball_hPercentage:0.5,//数字高度占画布的比例
		ctx_arcRM: 10,
		ctx_arcNum: 7,
		ctx_arcP: 1,
		ctx_left: 0.1,
		colors: ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"],
		mainColor: "#e56b6b",
	};
	Canvas.prototype = {
		create: function() {			
			var _this = this;
			_this.ctx.clearRect(0, 0, _this.ctx.canvas.width, _this.ctx.canvas.height);			
			var type = _this.options.dateType;
			var time = type?_this.getTimeFormat(_this.currentT) : _this.options.endT.toString();	
			var x , ditgitObj , num;
			if (!_this.endAnimat) {
				if (+time < 0) {
					time = "xpl";
					setTimeout(function(){
						_this.endAnimat = true;
					},1000);
				}
				if (time.length > 8 && type) {
					_this.r = Math.round(((_this.options.ctx_width * (1 - _this.options.ctx_left * 2)) - 11 * _this.options.ctx_arcRM) / 136) - 1;
					_this.hasDay = true;
				}
				if (_this.timeNum) {
					if (time.length != _this.timeNum) {
						_this.timeNum = time.length;
						_this.MLeft = (_this.options.ctx_width - (_this.timeNum * (14 * (_this.r + 1) + _this.options.ctx_arcRM) - _this.options.ctx_arcRM)) / 2;
					}
				}
				for (var i = 0; i < time.length; i++) {
					ditgitObj = ditgits.Num;
					num = time[i];
					if (type) {
						if (num == ":") {
							ditgitObj = ditgits.Symbol;
							x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
							if (i > 2 && i < 7) {
								x = _this.MLeft + (i - 1) * (7 * (2 * (_this.r + 1)) + 10) + (4 * (2 * (_this.r + 1)) + 10);
							} else if (i > 7) {
								x = _this.MLeft + (i - 2) * (7 * (2 * (_this.r + 1)) + 10) + 2 * (4 * (2 * (_this.r + 1)) + 10);
							}
						} else if (num == ".") {
							ditgitObj = ditgits.Symbol;
							x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
						} else if (/^\D+$/.test(num)) {
							ditgitObj = ditgits.Alphabet;
							x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
						} else {
							if (i > 2 && i < 5) {
								x = _this.MLeft + (i - 1) * (7 * (2 * (_this.r + 1)) + 10) + (4 * (2 * (_this.r + 1)) + 10);
							} else if (i > 5 && i < 8) {
								x = _this.MLeft + (i - 2) * (7 * (2 * (_this.r + 1)) + 10) + 2 * (4 * (2 * (_this.r + 1)) + 10);
							} else if (i > 8) {
								x = _this.MLeft + (i - 3) * (7 * (2 * (_this.r + 1)) + 10) + 3 * (4 * (2 * (_this.r + 1)) + 10);
							} else {
								x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
							}
							num = parseInt(num);
						}
					} else {
						if (/^\D+$/.test(num)) {
							ditgitObj = ditgits.Alphabet;
							x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
						} else {
							x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
							num = parseInt(num);
						}
					}
					_this.canvas_arc(x, 0, 0, 2 * Math.PI, false, ditgitObj, num);
				}
				_this.canvas_updata(_this.ctx, 0, _this.r, _this.balls);
			}else {	
				var ballArr = _this.balls;
				clearInterval(_this.canvasTimer);	
				if (!type) {
					ditgitObj = ditgits.Alphabet;
					var nameStr = "xpl";
					for (var j = 0; j < nameStr.length; j++) {
						num = nameStr[j];
						x = _this.MLeft + j * (7 * (2 * (_this.r + 1)) + 10);
						_this.pushBall(x, 0, _this.r, num, ballArr, _this.options.colors,ditgitObj);
					}
				}
				_this.canvasTimer = setInterval(function(){
					_this.ctx.clearRect(0, 0, _this.ctx.canvas.width, _this.ctx.canvas.height);
					_this.balls_render(_this.ctx, _this.balls);
					_this.balls_updata(_this.ctx, ballArr);
					if(ballArr.length <= 0 && _this.ischange){
						clearInterval(_this.canvasTimer);
					}
				},50);
								
			}			
		},
		getTimeSeconds: function(endT,type) {
			if (type) {
				var seconds = 0;
				seconds = parseInt((new Date(endT).getTime() - new Date().getTime()) / 1000);
				return seconds > 0 ? seconds : 0;
			}else{
				return new Date().getTime();
			}			
		},
		CDTimerFormat:function (seconds){
			var _this = this;
			var h = parseInt(seconds / 3600);
			var m = parseInt((seconds - h * 3600) / 60);
			var s = parseInt((seconds - h * 3600 - m * 60));
			var time = "";
			if (h < 10) {
				h = "0" + h;
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			time = h + ":" + m + ":" + s;
			if (h >= 24) {
				var day = parseInt(h / 24);
				if (day < 10) {
					day = "0" + day;
				}
				h = h % 24;
				if (h < 10) {
					h = "0" + h;
				}
				time = day + "."+h + ":" + m + ":" + s;
			} else if (h < 24 && _this.hasDay) {
				time = "00."+h + ":" + m + ":" + s;
			}
			return time;
		},
		CTimerFormat:function (seconds){
			var _this = this;
			var dates = new Date(seconds);
			var h = dates.getHours();
			var m = dates.getMinutes();
			var s = dates.getSeconds();
			var time = "";
			if (h < 10) {
				h = "0" + h;
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}			
			time = h + ":" + m + ":" + s;			
			return time;
		},
		getTimeFormat: function(seconds) {
			var _this = this;
			var time = "";
			if (_this.options.countDown) {
				time = _this.CDTimerFormat(seconds);
			} else {
				time = _this.CTimerFormat(seconds);
			}			
			return time;
		},
		/**
		 * canvas_arc 遍历ditgits数组以绘制数字
		 * @param num  {[要绘制的数字]}
		 * @return {[type]}
		 */
		canvas_arc: function(x, y, start, end, direction, ditgits, num) {			
			var _this = this;			
			for (var i = 0; i < ditgits[num].length; i++) {
				var dit = ditgits[num][i];
				for (var j = 0; j < dit.length; j++) {
					var item = dit[j];
					if (item == 1) {
						_this.ctx.beginPath();
						_this.ctx.arc(x + j * 2 * (_this.r + 1) + (_this.r + 1), y + i * 2 * (_this.r + 1) + (_this.r + 1), _this.r, start, end, direction);
						_this.ctx.fillStyle = _this.options.mainColor;
						_this.ctx.fill();
						_this.ctx.closePath();
					}
				}

			}
		},
		/*
		* canvas_arcOne
		* 绘制掉落的小球
		*/
		canvas_arcOne: function(ctx, x, y, r, start, end, direction, color) {
			ctx.beginPath();
			ctx.arc(x, y, r, start, end, direction);
			ctx.fillStyle = color;
			ctx.fill();
			ctx.closePath();
		},
		/*
		* canvas_updata
		* 通过判断时间的改变来记录小球的位置并存进ballArr
		*/
		canvas_updata: function(ctx, y, r, ballArr) {			
			var _this = this;
			var type = _this.options.dateType;
			var pushBall = _this.pushBall;
			var nextT = type ? _this.getTimeSeconds(_this.options.endT,_this.options.countDown) : new Date();
			var num, x , nS , cS;
			var ditgitObj = ditgits.Num;
			if (type) {
				var countDown = _this.options.countDown;
				var days = 0;
				var cdDate =countDown? null : new Date (_this.currentT);
				var cdDate_N =countDown? null : new Date (nextT);
				var nH = countDown? parseInt(nextT / 3600) : cdDate_N.getHours();
				var nM = countDown? parseInt((nextT - nH * 3600) / 60) : cdDate_N.getMinutes();
				nS = countDown? parseInt((nextT - nH * 3600 - nM * 60)) : cdDate_N.getSeconds();
				var cH = countDown? parseInt(_this.currentT / 3600) : cdDate.getHours();
				var cM = countDown? parseInt((_this.currentT - cH * 3600) / 60) : cdDate.getMinutes();
				cS = countDown? parseInt((_this.currentT - cH * 3600 - cM * 60)) : cdDate.getSeconds();
				
				if (_this.hasDay) {
					days = 2 * (7 * (2 * (_this.r + 1)) + 10) + (4 * (2 * (_this.r + 1)) + 10);
				}
				if (nS != cS) {
					if (!_this.ischange) {
						_this.ischange = true;
					}
					if (parseInt(nH / 10) != parseInt(cH / 10)) {
						num = parseInt(cH / 10);
						x = _this.MLeft + days + 0 * (7 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					if (parseInt(nH % 10) != parseInt(cH % 10)) {
						num = parseInt(cH % 10);
						x = _this.MLeft + days + 1 * (7 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					if (parseInt(nM / 10) != parseInt(cM / 10)) {
						num = parseInt(cM / 10);
						x = _this.MLeft + days + 2 * (7 * (2 * (_this.r + 1)) + 10) + (4 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					if (parseInt(nM % 10) != parseInt(cM % 10)) {
						num = parseInt(cM % 10);
						x = _this.MLeft + days + 3 * (7 * (2 * (_this.r + 1)) + 10) + (4 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					if (parseInt(nS / 10) != parseInt(cS / 10)) {
						num = parseInt(cS / 10);
						x = _this.MLeft + days + 4 * (7 * (2 * (_this.r + 1)) + 10) + 2 * (4 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					if (parseInt(nS % 10) != parseInt(cS % 10)) {
						num = parseInt(cS % 10);
						x = _this.MLeft + days + 5 * (7 * (2 * (_this.r + 1)) + 10) + 2 * (4 * (2 * (_this.r + 1)) + 10);
						pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
					}
					_this.currentT = nextT;
				}
			} else {
				if (_this.options.endT >= 0) {
					nS = nextT.getSeconds();
					cS = _this.currentT.getSeconds();
					if (nS != cS) {
						if (!_this.ischange) {
							_this.ischange = true;
						}
						var currentNum = _this.options.endT.toString();
						var nextNum = (+_this.options.endT) - 1;
						for (var i = 0; i < currentNum.length; i++) {
							var nN = nextNum.toString()[i];
							var cN = currentNum[i];
							if (nN != cN) {
								num = parseInt(cN);
								x = _this.MLeft + i * (7 * (2 * (_this.r + 1)) + 10);
								pushBall(x, y, r, num, ballArr, _this.options.colors,ditgitObj);
							}
						}
						_this.options.endT--;
						_this.currentT = nextT;
					}
				}		
			}			
			_this.balls_render(_this.ctx, _this.balls);
			_this.balls_updata(ctx, ballArr);
			if(ballArr.length <= 0 && _this.ischange){
				clearInterval(_this.canvasTimer);
			}
		},
		/*
		*	pushBall
		*	存储小球
		*	vxz中的Math.pow(-1, Math.ceil(Math.random() * 1000))表示随机的正负1
		*/
		pushBall: function(x, y, r, num, ballArr, colors,ditgit) {
			for (var i = 0; i < ditgit[num].length; i++) {
				var dit = ditgit[num][i];
				for (var j = 0; j < dit.length; j++) {
					var item = dit[j];
					if (item == 1) {
						var ballinfo = {
							x: x + j * 2 * (r + 1) + (r + 1),
							y: y + i * 2 * (r + 1) + (r + 1),
							r: r,
							start: 0,
							end: 2 * Math.PI,
							direction: false,
							num: num,
							vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 5,
							vy: -5,
							g: 1.5 + Math.random(),
							color: colors[Math.floor(Math.random() * colors.length)]
						};
						ballArr.push(ballinfo);
					}
				}
			}
		},
		/*
		*	balls_render
		*	绘制ballArr里存储的小球
		*/
		balls_render: function(ctx, ballArr) {
			var _this = this;
			for (var i = 0; i < ballArr.length; i++) {
				var ball = ballArr[i];
				_this.canvas_arcOne(ctx, ball.x, ball.y, ball.r, ball.start, ball.end, ball.direction, ball.color);
			}
		},
		/*
		*	balls_updata
		*	绘制ballArr里存储的小球的运动轨迹
		*/
		balls_updata: function(ctx, ballArr) {
			var _this = this;
			for (var i = 0; i < ballArr.length; i++) {
				var ball = ballArr[i];
				ball.x += ball.vx;
				ball.y += ball.vy;
				ball.vy += ball.g;
				if (ball.y >= ctx.canvas.height - ball.r) {
					ball.y = ctx.canvas.height - ball.r;
					ball.vy = -ball.vy * 0.75;
				}
				if ((ball.x + ball.r) <= -2 || (ball.x - ball.r) >= ctx.canvas.width + 1) {
					ballArr.splice(i, 1);
					if (i > 0) {
						i -= 1;
					}
				}
			}						
		},
		optionsInit: function(_this, opt) {
			_this.options = $.extend({}, Canvas.Default, opt || {});
			_this.options.ctx_width = Math.round(_this.options.ctx_width * _this.options.ctx_wPercentage);
			_this.options.ctx_height = Math.round(_this.options.ctx_height * _this.options.ctx_hPercentage);
			_this.elem[0].width = _this.options.ctx_width;
			_this.elem[0].height = _this.options.ctx_height;
			_this.MLeft = _this.options.ctx_width * _this.options.ctx_left;
			if (_this.options.dateType) {
				_this.r = Math.round(((_this.options.ctx_width * (1 - _this.options.ctx_left * 2)) - 8 * _this.options.ctx_arcRM) / 100) - 1;
			} else {
				_this.timeNum = _this.options.endT.toString().length;
				_this.r = Math.round((((_this.options.ctx_width * (1 - _this.options.ctx_left * 2) + _this.options.ctx_arcRM) / _this.timeNum) - _this.options.ctx_arcRM) / 14) - 1;
				var totalH = 10 * (2 * (_this.r + 1));
				if (totalH > _this.options.ctx_height*0.65) {
					_this.r = Math.round(((_this.options.ctx_height * _this.options.ctx_ball_hPercentage) / 20)) - 1;
					_this.MLeft = (_this.options.ctx_width - (_this.timeNum * (14 * (_this.r + 1) + _this.options.ctx_arcRM) - _this.options.ctx_arcRM)) / 2;
				}
			}
		},
		/**
		 * clear
		 * @param elem  {[canvas对象]}
		 * @param opt  {[实例化以后的this.options]}
		 * @return {[type]}
		 */
		clear: function(elem, opt) {
			var _this = this;
			_this.options.ctx_width = $(window).outerWidth();
			_this.options.ctx_height = $(window).outerHeight();
			_this.optionsInit(_this,_this.options);
			clearInterval(_this.canvasTimer);
			_this.canvasTimer = setInterval(function() {
				_this.create();
			}, 50);
		},
		resizeFn: function(elem,opt) {
			var _this=this;			
			_this.clear(elem,opt);		
		}
	};
	Canvas.init = function (elem,opt){
		var type = opt.endT;
		if (type) {
			if(!!~type.indexOf(":") || !!~type.indexOf("/")){
				opt.dateType = true;
			}else{
				opt.dateType = false;
			}
			var _this = new this(elem,opt);
			_this.canvasTimer=setInterval(function(){
		   		_this.create();
		   	},50);
		   	window.onresize = function() {
				_this.resizeFn(elem,opt);	
			}; 
		}else{
			alert("时间未设置");
			return false;
		}
		 	  
	};
	$.fn.myCanvas = function(opt) {
		var _this = this;		
		return Canvas.init(_this,opt);
	};

})(window, document, jQuery);
