(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



// stage content:
(lib.RECOVER_Untitled5_20211574658 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(6,2,1).p("AlHAhQGRBMD4ib");
	this.shape.setTransform(168.4799,303.2319,0.6327,0.5771);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(0.1,1,1).p("AikAuQCkjRClDb");
	this.shape_1.setTransform(164.4837,289.2036,0.6327,0.5771);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(0.1,1,1).p("AnzigQHNj/IaD/IAAHBIvnAAg");
	this.shape_2.setTransform(164.7673,115.9503,0.6327,0.5771);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC66CC").s().p("AnzEhIAAnBQHNj/IaD/IAAHBg");
	this.shape_3.setTransform(164.7673,115.9503,0.6327,0.5771);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(0.1,1,1).p("An9iGIP7AAIAAENIv7AAg");
	this.shape_4.setTransform(164.7673,140.9584,0.6327,0.5771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("An9CHIAAkNIP7AAIAAENg");
	this.shape_5.setTransform(164.7673,140.9584,0.6327,0.5771);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(0.1,1,1).p("AkDkDIIHIH");
	this.shape_6.setTransform(148.3508,285.5652,0.6327,0.5771);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(0.1,1,1).p("AD/j+In9H9");
	this.shape_7.setTransform(180.9328,285.8538,0.6327,0.5771);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(0.1,1,1).p("Aj+woIH9AAMAAAAhRQj/h4j+B4g");
	this.shape_8.setTransform(139.486,209.8593,0.3107,0.5771);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996666").s().p("Aj+QpMAAAghRIH9AAMAAAAhRQj/h4j+B4g");
	this.shape_9.setTransform(139.486,209.8593,0.3107,0.5771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#333333").ss(0.1,1,1).p("Aj+woIH9AAMAAAAhRQj/hGj+BGg");
	this.shape_10.setTransform(188.836,209.8593,0.3107,0.5771);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#996666").s().p("Aj+QpMAAAghRIH9AAMAAAAhRQj/hGj+BGg");
	this.shape_11.setTransform(188.836,209.8593,0.3107,0.5771);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#333333").ss(0.1,1,1).p("Aj+woIH9AAMAAAAhRQjGiqk3Cqg");
	this.shape_12.setTransform(164.4837,210.2593,0.6327,0.5771);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996666").s().p("Aj+QpMAAAghRIH9AAMAAAAhRQjGiqk3Cqg");
	this.shape_13.setTransform(164.4837,210.2593,0.6327,0.5771);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(450.6,338.3,67.5,211.3);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'EBB9C66CF919A14A865FA7A444DD5315',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['EBB9C66CF919A14A865FA7A444DD5315'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;