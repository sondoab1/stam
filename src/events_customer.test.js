const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const { createEventHTML, initializeEvents } = require('./events_customer.js');

describe('createEventHTML', () => {
  it('should create HTML for event', () => {
    const event = {
      name: 'Test Event',
      startDate: '2024-01-01',
      endDate: '2024-01-03',
      summary: 'Test summary',
      location: 'Test location'
    };

    const eventHTML = createEventHTML(event);
    expect(eventHTML.querySelector('h2').textContent).to.equal('Test Event');
    expect(eventHTML.querySelector('p').textContent).to.contain('Start Date:');
    expect(eventHTML.querySelector('.attend-button').textContent).to.equal('Attend');
  });
});

describe('initializeEvents', () => {
  it('should initialize events in container', () => {
    const eventsData = [
      {
        name: 'Test Event 1',
        startDate: '2024-01-01',
        endDate: '2024-01-03',
        summary: 'Test summary 1',
        location: 'Test location 1'
      },
      {
        name: 'Test Event 2',
        startDate: '2024-01-05',
        endDate: '2024-01-07',
        summary: 'Test summary 2',
        location: 'Test location 2'
      }
    ];

    const dom = new JSDOM(`<!DOCTYPE html><div id="events"></div>`);
    global.document = dom.window.document;

    const eventsContainer = document.getElementById('events');
    initializeEvents(eventsData, eventsContainer);

    const events = eventsContainer.querySelectorAll('.event');
    expect(events.length).to.equal(2);
  });
});