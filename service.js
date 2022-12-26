function getDomainFromUrl(url) {
    var a = document.createElement('a').
    a.setAttribute('href', url);
    return a.hostname;
};

let myDB = [];

chrome.tabs.onActivated.addListener(function(activeInfo) {
    if (myDB.length != 0) {
        // if previous entry has same ID and isn't closed, do nothing
        if (myDB[myDB.length-1].id === activeInfo.id && !myDB[myDB.length-1].hasOwnProperty(closeTime)) {
            return;
					} else {
						// if previous entry isn't closed, close it
						if (!myDB[myDB.length-1].hasOwnProperty(closeTime)) {
								myDB[myDB.length-1].closeTime = new Date().getTime();
            }
        }
    }


    let thisTab = {};
    thisTab.id = activeInfo.tabId;
    thisTab.url = activeInfo.url;
    thisTab.favIconUrl = activeInfo.favIconUrl;
    thisTab.domain = getDomainFromUrl(activeInfo.url);
    thisTab.openTime = new Date().getTime();
    myDB.push(thisTab);
});