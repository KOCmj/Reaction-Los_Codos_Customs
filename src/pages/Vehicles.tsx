import VehicleGraph from "../components/VehicleGraph"


const Vehicles = () => {
  return (
    <div>
      <div className="block">
        <h1 className="text-red-700 text-2xl font-extrabold items-center shadow
         shadow-black justify-center flex mt-8 mb-4 pb-10"
         >Featured Cars
        </h1>
        <VehicleGraph />
      </div>
    </div>
  )
}

export default Vehicles
