GLOBAL['#FairKey#']=(function(__initProps__){const __global__=this;return runCallback(function(__mod__){with(__mod__.imports){function _FairPluginWidgetState(){const inner=_FairPluginWidgetState.__inner__;if(this==__global__){return new _FairPluginWidgetState({__args__:arguments});}else{const args=arguments.length>0?arguments[0].__args__||arguments:[];inner.apply(this,args);_FairPluginWidgetState.prototype.ctor.apply(this,args);return this;}}_FairPluginWidgetState.__inner__=function inner(){};_FairPluginWidgetState.prototype={callPhone:function callPhone(){const __thiz__=this;with(__thiz__){FairBasicPlugin().call(convertObjectLiteralToSetOrMap({['pageName']:'#FairKey#',['args']:convertObjectLiteralToSetOrMap({['type']:'Call',['phoneNumber']:'15800342502',['response']:function dummy(data){print(`response = ${data}`);},}),}));}},commonHttp:function commonHttp(){const __thiz__=this;with(__thiz__){FairCommonPlugin().http(convertObjectLiteralToSetOrMap({['method']:'GET',['url']:'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/3b8ae7a4e0884b4d75b8094f6c83cd8c_list_page_data.json',['callback']:function dummy(result){if(result!=null){let statusCode=result.__op_idx__('statusCode');if(statusCode==200){let list=result.__op_idx__('data').__op_idx__('data');list.forEach(function dummy(item){let icon=item.__op_idx__('icon');print(`icon = ${icon}`);});}}},}));}},};_FairPluginWidgetState.prototype.ctor=function(){};;return _FairPluginWidgetState();}},[]);})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));