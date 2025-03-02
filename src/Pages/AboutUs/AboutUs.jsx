const AboutUs = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 md:px-8 lg:px-12 pt-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        About La Riveria Resort & Park
      </h2>

      <p className="text-base md:text-lg lg:text-2xl mt-6 text-left leading-relaxed">
        Nearest resort from Dhaka, just ten minutes away from Purbachal, Kanchan
        Bridge. Get a complete riverine experience beside Shitalakshya with
        amazing river view and boating facilities. The resort with 16 bighas
        accumulate up to 600 people for day-long programs and has a night stay
        capacity of 40. Our spacious river view restaurant has the capacity of
        250 people.
      </p>

      <p className="text-base md:text-lg lg:text-2xl mt-6 text-left leading-relaxed">
        Most people prefer spending their holiday here as it’s the nearest
        resort from the city, located only 10 minutes away from Purbachal
        Kanchan Bridge. Being beside Shitalakshya, it gives visitors a
        refreshing sensation, making their holidays more relaxing. Guests can
        also enjoy boat rides in Shitalakshya.
      </p>

      <p className="text-base md:text-lg lg:text-2xl mt-6 text-left leading-relaxed">
        The resort is the first choice for people who want to spend a relaxing
        holiday not far from the city. With modern amenities like a spacious
        riverside swimming pool, air-conditioned cottages, barbecue facilities,
        and continental food, this resort is the perfect spot for families and
        friends to enjoy holidays.
      </p>

      <p className="text-base md:text-lg lg:text-2xl mt-6 text-left leading-relaxed">
        The restaurant features a separate open stage with a high-quality sound
        system, an open field, a playground, a garden, riverside sitting areas,
        secured car parking, and several photo booths, making it ideal for
        corporate picnics or social events.
      </p>

      <div className="text-2xl md:text-3xl lg:text-5xl text-center font-semibold mt-16">
        <h2>We are located right here</h2>
      </div>

      <div className="my-10">
        <div className="relative w-full h-64 md:h-96 lg:h-[450px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4366.870138234273!2d90.54086257533874!3d23.841562478608324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755cb318eac825f%3A0x89a99ceaa782eb19!2sLa%20Riveria%20Resort%20%26%20Park!5e1!3m2!1sen!2sbd!4v1740894753895!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
