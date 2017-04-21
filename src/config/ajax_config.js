import config from 'inMindConfig'
let ajaxConfig = {
    init() {
        $.ajaxSetup({
            timeout: 30000,
            beforeSend:function (xhr) {
                // console.log(this);
                // console.log(xhr);
                this.url = config.originUrl + this.url;
                // log('options.url',options);
                let _token = localStorage.getItem('token');
                if (_token) {
                    // log(jqXHR); 更改header
                    xhr.setRequestHeader("Authorization", 'Token ' + '54ef45d504e7c996fd3ce70708f4a3b3a1a43cc8');
                } else {
                    // log(options.url)
                    // alert(options.url)
                    // console.warn('没有携带token')
                    // jqXHR.abort();
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log('统一接口调用出错～～～');
                let _errorStr = '';
                switch (XMLHttpRequest.status) {
                    case 401:
                        _errorStr = '认证令牌无效';
                        break;
                    case 403:
                        try {
                            _errorStr = JSON.parse(XMLHttpRequest.responseText).detail;
                        } catch (e) {}
                        // log('XMLHttpRequest',XMLHttpRequest)
                        break;
                    case 0:
                        _errorStr = '请求超时';
                        break;
                    default:
                        _errorStr = '接口请求失败'
                        break;
                }
            }
        });
        // $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        //     // log(options);
        //     // log(originalOptions);
        //     // 添加前缀
        //     options.url = inMindConfig.originUrl + options.url;
        //     // log('options.url',options);
        //     let _token = localStorage.getItem('token');
        //     if (_token) {
        //         // log(jqXHR); 更改header
        //         jqXHR.setRequestHeader("Authorization", 'Token ' + _token);
        //     } else {
        //         // log(options.url)
        //         // alert(options.url)
        //         // console.warn('没有携带token')
        //         // jqXHR.abort();
        //     }
        // });
    }
}
export default ajaxConfig
