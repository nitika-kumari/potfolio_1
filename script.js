    window.addEventListener('scroll', ()=>{
        let mainDiv = document.querySelector('.main-div');
        mainDiv.classList.toggle('sticky', window.scrollY > 0)
    })

    let menuBtn = document.querySelector('.click');
    let openMenu1 = document.querySelector('.main-menu');


    menuBtn.addEventListener('click', () => {
        
        openMenu1.classList.toggle('openMenu');

        if (openMenu1.classList.contains('openMenu')) {
        
            menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {
        
            menuBtn.innerHTML = `<i class="fa-solid fa-bars menu-btn"></i>`; 
        }
    });


    let menuItems = document.querySelectorAll('.main-menu li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            openMenu1.classList.remove('openMenu'); 
            menuBtn.innerHTML = `<i class="fa-solid fa-bars menu-btn"></i>`; 
        });
    });

    $(".animated-progress span").each(function () {
        $(this).animate(
        {
            width: $(this).attr("data-progress") + "%",
        },
        1000
        );
        $(this).text($(this).attr("data-progress") + "%");
    });


    function openVideoPopup() {
    
        document.getElementById('videoModal').style.display = 'block';
    
        var video = document.getElementById('myVideo');
        if (!video.paused) {
            video.pause();
        }
    }

    function closeVideoPopup() {

        document.getElementById('videoModal').style.display = 'none';
    }

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 300){
            goToTop.style.display = 'inline-block';
        }else{
            goToTop.style.display = ''
        }
    })

    let goToTop = document.querySelector('.top-to-arrow');
    goToTop.addEventListener('click', ()=>{
        window.scrollTo (0,0);
        // if(window.scrollY < 10){
        //     goToTop.style.opacity = "1";
        // }else{
        //     goToTop.style.opacity = "0";
        // }

    })


    let FullName  = document.querySelector('#fullname');
    let Contact = document.querySelector('#phone');
    let Email = document.querySelector('#id');
    let Meassage = document.querySelector('#message');
    // let password = document.querySelector('#psw');
    // let conform = document.querySelector('#cnf');
    let Submit = document.querySelector('#btn');
    let nameError  = document.querySelector('#name-error');
    let phoneError  = document.querySelector('#phone-error');
    let emailError  = document.querySelector('#email-error');
    let messageError  = document.querySelector('#meassage-error');
    // let passwordError = document.querySelector('#password-error');
    // let conformError = document.querySelector('#cnf-error');


    Submit.addEventListener('click',(e)=>{
        e.preventDefault();
        validate();
    });

    function validate(){
        let nameValue = FullName.value;
        let phoneValue = Contact.value;
        let emailValue = Email.value;
        let message = Meassage.value;
        // let passwordValue = password.value;
        // let conformValue = conform.value;

        if(nameValue === ''){
            nameError.innerHTML = `name is required`;
        }else if(nameValue.length <= 4){
            nameError.innerHTML = `Please enter atlest 5 charcter`;
        }else{
            nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        }
    
        if(phoneValue === ''){
            phoneError.innerHTML = `Contact number is required`
        }else if (phoneValue.length !== 10 || !/^[0-9]+$/.test(phoneValue)) {
            phoneError.innerHTML = 'Invalid phone number format';
        }else{
            phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        }
        
        if(emailValue === ''){
            emailError.innerHTML = `Email is required `
        }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.innerHTML = 'Invalid email format';
        }else{
            emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        }
        
        if(message === ''){
            messageError.innerHTML = `Message is required`;
        }else if( /[^A-Za-z]/.test(nameValue)){
            messageError.innerHTML = 'Please enter only alphabetic characters';
        }else if(message.length <=10){
            messageError.innerHTML = 'Please enter 5 characters';
        }else{
            messageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        }

        // if(passwordValue === ''){
        //     passwordError.innerHTML = `Password is required`;
        // } else if (passwordValue.length < 8) {
        //     passwordError.innerHTML = 'must be at least 8 characters long';
        // } else if (!/[A-Z]/.test(passwordValue)) {
        //     passwordError.innerHTML = 'contain at least one uppercase letter';
        // } else if (!/[a-z]/.test(passwordValue)) {
        //     passwordError.innerHTML = 'contain at least one lowercase letter';
        // } else if (!/\d/.test(passwordValue)) {
        //     passwordError.innerHTML = 'contain at least one digit';
        // } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
        //     passwordError.innerHTML = 'contain at least one special character';
        // }

        
        // if(conformValue === ''){
        //     conformError.innerHTML = `Password is required`;
        // }else if(conformValue !== passwordValue){
        //     conformError.innerHTML = `same as password`
        // }
        
    }


    function SendEmail(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "nitikakumari690@gmail.com",
            Password : "Maakali096#$",
            To : 'them@website.com',
            From : "document.querySelector('#email-error').value",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }



    let switchBtn = document.querySelector('.switcher-btn');
    let switcher = document.querySelector('.color-switcher');
    let themeButtons = document.querySelectorAll('.theme-buttons');

    switchBtn.addEventListener('click', ()=>{
        switcher.classList.toggle('active');
    })

    themeButtons.forEach(color =>{
        color.addEventListener('click', ()=>{
            let dataColor = color.getAttribute('data-color');
            document.querySelector(':root').style.setProperty('--main-color', dataColor)
        })
    })


   
    










