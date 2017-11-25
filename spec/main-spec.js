const main = require('../main/main');
describe('5-bottles', function () {
    var inputNumber;

    beforeEach(function () {
        inputNumber = 5;
    });

    it('should print correct text', function () {

        spyOn(console, 'log');

        main(inputNumber);

        var expectText =
			'5 bottles of beer on the wall, 5 bottles of beer.\n'+
'Take one down and pass it around, 4 bottles of beer on the wall.\n'+
'4 bottles of beer on the wall, 4 bottles of beer.\n'+
'Take one down and pass it around, 3 bottles of beer on the wall.\n'+
'3 bottles of beer on the wall, 3 bottles of beer.\n'+
'Take one down and pass it around, 2 bottles of beer on the wall.\n'+
'2 bottles of beer on the wall, 2 bottles of beer.\n'+
'Take one down and pass it around, 1 bottle of beer on the wall.\n'+
'1 bottle of beer on the wall, 1 bottle of beer.\n'+
'Take one down and pass it around, no more bottles of beer on the wall.\n'+
'No more bottles of beer on the wall, no more bottles of beer.\n'+
'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
