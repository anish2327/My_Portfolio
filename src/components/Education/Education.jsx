import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white transform -translate-x-1/2"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex mb-16 ${
              index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
          >
            {/* Timeline Dot */}
            {/* <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-6 h-6 bg-[#8245ec] rounded-full border-4 border-white z-10"></div> */}
            {/* Card */}
            <div
              className={`w-full sm:w-[500px] p-6 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_rgba(130,69,236,0.3)]
              ${
                index % 2 === 0
                  ? "mr-auto sm:mr-20"
                  : "ml-auto sm:ml-20"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-gray-300">
                    {edu.school}
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-4 text-gray-300 font-bold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;