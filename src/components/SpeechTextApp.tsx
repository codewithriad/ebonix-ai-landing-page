import {
  IconCopy,
  IconDeviceFloppy,
  IconFileDownload,
  IconHeadphones,
  IconMicrophone,
  IconTrash,
  IconWand,
} from "@tabler/icons-react";
import React from "react";
import VoiceWaveformIcon from "./VoiceWaveForIcon";

const SpeechTextApp: React.FC = () => {
  return (
    <div className="max-h-fit bg-background max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8">
      {/* Speech to Text Section */}
      <div className="flex-1 bg-background p-6 border-[8px] border-grayBackground rounded-2xl shadow-lg">
        {/* title box */}
        <div className="mb-8">
          <span className="px-3 py-2 border border-white rounded-xl text-sm font-semibold">
            Speech to Text
          </span>
        </div>

        {/* main title */}
        <h2 className="text-foreground text-2xl font-bold mb-2 leading-10">
          Transforming Spoken <br /> Words into Text
        </h2>

        {/* description */}
        <p className="text-para mb-8">
          Instantly Transcribe Spoken Words into Text for Enhanced Productivity
          and Accessibility.
        </p>

        {/* button */}
        <button className="bg-foreground text-background px-5 py-2 rounded-md font-medium mb-6">
          Convert now →
        </button>

        {/* Audio Upload Section */}
        <div className="bg-gray-700 p-4 rounded-xl flex justify-center items-center gap-4 mt-4 mb-16 transform rotate-[-5deg] border border-para relative">
          {/* headphone div */}
          <div className="p-1 bg-grayBackground rounded-full h-10 w-10 flex justify-center items-center max-w-fit">
            <IconHeadphones className="text-para" />
          </div>
          {/* text div */}
          <div>
            <h4 className="text-base text-foreground font-bold mb-2">
              Speech to Text
            </h4>
            <p className="text-sm text-para">
              Unlocking the Power of Voice: Transforming Spoken Words into Text
            </p>
          </div>

          {/* microphone */}
          <div className="absolute -bottom-6 right-12 w-12 h-12 p-2 rounded-xl bg-[#F8F7FA] border-t-2 border-l-2 border-b-4 border-r-4 border-[#B9B0CF]">
            <IconMicrophone className="text-[#B9B0CF]" />
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-start gap-4 mb-4">
          {/* upload div */}
          <div className="bg-[#b9b0cf63] p-4 rounded-xl text-center relative">
            <button className="text-foreground my-8">
              +<br />
              Upload audio file
            </button>
            <div className="absolute right-0 -top-6 w-12 h-12 border-t-2 border-l-2 border-b-4 border-r-4 flex justify-center items-center rounded-xl border-green-400 bg-[#F0FDFA] transform -rotate-[10deg]">
              <IconWand className="text-green-400" />
            </div>
          </div>
          <div className="flex-1 bg-gray-700 p-4 rounded-xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {[IconCopy, IconFileDownload, IconDeviceFloppy, IconTrash].map(
                (Icon, i) => (
                  <Icon
                    key={i}
                    className={`${
                      i === 3 ? "text-[#FFB2B5]" : "text-para"
                    } w-4 h-4 sm:w-5 sm:h-5`}
                  />
                )
              )}
            </div>
            <div className="text-foreground font-bold text-base mb-2">
              Welcome message
            </div>
            <p className="text-gray-300 text-sm">
              Welcome to a world of limitless possibilities and boundless
              knowledge! Whether you're seeking information, assistance, or
              inspiration...
            </p>
          </div>
        </div>

        {/* Waveform Placeholder */}
        <div className="bg-gray-800 rounded-xl p-4 md:max-w-fit ml-auto flex justify-center">
          <VoiceWaveformIcon />
        </div>

        <button className="bg-grayBackground text-fore mt-4 px-5 py-2 rounded-md font-medium">
          Generate result
        </button>
      </div>

      {/* Text to Voice Section */}
      <div className="flex-1 bg-background p-6 border-[8px] border-grayBackground rounded-2xl shadow-lg">
        <div className="mb-4">
          <span className="px-3 py-1 border border-white rounded-full text-sm font-semibold">
            Text to Voice
          </span>
        </div>
        <h2 className="text-2xl font-bold mb-2">
          Convert your texts into Lifelike Speech
        </h2>
        <p className="text-gray-300 mb-4">
          Elevate Your Content with Expressive Narration: Discover Text-to-Voice
          Excellence.
        </p>
        <p className="text-gray-500 italic mb-6">Coming soon...</p>

        {/* Text box and avatars */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1 bg-gray-700 p-4 rounded-xl">
            <div className="text-gray-400">Your message</div>
            <div className="text-white mt-2">[Text input goes here]</div>
          </div>
          <div className="text-2xl">▶️</div>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-md font-medium mb-6">
          Generate result
        </button>

        <div className="flex flex-wrap gap-2 mb-4">
          {[...Array(16)].map((_, idx) => (
            <div
              key={idx}
              className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-sm font-bold text-white"
            >
              👤
            </div>
          ))}
        </div>

        {/* Audio player placeholder */}
        <div className="bg-gray-700 h-12 w-full rounded-xl flex items-center px-4 justify-between">
          <div className="h-2 w-2/3 bg-green-400 rounded"></div>
          <div>☁️</div>
        </div>
      </div>
    </div>
  );
};

export default SpeechTextApp;
