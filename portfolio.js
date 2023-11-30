//This code is used to applying the  animation on scroll for the elements used in the portfolio

AOS.init();

//This code is for Navbar to show the menu list

let toggle=document.querySelector(".toggle");

let menu=document.querySelector(".navbar-menu");

toggle.addEventListener('click',function(){     
menu.classList.toggle("active")
});

//This code is for ABOUT section READ MORE button

const dots=document.getElementById("dots");
const moreText=document.getElementById("more");
const btnText=document.getElementById("myBtn");
function myFunction(){
if(dots.style.display === "none"){
    dots.style.display="inline";
    btnText.textContent="READ MORE";
    moreText.style.display="none";
    btnText.style.outline="none";
}else{
    dots.style.display = "none";
    btnText.textContent="READ LESS";
    moreText.style.display="inline";
}
}

btnText.addEventListener('click',()=>{
    const audio=new Audio()
    audio.src="click.mp3"
    audio.play()
})

//This code is for Contact section.. to get responses through G-mail

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone")
const messageInput = document.getElementById("message")

const publicKey="k3vWHtPut4M5Pbsvp";

const serviceID="service_gr7yz9p";

const templateID="template_zlb4w4a";

emailjs.init(publicKey);

contactForm.addEventListener("submit",event=>{
    event.preventDefault();
     
    submitBtn.textContent = "Sending.."

    const inputFields={
        name:nameInput.value,
        email:emailInput.value,
        number:phoneInput.value,
        message:messageInput.value
    }

    emailjs.send(serviceID,templateID,inputFields)
    .then(()=>{
        alert("Message Sent Successfully")
        submitBtn.textContent="Sent";

        nameInput.value= "",
        emailInput.value= "",
        phoneInput.value= "",
        messageInput.value= ""
    },(error)=>{
        console.log(error)
        alert("Something went wrong")

        submitBtn.textContent="Sorry !!";
    })
})

//sound effects
const audio=new Audio();
audio.src="click.mp3"

const download=new Audio()
download.src="download.mp3"

const up=new Audio()
up.src="go-up.mp3"

const keydown=new Audio()
keydown.src="key_sound.mp3"
