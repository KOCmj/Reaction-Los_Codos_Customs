import Corvette from '../assets/images/home.jpg';
import Battle from '../assets/images/battle.jpg';
import Galaxy from '../assets/images/galaxy.jpg'

function Home() {
  return (
    <div>
      <section className='flex space-x-4 mb-10 h-auto max-w-full'>
        <div className="flex flex-col align-center items-center justify-center text-center shadow-lg shadow-black">
          <img
            src={Galaxy}
            alt='GalaxyVette'
            className='w-full h-auto mb-10'
          />
          <p className='mt-2 text-red-600'>GalaxyVette</p>
          <p className='mt-1 text-red-600'>2026</p>
        </div>
        <div className='flex flex-col align-center items-center justify-center text-center'>
        <img
          src={Corvette}
          alt="Corvette"
          className="w-full h-auto mb-10"
        />
        <p className='mt-2 text-red-600'>RedRanger</p>
        <p className='mt-1 text-red-600'>2026</p>
      </div>
      <div className='flex flex-col align-center items-center justify-center text-center shadow-lg shadow-black'>
        <img
          src={Battle}
          alt="BattleVette"
          className="w-full h-auto mb-10"
        />
        <p className='mt-2 text-red-600'>BattleVette</p>
        <p className='mt-1 text-red-600'>2026</p>
      </div>
      </section>
    </div>
  );
}

export default Home;