chrome.contextMenus.create({
    title: "Select all",
    contexts: ["all"],
    onclick: function(tab) {
        chrome.tabs.executeScript({
            code: 'var range = document.createRange();'
                + 'range.selectNodeContents(document.getElementsByTagName("body")[0]);'
                + 'window.getSelection().addRange(range);'
        });
    },
});