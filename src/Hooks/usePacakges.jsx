import { useEffect, useState } from "react";

const usePacakges = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://lariveria-resort-server.vercel.app/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);

  return [packages, loading];
};

export default usePacakges;
