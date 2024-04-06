const assert = require('assert');
const { addEvent, formatDate, deleteEvent } = require('./events_worker');

describe('addEvent', () => {
    it('should add a new event to the events list', () => {
        global.document = {
            getElementById: (id) => ({
                value: 'Test Title',
                id: id
            })
        };
        const eventsList = {
            appendChild: () => {}
        };

        addEvent();
        assert.equal(document.getElementById.callCount, 4); 
        assert.equal(eventsList.appendChild.callCount, 1); 
    });
});
describe('formatDate', () => {
    it('should format a date string correctly', () => {
        const dateString = '2024-03-08';
        const formattedDate = formatDate(dateString);
        assert.strictEqual(formattedDate, 'March 8, 2024');
    });
});

describe('deleteEvent', () => {
    it('should delete an event when confirmation is true', () => {
        const event = {
            target: {
                classList: { contains: sinon.stub().returns(true) },
                parentElement: { remove: sinon.spy() }
            }
        };

        const confirmStub = sinon.stub(window, 'confirm').returns(true);

        deleteEvent(event);

        assert(event.target.classList.contains.calledWith('delete-btn'));
        assert.strictEqual(event.target.parentElement.remove.callCount, 1);

        confirmStub.restore();
    });

});