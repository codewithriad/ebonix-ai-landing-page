import Icon from "@/components/Shared/Icon";
import TakeMeHomeButton from "@/components/Shared/TakeMeHome";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandLinkedin,
  IconListDetails,
  IconSend,
} from "@tabler/icons-react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-md bg-grayBackground rounded-xl shadow-xl p-6 sm:p-8 relative">
        {/* Icons */}
        <Icon
          className="-left-7 top-0 border-green-500"
          icon={<IconListDetails className="text-green-500" />}
        />
        <Icon
          className="-bottom-6 right-4 border-purple-500"
          icon={<IconSend className="text-purple-500" />}
        />

        {/* Form Start */}
        <form className="space-y-6">
          {/* Design: Logo and Headings */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <img
                src={
                  theme === "light"
                    ? "/light-nav-logo.png"
                    : "/dark-nav-logo.png"
                }
                alt="Ebonix"
                className="h-10"
              />
              {/* toggle theme icon */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === "dark" ? (
                  <Sun className="h-8 w-8" />
                ) : (
                  <Moon className="h-8 w-8" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <h1 className="text-xl font-bold text-foreground">
              Create Account
            </h1>
            <p className="text-sm text-para">
              Join us by filling in your information
            </p>
          </div>

          {/* Structure: Input Fields */}
          <div className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="text-sm text-foreground block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="text-sm text-foreground block mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirm-password"
                className="text-sm text-foreground block mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Repeat your password"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Accept Policy */}
            <div className="flex items-center gap-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="accent-green-500"
              />
              <label htmlFor="terms" className="text-sm text-foreground">
                I agree to the Terms and Privacy Policy
              </label>
            </div>
          </div>

          {/* Action: Button & Redirect */}
          <div>
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              Sign Up
            </button>
            <p className="text-sm text-center text-foreground mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>

        {/* Social Auth */}
        <div className="my-8">
          <div className="flex items-center gap-2 justify-center text-xs text-para mb-6">
            <hr className="w-24 sm:w-32 h-[1px] bg-para" />
            or continue with
            <hr className="w-24 sm:w-32 h-[1px] bg-para" />
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            {[
              IconBrandGoogle,
              IconBrandFacebook,
              IconBrandLinkedin,
              IconBrandGithub,
            ].map((IconItem, i) => (
              <Link
                to="/"
                key={i}
                className="p-3 rounded-xl border border-para hover:bg-foreground/10 transition"
              >
                <IconItem className="h-6 w-6 text-para" />
              </Link>
            ))}
          </div>
        </div>

        {/* Home Button */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <TakeMeHomeButton />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
