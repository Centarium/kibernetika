/* Start region "Обработка текста в анонсе в завииости от ширины экрана"*/
(function adaptive_anonses()
{
		function triming_anonses()
		{
			var anonses = document.getElementsByClassName('news_anons'),
				anonses_count = anonses.length;
			
			while(anonses_count)
			{
				anonses_count--;
				var anons = anonses[anonses_count].outerText,
					anons_length = anons.length;
				
				if(anons_length > 250 ) anonses[anonses_count].outerText = anons.slice(0,250)+'...';
				
			}
		}

		function ScreenGet()
		{
			var ScreenWidth = document.documentElement.clientWidth;

			if (ScreenWidth > 900) 
			{
				triming_anonses();
			}
		}

		window.onresize = function()
		{
			ScreenGet();
		}
		ScreenGet();

}())
/* End region "Обработка текста в анонсе в завииости от ширины экрана"*/