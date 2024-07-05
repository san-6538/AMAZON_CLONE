const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft += 1100;
    event.preventDefault();
});

leftbtn.addEventListener('click', function(event){
    console.log('do0ne');
    const conent = document.querySelector('.product-slide');
    conent.scrollLeft -= 1100;
    event.preventDefault();
});


        document.addEventListener("DOMContentLoaded", () => {
            const backtop = document.querySelector(".backtop");

            backtop.addEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            });
        });
    

        const sidebar = document.querySelector(".sidebar");
        const cross = document.querySelector(".fa-xmark");
        const black = document.querySelector(".black");
        const sidebtn = document.querySelector(".panel-all");
        
        console.log(cross); // Debugging log to check if the element is selected correctly
        
        sidebtn.addEventListener("click", () => {
            sidebar.classList.add("active");
            cross.classList.add("active");
            black.classList.add("active");
            document.body.classList.add("stop-scroll");
        });
        
        cross.addEventListener("click", () => {
            console.log("Cross button clicked"); 
            sidebar.classList.remove("active");
            cross.classList.remove("active");
            black.classList.remove("active");
            document.body.classList.remove("stop-scroll");
        });

 const sign = document.querySelector(".nav-second");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
});
       

