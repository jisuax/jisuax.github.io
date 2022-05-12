// Garden Gnome Software - Skin
// Pano2VR 6.0.6/17336
// Filename: myvr.ggsk
// Generated 2020-03-09T11:11:00

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('configloaded', function() { me.callNodeChange(me.divSkin); });
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 76px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 267px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 22px;';
		hs+='border-radius : 22px;';
		hs+='background : #ffffff;';
		hs+='border : 2px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_10);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=2;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 15px;';
		hs+='border-radius : 15px;';
		hs+='background : #00aaff;';
		hs+='border : 1px solid #909090;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._rectangle_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=-1;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 179px;';
		hs+='height: 27px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(170,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u5373\u5c06\u8fdb\u5165VR\u7684\u4e16\u754c";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_1.appendChild(me._text_2);
		me.divSkin.appendChild(me._container_1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
			var flag=me._image_2.ggOpacitiyActive;
			if (player.transitionsDisabled) {
				me._image_2.style[domTransition]='none';
			} else {
				me._image_2.style[domTransition]='all 100ms ease-out 0ms';
			}
			if (flag) {
				me._image_2.style.opacity='0.4';
				me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
			} else {
				me._image_2.style.opacity='0.1';
				me._image_2.style.visibility=me._image_2.ggVisible?'inherit':'hidden';
			}
			me._image_2.ggOpacitiyActive=!flag;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_2);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			player.openUrl("http:\/\/darler.cn","_blank");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility=(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity)?'inherit':'hidden';
			me._container_1.ggVisible=true;
		});
		player.addListener('imagesready', function() {
			me._container_1.style[domTransition]='none';
			me._container_1.style.visibility='hidden';
			me._container_1.ggVisible=false;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._rectangle_1.ggParameter) {
			hs+=parameterToTransform(me._rectangle_1.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._rectangle_1.style[domTransform]=hs;
		var hs='';
		if (me._image_1.ggParameter) {
			hs+=parameterToTransform(me._image_1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0.1)) + 'deg) ';
		me._image_1.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	me.skinTimerEvent();
};