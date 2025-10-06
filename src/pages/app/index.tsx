import {
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  PencilSquareIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  Squares2X2Icon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";

const EbonixApp: FC = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-950 flex flex-col justify-between">
        <div>
          {/* Logo / Company */}
          <div className="">
            <img
              src="/dark-nav-logo.png"
              alt="main logo"
              className="w-auto h-10 mt-4 ml-2"
            />
          </div>

          {/* Nav */}
          <nav className="mt-4">
            <ul className="space-y-1">
              <li className="px-4 py-2 bg-gray-800 rounded-md">Home</li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
                Library
              </li>
              <li className="px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer">
                Models
              </li>
            </ul>
          </nav>

          {/* Apps */}
          <div className="mt-6 px-4 text-gray-400 text-xs uppercase">Apps</div>
          <ul className="mt-2 space-y-1">
            {[
              { name: "Chat", icon: ChatBubbleLeftRightIcon },
              { name: "Writer", icon: PencilSquareIcon },
              { name: "Coder", icon: CodeBracketIcon },
              { name: "Imagine", icon: PhotoIcon },
              { name: "Video", icon: VideoCameraIcon },
              { name: "Transcriber", icon: MicrophoneIcon },
              { name: "Voiceover", icon: SpeakerWaveIcon },
              { name: "Voice Isolator", icon: MusicalNoteIcon },
              { name: "Classifier", icon: Squares2X2Icon },
            ].map((app) => (
              <li
                key={app.name}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-800 rounded-md cursor-pointer"
              >
                <app.icon className="h-5 w-5 text-gray-300" />
                <span>{app.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* User Section */}
        <div className="border-t border-gray-800 p-4">
          <p className="text-sm font-semibold">Demo Account</p>
          <p className="text-xs text-gray-400">hello@ebonixai.com</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl font-bold">👋 Hello, Demo!</h1>
        <p className="mt-2 text-lg text-gray-300">How can I assist you?</p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-xl">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm">
            🎧 Transcribe audio
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm">
            🎵 Isolate sounds
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm">
            🎥 Create videos
          </button>
          <button className="px-4 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-sm">
            🖼️ Create images
          </button>
        </div>
      </main>
    </div>
  );
};

export default EbonixApp;
