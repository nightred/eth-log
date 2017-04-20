
contract EtherLog {
  event recRank(bytes32 indexed logHash, bool like, address addr);
  function rankLog(bytes32 loghash, bool like) {
    if (msg.value > 0) throw;
    LogEntry(logHash, like, msg.sender);
  }
  function() { throw; }
}
