
document.writeln("	<div id='ad-box' style=\'position: fixed;z-index: 9999999;bottom: 10px;right: 10px;\'>");
document.writeln("		<div style=\'position:relative\'>");
document.writeln("				<div id='ad-exit' style=\'position: absolute;top:0;right: 0;width: 30px;height: 30px;line-height: 20px;font-size: 12px;cursor: pointer;\' class=\'ad-exit\'>关闭</div>");
document.writeln("				<a href=\'http://www.baidu.com\'><img style=\'width:100%\' src=\'http://s3m.mediav.com/galileo/229670-fc3809d171be06bd4ef65069878b5db0.jpg\' alt=\'\'></a>");
document.writeln("		</div>");
document.writeln("	</div>");


var exit = document.getElementById('ad-exit');   //获取元素div
exit.onclick = function(){   //给元素增加点击事件
  document.getElementById('ad-box').style.display='none'
};