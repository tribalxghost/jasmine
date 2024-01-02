describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    serverTbody
    
  },
  );

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

it('shouldn\'t add new server on an empty input', function() {
  serverNameInput.value = ''
  submitServerInfo()
  expect(Object.keys(allServers).length).toEqual(0)

    
})


  afterEach(function() {
    // teardown logic
   serverId = 0
    serverTbody.innerHTML = ''
    allServers = {}
  });
});
