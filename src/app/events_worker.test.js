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

    it('adds event to the list when all fields are filled and start date is before end date', () => {
        global.document = {
            getElementById: (id) => ({ value: '2022-03-08' }),
            createElement: () => {}
        };

        addEvent();
        assert.equal(document.getElementById.callCount, 4);
    });

    it('displays an alert when start date is greater than or equal to end date', () => {
        global.document = {
            getElementById: (id) => ({ value: '2022-03-10' }),
            createElement: () => {}
        };
        global.window = {
            alert: () => {}
        };

        addEvent();

        assert.equal(window.alert.callCount, 1);
        assert.equal(document.getElementById.callCount, 2); 
    });
});

describe('formatDate', () => {
    
    it('should handle negative numbers in date string', () => {
        const dateString = '-2024-03-08';
        const formattedDate = formatDate(dateString);
        assert.equal(formattedDate, 'Invalid Date');
    });
    
    it('should handle days larger than 31 in date string', () => {
        const dateString = '2024-03-50';
        const formattedDate = formatDate(dateString);
        assert.equal(formattedDate, 'Invalid Date');
    });
    
    it('should handle empty values for month, day, or year', () => {
        const dateString1 = '-03-08';
        const formattedDate1 = formatDate(dateString1);
        assert.equal(formattedDate1, 'Invalid Date');
    
        const dateString2 = '2024--08';
        const formattedDate2 = formatDate(dateString2);
        assert.equal(formattedDate2, 'Invalid Date');
    });
});

describe('deleteEvent', () => {

   

    it('should not delete an event when the confirmation is false', () => {
        const event = {
            target: {
                classList: {
                    contains: () => true
                },
                parentElement: {
                    remove: () => {}
                }
            }
        };
        global.window = {
            confirm: () => false
        };

        deleteEvent(event);
        assert.equal(event.target.classList.contains.callCount, 1);
        assert.equal(event.target.parentElement.remove.callCount, 0);
    });

    it('should not delete an event if delete button is not clicked', () => {
        const event = {
            target: {
                classList: {
                    contains: () => false
                },
                parentElement: {
                    remove: () => {}
                }
            }
        };
        global.window = {
            confirm: () => true
        };

        deleteEvent(event);
        assert.equal(window.confirm.callCount, 0);
        assert.equal(event.target.classList.contains.callCount, 1);
        assert.equal(event.target.parentElement.remove.callCount, 0);
    });
});