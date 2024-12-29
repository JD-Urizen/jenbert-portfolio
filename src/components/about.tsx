const About = () => {
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img className="rounded-xl object-cover" src="/gym.jpg" alt="about Us image" />
            </div>
            <img className="sm:ml-0 ml-auto rounded-xl object-cover" src="/gym2.jpg" alt="about Us image" />
          </div>
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  About Me
                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                  Hello! My name is Jenbert Duazo. I am a second-year Bachelor of Science in Information Technology (BSIT) student currently studying at Eastern Visayas State University. I consider myself an average guy whose life revolves around academics, physical activities, socialization, and personal-driven passions. I enjoy learning new things and constantly strive to improve my skills, especially in technology, as it aligns with my future career aspirations. Outside of academics, I stay active through sports and other physical activities, which help me maintain a balanced and healthy lifestyle. I also value meaningful connections and enjoy spending time with friends and peers, as socialization allows me to grow and understand different perspectives. Beyond school and social life, I dedicate time to my personal interests and hobbies, which fuel my creativity and give me a sense of fulfillment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
