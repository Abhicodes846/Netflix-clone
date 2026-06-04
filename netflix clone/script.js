const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach((item)=>{

item.addEventListener("click",()=>{

item.nextElementSibling.classList.toggle("show");

});

});

const language =
document.getElementById("language");

language.addEventListener("change",()=>{

if(language.value==="hi"){

document.getElementById("title").innerText =
"अनलिमिटेड फिल्में, टीवी शो और बहुत कुछ";

document.getElementById("price").innerText =
"₹149 से शुरू। कभी भी रद्द करें।";

document.getElementById("desc").innerText =
"देखने के लिए तैयार हैं? शुरू करने के लिए अपना ईमेल दर्ज करें।";

document.getElementById("startBtn").innerText =
"शुरू करें >";

}
else{

document.getElementById("title").innerText =
"Unlimited movies, TV shows and more";

document.getElementById("price").innerText =
"Starts at ₹149. Cancel anytime.";

document.getElementById("desc").innerText =
"Ready to watch? Enter your email to create or restart your membership.";

document.getElementById("startBtn").innerText =
"Get Started >";

}

});
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    const email =
    document.querySelector(".email-box input").value;

    if(email.trim() === ""){
        alert("Please enter your email");
        return;
    }

    localStorage.setItem("userEmail", email);

    alert("Login Successful!");

    window.location.href = "home.html";

});