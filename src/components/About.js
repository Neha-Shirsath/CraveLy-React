import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="m-10">
            <h1 className="font-extrabold text-4xl mb-5">ABOUT US</h1>
            <h3 className="font-medium text-xl">New age consumer-first organization offering an easy-to-use convenience platform.</h3>
            {/* < User name="Neha" email="neha@123"/><br/> */}
            < UserClass name="Lana" email="lana@456"/>
        </div>
    )
}

export default About;