var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function getBrowserCode()
{
	var bname = navigator.appName;
	if (bname == "Microsoft Internet Explorer")
	{	
		return "IE";
	}
}

function hideScrollbar()
{
	if(getBrowserCode() == "IE")
	{
		var htmlElm = document.getElementsByTagName("body");
		//console.log(htmlElm[0]);
		htmlElm[0].style.overflow = "hidden";
	}
}

function showScrollbar()
{
	if(getBrowserCode() == "IE")
	{
		var htmlElm = document.getElementsByTagName("body");
		//console.log(htmlElm[0]);
		htmlElm[0].style.overflow = "visible";
	}
}

}
/*
     FILE ARCHIVED ON 20:14:34 May 22, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:32:16 Jul 30, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.61
  exclusion.robots: 0.162
  exclusion.robots.policy: 0.149
  cdx.remote: 0.096
  esindex: 0.015
  LoadShardBlock: 55.647 (3)
  PetaboxLoader3.datanode: 68.369 (4)
  CDXLines.iter: 20.772 (3)
  load_resource: 52.542
  PetaboxLoader3.resolve: 27.813
*/