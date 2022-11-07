import React from 'react';
import BundleCard from '../components/BundleCard';
import party from '../assets/images/party.svg';
interface PackagesProps {
  packagesRef: (node?: globalThis.Element | null | undefined) => void;
}

const Packages: React.FC<PackagesProps> = (props) => {
  const data = [
    { lessons: 15, hourly: 140, discount: 0.1 },
    { lessons: 20, hourly: 140, discount: 0.15 },
    { lessons: 30, hourly: 140, discount: 0.2 }
  ];

  return (
    <div
      id="packagesSection"
      className="h-screen w-[99rem] flex flex-col items-center justify-center gap-8"
      ref={props.packagesRef}
    >
      <article className="text-xl4 flex flex-col items-center mt-10">
        <h2 className="text-xl5">Hourly rate & packages</h2>
        <p className="text-xl1">140 PLN/60mins & 200 PLN/90mins</p>
      </article>
      <div className="flex w-full justify-around">
        {data.map((element) => (
          <BundleCard bundle={element} />
        ))}
      </div>
      <img src={party} alt="" className="h-72" />
    </div>
  );
};

export default Packages;
