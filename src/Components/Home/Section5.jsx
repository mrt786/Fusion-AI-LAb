import React from 'react';

const MissionAndValues = () => {
  return (
    <section className="relative bg-gray-100 py-16 my-28">
      <div className="absolute inset-0 flex items-center justify-center text-gray-200">
        <h2 className="text-9xl font-extrabold tracking-widest opacity-10 rotate-12">
          OUR VALUES
        </h2>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At Fusion AI Lab, our mission is to harness the power of cutting-edge technology to drive transformative solutions that empower businesses and enhance lives. We are dedicated to pioneering advancements in artificial intelligence, machine learning, and blockchain to create intelligent, scalable, and sustainable innovations that shape the future of technology.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">Our Values</h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${value.color} text-white text-2xl font-bold`}>
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{value.title}</h4>
                    <p className="text-gray-600 mt-2">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const values = [
  {
    title: 'Innovation',
    description: 'We are committed to pushing the boundaries of technology and creativity. Our team continually explores new ideas and methodologies to develop innovative solutions that address complex challenges and deliver exceptional value to our clients.',
    color: 'bg-blue-500',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake. From meticulous research and development to rigorous testing and deployment, our focus is on delivering high-quality solutions that exceed expectations and set new industry standards.',
    color: 'bg-green-500',
  },
  {
    title: 'Integrity',
    description: 'Integrity is at the core of our business. We conduct ourselves with transparency, honesty, and ethical practices, ensuring that we build trust with our clients, partners, and stakeholders through every interaction.',
    color: 'bg-red-500',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of collaboration and teamwork. By fostering a collaborative environment, we leverage diverse perspectives and expertise to drive success and achieve our goals collectively.',
    color: 'bg-yellow-500',
  },
  {
    title: 'Customer-Centricity',
    description: 'Our clients are at the heart of everything we do. We listen to their needs, understand their challenges, and work closely with them to deliver tailored solutions that meet their unique requirements and drive their success.',
    color: 'bg-purple-500',
  },
  {
    title: 'Sustainability',
    description: 'We are dedicated to creating solutions that are not only effective but also sustainable. Our commitment to environmental and social responsibility guides our approach to developing technologies that have a positive impact on society and the planet.',
    color: 'bg-teal-500',
  },
];

export default MissionAndValues;
