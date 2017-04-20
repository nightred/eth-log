// JS for the setup

const contractAddress = ''; //todo
const contractABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "logHash",
        "type": "bytes32"
      },
      {
        "name": "like",
        "type": "bool"
      }
    ],
    "name": "rankLog",
    "outputs": [],
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "loghash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "like",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "addr",
        "type"; "address"
      }
    ],
    "name": "recRank",
    "type"; "event"
  }
];

var ethRankContract, ethRank;
var log;

function init() {
  if (typeof web3 !== 'undefined' && typeof Web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else if (typeof Web3 !== 'undefined') {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  } else if (typeof web3 == 'undefined') {
    return;
  }

 log = decodeURI(getParameterByName('log'));

 web3.eth.getCode(contractAddress, function(e, r) {
   if (e) { return false; }

   ethRankContract = web3.eth.contract(contractABI);
   ethRank = etherRankContract.at(contractAddress);

   if (log && log.length > 0 && log != 'null') {
     //watchRank();
   }
 })
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
