
import TabSwitch from "../components/WildLife/TabSwitch";

function Wildlife() {


  return (
    <>
      <div className="bg-green-700 py-32">
        <h1 className="text-white text-6xl text-center">Wildlife</h1>
        {/* Custom tab switch to swtich between chart tab and pagination tab  */}
        <TabSwitch />
      </div>
    </>
  );
}

export default Wildlife;
