// JS for the setup

function init() {
  if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else if (typeof Web3 !== 'undefined') {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  } else if (typeof web3 == 'undefined') {
    return;
  }

 log = decodeURI(getParameterByName('log'));
}


function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");

  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  results = regex.exec(url);

  if (!results) { return null; }
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
