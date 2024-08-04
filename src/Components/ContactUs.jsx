// ContactUs.jsx
import React, { useState } from 'react';
import Button from './Button';
import Img from '/ContactUs.jpg';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    services: {
      ArtificialIntelligence: false,
      Web3: false,
      MobileApplication: false,
      Others: false,
    }
  });

  const [errors, setErrors] = useState({});

  // Correctly handle changes for input fields and checkboxes
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    if (type === "checkbox") {
      setFormData(prevFormData => ({
        ...prevFormData,
        services: {
          ...prevFormData.services,
          [name]: checked
        }
      }));
    } else {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.phone) errors.phone = 'Phone number is required';
    if (!formData.message) errors.message = 'Message is required';
    const servicesSelected = Object.values(formData.services).some(value => value);
    if (!servicesSelected) errors.services = 'Please select at least one service';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form data
      console.log("Form Data: ", formData);
    }
  };

  return (
    <div className="min-h-screen bg-offWhite text-darkCharcoal flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className=" flex justify-center max-w-6xl w-full">
        <div className="hidden lg:flex max-w-md h-[672px]">
          <img
            src={Img}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="flex-1 max-w-md">
          <div className="space-y-8 bg-white p-8 rounded-lg shadow-lg h-full">
            <div>
              <h2 className="text-center text-4xl font-extrabold text-charcoal mb-4">
                Contact Us
              </h2>
              <p className="text-center text-lg text-slateGray mb-6">
                We'd love to hear from you. Fill out the form below to get in touch.
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="absolute left-4 -top-2.5 bg-offWhite px-1 text-xs font-medium text-darkCharcoal">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-lightGray placeholder-slateGray text-darkCharcoal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deepCharcoal focus:border-lightCharcoal sm:text-sm"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-deepCharcoal text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="relative">
                  <label htmlFor="email" className="absolute left-4 -top-2.5 bg-offWhite px-1 text-xs font-medium text-darkCharcoal">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-lightGray placeholder-slateGray text-darkCharcoal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deepCharcoal focus:border-lightCharcoal sm:text-sm"
                    placeholder="Email"
                  />
                  {errors.email && <p className="text-deepCharcoal text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="absolute left-4 -top-2.5 bg-offWhite px-1 text-xs font-medium text-darkCharcoal">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-lightGray placeholder-slateGray text-darkCharcoal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deepCharcoal focus:border-lightCharcoal sm:text-sm"
                    placeholder="Phone"
                  />
                  {errors.phone && <p className="text-deepCharcoal text-xs mt-1">{errors.phone}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(formData.services).map(serviceKey => (
                    <label key={serviceKey} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name={serviceKey}
                        checked={formData.services[serviceKey]}
                        onChange={handleChange}
                        className="form-checkbox h-4 w-4 text-deepCharcoal rounded focus:ring-deepCharcoal border-lightGray"
                      />
                      <span className="ml-2 text-darkCharcoal capitalize">{serviceKey.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </label>
                  ))}
                </div>
                <div className="relative">
                  <label htmlFor="message" className="absolute left-4 -top-2.5 bg-offWhite px-1 text-xs font-medium text-darkCharcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-lightGray placeholder-slateGray text-darkCharcoal rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deepCharcoal focus:border-lightCharcoal sm:text-sm"
                    placeholder="Message"
                  />
                  {errors.message && <p className="text-deepCharcoal text-xs mt-1">{errors.message}</p>}
                </div>
              </div>
              <Button text="Send Message" className="py-4 text-xl w-full " href=""/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}





