// (function (window, document) {

  var killNag = function killNag( siteNagInfo ) {
    window.console.log("NagSassin looks around for known nags.");
    var targetClasses = siteNagInfo.staticNags;
    var nagElements = document.querySelectorAll(targetClasses);
    if (nagElements.length === 0) {
      window.console.log("NagSassin didn't see nags to target in " + window.location.hostname);
    }
    else {
      for (let nagElement of nagElements) {
        nagElement.remove();
        window.console.log("NagSassin slew a nag immediately.");
      }
    }
  };


  var slayAsyncNagIfMatching = function slayAsyncNagIfMatching(target) {

    if (target.classList == nagSassinHostnames[window.location.hostname].asyncNags) {
      window.console.log(target);
      target.remove();
      document.removeEventListener('DOMNodeInserted', slayAsyncNagWhenFound);
      window.console.log("NagSassin saw the target nag walk in, and slew it.");
    } else {
      window.console.log(
        String(target.classList) + " doesn't match " + String(siteNagInfo.asyncNags));
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
      "staticNags": [".EmailCapture"],
      "asyncNags": [],
      "messyClasses": []
    },
    "www.bestbuy.com": {
      "staticNags": [".email-submission-modal", ".modal-backdrop.fade.in"],
      "asyncNags": [],
      "messyClasses": [".modal-open"]
    },
    "www.wired.com": {
      "staticNags": [".bx-campaign, .paywall-bar"],
      "asyncNags": [],
      "messyClasses": [".bx-client-overlay"]
    },
    "www.instagram.com": {
      //       tHaIX            Igw0E     IwRSH   pmxbr     YBx95       _4EzTm                                      CIRqI                  IY_1_                           XfCBB             HcJZg        O1flK D8xaz  _7JkPY  TxciK  N9d2H ZUqME
      "staticNags": [".tHaIX.Igw0E.IwRSH"],
      "asyncNags": ["RnEpo", "Yx5HN"],
      "messyClasses": [] // have to manually set overflow: scroll on body
    }
  };


  var dispatchNagSassin = function dispatchNagSassin() {

    if ( nagSassinHostnames[window.location.hostname] ) {
      killNag( nagSassinHostnames[window.location.hostname] );
      restoreFunctionality( nagSassinHostnames[window.location.hostname] );

      window.console.log( nagSassinHostnames[window.location.hostname] );
    } else {
      window.console.log("NagSassin knows nothing about nags on " + window.location.hostname);
    }
  };

    
  // in case the document is already rendered
  dispatchNagSassin();
  if (nagSassinHostnames[window.location.hostname].asyncNags.length) {
    window.console.log("NagSassin waits in the shadows for a particular nag to appear.");
    document.addEventListener('DOMNodeInserted', slayAsyncNagIfMatching, false);
  }
  

// Select the node that will be observed for mutations
const targetNode = document.querySelectorAll('body');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: false };

// Callback function to execute when mutations are observed
const callback = function( mutationsList, observer ) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            window.console.log('A child node has been added or removed.');
            window.console.log(mutation);
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new window.MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();


// })(window, document);


