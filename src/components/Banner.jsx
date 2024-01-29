


const Banner = () => {
    return (
        <section className="bg-[url('../assets/banner.png')] bg-cover h-auto">
            <div className="customContainer">
                <div className="flex justify-end items-center p-20">
                    <div className=" p-10 ">
                        <h1 className="text-4xl italic text-white font-extrabold my-10">Licensed Counsellor <br /> and Therapist</h1>
                        <p className="text-white my-10 border-b-2 border-white pb-10">Online Psychology Consultation</p>
                        <button className="button my-10">Talk to Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;