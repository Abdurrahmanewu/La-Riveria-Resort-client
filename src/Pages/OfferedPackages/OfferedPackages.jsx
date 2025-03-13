import SingleCard from "../Home/Top packages/SingleCard";
import usePacakges from "../../Hooks/usePacakges";

const OfferedPackages = () => {
  const [packages] = usePacakges();

  return (
    <div className="py-20 mx-auto max-w-screen-xl">
      <h1 className="text-3xl font-bold text-center mb-6">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((card) => (
          <SingleCard key={card._id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default OfferedPackages;
