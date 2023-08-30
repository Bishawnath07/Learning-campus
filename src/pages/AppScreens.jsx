import img from "../assets/iPhone 12 Pro Black Mockup Right View.png"
import img2 from "../assets/iPhone 12 Pro Black Mockup Right View (1).png"
import img3 from "../assets/iPhone 12 Pro Black Mockup Right View (2).png"
import img4 from "../assets/iPhone 12 Pro 6.1_ Mockup.png"
import img5 from "../assets/iPhone 12 Pro 6.1_ Mockup (1).png"
import img6 from "../assets/iPhone 12 Pro 6.1_ Mockup (2).png"



const AppScreens = () => {
    return (
     <div className=" bg-black text-white m-auto w-11/12 h-screen mt-36">
            <h1  className="mb-32  text-3xl font-semibold text-[#0066FF]">App Screens</h1>
          <div className="relative mx-24">
           
            <div className="">
                <img className="absolute ml-0  h-[500px] w-[200px]" src={img} alt="" />
                <img className="absolute left-32 mt-28 h-[500px] w-[200px] " src={img2} alt="" />
                <img className="absolute left-60 -top-16 h-[500px] w-[200px] " src={img3} alt="" />
                <img className="absolute right-60 -top-16  z-20 h-[500px] w-[200px]" src={img4} alt="" />
                <img className="absolute right-24 mt-28 z-10 h-[500px] w-[200px]" src={img5} alt="" />
                <img className="absolute right-0 -top-16  h-[500px] w-[200px]" src={img6} alt="" />
               
               
            </div>
        </div>
     </div>
    );
};

export default AppScreens;