import { useEffect, useState } from "react";
import CounterAnimation from "./Counts.jsx";
import Input from "../UI/Input.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetForm,
  updateFields,
  validations,
  submitData,
} from "../../features/teamSlice.js";
import { checkData, fields } from "../../constants/formFields.js";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../UI/Button.jsx";
import Modal from "../UI/Modal.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function Form() {
  const errorData = useSelector((state) => state.teamSlice.errors.joinTeam);
  const formData = useSelector((state) => state.teamSlice.joinTeam);
  const kys = Array.from(Object.keys(errorData));
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValuesThere = Object.values(formData).every((empt) => empt !== "");

    kys.forEach((fld) => {
      dispatch(validations({stateUpdate: "joinTeam", field: fld }));
    });

    if (checkData()) {
      setOpen(true);
    } else {
      if (isValuesThere) {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
        dispatch(submitData());
        dispatch(resetForm());
      }
    }
  };

  const handleChange = (e) => {
    dispatch(updateFields({ field: e.target.name, value: e.target.value }));
    dispatch(validations({ stateUpdate: 'joinTeam' ,field: e.target.name }));
  };

  return (
    <>
      <form className="w-full mx-auto" onSubmit={handleSubmit}>
        <div className="text-white bg-green-700 rounded-[3rem] p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {fields.map((field) => (
            <div key={field.name}>
              <Input
                name={field.name}
                placeholder={field.placeholder}
                labelText={field.label}
                onChange={handleChange}
                error={errorData[field.name]}
              />
            </div>
          ))}

          <Button Type="submit" isLoading={loading} />

          {/* page route of "formDetails page"  */}
          <div className="w-10 text-xl flex justify-center items-center">
            <Link to="/formDetails">
              <FaExternalLinkAlt />
            </Link>
          </div>
        </div>
      </form>

      {/* modal pop only when data is already submitted */}
      <Modal
        show={open}
        setShow={setOpen}
        message={`You have submitted your data, can't submit again`}
      />

      <div className="flex flex-col">
        <div data-aos="fade-up">
          <CounterAnimation
            animation={"zoom-in-up"}
            count={300}
            label="Volunteers"
          />
        </div>
        <div data-aos="fade-up">
          <CounterAnimation
            animation={"zoom-in-up"}
            count={50}
            label="Programs"
          />
        </div>
        <div data-aos="fade-up">
          <CounterAnimation
            animation={"zoom-in-up"}
            count={1000}
            label="Species"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
