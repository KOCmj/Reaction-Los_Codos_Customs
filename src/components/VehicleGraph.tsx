import Car from '../assets/images/car.jpeg';
import Car1 from '../assets/images/car1.jpeg';
import Syber from '../assets/images/syber.jpeg';
import Cyber from '../assets/images/cyber.jpeg';
import { useState, useEffect } from 'react';

interface VehicleData {
  vehicleType: string;
  images: string[];
}

const VehicleGraph = () => {
  const [vehicleData, setVehicleData] = useState<VehicleData[]>([]);
  const [showCars, setShowCars] = useState(true);
  const [showTrucks, setShowTrucks] = useState(false);

  useEffect(() => {
    const carImages = [Car, Car1];
    const truckImages = [Syber, Cyber];

    const data: VehicleData[] = [
      { vehicleType: 'Super Cars', images: carImages },
      { vehicleType: 'Telsaract', images: truckImages },
    ];

    setVehicleData(data);
  }, []);

  const toggleShowCars = () => {
    setShowCars(!showCars);
  };

  const toggleShowTrucks = () => {
    setShowTrucks(!showTrucks);
  };

  return (
    <div className="mt-4">
      <div className="flex mb-4">
        {vehicleData.map((item, index) => (
          <button
            key={index}
            className="text-red-700 border rounded border-zinc-800 bg-zinc-900 hover:text-black hover:bg-red-700 hover:border-black font-bold mr-4 px-4 py-2"
            onClick={item.vehicleType === 'Super Cars' ? toggleShowCars : toggleShowTrucks}
          >
            {item.vehicleType}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {vehicleData.map((item, index) => (
          <div key={index}>
            {(item.vehicleType === 'Super Cars' && showCars) || (item.vehicleType === 'Telsaract' && showTrucks) ? (
              <div className="grid grid-flow-col gap-4">
                {item.images.map((image, imageIndex) => (
                  <img
                    className="max-w-full h-auto shadow-lg shadow-black"
                    key={imageIndex}
                    src={image}
                    alt={'cars and trucks'}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleGraph;