
// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".navbar").css("background" , "blue");
//         }
  
//         else{
//             $(".navbar").css("background" , "#333");  	
//         }
//     })
//   })
const changeNavBg=()=>
{
    // console.log("Function Called: ",window.scrollY)
    if(window.scrollY>90)
    {
        console.log(document.getElementById("navbar"))
        document.getElementById('navbar').classList.add("navbarScroll");
        document.getElementById('navbar').classList.remove("navbar-dark");
        document.getElementById('navbar').classList.add("navbar-light");

    }
    else
    {
            document.getElementById('navbar').classList.remove("navbarScroll");
            document.getElementById('navbar').classList.add("navbar-dark");
            document.getElementById('navbar').classList.remove("navbar-light");

    }
}



document.addEventListener("scroll",changeNavBg);


//   bg-light