const Projects = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">My Projects</h2>
                <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                    
                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-green-600">
                        <div className="flex items-center mb-6">
                            <img src="/project1.png" alt="Project1" className="rounded-lg w-full object-cover" />
                        </div>
                        <div className="block">
                            <p className="text-gray-900 leading-8 mb-2 text-xl font-semibold">OOP Project</p>
                            <div className="flex items-center space-x-2 font-medium">
                                <span className ="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Python</span>
                                <span className ="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Tkinter Project</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-green-600">
                        <div className="flex items-center mb-6">
                            <img src="/project2.png" alt="Project2" className="rounded-lg w-full object-cover" />
                        </div>
                        <div className="block">
                            <p className="text-gray-900 leading-8 mb-2 text-xl font-semibold">Avoid the Shark</p>
                            <div className="flex items-center space-x-2 font-medium">
                                <span className ="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Scratch Game</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-green-600">
                        <div className="flex items-center mb-6">
                            <img src="/project3.png" alt="Project3" className="rounded-lg w-full object-cover" />
                        </div>
                        <div className="block">
                            <p className="text-gray-900 leading-8 mb-2 text-xl font-semibold">Assignment</p>
                            <div className="flex items-center space-x-2 font-medium">
                                <span className ="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">HTML</span>
                                <span className ="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Javascript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
