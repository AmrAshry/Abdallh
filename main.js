const btn = document.querySelector(".mode-btn");
const overlay = document.querySelector(".overlay");
const h1 = document.querySelector("h1");
const lastp = document.querySelector(".container .info p:last-of-type");
const jobTitle = document.querySelector(".container .info p:first-of-type span");

btn.addEventListener("click", () => {
  if (
    h1.classList.contains("active") &&
    jobTitle.classList.contains("active") &&
    lastp.classList.contains("active")
  ) {// 1. تعريف العناصر الأساسية
    const btn = document.querySelector(".mode-btn");
    const container = document.querySelector(".container");
    const overlay = document.querySelector(".overlay");
    const profileImg = document.querySelector(".img img");
    
    // 2. وظيفة التبديل بين الدارك واللايت مود
    btn.addEventListener("click", () => {
        // تبديل الكلاس dark-mode للحاوية بالكامل
        container.classList.toggle("dark-mode");
    
        // التحقق من الوضع الحالي لتغيير الأيقونة والخلفية
        if (container.classList.contains("dark-mode")) {
            // الوضع المظلم
            overlay.style.backgroundColor = "#1a282c"; 
            btn.innerHTML = "☀️"; // تغيير الأيقونة لشمس
            
            // اختيار اختياري: حفظ الوضع في المتصفح
            localStorage.setItem("theme", "dark");
        } else {
            // الوضع الفاتح
            overlay.style.backgroundColor = "#e2e8f0";
            btn.innerHTML = "🌙"; // تغيير الأيقونة لقمر
            
            localStorage.setItem("theme", "light");
        }
    });
    
    // 3. تأثير الصورة عند مرور الماوس (Hover Effect)
    profileImg.addEventListener("mouseenter", () => {
        profileImg.style.transform = "scale(1.05)";
        profileImg.style.filter = "brightness(1.1)";
    });
    
    profileImg.addEventListener("mouseleave", () => {
        profileImg.style.transform = "scale(1)";
        profileImg.style.filter = "brightness(1)";
    });
    
    // 4. (إضافي) التأكد من الوضع المفضل عند فتح الصفحة
    window.onload = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            container.classList.add("dark-mode");
            overlay.style.backgroundColor = "#1a282c";
            btn.innerHTML = "☀️";
        }
    };
    h1.classList.remove("active");
    jobTitle.classList.remove("active");
    lastp.classList.remove("active");
    overlay.style.backgroundColor = "#e2e6f0";
    btn.innerHTML = "🌙";
  } else {
    h1.classList.add("active");
    jobTitle.classList.add("active");
    lastp.classList.add("active");
    overlay.style.backgroundColor = "#1a282c";
    btn.innerHTML = "☀️";
  }
});
const profileImg = document.querySelector(".img img");

profileImg.addEventListener("mouseenter", () => {
  profileImg.classList.add("active");
});

profileImg.addEventListener("mouseleave", () => {
  profileImg.classList.remove("active");
});
