GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function HotelModel(){const inner=HotelModel.__inner__;if(this==__global__){return new HotelModel({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);HotelModel.prototype.ctor.apply(this,args);return this;}}HotelModel.__inner__=function inner(){this.imagePath='';this.titleTxt='';this.subTxt='';this.dist='';this.reviews='';this.perNight='';};HotelModel.prototype={};HotelModel.prototype.ctor=function(){Object.prototype.ctor.call(this);};function _HotelListViewState(){const inner=_HotelListViewState.__inner__;if(this==__global__){return new _HotelListViewState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_HotelListViewState.prototype.ctor.apply(this,args);return this;}}_HotelListViewState.__inner__=function inner(){this._listData=[];this._page=0;};_HotelListViewState.prototype={onLoad:function onLoad(){const __thiz__=this;with(__thiz__){requestData();}},onUnload:function onUnload(){const __thiz__=this;with(__thiz__){}},requestData:function requestData(){const __thiz__=this;with(__thiz__){_page++;FairNet().request(convertObjectLiteralToSetOrMap({['pageName']:'#FairKey#',['method']:'GET',['url']:'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/3be6c61070d3b48c8165af5d18464c0e_hotel_list_data.json',['data']:convertObjectLiteralToSetOrMap({['page']:_page,}),['success']:function dummy(resp){if(resp==null){return null;}let data=resp.__op_idx__('data');data.forEach(function dummy(item){let dataItem=HotelModel();dataItem.imagePath=item.imagePath;dataItem.titleTxt=item.titleTxt;dataItem.subTxt=item.subTxt;dataItem.dist=item.dist+' km';dataItem.reviews=item.reviews+' reviews';dataItem.perNight=item.perNight+'';_listData.add(dataItem);});setState('#FairKey#',function dummy(){});},}));}},isDataEmpty:function isDataEmpty(){const __thiz__=this;with(__thiz__){return _listData.isEmpty;}},};_HotelListViewState.prototype.ctor=function(){Object.prototype.ctor.call(this);};;return _HotelListViewState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));