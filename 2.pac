var proxy1 = 'PROXY 149.28.18.16:6961';
var proxy2 = 'PROXY 149.28.18.167:6969';

function FindProxyForURL(url, host) {
    if (shExpMatch(url,"*baidu*")) {
        return proxy1;
    } else if (shExpMatch(url,"*zhihu*")) {
    	return proxy2;
    }
    return 'DIRECT';
}
