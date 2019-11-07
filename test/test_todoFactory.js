const TodoFactory = artifacts.require('TodoFactory');

contract('TodoFactory', function(accounts) {
    before(async () => {
        // 在所有測試開始前佈署合約
        contract = await TodoFactory.deployed();
    });

    it('Should contract deployed properly', () => {
        // 驗證合約是否已經被佈署
        assert.isDefined(contract);
    });

    // it('Should not complete invalid task', async () => {
    //     contract.finishTodo(9527, (err) => {
    //         assert.isDefined(err);
    //     })
    // });

    it('Should add new todo properly', async () => {
        // addTodo 的呼叫是 Transaction 所以即使 addTodo 中有回傳值，也無法收到
        const tx1 = await contract.addTodo("Hello world!");
        // const events1 = utils.getEvents(tx1, { event: 'OnTodoAdded', logIndex: 0 });
        // todoId1 = events1[0].args.todoId;
    });
});


function getEvents (tx, filter) {
    const logs = tx.logs;
    const events = _.filter(logs, filter);
    return events;
}