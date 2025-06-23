import Icon from "@/components/Shared/Icon";
import TakeMeHomeButton from "@/components/Shared/TakeMeHome";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  IconBrandGoogle,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandGithub,
  IconListDetails,
  IconSend,
} from "@tabler/icons-react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-grayBackground rounded-xl shadow-xl p-6 sm:p-8 relative">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={
              theme === "light" ? "/light-nav-logo.png" : "/dark-nav-logo.png"
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

        {/* Design - Top Icon */}
        <Icon
          className="-left-7 top-0 border-green-500"
          icon={<IconListDetails className="text-green-500" />}
        />

        {/* Structure - Heading */}
        <h1 className="text-xl font-bold text-center text-foreground">
          Welcome Back
        </h1>
        <p className="text-sm text-center text-para mb-6">
          Sign in to your account
        </p>

        {/* Action - Login Form */}
        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-foreground mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="text-sm text-foreground">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-400 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="accent-green-500" />
            <label htmlFor="remember" className="text-sm text-foreground">
              Remember me
            </label>
          </div>

          <div className="relative">
            <button
              type="submit"
              className="w-full py-2 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition"
            >
              Sign In
            </button>

            <p className="text-sm text-center text-foreground mt-3">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>

            {/* Send Icon */}
            <Icon
              className="-top-6 right-4 border-purple-500"
              icon={<IconSend className="text-purple-500" />}
            />
          </div>
        </form>

        {/* Divider + Social Icons */}
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
            ].map((IconItem, index) => (
              <Link
                to="/"
                key={index}
                className="p-3 rounded-xl border border-para hover:bg-foreground/10 transition"
              >
                <IconItem className="h-6 w-6 text-para" />
              </Link>
            ))}
          </div>
        </div>

        {/* Take Me Home */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <TakeMeHomeButton />
        </div>
      </div>
    </section>
  );
};

export default Login;
