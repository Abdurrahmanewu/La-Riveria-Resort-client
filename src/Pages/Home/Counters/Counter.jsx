import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Counter.css";

const Counter = () => {
  const { ref, inView } = useInView({ triggerOnce: true }); // Trigger animation once in view

  const statsData = [
    { label: "Wooden Cottages", value: 12, suffix: "+" },
    { label: "Happy Guests", value: 2500, suffix: "k" },
    { label: "Years Experience", value: 12, suffix: "+" },
    { label: "Friendly Team & Guide", value: 15, suffix: "+" },
  ];
  return (
    <div>
      <div className="stats-counter" ref={ref}>
        {statsData.map((stat, index) => (
          <div className="stat-item" key={index}>
            {inView && (
              <CountUp
                start={0}
                end={stat.value}
                duration={3}
                suffix={stat.suffix}
              />
            )}
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
