const hobbies = [
    {
        title: "Running",
        description: "I enjoy running as it helps me stay fit, clear my mind, and maintain discipline.",
        bgColor: "bg-green-50",
        hoverColor: "group-hover:bg-green-600",
        iconColor: "stroke-green-600",
        hoverIconColor: "group-hover:stroke-white",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge stroke-green-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30">
                <path d="m12 14 4-4" />
                <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
        ),
    },
    {
        title: "Gym",
        description: "Hitting the gym keeps me focused on building strength and improving my physical health.",
        bgColor: "bg-green-50",
        hoverColor: "group-hover:bg-green-600",
        iconColor: "stroke-green-600",
        hoverIconColor: "group-hover:stroke-white",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dumbbell stroke-green-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30">
                <path d="M14.4 14.4 9.6 9.6" />
                <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
                <path d="m21.5 21.5-1.4-1.4" />
                <path d="M3.9 3.9 2.5 2.5" />
                <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
            </svg>
        ),
    },
    {
        title: "Coding",
        description: "Coding is my passion, allowing me to create, solve problems, and learn new technologies.",
        bgColor: "bg-green-50",
        hoverColor: "group-hover:bg-green-600",
        iconColor: "stroke-green-600",
        hoverIconColor: "group-hover:stroke-white",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-code stroke-green-600 transition-all duration-500 group-hover:stroke-white">
                <path d="M10 9.5 8 12l2 2.5" />
                <path d="m14 9.5 2 2.5-2 2.5" />
                <rect width="18" height="18" x="3" y="3" rx="2" />
            </svg>
        ),
    },
];

const Hobbies = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="text-4xl text-center font-bold text-gray-900 py-5">My Hobbies</h2>
                    <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">Activities that keep me productive, active, and constantly learning.</p>
                </div>
                <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    {hobbies.map((hobby, index) => (
                        <div key={index} className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                            <div className={`${hobby.bgColor} rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${hobby.hoverColor}`}>
                                <div className={`${hobby.iconColor} transition-all duration-500 ${hobby.hoverIconColor}`}>{hobby.icon}</div>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">{hobby.title}</h4>
                            <p className="text-sm font-normal text-gray-500">{hobby.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
