import img from "../assets/Group 53.png"
import img1 from "../assets/Group 52.png"
import img2 from "..//assets//Group 54.png"

const AppArchitecture = () => {
    return (
        <div className="md:mx-24 md:mt-20">
            <h1 className="text-[#0066FF] text-3xl font-bold">App Architecture</h1>
            <div className="md:mt-20">
            <p className="text-[#FF7A00] text-xl font-semibold my-5"><ul></ul>Teacher Panel</p>
                <img src={img} alt="" />
            </div>
            <div className="md:mt-20">
            <p className="text-[#FF7A00] text-xl font-semibold my-5">Student Panel</p>
                <img src={img1} alt="" />
            </div>
            <div className="md:mt-20">
            <p className="text-[#FF7A00] text-xl font-semibold my-5"><ul></ul>Driver Panel</p>
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default AppArchitecture;