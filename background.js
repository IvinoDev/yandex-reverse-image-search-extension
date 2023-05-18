chrome.contextMenus.create({
	"title": chrome.i18n.getMessage("findImage"),
	"contexts": ["image"],
	"onclick": function(info, tab) {
		chrome.tabs.getSelected(null, function(tab){
			let index = tab.index + 1,
				zone = chrome.i18n.getUILanguage() == "ru" ? "ru" : "com",
				url = "https://yandex." + zone + "/images/search?rpt=imageview&url=" + encodeURIComponent(info.srcUrl);
			chrome.tabs.create({url: url, index: index});
		});
	}
});