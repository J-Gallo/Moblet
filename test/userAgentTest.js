var expect = require('chai').expect,
    ua = require('../index');

describe('get-user-agent', function(){
    it('test mobile user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');

        expect(agent).to.be.equal('mobile');
    });

    it('test tablet user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (iPad; CPU OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53`')
        expect(agent).to.be.equal('tablet');
    });

    it('test iPad mini to be tablet', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53');
        expect(agent).to.be.equal('tablet');
    });

    it('test desktop user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
        expect(agent).to.be.equal('desktop');
    });

    it('check isMobile with a mobile user agent', function() {
        var agent = ua.isMobile('Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');

        expect(agent).to.be.equal(true);
    });

    it('check isMobile with a desktop user agent', function() {
        var agent = ua.isMobile('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');

        expect(agent).to.be.equal(false);
    });

    it('test isIOS with an iPhone user agent', function() {
        var agent = ua.isIOS(' Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/48.0.2564.104 Mobile/13D15 Safari/601.1.46');

        expect(agent).to.be.equal(true);
    });

    it('test isIOS with an Android user agent', function() {
        var agent = ua.isIOS('Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');

        expect(agent).to.be.equal(false);
    });

    it('test isIOS with an iPad user agent', function() {
        var agent = ua.isIOS('Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53');
        expect(agent).to.be.equal(true);
    });

    it('test isAndroid with an iPhone user agent', function() {
        var agent = ua.isAndroid(' Mozilla/5.0 (iPhone; CPU iPhone OS 9_2_1 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/48.0.2564.104 Mobile/13D15 Safari/601.1.46');

        expect(agent).to.be.equal(false);
    });

    it('test isAndroid with an Android user agent', function() {
        var agent = ua.isAndroid('Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');

        expect(agent).to.be.equal(true);
    });
});