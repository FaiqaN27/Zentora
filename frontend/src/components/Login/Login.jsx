import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center px-4 overflow-hidden">
      <div
        className="absolute top-10 left-72 w-[600px] h-[500px] bg-pink-400 rounded-full 
      opacity-50 blur-[100px] -translate-x-1/8"
      ></div>

      <div
        className="absolute bottom-10 right-72 w-[600px] h-[500px] bg-blue-400 rounded-full 
      opacity-50 blur-[100px] translate-x-1/8"
      ></div>

      <div className="relative z-10 max-w-md w-full bg-white shadow-2xl rounded-2xl p-10 border border-gray-200">
        <h2 className="text-2xl font-semibold capitalize text-center text-slate-700 mb-8">
          Login to your account
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type={visible ? "text" : "password"}
              name="password"
              id="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="relative appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg 
              focus:ring-2 focus:ring-blue-300"
            />
            {visible ? (
              <AiOutlineEye
                className="text-gray-700 absolute right-2 top-8 cursor-pointer"
                size={25}
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className="text-gray-700 absolute right-2 top-8 cursor-pointer"
                size={25}
                onClick={() => setVisible(true)}
              />
            )}
          </div>

          <div className={`${styles.normalFlex} justify-between`}>
            <div className={`${styles.normalFlex}`}>
              <input
                className="h-4 w-4 border border-gray-300"
                type="checkbox"
                name="remember-me"
                id="remember-me"
              />
              <label
                htmlFor="remember-me"
                className="text-gray-500 ml-2 block text-sm"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href=".forget-password" className="font-medium text-blue-500">
                Forget your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg cursor-pointer
             font-semibold text-white bg-blue-600 
            hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Dont have an account?{" "}
          <Link
            to="/sign-up"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
