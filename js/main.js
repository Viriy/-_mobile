mui.init();
mui('body').on('tap', '[href^="html"],[href*="html"],[href^="tel:"],[href*="tel:"],[href^="mailto:"],[href*="mailto:"],[href^="http"],[href*="http"],[href^="www."],[href*="www."],[href^="com"],[href*="com"],[href^="php"],[href*="php"],[href^="aspx"],[href*="aspx"]', function() {
    window.top.location.href = this.href;
});

$("input[type=color], input[type=date], input[type=datetime-local], input[type=datetime], input[type=email], input[type=month], input[type=number], input[type=password], input[type=search], input[type=tel], input[type=text], input[type=time], input[type=url], input[type=week], select, textarea").focus(function(){
	$(".i_arrow").hide()
}).blur(function(){
	$(".i_arrow").show()
})