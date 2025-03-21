import { heroImg } from "../assets";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="px-24 py-16">
      <div className="flex justify-between gap-12 items-center">
        <div className="flex flex-col w-3/5">
          <div
            className="xl:text-6xl lg:text-5xl font-medium"
            style={{ lineHeight: "1.25" }}
          >
            <>
              {" "}
              Manage your Tasks on
              <span
                className="xl:text-6xl lg:text-5xl font-medium"
                style={{ color: "#974FD0" }}
              >
                {" "}
                TaskDuty
              </span>
            </>
          </div>
          <p className="text-2xl mt-8 w-4/5" style={{ color: "#737171" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <button
            style={{ backgroundColor: "#974FD0" }}
            className="text-white w-48 p-2 rounded-lg text-2xl mt-8 font-medium"
            onClick={() => navigate("/mytask")} 
          >
            Go to My Tasks
          </button>
        </div>
        <img src={heroImg} className="w-2/5" />
      </div>
    </div>
  );
};

export default Home;
