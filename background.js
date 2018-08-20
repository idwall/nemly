/*aqui estão os eventos a serem realizados pela extenssão,
* onde ele fica escutando a ação do botão, e quando o mesmo é acionado
* ela chama a página de ação*/
chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          /*Aqui podem ser adicionadas condições para que a extenssão seja
          * ativada*/
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });

    chrome.runtime.onConnect.addListener(function(port) {
      port.onMessage.addListener(function(msg) {
        port.postMessage({counter: msg.counter+1});
      });
    });

    chrome.extension.onRequest.addListener(
      function(request, sender, sendResponse) {
        sendResponse({counter: request.counter+1});
      });

      chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
        alert(response);
      });
});
