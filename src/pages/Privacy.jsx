import { privacy } from "../constants/privacyData";

function Privacy() {

  return (
    <div className="bg-green-700 py-28">
      <h1 className="text-white text-6xl text-center">Privacy and Policy</h1>
      <div className="flex flex-row sm:gap-24">
        
        {/* div to display paragram and heading content  */}
        <div className="p-8">
          {privacy.map((elem) => (
            <section key={elem.id} id={elem.id}>
              <h1 className="text-4xl mt-4 text-white text-wrap pt-24">
                {elem.heading}
              </h1>
              <p className="text-[#FFF7DA] text-wrap text-lg py-2">
                {elem.paragraph}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Privacy;
