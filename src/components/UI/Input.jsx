import { BiError } from "react-icons/bi";

// Customized Input field UI component
function Input({
  labelText,
  name,
  placeholder,
  onChange,
  error,
  id,
  type,
  required,
}) {
  return (
    <>
      <div className="flex flex-col mb-4">
        <label className="text-xl mb-2">{labelText}</label>

        {/* SHOWING TEXTAREA FIELD WHEN LABEL IS DESCRIPTION, ELSE SHOWING INPUT FIELD FOR ALL. */}
        {name === "description" ? (
          <textarea
            type="text"
            name={name}
            placeholder={placeholder}
            className="my-input px-5 py-4 bg-white/60 rounded-xl shadow-lg  w-full placeholder:text-green-600/45 active:shadow-sm outline-green-700 text-green-700 text-lg"
            onChange={onChange}
            id={id}
            required={required}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="my-input px-5 py-4 bg-white/60 rounded-xl w-full placeholder:text-green-600/45 active:shadow-sm shadow-lg outline-green-700 text-green-700 text-lg"
            onChange={onChange}
            id={id}
            required={required}
          />
        )}
        <div className="h-2 mt-2 flex items-center gap-2 ">
          {/* FORM VALIDATION ERRORS   */}
          {error && (
            <>
              <BiError />
              <p className="text-sm">{error}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Input;
