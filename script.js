// 1. Function for Form Validation (Rubric: Form Validation & Control Statements)
function validateSignup(event) {
    event.preventDefault(); // يمنع الصفحة من التحديث التلقائي

    // جلب البيانات من الحقول
    const name = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    const errorMsg = document.getElementById('error-message');

    // استخدام Control Statements (if/else) للتحقق
    if (pass.length < 6) {
        errorMsg.innerHTML = "❌ Password must be at least 6 characters long.";
        errorMsg.style.color = "red";
    } else if (pass !== confirmPass) {
        errorMsg.innerHTML = "❌ Passwords do not match!";
        errorMsg.style.color = "red";
    } else {
        // Change HTML dynamically
        errorMsg.innerHTML = "✅ Signup Successful! Welcome " + name + "!";
        errorMsg.style.color = "green";
    }
}

// 2. Function to Change HTML and CSS (Rubric: Change HTML elements and CSS Styles)
function changeTheme() {
    const hero = document.getElementById('hero-section');
    const title = document.getElementById('hero-title');

    // تغيير الستايل (CSS)
    hero.style.backgroundColor = "#4b0082"; // لون بنفسجي غامق
    hero.style.borderBottom = "5px solid gold";

    // تغيير محتوى النص (HTML)
    title.innerHTML = "🌟 Welcome to GameZone VIP 🌟";
}

// 3. Function using Repetition and Dynamic Text (Rubric: Repetition & Dynamic Elements)
function highlightExpensiveGames() {
    // جلب جميع صفوف الجدول
    const rows = document.querySelectorAll('#games-section table tr');

    // استخدام حلقة التكرار (for loop) للمرور على الألعاب
    for (let i = 1; i < rows.length; i++) {
        let priceCell = rows[i].getElementsByTagName('td')[3]; // الخانة الرابعة (السعر)
        
        if (priceCell) {
            let priceText = priceCell.innerText;
            // إذا كان السعر يحتوي على 50 أو 60
            if (priceText.includes('50') || priceText.includes('60')) {
                priceCell.style.color = "red"; // تغيير لون السعر
                priceCell.style.fontWeight = "bold";
                priceCell.innerHTML += " 🔥"; // إضافة نص ديناميكي
            }
        }
    }
}

// تشغيل دالة الجدول تلقائياً عند تحميل الصفحة
window.onload = function() {
    if (document.getElementById('games-section')) {
        highlightExpensiveGames();
    }
};