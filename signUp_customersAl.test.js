//test1:
it('should toggle signup window visibility on signup button click', () => {
  const signUpBtn = document.getElementById('signUpBtn');
  const signUpWindow = document.getElementById('signUpWindow');

  // Simulate initial state (window hidden)
  expect(signUpWindow.style.display).toBe('none');

  // Simulate button click
  signUpBtn.click();

  // Window should now be visible
  expect(signUpWindow.style.display).toBe('block');

  // Simulate another click (toggling back to hidden)
  signUpBtn.click();

  // Window should be hidden again
  expect(signUpWindow.style.display).toBe('none');
});


//test 2:
it('should hide signup window on cancel button click', () => {
  const cancelBtn = document.getElementById('cancelBtn');
  const signUpWindow = document.getElementById('signUpWindow');

  // Simulate window being shown (assuming another test case shows it)
  signUpWindow.style.display = 'block';

  // Simulate cancel button click
  cancelBtn.click();

  // Window should now be hidden
  expect(signUpWindow.style.display).toBe('none');
});
 

//test3:
it('should display error message for non-matching passwords on form submit', () => {
  const signUpForm = document.getElementById('signUpForm');
  const errorMsg = document.getElementById('errorMsg');

  // Set password and confirm password to different values
  const passwordInput = document.getElementById('password');
  passwordInput.value = 'test123';
  const confirmPasswordInput = document.getElementById('confirmPassword');
  confirmPasswordInput.value = 'differentPassword';

  // Simulate form submission (triggering validation)
  signUpForm.dispatchEvent(new Event('submit'));

  // Expect error message to be displayed
  expect(errorMsg.style.display).toBe('block');
  expect(errorMsg.textContent).toContain('Passwords do not match');
});


  