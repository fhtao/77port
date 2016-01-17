chrome.omnibox.onInputEntered.addListener(
  function(text) {
    var url = "";
   
    if (text == '33') {
       url = "https://bej301033.cn.oracle.com/siku/web/";
    } else if (text == "iwork") {
       url = "http://bej301454.cn.oracle.com/TDDPortal/index.html#"
    } else if (text.length == 2) {
       url = "http://slc00bnu.us.oracle.com:77"+text+"/opcadminui/faces/OPCAdministration.jspx"
    }else if (text.length == 8) {
       url = "https://bug.oraclecorp.com/pls/bug/webbug_print.show?c_rptno="+text;
    }
    navigate(url);
  });
  
function navigate(url) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.update(tabs[0].id, {url: url});
  });
}