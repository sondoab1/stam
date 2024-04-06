function runUnitTests() {
    console.log("Running unit tests for auth function...");

    // מקרה נכון
    console.log("Case 1: Correct credentials...");
    document.getElementById("Username").value = "Admin";
    document.getElementById("password").value = "admin123";
    auth(); // אמור להציג הודעת הצלחה ולנווט לדף הבית

    // מקרה שגוי - שם משתמש שגוי
    console.log("Case 2: Incorrect username...");
    document.getElementById("Username").value = "WrongUser";
    document.getElementById("password").value = "admin123";
    auth(); // אמור להציג הודעת שגיאה

    // מקרה שגוי - סיסמה שגויה
    console.log("Case 3: Incorrect password...");
    document.getElementById("Username").value = "Admin";
    document.getElementById("password").value = "wrongPassword";
    auth(); // אמור להציג הודעת שגיאה

    // מקרה שגוי - שם משתמש וסיסמה שגויים
    console.log("Case 4: Incorrect username and password...");
    document.getElementById("Username").value = "WrongUser";
    document.getElementById("password").value = "wrongPassword";
    auth(); // אמור להציג הודעת שגיאה

    // מקרה קצה - שדות ריקים
    console.log("Case 5: Empty fields...");
    document.getElementById("Username").value = "";
    document.getElementById("password").value = "";
    auth(); // אמור להציג הודעת שגיאה

    console.log("Unit tests complete.");
}