function validateForm(firstName, lastName, email, phone, username, password, confirmPassword) {
    // בודקים אם יש נתונים ריקים
    if (!firstName || !lastName || !email || !phone || !username || !password || !confirmPassword) {
        return false;
    }

    // בודקים אם הסיסמאות תואמות
    if (password !== confirmPassword) {
        return false;
    }

    return true;
}

// פונקציה לבדיקת הקוד
function runTests() {
    // הכנס את כל המקרים האפשריים
    const testCases = [
        { firstName: "", lastName: "Doe", email: "johndoe@gmail.com", phone: "0512345678", username: "johndoe1", password: "password", confirmPassword: "password", expected: false }, // מקרה 1: שדה ריק
        { firstName: "John", lastName: "", email: "johndoe@gmail.com", phone: "0512345678", username: "johndoe1", password: "password", confirmPassword: "password", expected: false }, // מקרה 2: שדה ריק
        { firstName: "John", lastName: "Doe", email: "", phone: "0512345678", username: "johndoe1", password: "password", confirmPassword: "password", expected: false }, // מקרה 3: שדה ריק
        { firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "", username: "johndoe1", password: "password", confirmPassword: "password", expected: false }, // מקרה 4: שדה ריק
        { firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "0512345678", username: "", password: "password", confirmPassword: "password", expected: false }, // מקרה 5: שדה ריק
        { firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "0512345678", username: "johndoe1", password: "", confirmPassword: "password", expected: false }, // מקרה 6: שדה ריק
        { firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "0512345678", username: "johndoe1", password: "password", confirmPassword: "", expected: false }, // מקרה 7: שדה ריק
        { firstName: "John", lastName: "Doe", email: "johndoe@gmail.com", phone: "0512345678", username: "johndoe1", password: "password", confirmPassword: "password", expected: true }, // מקרה 8: כל השדות מלאים
    ];

    // מבצעים את הטסטים
    for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const result = validateForm(testCase.firstName, testCase.lastName, testCase.email, testCase.phone, testCase.username, testCase.password, testCase.confirmPassword);
        if (result === testCase.expected) {
            console.log("מקרה " + (i + 1) + ": הצלחה");
        } else {
            console.log("מקרה " + (i + 1) + ": נכשלה");
        }
    }
}

// קריאה לפונקציה לבדיקת הקוד
runTests()