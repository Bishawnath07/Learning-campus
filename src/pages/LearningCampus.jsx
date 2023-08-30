import img from "../assets/iPhone 12 Pro 6.1_ Mockup Front View.png"
import logo from "../assets/logo1.png"
import img2 from "../assets/Ellipse2.png"
import img3 from "../assets/Group 47.png"
import  "./LearningCampus.css"

const LearningCampus = () => {
    return (
        <>
        <div className="md:flex justify-between md:pt-24  mx-24  text-white
        ">
                <div className="md:w-1/2">
                    <h1 className="text-3xl font-normal text-[#0066FF]">
                    Development Learning Campus
                    </h1>
                    <p className="my-10">Lorem ipsum dolor sit amet consectetur. Condimentum proin dignissim risus porta molestie pharetra. Dolor congue praesent vulputate purus sem lorem a. Augue potenti tortor nisl mauris cursus metus magna amet scelerisque. Sodales nibh lectus non in. Nisl semper enim placerat viverra tortor in mauris non. </p>
                  <div>

                    <div className="flex gap-32 mb-8">
                        <div>
                            <h3 className="text-[#0066FF]">Platform</h3>
                            <p>IOS & Android</p>
                        </div>
                        <div>
                            <h3 >Screens</h3>
                            <p>280+</p>
                        </div>
                    </div>
                    <div className="my-7">
                            <h3  className="text-[#0066FF]">time</h3>
                            <p>2 months</p>
                        </div>
                    <div>
                            <img  className="w-[80px]" src={logo} alt="" />
                        </div>
                
                  </div>
                </div>
                <div className="w-1/2">
                    <div className="relative">
                        <img className="h-[100%]" src={img2} alt="" />
                    </div>
                    <img className="h-[500px] w-[240px] absolute md:top-[100px] md:right-[210px]" src={img} alt="" />
                </div>
        </div>
        <div className="mx-24 md:flex gap-44 text-white">
            <div className="w-1/2">
                <img className="mt-32" src={img3} alt="" />
            </div>
            <div className="w-1/2">
                <div className="w-2/3">
                    <p>total time</p>
                    <h4 className="text-2xl my-3">200 Hours</h4>
                    <hr />
                    <div className="flex justify-between  gap-24 p-3">
                        <p>UI Research</p>
                        <p>96.00</p>
                    </div>
                    <hr />
                   
                    <div className="flex justify-between  gap-32 p-3">
                        <p>Prototype</p>
                        <p>48.00</p>
                    </div>
                    <hr />
                    <div className="flex justify-between  gap-32 p-3">
                        <p>UI Design</p>
                        <p>56.00</p>
                    </div>
                    <hr />


                </div>
                <div className="md:mt-48 w-2/3">
                    <p>total time</p>
                    <h4 className="text-2xl my-3">200 Hours</h4>
                    <hr />
                    <div className="flex justify-between  gap-24 p-3">
                        <p>UI Research</p>
                        <p>96.00</p>
                    </div>
                    <hr />
                   
                    <div className="flex justify-between  gap-32 p-3">
                        <p>Prototype</p>
                        <p>48.00</p>
                    </div>
                    <hr />
                    <div className="flex justify-between  gap-32 p-3">
                        <p>UI Design</p>
                        <p>56.00</p>
                    </div>
                    <hr />


                </div>
               
                
            </div>
        </div>
        </>
    );
};

export default LearningCampus;