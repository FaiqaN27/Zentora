import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      const config = { headers: { "Content-type": "multipart/form-data" } };

      const res = await axios.post(
        `${BACKEND_BASE_URL}/users/register`,
        formData,
        config
      );

      setName("");
      setEmail("");
      setPassword("");
      setAvatar(null);
    } catch (error) {}
  };

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
          Register your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="full name"
              className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg 
                focus:ring-2 focus:ring-blue-300"
            />
          </div>

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

          <div className="flex items-center">
            <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <div className="mt-2 flex items-center">
              <span className="inline-block h-10 w-10 overflow-hidden rounded-full">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <RxAvatar className="w-full h-full object-cover text-gray-700" />
                )}
              </span>

              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center rounded-lg shadow-md px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpeg,.jpg,.png"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg cursor-pointer
               font-semibold text-white bg-blue-600 
              hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already Have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
