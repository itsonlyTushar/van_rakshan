import React, { useState } from "react";
import { contactInputs, contactOptions } from "../constants/contactPage";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateContactForm, validations } from "../features/teamSlice";

function Contact() {
  const errorData = useSelector((state) => state.teamSlice.errors.contactForm);
  const formData = useSelector((state) => state.teamSlice.contactForm);

  const kys = Array.from(Object.keys(errorData))
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    kys.forEach((fld) => dispatch(validations({stateUpdate: "contactForm", field: fld })));

    if (
      formData.fullName &&
      formData.phNumber &&
      formData.email &&
      formData.description
    ) {
      // sending the user data over to contact them later
      const emailBody = `Name: ${formData.name}
            Email: ${formData.contact}
            Phone: ${formData.contactDescription}
            Message: ${formData.contactEmail}`;

      const mailtoLink = `mailto:tushargsoni17@gmail.com?subject=${encodeURIComponent(
        "Contact Us Form"
      )}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
    }
  };

  const handleChange = (e) => {
    dispatch(updateContactForm({field: e.target.name, value: e.target.value}));
    dispatch(validations({ stateUpdate: "contactForm" ,field: e.target.name}))
  }
  return (
    <div className="bg-green-700 pt-32">
      <h1 className="text-white text-6xl text-center">Contact Us</h1>

      <div className="bg-[#9DC08B] p-5 mt-5 rounded-t-[4rem]">
        <div className="flex justify-center p-5 py-24">
          <form
            onSubmit={handleSubmit}
            className="bg-green-700  border-none rounded-3xl shadow-lg w-full max-w-4xl"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 text-white p-5">
              {/* mapping over the contactInputs   */}
              {contactInputs.map((fld) => (
                <div key={fld.name}>
                  <Input
                    onChange={handleChange}
                    labelText={fld.label}
                    placeholder={fld.placeholder}
                    name={fld.name}
                    error={errorData[fld.name]}
                  />
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10 text-white p-5">
              <Button Type="submit" />
            </div>
          </form>
        </div>
      </div>

      <div className="bg-[#9DC08B]">
        <h1 className="text-white text-center p-2 text-6xl">Reach Us</h1>
        <div className="bg-[#FFF7DA] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-t-[4rem] py-40">
          
          {contactOptions.map((details) => (
            <div
              key={details.id}
              className="flex flex-col items-center px-12 py-10 "
            >
              <div className="bg-green-700 text-white px-14 py-16 rounded-[2rem] w-full shadow-lg h-full min-h-[200px] ">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-4xl">
                    {React.createElement(details.icon)}
                  </h3>
                  <h2 className="italic text-2xl">{details.name}</h2>
                </div>
                <div className="text-center text-lg">
                  <p>{details.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
