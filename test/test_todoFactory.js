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
});