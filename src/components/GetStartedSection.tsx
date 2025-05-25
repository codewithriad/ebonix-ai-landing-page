// components/GetStartedSection.tsx
import {
  IconLayoutGrid,
  IconPhoto,
  IconRocket,
  IconSeo,
  IconSun,
  IconUsers,
} from "@tabler/icons-react";

const iconStyle = "w-6 h-6";

const icons = [
  {
    Icon: IconUsers,
    color: "text-[#F19D73]",
    gradient: "from-purple-400 to-pink-600",
    position: "top-[-20px] left-14 rotate-[-15deg]",
  },
  {
    Icon: IconSeo,
    color: "text-[#F19D73]",
    gradient: "from-blue-400 to-cyan-500",
    position: "top-[36%] left-[60px] rotate-[15deg]",
  },
  {
    Icon: IconRocket,
    color: "text-[#F19D73]",
    gradient: "from-yellow-400 to-orange-500",
    position: "bottom-[-30px] left-[50px] rotate-[-10deg]",
  },
  {
    Icon: IconLayoutGrid,
    color: "text-[#F19D73]",
    gradient: "from-red-400 to-orange-500",
    position: "top-[-25px] right-[-20px] rotate-[12deg]",
  },
  {
    Icon: IconSun,
    color: "text-[#F19D73]",
    gradient: "from-gray-400 to-slate-500",
    position: "top-[38%] right-[50px] rotate-[-8deg]",
  },
  {
    Icon: IconPhoto,
    color: "text-[#F19D73]",
    gradient: "from-green-400 to-teal-500",
    position: "bottom-[-30px] right-[50px] rotate-[8deg]",
  },
];

const GetStartedSection = () => {
  return (
    <section className="relative py-24 px-4 bg-background text-white ">
      <div className="relative max-w-5xl mx-auto p-[10px] rounded-[3rem] bg-gradient-to-r from-lime-300 via-blue-300 to-indigo-400 dark:from-lime-400 dark:via-blue-500 dark:to-indigo-500">
        <div className="rounded-[3rem] bg-background p-10 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to level-up?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            See how easy it can be to write amazing content.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition">
            Get Started Now <span>→</span>
          </button>
        </div>

        {icons.map(({ Icon, color, position }, idx) => (
          <div
            key={idx}
            className={`absolute ${position} w-16 h-16 rounded-xl shadow-lg flex items-center justify-center z-50 bg-[#FDF9EE]`}
          >
            <Icon className={`${iconStyle} ${color}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStartedSection;
{
  /* <div
              className={`bg-[#FDF9EE] w-12 h-12 rounded-xl flex justify-center items-center`}
            >
            </div> */
}
