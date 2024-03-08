const assert = require('assert');
const sinon = require('sinon');
const { addEvent, formatDate, deleteEvent } = require('./open.js');

describe('addEvent', () => {
    

    it('adds event to the list when all fields are filled and start date is before end date', () => {
        sinon.stub(document, 'getElementById').onFirstCall().returns({ value: '2022-03-08' }).onSecondCall().returns({ value: '2022-03-10' });
        addEvent();

        assert.strictEqual(document.getElementById.callCount, 4);
        assert(document.createElement.called);
    });

    it('displays an alert when start date is greater than or equal to end date', () => {
        sinon.stub(document, 'getElementById').onFirstCall().returns({ value: '2022-03-10' }).onSecondCall().returns({ value: '2022-03-08' });
        const alertStub = sinon.stub(window, 'alert');

        addEvent();

        assert(alertStub.calledWith("Please ensure that the start date is before the end date."));
        assert.strictEqual(document.getElementById.callCount, 2);
        assert(!document.createElement.called);

        alertStub.restore();
    });
});

describe('formatDate', () => {
   
    it('should handle negative numbers in date string', () => {
        const dateString = '-2024-03-08';
        const formattedDate = formatDate(dateString);
        assert.strictEqual(formattedDate, 'Invalid Date');
    });

    it('should handle days larger than 31 in date string', () => {
        const dateString = '2024-03-50';
        const formattedDate = formatDate(dateString);
        assert.strictEqual(formattedDate, 'Invalid Date');
    });

    it('should handle empty values for month, day, or year', () => {
        const dateString1 = '-03-08';
        const formattedDate1 = formatDate(dateString1);
        assert.strictEqual(formattedDate1, 'Invalid Date');

        const dateString2 = '2024--08';
        const formattedDate2 = formatDate(dateString2);
        assert.strictEqual(formattedDate2, 'Invalid Date');
    });
});

describe('deleteEvent', () => {
    

    it('should not delete an event when confirmation is false', () => {
        const event = {
            target: {
                classList: { contains: sinon.stub().returns(true) },
                parentElement: { remove: sinon.spy() }
            }
        };

        const confirmStub = sinon.stub(window, 'confirm').returns(false);

        deleteEvent(event);

        assert(!event.target.parentElement.remove.called);

        confirmStub.restore();
    });

    it('should not delete an event if delete button is not clicked', () => {
        const event = {
            target: {
                classList: { contains: sinon.stub().returns(false) },
                parentElement: { remove: sinon.spy() }
            }
        };

        deleteEvent(event);

        assert(!event.target.parentElement.remove.called);
    });
});
