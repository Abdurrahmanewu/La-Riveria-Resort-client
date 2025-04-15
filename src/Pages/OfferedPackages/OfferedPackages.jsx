import SingleCard from "../Home/Top packages/SingleCard";
import usePacakges from "../../Hooks/usePacakges";

const OfferedPackages = () => {
  const [packages] = usePacakges();

  return (
    <div className="mx-auto max-w-screen-xl py-20 lg:py-28">
      <h1 className=" font-bold text-center mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Our Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((card) => (
          <SingleCard key={card._id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default OfferedPackages;
