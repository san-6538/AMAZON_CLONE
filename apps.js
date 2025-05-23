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
document.addEventListener("DOMContentLoaded", function () {
  // Create modal container
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  // Create modal content box
  const modalContent = document.createElement("div");
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.padding = "20px";
  modalContent.style.borderRadius = "10px";
  modalContent.style.maxWidth = "500px";
  modalContent.style.width = "90%";
  modalContent.style.textAlign = "center";
  modalContent.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

  // Heading
  const heading = document.createElement("h2");
  heading.textContent = "Disclaimer";

  // Paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is a student project and not a real Amazon website. Do not enter any personal or payment information.";

  // Button
  const button = document.createElement("button");
  button.textContent = "I Understand";
  button.style.backgroundColor = "#ff9900";
  button.style.border = "none";
  button.style.color = "#fff";
  button.style.padding = "10px 20px";
  button.style.marginTop = "15px";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.fontWeight = "bold";

  // Close modal on button click
  button.addEventListener("click", () => {
    modal.remove();
  });

  // Append all to modalContent
  modalContent.appendChild(heading);
  modalContent.appendChild(paragraph);
  modalContent.appendChild(button);

  // Append modalContent to modal
  modal.appendChild(modalContent);

  // Append modal to body
  document.body.appendChild(modal);
});

       

