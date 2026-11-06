(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG_1 = function() {
	this.initialize(img.BG_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,959,849);


(lib.BG_2 = function() {
	this.initialize(img.BG_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,808,763);


(lib.BG_3 = function() {
	this.initialize(img.BG_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,809,760);


(lib.BG_4 = function() {
	this.initialize(img.BG_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,763,760);


(lib.BG_5 = function() {
	this.initialize(img.BG_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,800);


(lib.BG_6 = function() {
	this.initialize(img.BG_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1252,1169);


(lib.shadow = function() {
	this.initialize(img.shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,255);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.triangle_e20074 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20074").s().p("Am5E5QgEAAG/pxIG4Jxg");
	this.shape.setTransform(44.1728,31.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangle_e20074, new cjs.Rectangle(0,0,88.4,62.7), null);


(lib.triangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f().ls(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,0.741],-9.9,-51.1,10,51.1).ss(0.2,1,1).p("AoHEbIQQACIoQo5g");
	this.shape.setTransform(52.05,28.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(186,0,102,0.4)","rgba(186,0,102,0.698)"],[0.012,1],-3.6,13.6,-3.6,25.2).s().p("AoIEbIIBo3IIQI5g");
	this.shape_1.setTransform(52.05,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,0.741],-9.9,-51.1,10,51.1).ss(0.2,1,1).p("AoHEbIQQACIoQo5g");
	this.shape_2.setTransform(52.05,28.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E20074","#E20074"],[0.086,0.875],-3.6,13.6,-3.6,25.2).s().p("AoIEbIIBo3IIQI5g");
	this.shape_3.setTransform(52.05,28.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangle, new cjs.Rectangle(-1,-1,106.1,59), null);


(lib.shadow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shadow();
	this.instance.setTransform(0,0,0.7233,0.7233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow_1, new cjs.Rectangle(0,0,210.5,184.5), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiFEBIAAgkIAQAAQAmAAARgQQARgRAAgnIAAlxIgGAAQhAAAgjAkQgiAjAAA/IAAAFIgfAAIAAivIGvAAIAACvIgfAAIAAgFQAAg/gigjQgjgkhBAAIgFAAIAAFxQAAAnARARQARAQAmAAIAQAAIAAAkgABxBSIAAhmIBnAAIAABmgAjXBSIAAhmIBnAAIAABmg");
	this.shape.setTransform(21.625,25.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,43.3,51.5), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egl9ADPIAAmdMBL7AAAIAAGdg");
	mask.setTransform(242.95,20.65);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAgvACsQgxgigChBICGAAQACARANAGQANAHAigBQAjABAMgGQALgFAAgMQABgJgHgHQgHgGgTgDIhEgIQg2gIgegNQgfgOgOgYQgOgZAAgqQAAgpAWgcQAVgcAqgOQAqgPA7gBQBdABArAiQAtAiAEA/IiEAAQgDgOgMgHQgKgGgcAAQgjAAgKAFQgLAFAAALQAAAKAIAFQAHAGASABIBEAJQBHALAlAfQAkAeAAA4QAAAsgXAdQgXAcgqANQgoANg+ABQhjAAgugjgAS1C1Qg1gagbgvQgbguAAg+QAAg7AbgwQAbguA1gaQA2gbBKAAQA7AAAwAUQAuATAdAjQAdAjAEAuIiGAAQgGgXgWgMQgWgKgfAAQgfAAgWALQgXAMgNAWQgMAYAAAbQAAAdAMAXQANAXAXALQAYAMAdAAQAfgBAWgKQAWgLAGgYICGAAQgEAugdAjQgdAjguAUQgvASg8ABQhLgBg1gZgA0cC1Qg3gbgaguQgbguAAg+QAAg7AcgvQAcgvA2gaQA3gbBKAAQA/ABAwASQAuAQAeAgQAcAeAFApIiPAAQgGgNgSgIQgRgHgkAAQgfAAgYAMQgYAMgNAWQgOAXAAAbQAAAgANAWQANAXAYANQAZAMAigBQAfAAASgEQATgGAJgKQAEgFADgFIhVAAIAAheIDgAAIAAAeQABA/gbAtQgbAtgxAXQgxAYhIAAQhRAAg1gagA81ClQg4gqAAhRIAAjuIB/AAIAADdQAAAkAUATQAVARAoABQAogBATgRQAVgTAAgkIAAjdIB/AAIAADuQAABSg5ApQg3AqhfAAQhhAAg3gqgAdTDGIhciNIgDAAIgrAwIAABdIiAAAIAAmKICAAAIAACMIADAAIB8iMICqAAIigCqICcDggAN/DGIAAmKICAAAIAAGKgAIMDGIAAmKICAAAIAAEdIC6AAIAABtgABDDGIAAmKIDuAAQBKAAAhAeQAgAfAAAwQAAAdgPAXQgRAXgUALIAAACQAYAMARAVQAQAWAAAgQAAAvgjAfQgjAghMAAgADDBiIBbAAQAPAAAGgHQAJgGAAgNQAAgNgJgHQgIgHgNAAIhbAAgADDguIBWAAQAPAAAHgGQAIgHgBgMQABgNgIgGQgIgHgOAAIhWAAgAibDGIiwjaIgEAAIAADaIiAAAIAAmKICCAAICwDaIAEAAIAAjaIB/AAIAAGKgAtrDGIAAmKIFJAAIAABrIjKAAIAAAlIDCAAIAABqIjCAAIAAAlIDKAAIAABrgEggaADGIgWg9IioAAIgWA9IiPAAICumKICXAAICtGKgEghZAAeIgohsIgEAAIgqBsIBWAAg");
	this.shape.setTransform(242.95,20.65);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,485.9,41.3), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A86CcIAAk3MA51AAAIAAE3g");
	mask_1.setTransform(185.1,15.575);

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AZZCEQgjgYgEgrIA0AAQAEAYAWAMQAVALAlAAQApAAASgMQATgMAAgVQAAgSgMgKQgNgLgdgEIg0gIQgjgEgWgLQgWgJgJgRQgLgRAAgXQAAgbAQgUQAQgVAcgLQAcgLAmAAQA8AAAhAXQAgAYAEApIgzAAQgFgWgTgLQgTgLgjAAQglAAgSAMQgTAMAAAUQAAAQANAKQAMAKAeAEIA1AIQAwAHAYAUQAYAUAAAkQAAAegQAUQgPAVgdAKQgcALgpAAQg/AAgigYgAgICIQgmgTgVgkQgUgjgBguQABgtAUgjQAUgjAngUQAmgUA1AAQApAAAiAMQAgALAVAUQAVAVAGAZIg5AAQgJgTgZgNQgZgMgnAAQglAAgbAOQgaAOgNAYQgPAaAAAgQAAAiAPAZQANAYAbAPQAbANAmAAQAiAAAXgLQAYgMANgTQAJgOACgSIhfAAIAAgnICUAAIAAANQAAAugTAgQgUAggkASQgjARgwAAQg2AAgngUgAUQCWIAAkrIDnAAIAAArIi0AAIAABSICtAAIAAArIitAAIAABYIC0AAIAAArgAOOCWIAAkrICbAAQAuAAAiASQAhARASAiQASAiAAAuQAAAvgSAiQgSAhghASQgiASguAAgAPBBrIBgAAQAyAAAcgbQAbgbAAg1QAAgzgbgbQgcgcgyAAIhgAAgAHcCWIAAkrIDmAAIAAArIi0AAIAABSICuAAIAAArIiuAAIAABYIC0AAIAAArgAFECWIAAkrIAyAAIAAErgAitCWIgfhBIipAAIgfBBIg3AAICSkrIAyAAICSErgAjfAqIhAiHIgDAAIg/CHICCAAgAo3CWIAAjXIgCAAIh5CmIgQAAIh5imIgCAAIAADXIgzAAIAAkrIAvAAICFC6IAEAAICGi6IAuAAIAAErgA0gCWIAAkrIDmAAIAAArIi0AAIAABSICuAAIAAArIiuAAIAABYIC0AAIAAArgA24CWIAAkrIAyAAIAAErgA86CWIAAkrICbAAQAuAAAiASQAgARATAiQASAiAAAuQAAAvgSAiQgSAhghASQgjASgtAAgA8IBrIBgAAQAzAAAbgbQAbgbAAg1QAAgzgbgbQgbgcgzAAIhgAAg");
	this.shape_1.setTransform(185.1,15.575);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,370.2,31.2), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwhEAIAAn/MAhDAAAIAAH/g");
	mask_2.setTransform(105.75,25.625);

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AugEAQg1AAgmglQgmgmAAg1IAAj/QAAg1AmgmQAmglA1AAIdBAAQA1AAAmAlQAmAmAAA1IAAD/QAAA1gmAmQgmAlg1AAg");
	this.shape_2.setTransform(105.75,25.625);

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,211.5,51.3), null);


(lib.cta_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20074").s().p("AgNA9QgKghgVgHQgZgKg0gJQAvgIAYgIQAZgIAMghIANhBIAMA9QAKAiAUAIQAYAKA4AJQgpAHgTAFQgjAKgIAUQgJAYgKA1QgIgpgFgTg");
	this.shape.setTransform(103.5285,15.4025,0.2221,0.2221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E20074").s().p("AgIAnQgGgVgOgFQgMgFglgHQAbgDATgGQAQgGAHgVIAIgpIAHAmQAHAWANAFQAQAHAjAFQgaAEgNAEQgWAGgFAMQgFAPgHAjQgEgagEgMg");
	this.shape_1.setTransform(100.0136,14.2032,0.2221,0.2221);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E20074").s().p("AgSAsQgIgUgjgKIg8gMIApgHQAWgFARgHQAUgIAKgiIALg9IAOBBQALAhAaAIQAZAIAuAIQgzAJgaAKQgVAHgKAhQgGATgIApQgKg4gIgVg");
	this.shape_2.setTransform(67.5416,15.4025,0.2221,0.2221);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E20074").s().p("AgLAbQgFgMgWgGIgngIQAkgFAPgHQANgFAHgWIAGgmIAJApQAHAVARAGQATAFAaAEQglAHgMAFQgNAFgHAVQgEAMgFAaQgGgjgFgPg");
	this.shape_3.setTransform(71.0509,14.2032,0.2221,0.2221);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E20074").s().p("AApB5QgOgGgHgKQgJgKgBgLIAmAAQADAFAGADQAGADAJAAQAOAAAGgGQAHgHAAgMIAAgSIgCAAQgFAHgJAFQgJAEgMAAQgSAAgNgJQgNgIgHgRQgGgPAAgWQAAgWAGgQQAHgQANgJQANgJASAAQANAAAKAGQAKAGAFAJIACAAIAAgQIAkAAIAACLQAAASgIAMQgHANgPAIQgPAHgVAAQgRAAgOgGgAAzgdQgHAKAAAQQAAARAHAJQAHAJAOAAQAOAAAHgJQAHgKAAgQQAAgQgHgKQgHgJgOAAQgOAAgHAJgAEWBFQgPgJgIgRQgIgSAAgYQAAgXAIgRQAIgRAPgJQAOgKAVAAQATAAAOAJQAOAJAIARQAHAQAAAWIAAANIhbAAQABARAGAIQAHAKAOAAQAJAAAGgEQAFgCADgIIAnAAQgEAVgRANQgSANgXAAQgUAAgOgKgAFTgQQgCgLgEgGQgHgJgNAAQgPAAgHAKQgEAGgCAKIA2AAIAAAAgAiHBBQgLgLAAgUQAAgZAUgLQAUgNAhAAIAHAAIAAgGQAAgLgFgGQgFgFgKAAQgJAAgEAEQgFAEgBAHIglAAQACgVAPgNQAQgNAXAAQAcAAAPAQQAPAPAAAaIAAA3QAAAEACACQACACADAAIAGgBIAAAcIgIADIgKABQgLAAgKgHQgGgEgCgIIgBAAQgGAJgKAFQgLAGgNAAQgUAAgMgMgAhkAPQgJAGAAAKQAAAIAEAEQAGAFAHAAQAJAAAFgEQAGgFADgGQADgIAAgIIAAgHIgHAAQgSAAgJAFgACxBKIAAiQIAmAAIAACQgAjbBKIAAhwIgCAAIgxBXIgNAAIgxhXIgCAAIAABwIgoAAIAAjIIAlAAIA8BvIACAAIA7hvIAmAAIAADIgACxhbIAAgjIAmAAIAAAjg");
	this.shape_4.setTransform(85.6322,15.5025,0.2221,0.2221);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AugEAQg1AAgmglQgmgmAAg1IAAj/QAAg1AmgmQAmglA1AAIdBAAQA1AAAmAlQAmAmAAA1IAAD/QAAA1gmAmQgmAlg1AAg");
	this.shape_5.setTransform(85.5378,15.2915,0.2221,0.2221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_, new cjs.Rectangle(62.1,9.6,46.99999999999999,11.4), null);


(lib.clicktag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
	this.shape.setTransform(1648.25,1104.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1148.3,604.2,1000.0000000000002,1000);


(lib.BG3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_3();
	this.instance.setTransform(-95,47,0.724,0.724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG3, new cjs.Rectangle(-95,47,585.7,550.3), null);


(lib.BG1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_1();
	this.instance.setTransform(-40,0,0.7119,0.7119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG1, new cjs.Rectangle(-40,0,682.8,604.4), null);


(lib.BG_image4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_6();
	this.instance.setTransform(0,0,0.5024,0.5024);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_image4, new cjs.Rectangle(0,0,629,587.3), null);


(lib.BG_image3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_5();
	this.instance.setTransform(43,8,0.725,0.725);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_image3, new cjs.Rectangle(43,8,611.9,580), null);


(lib.BG_image2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_2();
	this.instance.setTransform(-81,0,0.7409,0.7409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_image2, new cjs.Rectangle(-81,0,598.7,565.3), null);


(lib.BG_image_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.BG_4();
	this.instance.setTransform(-118,-61,0.7942,0.7943);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_image_5, new cjs.Rectangle(-118,-61,606,603.7), null);


(lib.ai_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCdIAAk6IA/AAIAAE6g");
	this.shape.setTransform(10.9849,-0.4895,0.8016,0.8016);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABLCdIgUg9IhsAAIgVA9IhBAAIBsk6IA/AAIBrE6gAgiAlIBGAAIgihmIgDAAg");
	this.shape_1.setTransform(-5.2683,-0.4895,0.8016,0.8016);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AAAlvQCYAABsBsQBsBsAACXQAACZhsBrQhsBsiYAAQiXAAhshsQhshrAAiZQAAiXBshsQBshsCXAAg");
	this.shape_2.setTransform(-0.3182,0.1117,0.8016,0.8016);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ai_icon, new cjs.Rectangle(-30.8,-30.4,61,61), null);


(lib.t_magenta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(141.6,8.85,0.4456,0.4456,0,0,0,243.2,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t_magenta, new cjs.Rectangle(33.3,-0.3,216.5,18.400000000000002), null);


(lib.t_die = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(112.85,10.3,0.442,0.442,0,0,0,185.1,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t_die, new cjs.Rectangle(31.1,3.4,163.6,13.799999999999999), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20074").s().p("AJ7BfQgOgJgJgSQgHgQAAgZQAAgZAHgPQAIgRAPgKQAPgJAUAAQATAAAOAJQAOAIAIARQAIAQAAAWIgBANIhbAAQACASAFAHQAHAKAOAAQAKAAAEgDQAHgDACgHIAoAAQgFAVgRANQgQAMgZAAQgTAAgPgJgAK4AIQgCgKgEgGQgHgIgNAAQgPAAgHAKQgEAFgBAJIA1AAIAAAAgAiUBfQgQgKgHgRQgJgSAAgXQABgXAHgRQAJgRAPgKQAOgJAVAAQASAAAOAJQAPAJAHAQQAIAPAAAXIAAAHIgBAGIhaAAQABARAFAIQAIAKAOAAQAIAAAGgDQAGgDACgHIAnAAQgEAVgRANQgRAMgXAAQgUAAgOgJgAhYAIQgBgKgFgGQgGgIgNAAQgPAAgIAKQgDAFgCAJIA1AAIAAAAgApyBfQgPgJgIgSQgIgQAAgZQAAgZAIgPQAHgQAQgLQAOgJAVAAQASAAAOAJQAPAJAIAQQAHAQAAAWIgBANIhaAAQABASAGAHQAHAKANAAQAKAAAFgDQAGgDADgHIAnAAQgEAVgSANQgQAMgZAAQgSAAgPgJgAo2AIQgBgKgEgGQgHgIgNAAQgPAAgHAKQgEAFgCAJIA1AAIAAAAgADGBbQgMgLAAgUQAAgZAUgNQAUgNAhAAIAIAAIAAgFQAAgKgFgGQgFgGgLAAQgIAAgFAEQgEAFgBAHIglAAQACgWAPgNQAOgMAYAAQAcAAAQAPQAPAQgBAYIAAA4QAAADACADQADADADAAIAGgBIAAAbIgIADIgKABQgMAAgJgGQgGgFgCgHIgCAAQgGAJgJAFQgLAFgNAAQgUAAgMgLgADoApQgJAFAAALQAAAHAFAFQAGAEAGAAQAIAAAHgEQAFgEAEgHQADgHAAgJIAAgHIgIAAQgSAAgJAGgANPBjIAAhbQAAgKgEgGQgFgGgKAAQgLAAgHAIQgGAHAAANIAABVIgnAAIAAiPIAkAAIAAARIACAAQAFgKAKgGQALgGANAAQAWAAALANQAKANABAbIAABfgAH6BjIAAiPIAkAAIAAARIACAAQAEgJAJgGQAJgFAMAAQAGAAAEACIAAAjIgKgBQgKAAgKADQgHAEgDAFQgDAFAAALIAABSgAGtBjIAAhbQAAgKgEgGQgFgGgKAAQgLAAgHAIQgGAGgBAOIAABVIgmAAIAAjHIAmAAIAABFIACAAQAFgIAKgFQAIgFANAAQAWAAALANQALANAAAbIAABfgABmBjIAAhuIgWAAIAAghIAWAAIAAgKQAAgYAMgMQANgNAYAAIALABIALACIAAAfIgNgBQgHAAgFADQgEACgDAEQgBAEAAAFIAAAIIAeAAIAAAhIgeAAIAABugAgTBjIAAiPIAjAAIAAARIACAAQAFgJAJgGQAJgFALAAQAGAAAEACIAAAjIgKgBQgJAAgKADQgIAEgCAFQgEAFAAALIAABSgAlRBjIAAiPIAkAAIAAARIABAAQAGgKAJgFQAHgFANAAQAGAAAEACIAAAjIgLgBQgJAAgKADQgHAEgEAFQgDAFAAALIAABSgAmfBjIAAhbQABgKgFgGQgEgGgLAAQgLAAgGAIQgHAHAAANIAABVIgnAAIAAjHIAnAAIAABFIACAAQAGgIAIgFQAKgFAMAAQAXAAAKANQAMAOAAAaIAABfgAraBjIAAhwIgBAAIgxBXIgOAAIgwhXIgDAAIAABwIgoAAIAAjHIAlAAIA8BuIACAAIA8huIAlAAIAADHg");
	this.shape.setTransform(85.8339,15.3891,0.211,0.211);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// flash0.ai
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(85.75,15.5,0.2132,0.2132,0,0,0,105.8,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(63.2,10.1,45.099999999999994,10.9), null);


(lib._logo_business = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.instance = new lib.logo();
	this.instance.setTransform(208.35,-0.35,0.8718,0.8715,0,0,0,21.6,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._logo_business, new cjs.Rectangle(189.5,-22.7,37.69999999999999,44.8), null);


(lib.CTAs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {changeCTA:320};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		this.stop();
	}
	this.frame_353 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(319).call(this.frame_319).wait(34).call(this.frame_353).wait(43));

	// cta
	this.instance = new lib.cta_();
	this.instance.setTransform(536.65,912.1,3.6844,3.6844,0,0,0,93.5,18.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:18.8,scaleX:5.0107,scaleY:5.0107,x:541.25,y:912.6,alpha:1},12,cjs.Ease.quadInOut).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},8,cjs.Ease.quadInOut).wait(24).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},4).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(4).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},5).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(21).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},4).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(4).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},5).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(124).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},4).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(4).to({regY:18.9,scaleX:4.4094,scaleY:4.4094,x:539.85,y:912.3},5).to({regY:18.7,scaleX:4.5981,scaleY:4.5981,x:541.05,y:912},7,cjs.Ease.quadOut).wait(49).to({scaleX:3.1686,scaleY:3.1686,x:527.7,y:907.1,alpha:0},12,cjs.Ease.quadIn).to({_off:true},1).wait(63));

	// cta2
	this.instance_1 = new lib.cta();
	this.instance_1.setTransform(492,904.05,3.615,3.615,0,0,0,83.7,17.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(333).to({_off:false},0).to({regX:83.5,regY:17.2,scaleX:5.0043,scaleY:5.0043,x:488.05,y:905.6,alpha:1},12,cjs.Ease.quadInOut).to({regY:17.4,scaleX:4.7275,scaleY:4.7275,x:488.75,y:906.1},8,cjs.Ease.quadInOut).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,619.2,924.6);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,446];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		function closeAd() {
			document.getElementById("canvas").style.display = 'none';
			document.body.innerHTML = "";
		}
		
		if (this.close != undefined) {
			this.close.on("click", function () {
				closeAd();
			});
		}
		function changeCTAS() {
			exportRoot.ctas.gotoAndPlay("changeCTA");
		}
		
		function manageClicktags() {
			if (interacted == false) {
			exportRoot.magicClicktag.visible = false;
			interacted = true;
			changeCTAS();
			magicClicktag();
				}
		}
		
		this.magicClicktag.addEventListener("pressup", manageClicktags);
		this.clicktag.addEventListener("pressup", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15() {
		    // Get the event object
		    var event = window.event;
		
		    // Check if it's a right-click (button 2)
		    if (event.button === 2) {
		        event.preventDefault(); // Do nothing for right-click
		        return false;
		    }
		
		    // If it's a left-click (button 0)
		    if (event.button === 0) {
		        window.open(getUriParams.clicktag, "_blank"); // Open the clickTag link in a new tab
		
		        // Remove the event listener to ensure it only happens once
		        document.removeEventListener('click', fl_MouseClickHandler_15);
		    }
		}
	}
	this.frame_52 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_53 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_54 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_55 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_56 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_57 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_58 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_59 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_60 = function() {
		//animated = true;
		//this.play();
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_61 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_62 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_63 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_64 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_65 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_66 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_67 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_68 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_69 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_70 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_71 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_72 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_73 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_74 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_75 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_76 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_77 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_78 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_79 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_80 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_81 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_82 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_83 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_84 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_85 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_86 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_87 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_88 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_89 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_90 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_91 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_92 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_93 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_94 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_95 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_96 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_97 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_98 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_99 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_100 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_101 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_102 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_103 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_104 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_105 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_106 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_107 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_108 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_109 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_110 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_111 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_112 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_113 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_114 = function() {
		if (magic == false) {
			exportRoot.ctas.play();
			magic = true;
			}
	}
	this.frame_446 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(52).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1).call(this.frame_65).wait(1).call(this.frame_66).wait(1).call(this.frame_67).wait(1).call(this.frame_68).wait(1).call(this.frame_69).wait(1).call(this.frame_70).wait(1).call(this.frame_71).wait(1).call(this.frame_72).wait(1).call(this.frame_73).wait(1).call(this.frame_74).wait(1).call(this.frame_75).wait(1).call(this.frame_76).wait(1).call(this.frame_77).wait(1).call(this.frame_78).wait(1).call(this.frame_79).wait(1).call(this.frame_80).wait(1).call(this.frame_81).wait(1).call(this.frame_82).wait(1).call(this.frame_83).wait(1).call(this.frame_84).wait(1).call(this.frame_85).wait(1).call(this.frame_86).wait(1).call(this.frame_87).wait(1).call(this.frame_88).wait(1).call(this.frame_89).wait(1).call(this.frame_90).wait(1).call(this.frame_91).wait(1).call(this.frame_92).wait(1).call(this.frame_93).wait(1).call(this.frame_94).wait(1).call(this.frame_95).wait(1).call(this.frame_96).wait(1).call(this.frame_97).wait(1).call(this.frame_98).wait(1).call(this.frame_99).wait(1).call(this.frame_100).wait(1).call(this.frame_101).wait(1).call(this.frame_102).wait(1).call(this.frame_103).wait(1).call(this.frame_104).wait(1).call(this.frame_105).wait(1).call(this.frame_106).wait(1).call(this.frame_107).wait(1).call(this.frame_108).wait(1).call(this.frame_109).wait(1).call(this.frame_110).wait(1).call(this.frame_111).wait(1).call(this.frame_112).wait(1).call(this.frame_113).wait(1).call(this.frame_114).wait(332).call(this.frame_446).wait(1));

	// Magic Clicktag
	this.magicClicktag = new lib.clicktag();
	this.magicClicktag.name = "magicClicktag";
	this.magicClicktag.setTransform(618.05,903.5,0.272,0.0524,0,0,0,2076.7,1241.2);
	new cjs.ButtonHelper(this.magicClicktag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.magicClicktag).wait(447));

	// Clicktag
	this.clicktag = new lib.clicktag();
	this.clicktag.name = "clicktag";
	this.clicktag.setTransform(928.25,636.15,1,1,0,0,0,2076.5,1240.3);
	new cjs.ButtonHelper(this.clicktag, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clicktag).wait(447));

	// CTAs
	this.ctas = new lib.CTAs();
	this.ctas.name = "ctas";
	this.ctas.setTransform(499.9,499.9,1,1,0,0,0,499.9,499.9);

	this.timeline.addTween(cjs.Tween.get(this.ctas).wait(447));

	// logo
	this.instance = new lib._logo_business();
	this.instance.setTransform(500.65,60.9,1.5066,1.5061,0,0,0,208.6,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(447));

	// mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_24 = new cjs.Graphics().p("EgzBAERIAAohMBmEAAAIAAIhg");
	var mask_graphics_242 = new cjs.Graphics().p("EgzBAERIAAohMBmEAAAIAAIhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_24,x:496.3,y:234.025}).wait(213).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_242,x:496.3,y:234.025}).wait(205));

	// t_magenta copy
	this.instance_1 = new lib.t_magenta();
	this.instance_1.setTransform(496,306.75,2.2546,2.2539,0,0,-1.35,140,9.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({regY:9.1,scaleX:2.2539,skewY:0,y:234.45},26,cjs.Ease.cubicOut).wait(142).to({y:165.45},20,cjs.Ease.quadIn).to({_off:true},25).wait(5).to({_off:false,regY:9.2,scaleX:2.2546,skewY:-1.35,y:306.75},0).to({regY:9.1,scaleX:2.2539,skewY:0,y:234.45},26,cjs.Ease.cubicOut).wait(179));

	// mask copy 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_19 = new cjs.Graphics().p("EgzBAERIAAohMBmEAAAIAAIhg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EgzBAERIAAohMBmEAAAIAAIhg");
	var mask_1_graphics_237 = new cjs.Graphics().p("EgzBAERIAAohMBmEAAAIAAIhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_1_graphics_19,x:496.3,y:175.175}).wait(169).to({graphics:mask_1_graphics_188,x:496.3,y:175.175}).wait(49).to({graphics:mask_1_graphics_237,x:496.3,y:175.175}).wait(210));

	// t_die copy
	this.instance_2 = new lib.t_die();
	this.instance_2.setTransform(495.9,247.95,2.2546,2.2539,0,0,-1.35,110.5,9.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regY:9.1,scaleX:2.2539,skewY:0,y:175.65},26,cjs.Ease.quadOut).wait(143).to({y:106.65},20,cjs.Ease.quadIn).wait(29).to({regY:9.2,scaleX:2.2546,skewY:-1.35,y:247.95},0).to({regY:9.1,scaleX:2.2539,skewY:0,y:175.65},26,cjs.Ease.quadOut).wait(184));

	// AI
	this.instance_3 = new lib.ai_icon();
	this.instance_3.setTransform(741.2,21.15,0.3085,0.3085,0,0,0,1.6,0.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({alpha:0.6992},8).wait(161).to({alpha:0},6).wait(43).to({alpha:0.6992},8).wait(202));

	// T_triangle_closed
	this.instance_4 = new lib.triangle_e20074();
	this.instance_4.setTransform(434.8,581.2,3.9028,1.135,0,-165.7007,-132.7689,43.2,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleY:0.1929,skewX:-165.7033,x:434.9,y:580.65},5,cjs.Ease.quadIn).to({_off:true},1).wait(201).to({_off:false},0).to({scaleY:1.135,skewX:-165.7007,x:434.8,y:581.2},5,cjs.Ease.quadOut).wait(4).to({scaleY:0.1929,skewX:-165.7033,x:434.9,y:580.65},5,cjs.Ease.quadIn).to({_off:true},1).wait(225));

	// L_triangle_closed
	this.instance_5 = new lib.triangle_e20074();
	this.instance_5.setTransform(325.25,521.25,4.5836,2.523,0,140.9623,67.7289,44.2,61.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:44.3,regY:64.2,scaleY:0.0724,skewX:140.963,x:322.5,y:518.5},5,cjs.Ease.quadIn).to({_off:true},1).wait(201).to({_off:false},0).to({regX:44.2,regY:61.2,scaleY:2.523,skewX:140.9623,x:325.25,y:521.25},5,cjs.Ease.quadOut).wait(4).to({regX:44.3,regY:64.2,scaleY:0.0724,skewX:140.963,x:322.5,y:518.5},5,cjs.Ease.quadIn).to({_off:true},1).wait(225));

	// B_triangle_closed
	this.instance_6 = new lib.triangle_e20074();
	this.instance_6.setTransform(459.8,740.65,2.1326,1.6308,-23.9538,0,0,43.9,62.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:61.8,scaleX:2.0995,scaleY:0.0838,rotation:-23.9519,x:459.7,y:740.85},5,cjs.Ease.quadIn).to({_off:true},1).wait(201).to({_off:false},0).to({regY:62.2,scaleX:2.1326,scaleY:1.6308,rotation:-23.9538,x:459.8,y:740.65},5,cjs.Ease.quadOut).wait(4).to({regY:61.8,scaleX:2.0995,scaleY:0.0838,rotation:-23.9519,x:459.7,y:740.85},5,cjs.Ease.quadIn).to({_off:true},1).wait(225));

	// T_triangle
	this.instance_7 = new lib.triangle();
	this.instance_7.setTransform(427.25,575.5,3.3703,0.0953,0,40.2698,47.2881,52.1,57.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({regX:52,regY:56.8,scaleY:1.4039,skewX:40.2705,x:427.35,y:575},3).to({_off:true},1).wait(194).to({_off:false},0).to({regX:52.1,regY:57.6,scaleY:0.0953,skewX:40.2698,x:427.25,y:575.5},3).to({_off:true},1).wait(14).to({_off:false},0).to({regX:52,regY:56.8,scaleY:1.4039,skewX:40.2705,x:427.35,y:575},3).to({_off:true},1).wait(222));

	// T_triangle
	this.instance_8 = new lib.triangle();
	this.instance_8.setTransform(307.75,443.4,3.3703,1.4039,0,40.2705,47.2881,-0.7,55.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({regX:-0.8,regY:55.9,scaleX:4.2831,scaleY:4.4238,skewX:-36.5624,skewY:-18.7131,x:293,y:358.15},16,cjs.Ease.cubicOut).wait(156).to({skewY:-18.7131},0).wait(7).to({regX:-0.7,regY:55.8,scaleX:3.3703,scaleY:1.4039,skewX:40.2705,skewY:47.2881,x:307.75,y:443.4},16,cjs.Ease.cubicIn).to({_off:true},1).wait(20).to({_off:false},0).to({regX:-0.8,regY:55.9,scaleX:4.2831,scaleY:4.4238,skewX:-36.5624,skewY:-18.7131,x:293,y:358.15},16,cjs.Ease.cubicOut).wait(207));

	// L_triangle copy
	this.instance_9 = new lib.triangle();
	this.instance_9.setTransform(327.05,522.8,3.8265,0.1462,0,-144.3121,-111.911,51.8,57.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(5).to({_off:false},0).to({scaleX:3.8263,scaleY:2.4491,skewX:-156.4727,skewY:-111.9105,x:327.4,y:523.05},19,cjs.Ease.cubicOut).wait(163).to({scaleX:3.8265,scaleY:0.1462,skewX:-144.3121,skewY:-111.911,x:327.05,y:522.8},19,cjs.Ease.cubicIn).to({_off:true},1).wait(14).to({_off:false},0).to({scaleX:3.8263,scaleY:2.4491,skewX:-156.4727,skewY:-111.9105,x:327.4,y:523.05},19,cjs.Ease.cubicOut).wait(207));

	// R_triangle
	this.instance_10 = new lib.triangle();
	this.instance_10.setTransform(720.15,422.95,3.9479,1.1692,0,172.5825,90.0027,51.9,55.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).to({regY:56.5,scaleX:3.9476,scaleY:2.997,skewX:139.282,x:721.1,y:420.45},13,cjs.Ease.cubicOut).wait(151).to({regY:55.9,scaleX:3.9479,scaleY:1.1692,skewX:172.5825,x:720.15,y:422.95},13,cjs.Ease.cubicIn).to({_off:true},1).wait(38).to({_off:false},0).to({regY:56.5,scaleX:3.9476,scaleY:2.997,skewX:139.282,x:721.1,y:420.45},13,cjs.Ease.cubicOut).wait(202));

	// C_triangle
	this.instance_11 = new lib.triangle();
	this.instance_11.setTransform(463.6,738,1.7679,0.2842,0,165.0729,156.5079,51.6,56.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({_off:false},0).to({regY:56.6,scaleX:3.5632,scaleY:3.7647,skewX:165.068,skewY:156.5074,x:550.45,y:701.9},13,cjs.Ease.cubicInOut).wait(169).to({regY:56.4,scaleX:1.7679,scaleY:0.2842,skewX:165.0729,skewY:156.5079,x:463.6,y:738},19,cjs.Ease.cubicInOut).to({_off:true},1).wait(14).to({_off:false},0).to({regY:56.6,scaleX:3.5632,scaleY:3.7647,skewX:165.068,skewY:156.5074,x:550.45,y:701.9},13,cjs.Ease.cubicInOut).wait(213));

	// L_shadow
	this.instance_12 = new lib.shadow_1();
	this.instance_12.setTransform(317.65,531.75,2.1823,0.2233,0,50.9403,68.3475,104.6,43);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({regY:43.4,scaleX:2.1103,scaleY:0.9226,skewX:56.3189,skewY:79.8094,x:336.6,y:517.45,alpha:1},19,cjs.Ease.cubicOut).wait(163).to({regY:43,scaleX:2.1823,scaleY:0.2233,skewX:50.9403,skewY:68.3475,x:317.65,y:531.75,alpha:0},19,cjs.Ease.cubicIn).to({_off:true},1).wait(14).to({_off:false},0).to({regY:43.4,scaleX:2.1103,scaleY:0.9226,skewX:56.3189,skewY:79.8094,x:336.6,y:517.45,alpha:1},19,cjs.Ease.cubicOut).wait(207));

	// T_shadow
	this.instance_13 = new lib.shadow_1();
	this.instance_13.setTransform(427.35,575.05,1.4694,0.2806,0,-138.664,-131.7107,104.1,42.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},0).to({regX:104,regY:42.9,scaleX:1.6513,scaleY:1.5274,skewX:-196.9319,skewY:-182.7589,x:446.9,y:295.65,alpha:1},15,cjs.Ease.cubicOut).wait(163).to({regX:104.1,regY:42.6,scaleX:1.4694,scaleY:0.2806,skewX:-138.664,skewY:-131.7107,x:427.35,y:575.05,alpha:0},15,cjs.Ease.cubicIn).to({_off:true},1).wait(22).to({_off:false},0).to({regX:104,regY:42.9,scaleX:1.6513,scaleY:1.5274,skewX:-196.9319,skewY:-182.7589,x:446.9,y:295.65,alpha:1},15,cjs.Ease.cubicOut).wait(207));

	// C_shadow
	this.instance_14 = new lib.shadow_1();
	this.instance_14.setTransform(462.2,749.25,0.7709,0.2007,-18.4873,0,0,105.5,93.2);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({_off:false},0).to({regX:105.2,regY:92.2,scaleX:1.8324,scaleY:1.6162,rotation:0,x:564.8,y:780.4,alpha:1},13,cjs.Ease.cubicInOut).wait(169).to({regX:105.5,regY:93.2,scaleX:0.7709,scaleY:0.2007,rotation:-18.4873,x:462.2,y:749.25,alpha:0},19,cjs.Ease.cubicInOut).to({_off:true},1).wait(14).to({_off:false},0).to({regX:105.2,regY:92.2,scaleX:1.8324,scaleY:1.6162,rotation:0,x:564.8,y:780.4,alpha:1},13,cjs.Ease.cubicInOut).wait(213));

	// R_shadow
	this.instance_15 = new lib.shadow_1();
	this.instance_15.setTransform(731.6,496.6,1.4335,0.1921,0,-59.7481,-90.2562,105,94.8);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(16).to({_off:false},0).to({regX:105.2,regY:92.6,scaleX:1.1565,scaleY:1.1046,skewX:-46.1116,skewY:-63.8728,x:756.55,y:536.1,alpha:1},13,cjs.Ease.cubicOut).wait(151).to({regX:105,regY:94.8,scaleX:1.4335,scaleY:0.1921,skewX:-59.7481,skewY:-90.2562,x:731.6,y:496.6,alpha:0},13,cjs.Ease.cubicIn).to({_off:true},23).wait(16).to({_off:false},0).to({regX:105.2,regY:92.6,scaleX:1.1565,scaleY:1.1046,skewX:-46.1116,skewY:-63.8728,x:756.55,y:536.1,alpha:1},13,cjs.Ease.cubicOut).wait(202));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EAT2AxdMgWjg37IIUPFIPqRRIVaXFI6rL4g");
	var mask_2_graphics_4 = new cjs.Graphics().p("EAT7AyCMgWpg3+IIePVIPGQDIVwX1I58LQg");
	var mask_2_graphics_8 = new cjs.Graphics().p("EAUFAx5MgWog4EIIMPZIPtQ9IVPXKI5/LMg");
	var mask_2_graphics_9 = new cjs.Graphics().p("EAPfAx+MgXPg5kIIqOwMAuSAhRImBHhI9OMlg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AnsXcMgXQg5gIIWMlMA1jAZiIp5P6MggSAOIg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AqLXeMgXPg5hIIIKuMA6sARuIqbXwMgkmAP7g");
	var mask_2_graphics_12 = new cjs.Graphics().p("Ar3XbMgXKg5UIH2I8MA+NAKKIoFeXMgqRASWg");
	var mask_2_graphics_13 = new cjs.Graphics().p("As/XkMgXLg5kIHkHxMBAxADOMgF0Ak0Mgu1AUPg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AtcXlMgXQg5lIHqGtMBBvgCvMgD2AqjMgxzAVgg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AttYmMgXMg5qIHmF4MBCNgH3MgCbAv4MgzmAWPg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AtbbFMgXMg5rIHXFMMBB4gMJMgAMA0DMg1UAXFg");
	var mask_2_graphics_17 = new cjs.Graphics().p("AtZdCMgXNg5sIHUEuMBB6gPhMgAMA31Mg1SAXGg");
	var mask_2_graphics_18 = new cjs.Graphics().p("AtaeaMgXPg5lIHTEIMBCAgR9MgARA63Mg1HAXKg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AtWfWMgXPg5nIHQD0MBB7gTfMgALA8sMg1LAXNg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgNUAgAMgXOg5oIHODnMBB2gUmMgAHA+AMg1MAXPg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgNSAgdMgXOg5qIHMDeMBB1gVVMgAFA+5Mg1OAXQg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgNRAgvMgXNg5rIHLDZMBBzgVyMgAEA/bMg1PAXQg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgNQAg3MgXOg5rIHKDXMBBzgWBMgADA/sMg1PAXRg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EgNQAg7MgXOg5rIHLDUMBBygWFMgACA/yMg1QAXRg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAGgAx/MgXNg5sIHLDVMBBygWGMgADA/zMg1QAXRg");
	var mask_2_graphics_186 = new cjs.Graphics().p("EAGaAx7MgXRg5oIHUDPMBB3gWBMgACA/zMg1ZAXTg");
	var mask_2_graphics_187 = new cjs.Graphics().p("EgNTAg3MgXSg5oIHUDPMBB3gWAMgACA/yMg1YAXTg");
	var mask_2_graphics_188 = new cjs.Graphics().p("EgNTAgzMgXSg5oIHUDRMBB3gV7MgACA/sMg1YAXTg");
	var mask_2_graphics_189 = new cjs.Graphics().p("EgNUAgpMgXRg5mIHUDVMBB3gVuMgADA/aMg1XAXTg");
	var mask_2_graphics_190 = new cjs.Graphics().p("EgNXAgWMgXPg5kIHUDcMBB5gVTMgAFA+4Mg1WAXTg");
	var mask_2_graphics_191 = new cjs.Graphics().p("Ataf2MgXMg5gIHTDnMBB6gUlMgAHA+AMg1UAXSg");
	var mask_2_graphics_192 = new cjs.Graphics().p("AtffGMgXIg5aIHTD5MBB9gTjMgAMA8sMg1RAXRg");
	var mask_2_graphics_193 = new cjs.Graphics().p("AtneDMgXCg5RIHTERMBCAgSGMgARA63Mg1MAXQg");
	var mask_2_graphics_194 = new cjs.Graphics().p("At8cpMgXAg5XIHUEtMBClgPgMgG9A6tMgvFAUWg");
	var mask_2_graphics_195 = new cjs.Graphics().p("At+a1MgXBg5XIHUFGMBCrgMRMgJUA3/MgszATcg");
	var mask_2_graphics_196 = new cjs.Graphics().p("At4YPMgXBg5XIHyFrMBCBgHqMgLOAzfMgqtASwg");
	var mask_2_graphics_197 = new cjs.Graphics().p("AtrXOMgXBg5RIHmGoMBBzgCpMgOVAvOMgnOAQ6g");
	var mask_2_graphics_198 = new cjs.Graphics().p("AtMXNMgW+g5QIHkHxMBAxADOMgQiApVMgj+APzg");
	var mask_2_graphics_199 = new cjs.Graphics().p("AsEXGMgW9g5CIIXJCMA9sAKEMgS2AjHI/YNsg");
	var mask_2_graphics_200 = new cjs.Graphics().p("AqUXOMgXDg5QIIdK7MA6SARoIvuZ/I/CNjg");
	var mask_2_graphics_201 = new cjs.Graphics().p("AnxXPMgXCg5QIIWMuMA1RAZYIsMRKI9bMzg");
	var mask_2_graphics_202 = new cjs.Graphics().p("EAPSAxuMgXCg5QIIqOwMAuSAhRIm0H6I8NMDg");
	var mask_2_graphics_203 = new cjs.Graphics().p("EAT6AxvMgWdg32IIMPYIPtQ+IVPXJI5yLGg");
	var mask_2_graphics_207 = new cjs.Graphics().p("EAT6AxiMgWbg32IIxQTIPGQDIVPXJI5/Lgg");
	var mask_2_graphics_211 = new cjs.Graphics().p("EAT6AxiMgWhg32II3QTIPGQDIVPXJI5/Lgg");
	var mask_2_graphics_216 = new cjs.Graphics().p("EAT2AxdMgWjg37IIUPFIPqRRIVaXFI6rL4g");
	var mask_2_graphics_220 = new cjs.Graphics().p("EAT/Ax/MgWpg3+IIePVIPGQDIVwX1I58LQg");
	var mask_2_graphics_224 = new cjs.Graphics().p("EAUFAx5MgWog4EIIMPZIPtQ9IVPXKI5/LMg");
	var mask_2_graphics_225 = new cjs.Graphics().p("EAPfAx7MgXPg5kIIqOwMAuSAhRImBHgI9UMsg");
	var mask_2_graphics_226 = new cjs.Graphics().p("AnsXcMgXQg5gIIWMlMA1jAZiIp5P6MggSAOIg");
	var mask_2_graphics_227 = new cjs.Graphics().p("AqJXeMgXRg5hIIIKuMA6sARuIqbXwMgkmAP7g");
	var mask_2_graphics_228 = new cjs.Graphics().p("Ar3XbMgXKg5UIH2I8MA+NAKKIoFeXMgqPASWg");
	var mask_2_graphics_229 = new cjs.Graphics().p("As9XhMgXNg5kIHkHxMBAxADOMgF0Ak0MguxAUUg");
	var mask_2_graphics_230 = new cjs.Graphics().p("AtcXlMgXQg5lIHqGtMBBvgCvMgD2AqjMgxzAVgg");
	var mask_2_graphics_231 = new cjs.Graphics().p("AttYmMgXMg5qIHmF4MBCNgH3MgCbAv4MgzmAWPg");
	var mask_2_graphics_232 = new cjs.Graphics().p("AtbbFMgXMg5rIHXFMMBB4gMJMgAMA0DMg1UAXFg");
	var mask_2_graphics_233 = new cjs.Graphics().p("AtZdCMgXNg5sIHUEuMBB6gPhMgAMA31Mg1NAXGg");
	var mask_2_graphics_234 = new cjs.Graphics().p("AtYeaMgXRg5lIHTEIMBCAgR9MgARA63Mg1HAXKg");
	var mask_2_graphics_235 = new cjs.Graphics().p("AtVfWMgXQg5nIHQD0MBB7gTfMgALA8sMg1LAXNg");
	var mask_2_graphics_236 = new cjs.Graphics().p("EgNTAgAMgXPg5oIHODnMBB2gUmMgAHA+AMg1MAXPg");
	var mask_2_graphics_237 = new cjs.Graphics().p("EgNSAgdMgXOg5qIHMDeMBB1gVVMgAFA+5Mg1OAXQg");
	var mask_2_graphics_238 = new cjs.Graphics().p("EgNQAgvMgXOg5rIHLDZMBBzgVyMgAEA/bMg1PAXQg");
	var mask_2_graphics_239 = new cjs.Graphics().p("EgNQAg3MgXOg5rIHKDXMBBzgWBMgADA/sMg1PAXRg");
	var mask_2_graphics_240 = new cjs.Graphics().p("EgNQAg7MgXOg5rIHLDUMBBygWFMgACA/yMg1QAXRg");
	var mask_2_graphics_241 = new cjs.Graphics().p("EAGgAx/MgXNg5sIHLDVMBBygWGMgADA/zMg1QAXRg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:273.1116,y:389.2892}).wait(4).to({graphics:mask_2_graphics_4,x:272.5622,y:387.2529}).wait(4).to({graphics:mask_2_graphics_8,x:272.546,y:387.3498}).wait(1).to({graphics:mask_2_graphics_9,x:301.9984,y:387.2502}).wait(1).to({graphics:mask_2_graphics_10,x:450.625,y:556.925}).wait(1).to({graphics:mask_2_graphics_11,x:466.4,y:556.8}).wait(1).to({graphics:mask_2_graphics_12,x:477.425,y:557.275}).wait(1).to({graphics:mask_2_graphics_13,x:484.475,y:556.5}).wait(1).to({graphics:mask_2_graphics_14,x:487.6,y:556.475}).wait(1).to({graphics:mask_2_graphics_15,x:488.875,y:549.775}).wait(1).to({graphics:mask_2_graphics_16,x:487.1,y:534}).wait(1).to({graphics:mask_2_graphics_17,x:487.05,y:521.6}).wait(1).to({graphics:mask_2_graphics_18,x:487.15,y:512.725}).wait(1).to({graphics:mask_2_graphics_19,x:486.875,y:506.9}).wait(1).to({graphics:mask_2_graphics_20,x:486.7,y:502.725}).wait(1).to({graphics:mask_2_graphics_21,x:486.575,y:499.925}).wait(1).to({graphics:mask_2_graphics_22,x:486.5,y:498.2}).wait(1).to({graphics:mask_2_graphics_23,x:486.475,y:497.35}).wait(1).to({graphics:mask_2_graphics_24,x:486.45,y:497.025}).wait(1).to({graphics:mask_2_graphics_25,x:359.9614,y:387.8346}).wait(161).to({graphics:mask_2_graphics_186,x:360.4114,y:387.9155}).wait(1).to({graphics:mask_2_graphics_187,x:486.625,y:497.125}).wait(1).to({graphics:mask_2_graphics_188,x:486.625,y:497.45}).wait(1).to({graphics:mask_2_graphics_189,x:486.65,y:498.325}).wait(1).to({graphics:mask_2_graphics_190,x:486.725,y:500.05}).wait(1).to({graphics:mask_2_graphics_191,x:486.825,y:502.9}).wait(1).to({graphics:mask_2_graphics_192,x:486.95,y:507.125}).wait(1).to({graphics:mask_2_graphics_193,x:487.15,y:513.025}).wait(1).to({graphics:mask_2_graphics_194,x:489.25,y:522.05}).wait(1).to({graphics:mask_2_graphics_195,x:489.5,y:533.65}).wait(1).to({graphics:mask_2_graphics_196,x:488.875,y:550.225}).wait(1).to({graphics:mask_2_graphics_197,x:487.6,y:556.725}).wait(1).to({graphics:mask_2_graphics_198,x:484.475,y:556.8}).wait(1).to({graphics:mask_2_graphics_199,x:477.4,y:557.525}).wait(1).to({graphics:mask_2_graphics_200,x:466.1,y:556.7}).wait(1).to({graphics:mask_2_graphics_201,x:449.725,y:556.6}).wait(1).to({graphics:mask_2_graphics_202,x:301.9984,y:386.8461}).wait(1).to({graphics:mask_2_graphics_203,x:272.546,y:387.0265}).wait(4).to({graphics:mask_2_graphics_207,x:272.546,y:388.3195}).wait(4).to({graphics:mask_2_graphics_211,x:272.546,y:388.3195}).wait(5).to({graphics:mask_2_graphics_216,x:273.1116,y:389.2892}).wait(4).to({graphics:mask_2_graphics_220,x:272.9622,y:386.9529}).wait(4).to({graphics:mask_2_graphics_224,x:272.546,y:387.3498}).wait(1).to({graphics:mask_2_graphics_225,x:301.9984,y:387.5734}).wait(1).to({graphics:mask_2_graphics_226,x:450.625,y:556.925}).wait(1).to({graphics:mask_2_graphics_227,x:466.4,y:556.8}).wait(1).to({graphics:mask_2_graphics_228,x:477.425,y:557.275}).wait(1).to({graphics:mask_2_graphics_229,x:484.475,y:556.8}).wait(1).to({graphics:mask_2_graphics_230,x:487.6,y:556.475}).wait(1).to({graphics:mask_2_graphics_231,x:488.875,y:549.775}).wait(1).to({graphics:mask_2_graphics_232,x:487.1,y:534}).wait(1).to({graphics:mask_2_graphics_233,x:487.05,y:521.6}).wait(1).to({graphics:mask_2_graphics_234,x:487.15,y:512.725}).wait(1).to({graphics:mask_2_graphics_235,x:486.875,y:506.9}).wait(1).to({graphics:mask_2_graphics_236,x:486.7,y:502.725}).wait(1).to({graphics:mask_2_graphics_237,x:486.575,y:499.925}).wait(1).to({graphics:mask_2_graphics_238,x:486.5,y:498.2}).wait(1).to({graphics:mask_2_graphics_239,x:486.475,y:497.35}).wait(1).to({graphics:mask_2_graphics_240,x:486.45,y:497.025}).wait(1).to({graphics:mask_2_graphics_241,x:359.9614,y:387.8346}).wait(206));

	// BG_image6
	this.instance_16 = new lib.BG_image4();
	this.instance_16.setTransform(543.8,501.75,0.9739,0.9739,0,0,0,314.5,293.7);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(335).to({_off:false},0).to({regX:314.6,regY:293.8,scaleX:0.9999,scaleY:0.9999,x:543.9,y:505.95,alpha:1},18).to({regY:293.9,scaleX:1.1154,scaleY:1.1154,y:524.55},80).wait(14));

	// BG_image5
	this.instance_17 = new lib.BG_image3();
	this.instance_17.setTransform(486.65,498.65,0.9551,0.9551,0,0,0,316.6,300.1);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(272).to({_off:false},0).to({scaleX:0.9756,scaleY:0.9756,y:498.95,alpha:1},19).to({regY:300,scaleX:1.0426,scaleY:1.0426,x:486.7,y:499.65},62).to({_off:true},3).wait(91));

	// BG image4
	this.instance_18 = new lib.BG_image_5();
	this.instance_18.setTransform(482.55,475,0.9178,0.9178,0,0,0,199.5,215.7);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(216).to({_off:false},0).to({regY:215.8,scaleX:1.0649,scaleY:1.0649,x:458,y:480.35},75).to({_off:true},1).wait(155));

	// BG3
	this.instance_19 = new lib.BG3();
	this.instance_19.setTransform(578.6,499.4,1,1,0,0,0,342.6,323.4);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(116).to({_off:false},0).to({regY:323.5,scaleX:1.0331,scaleY:1.0331,y:499.5,alpha:1},19).to({scaleX:1.1378,scaleY:1.1378,x:578.65,y:499.55},80).to({_off:true},1).wait(231));

	// BG_image2
	this.instance_20 = new lib.BG_image2();
	this.instance_20.setTransform(541.1,514.45,1,1,0,0,0,314.1,299.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(59).to({_off:false},0).to({scaleX:1.032,scaleY:1.032,alpha:1},20).to({scaleX:1.1216,scaleY:1.1216,y:522},56).to({_off:true},1).wait(311));

	// BG1
	this.instance_21 = new lib.BG1();
	this.instance_21.setTransform(567.4,494.2,1,1,0,0,0,341.4,302.2);

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({regY:302.4,scaleX:1.0998,scaleY:1.0998,x:559.95,y:494.4},79).to({_off:true},1).wait(367));

	// BG magenta
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E20074").s().p("EhOHBOIMAAAicPMCcPAAAMAAACcPg");
	this.shape.setTransform(500,500);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(447));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,500,500,500);
// library properties:
lib.properties = {
	id: 'B96ABA9803C04CA58C20FFDF6351CD67',
	width: 1000,
	height: 1000,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"BG_1.jpg", id:"BG_1"},
		{src:"BG_2.jpg", id:"BG_2"},
		{src:"BG_3.jpg", id:"BG_3"},
		{src:"BG_4.jpg", id:"BG_4"},
		{src:"BG_5.jpg", id:"BG_5"},
		{src:"BG_6.jpg", id:"BG_6"},
		{src:"shadow.png", id:"shadow"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['B96ABA9803C04CA58C20FFDF6351CD67'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;