import { MdLocationPin } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";



// contact input field details 

 export const contactInputs = [
    {
      name: "fullName",
      label: "Enter Your Name",
      placeholder: "Enter Here",

    },
    {
      name: "phNumber",
      label: "Enter Contact Number",
      placeholder: "Enter Here",
  
    },
    {
      name: "email",
      label: "Enter Email",
      placeholder: "Enter Here",

    },
    {
      name: "description",
      label: "Description",
      placeholder: "Enter Here",

    },
  ];



// contact us page contact details
export const contactOptions = [
    {
      id: 1,
      name: "Address",
      detail: "31, Sahiba plaza,Ring Road, Surat.",
      icon: MdLocationPin,
    },
    {
      id: 2,
      name: "Toll Free No.",
      detail: "+91-120-4143900",
      icon: IoMdContact,
    },
    {
      id: 3,
      name: "Email Us",
      detail: "info@wti.org.in",
      icon: IoMdMail,
    },
  ];
  