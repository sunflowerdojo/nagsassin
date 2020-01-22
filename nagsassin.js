document.body.style.border = "5px solid red";
window.console.log("NagSassin waits in the shadows for annoying popups.");

var killNag = function killNag( siteNagInfo ) {

  var targetClasses = siteNagInfo.nagSources;
  var nagElements = document.querySelectorAll(targetClasses);
  if (nagElements.length === 0) {
    window.console.log("NagSassin didn't see nags to target in " + window.location.hostname);
  }
  else {
    for (let nagElement of nagElements) {
      nagElement.remove();
      window.console.log("NagSassin slew a nag.");
    }
  }
};

var restoreFunctionality = function ( siteNagInfo ) {
  var removeTheseClasses = siteNagInfo.messyClasses;
  var elementsBlockingScroll = document.querySelectorAll( removeTheseClasses );
  for (fixThisElement in elementsBlockingScroll) {
    fixThisElement.classList.remove(
      siteNagInfo.messyClasses
    );
    window.console.log("NagSassin cleaned up a body.");
  }
};

var nagSassinHostnames = {
  "www.walmart.com": {
    "nagSources": [".EmailCapture"],
    "messyClasses": []
  },
  "www.bestbuy.com": {
    "nagSources": [".email-submission-modal", ".modal-backdrop.fade.in"],
    "messyClasses": [".modal-open"]
  },
  "www.wired.com": {
    "nagSources": [".bx-campaign, .paywall-bar"],
    "messyClasses": [".bx-client-overlay"]
  },
  "www.instagram.com": {
    //       tHaIX            Igw0E     IwRSH   pmxbr     YBx95       _4EzTm                                      CIRqI                  IY_1_                           XfCBB             HcJZg        O1flK D8xaz  _7JkPY  TxciK  N9d2H ZUqME
    "nagSources": [".tHaIX.Igw0E.IwRSH, .RnEpo.Yx5HN"],
    "messyClasses": [] // have to manually set overflow: scroll on body
  }
};


function dispatchNagSassin() {
  if (nagSassinHostnames[window.location.hostname]) {
    killNag(nagSassinHostnames[window.location.hostname]);
    restoreFunctionality(nagSassinHostnames[window.location.hostname]);
  } else {
    window.console.log("NagSassin knows nothing about nags on " + window.location.hostname);
  }
}
  
// in case the document is already rendered
if (document.readyState!='loading') window.setTimeout(dispatchNagSassin, 3000);
// modern browsers
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', dispatchNagSassin);
// IE <= 8
else document.attachEvent('onreadystatechange', function(){
    if (document.readyState=='complete') window.setTimeout(dispatchNagSassin, 3000);
});