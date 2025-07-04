import Input from "../components/UI/Input";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateDonateForm, validations } from "../features/teamSlice";
import { donateInputs } from "../constants/donateConfig";

function Donate() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.teamSlice.donateForm);
  const errorData = useSelector((state) => state.teamSlice.errors.donateForm);
  
  const kys = Array.from(Object.keys(errorData));

  const handleSubmit = (e) => {
    e.preventDefault();

    kys.forEach((fld) =>
      dispatch(validations({ stateUpdate: "donateForm", field: fld }))
    );

    if (
      formData.fullName &&
      formData.phNumber &&
      formData.amount &&
      formData.transactionId
    ) {
      const emailBody = `
      New Donation
     Name: ${formData.fullName}
     Contact No: ${formData.phNumber}
     Donated Amount: ${formData.amount}
     Transaction Id : ${formData.transactionId}
    `;
      const mail = `mailto:tushargsoni17@gmail.com?subject=${encodeURIComponent(
        "Donation Details"
      )}
    &body=${encodeURIComponent(emailBody)}`;
      window.location.href = mail;
    }
  };

  const handleChange = (e) => {
    dispatch(updateDonateForm({ field: e.target.name, value: e.target.value }));
    dispatch(validations({ stateUpdate: "donateForm", field: e.target.name }));
  };

  return (
    <div className="bg-green-700 pt-28">
      <h1 className="text-white text-7xl text-center mb-4">Donate</h1>
      <div className="flex justify-center items-center">
        <p className="text-white italic text-sm font-thin text-center max-w-lg px-4">
          After donating, you can email the transaction details if you wish to
          be mentioned in our newsletter by filling out the form below. Leave it
          blank if you prefer to remain anonymous.
        </p>
      </div>

      <div className="p-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center content-center mt-8 py-3 text-white sm:mx-6 md:mx-16 lg:mx-36 sm:gap-2 md:gap-16 lg:gap-52 xl:gap-4">
        <div>
          <img
            className="sm:max-w-xs md:max-w-lg lg:max-w-xl xl:max-w-2xl"
            src={
              "https://res.cloudinary.com/dgzqoxyzo/image/upload/v1746866226/upi_1746866033490_q5unql.png"
            }
            alt="qr_code"
          />
        </div>
        <form method="POST" onSubmit={handleSubmit}>
          {donateInputs.map((fld) => (
            <div key={fld.label}>
              <Input
                labelText={fld.label}
                placeholder={fld.placeholder}
                onChange={handleChange}
                name={fld.name}
                error={errorData[fld.name]}
              />
            </div>
          ))}

          <button
            type="submit"
            className=" w-full p-4 bg-[#FFF7DA] hover:bg-[#fffef9] rounded-xl text-green-700 text-xl font-semibold"
          >
            Donate
          </button>
          <div className="flex flex-col items-center justify-center py-2 ">
            <h1>For People Outside India</h1>
            <Link
              target="_blank"
              to={"https://tusharsoni5.gumroad.com/l/bdgxhw"}
            >
              <button className="bg-green-600 rounded-xl text-lg font-semibold px-2 py-1">
                Follow Link
              </button>
            </Link>
          </div>
        </form>
      </div>

      <div className="bg-[#FFF7DA] p-10 mt-6 rounded-t-[3rem]">
        <h2 className="sm:text-xl md:text-3xl lg:text-6xl xl:text-7xl text-2xl text-wrap text-green-700 text-center py-32">
          Join our community for donating and be a part of a positive change in
          the world.
        </h2>

        <h1 className="text-center sm:text-xl md:text-3xl lg:text-6xl xl:text-7xl text-6xl text-green-700">
          120000+
        </h1>

        <div className="grid grid-cols-1 items-center place-items-center content-center">
          <span className="p-4 bg-white/70 text-green-700 rounded-xl w-56 mt-6 text-center max-w-3xl italic">
            Fund recevied so far
          </span>
          <Link>
            <p className="p-5 bg-green-700 text-white text-xl mt-5 rounded-xl hover:bg-green-700/90">
              Donate Now
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Donate;
