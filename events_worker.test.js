
const { addEvent, formatDate, deleteEvent } = require('./open.js');
describe('addEvent', () => {
    test('it should add a new event to the events list', () => {
        document.getElementById = jest.fn((id) => ({
            value: 'Test Title',
            id: id
        }));
        const eventsList = {
            appendChild: jest.fn()
        };

        addEvent();
        expect(document.getElementById).toHaveBeenCalledTimes(4); // Title, start, end, and summary inputs
        expect(eventsList.appendChild).toHaveBeenCalledTimes(1); // Event should be added to the eventsList
    });
    test('adds event to the list when all fields are filled and start date is before end date', () => {
        document.getElementById.mockReturnValueOnce({ value: '2022-03-08' }); // Start date
        document.getElementById.mockReturnValueOnce({ value: '2022-03-10' }); // End date

        addEvent();
        expect(document.getElementById).toHaveBeenCalledTimes(4);
        expect(document.createElement).toHaveBeenCalled();
    });

    test('displays an alert when start date is greater than or equal to end date', () => {
        document.getElementById.mockReturnValueOnce({ value: '2022-03-10' }); // Start date
        document.getElementById.mockReturnValueOnce({ value: '2022-03-08' }); // End date

        addEvent();

        expect(window.alert).toHaveBeenCalledWith("Please ensure that the start date is before the end date.");
        expect(document.getElementById).toHaveBeenCalledTimes(2); 
        expect(document.createElement).not.toHaveBeenCalled();
    });
});

describe('formatDate', () => {
    test('it should format a date string correctly', () => {
        const dateString = '2024-03-08';
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toBe('March 8, 2024'); 
    });
    test('it should handle negative numbers in date string', () => {
        const dateString = '-2024-03-08';
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toBe('Invalid Date');
    });
    
    test('it should handle days larger than 31 in date string', () => {
        const dateString = '2024-03-50';
        const formattedDate = formatDate(dateString);
        expect(formattedDate).toBe('Invalid Date');
    });
    
    test('it should handle empty values for month, day, or year', () => {
        const dateString1 = '-03-08';
        const formattedDate1 = formatDate(dateString1);
        expect(formattedDate1).toBe('Invalid Date');
    
        const dateString2 = '2024--08';
        const formattedDate2 = formatDate(dateString2);
        expect(formattedDate2).toBe('Invalid Date');
    });

});

describe('deleteEvent', () => {
    test('it should delete an event', () => {

        const event = {
            target: {
                classList: {
                    contains: jest.fn(() => true)
                },
                parentElement: {
                    remove: jest.fn()
                }
            }
        };
        deleteEvent(event);

        expect(event.target.classList.contains).toHaveBeenCalledWith('delete-btn');
        expect(event.target.parentElement.remove).toHaveBeenCalledTimes(1);
    });

});
