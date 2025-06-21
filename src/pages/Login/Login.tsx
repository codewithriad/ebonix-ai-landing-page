import Icon from "@/components/Shared/Icon";
import { useTheme } from "@/components/ThemeProvider";
import { IconListDetails, IconSend } from "@tabler/icons-react";

import { Link } from "react-router-dom";

const Login = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="relative w-full max-w-md bg-grayBackground rounded-lg border border-none shadow-xl p-8 sm:p-8">
        <Icon className="-left-7 top-0 border-green-500" icon={<IconListDetails className="text-green-500"/>}/>

        <form >
          {/* Logo and Heading */}
          <div className="flex flex-col items-center space-y-3 mb-6">
            {/* Logo */}
            <div className="flex items-center">
              {theme === "light" ? (
                <img src="/light-nav-logo.png" alt="Ebonix" className="h-10" />
              ) : (
                <img src="/dark-nav-logo.png" alt="Ebonix" className="h-10" />
              )}
            </div>
            <h1 className="text-xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-sm text-para">
              Sign in to your account to continue
            </p>
          </div>

          {/* Input Fields */}
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
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-foretext-foreground text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
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
                placeholder="Password"
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-foreground text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="accent-green-600"
              />
              <label htmlFor="remember" className="text-sm text-foreground">
                Remember me
              </label>
            </div>

            {/* Login Submit Button */}
            <div className="relative">
              <button
                type="button"
                className="w-full py-2 rounded-full bg-green-500 text-foreground font-semibold hover:bg-green-600 transition-colors"
              >
                Sign In
              </button>
              <p className="text-sm text-foreground text-center mt-3">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-400 hover:underline">
                  Sign Up
                </Link>
              </p>

              
              <Icon
                className="-top-6 right-4 border-purple-500"
                icon={<IconSend className="text-purple-500" />}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
