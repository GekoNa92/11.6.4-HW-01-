const countDown = require('./index');

describe('countDown', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });

    test('должен вывести числа 5, 4, 3, 2 и 1', () => {
        countDown(5);
        expect(console.log).toHaveBeenCalledWith(5);
        expect(console.log).toHaveBeenCalledWith(4);
        expect(console.log).toHaveBeenCalledWith(3);
        expect(console.log).toHaveBeenCalledWith(2);
        expect(console.log).toHaveBeenCalledWith(1);
    });

    test('должен не выводить ничего, если n = 0', () => {
        countDown(0);
        expect(console.log).not.toHaveBeenCalled();
    });

    test('должен вывести 1, если n = 1', () => {
        countDown(1);
        expect(console.log).toHaveBeenCalledWith(1);
    });
});