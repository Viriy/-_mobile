mui.init();
mui('body').on('tap', '[href^="html"],[href*="html"],[href^="tel:"],[href*="tel:"],[href^="mailto:"],[href*="mailto:"],[href^="http"],[href*="http"],[href^="www."],[href*="www."],[href^="com"],[href*="com"],[href^="php"],[href*="php"],[href^="aspx"],[href*="aspx"]', function() {
    window.top.location.href = this.href;
});
