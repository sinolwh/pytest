var proxy = 'PROXY 149.28.18.167:6969';

function FindProxyForURL(url, host) {
    if (shExpMatch(url,"*baidu*")) {
		return proxy;
	}
	return 'DIRECT';
}
