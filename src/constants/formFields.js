
  // A FUNCTION TO TEST IF LOCALSTORAGE HAS DATA
  export const checkData = () => {
    const formDetail = localStorage.getItem("User Form");
    return formDetail !== null;
  }



// input form fields data form joinTeam page.
export const fields = [
  {
    name: "fullName",
    placeholder: "Enter here...",
    label: "Full name",
   
  },
  {
    name: "phNumber",
    placeholder: "Enter contact...",
    label: "Contact No.",

  },
  {
    name: "email",
    placeholder: "Enter here...",
    label: "Email",

  },
  {
    name: "DOB",
    placeholder: "DD-MM-YYYY",
    label: "Date of Birth",
    
  },
  {
    name: "city",
    placeholder: "Enter here...",
    label: "Where do you live?",

  },
  {
    name: "education",
    placeholder: "Enter here...",
    label: "What is your education?",

  },
  {
    name: "occupation",
    placeholder: "Enter here...",
    label: "What is your occupation?",

  },
  {
    name: "reference",
    placeholder: "social media, youtube, news",
    label: "Where did you hear about us?",

  },
  {
    name: "purpose",
    placeholder: "Enter here...",
    label: "Why do you want to work with us?",

  },
  {
    name: "govId",
    placeholder: "1234 1245 2356",
    label: "Provide any government id",

  },
  {
    name: "hrs",
    placeholder: "Enter here...",
    label: "How many hours can you dedicate per day?",

  },
  {
    name: "exExp",
    placeholder: "Enter here...",
    label: "Have you worked with other organization before?",

  },
  {
    name: "remoteOrOffice",
    placeholder: "Enter here...",
    label: "Are you available to work in a office?",

  },
  {
    name: "limitation",
    placeholder: "Enter here...",
    label: "Do you have any physical limitations?",

  },
  {
    name: "program",
    placeholder: "Enter here...",
    label: "Which program are you interested in working?",
  },
  {
    name: "description",
    placeholder: "Describe in brief...",
    label: "What motivates you to work for saving wildlife?",

  },
];
