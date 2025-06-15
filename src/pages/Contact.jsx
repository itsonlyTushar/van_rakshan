import React, { useState } from "react";
import { contactOptions } from "../constants/contactDetails";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // sending the user data over to contact them later
    const emailBody = `Name: ${name}
      Email: ${email}
      Phone: ${phNumber}
      Message: ${description}`;

    const mailtoLink = `mailto:tushargsoni17@gmail.com?subject=${encodeURIComponent(
      "Contact Us Form"
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const contactInputs = [
    {
      name: "name",
      label: "Enter Your Name",
      placeholder: "Enter Here",
      function: (e) => setName(e.target.value),
      type: "text",
    },
    {
      name: "contact",
      label: "Enter Contact Number",
      placeholder: "Enter Here",
      function: (e) => setPhNumber(e.target.value),
      type: "number",
    },
    {
      name: "email",
      label: "Enter Email",
      placeholder: "Enter Here",
      function: (e) => setEmail(e.target.value),
      type: "email",
    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter Here",
      function: (e) => setDescription(e.target.value),
      type: "text",
    },
  ];

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
                    type={fld.type}
                    onChange={fld.function}
                    labelText={fld.label}
                    placeholder={fld.placeholder}
                    name={fld.name}
                    required
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
              className="flex flex-col items-center px-12 py-10"
            >
              <div className="bg-green-700 text-white px-14 py-16 rounded-[2rem] w-full shadow-lg">
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
