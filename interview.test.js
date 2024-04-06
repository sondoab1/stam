const { JSDOM } = require('jsdom');
const { fireEvent } = require('@testing-library/dom');
const { screen } = require('@testing-library/dom');
require('jest');

let dom;
let form;
let errorMsg;

beforeEach(() => {
  dom = new JSDOM(
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Interview</title>
      </head>
      <body>
        <div id="interviewWindow">
          <form id="interviewForm">
            <label for="Contribution">Contribution/selled-2:</label>
            <input type="text" id="Contribution" name="Contribution" required>
            <button type="submit">Submit</button>
          </form>
          <p id="errorMsg" class="error"></p>
        </div>
        <script src="./interview.js"></script>
      </body>
      </html>`
  );

  document.body.innerHTML = dom.window.document.body.innerHTML;

  form = document.getElementById('interviewForm');
  errorMsg = document.getElementById('errorMsg');
});

test('error message should appear for invalid contribution', () => {
  fireEvent.submit(form);
  expect(errorMsg.textContent).toEqual('Must be one of these words: Contribution or selled-2.');
});

test('error message should not appear for valid contribution', () => {
  const contributionInput = document.getElementById('Contribution');
  contributionInput.value = 'Contribution';
  fireEvent.submit(form);
  expect(errorMsg.textContent).toEqual('');
});
