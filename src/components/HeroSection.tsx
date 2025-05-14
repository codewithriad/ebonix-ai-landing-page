import { BsArrowRight } from "react-icons/bs";
const HeroSection = () => {
  return (
    <section className="mt-16">
      {/* hero typography */}
      <div className="w-full mx-auto flex justify-center items-center flex-col max-w-[960px]">
        <h1 className="text-foreground text-[56px] font-[900] lg:leading-[5rem] text-center">
          Transforming ideas into AI generated masterpieces
        </h1>
        <p className="text-xl leading-8 text-center text-para mt-4 md:mx-28">
          Effortlessly generate high-quality AI-driven content tailored to your
          needs. Unlock limitless possibilities, save your time and start making
          money today!
        </p>
        <button
          type="button"
          className="text-background flex justify-center items-center gap-6 bg-foreground px-4 py-[10px] rounded-lg mt-10"
        >
          <span className="text-base leading-6 text-center font-medium">
            Get Started Now
          </span>
          <BsArrowRight className="w-6 h-auto" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
