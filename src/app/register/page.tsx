// app/account/page.tsx
"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

// --- ICONS (Google and GitHub) ---
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 12.12C34.553 8.243 29.621 6 24 6C12.955 6 4 14.955 4 26s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    ></path>
    <path
      fill="#FF3D00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l6.538-6.538C34.553 8.243 29.621 6 24 6C16.312 6 9.613 9.923 6.306 14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24 46c5.645 0 10.597-2.319 14.156-6.064l-6.522-5.025C29.535 37.361 26.911 38 24 38c-5.223 0-9.605-3.373-11.303-8H6.393c3.279 8.441 11.272 14 20.007 14z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.522 5.025C40.574 35.943 44 31.286 44 26c0-1.341-.138-2.65-.389-3.917z"
    ></path>
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.22.48-2.69-1.07-2.69-1.07-.36-1.02-.89-1.29-.89-1.29-.73-.5.05-.49.05-.49.81.06 1.23.83 1.23.83.72 1.22 1.89.87 2.35.66.07-.52.28-.87.51-1.07-1.79-.2-3.67-.89-3.67-3.98 0-.88.31-1.6.82-2.16-.08-.2-.36-1.02.08-2.12 0 0 .68-.22 2.22.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.54-1.04 2.22-.82 2.22-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.16 0 3.1-1.88 3.78-3.69 3.98.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
);

// --- LOGIN FORM COMPONENT ---
const LoginForm = ({ onFlip }: { onFlip: () => void }) => (
  <div
    className="absolute w-full h-full backface-hidden"
    style={{ transform: "rotateY(0deg)" }}
  >
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col h-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Account Access</h2>
        <p className="text-gray-500 mt-1">Login to your account to continue</p>
      </div>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <GoogleIcon />{" "}
          <span className="font-semibold text-slate-700">
            Continue with Google
          </span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <GitHubIcon />{" "}
          <span className="font-semibold text-slate-700">
            Continue with GitHub
          </span>
        </button>
      </div>
      <div className="flex items-center my-6">
        <hr className="flex-grow" />
        <span className="mx-4 text-xs font-semibold text-gray-400 uppercase">
          Or
        </span>
        <hr className="flex-grow" />
      </div>
      <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
        <button className="w-1/2 py-2 rounded-md font-semibold bg-white text-blue-600 shadow">
          Login
        </button>
        <button
          onClick={onFlip}
          className="w-1/2 py-2 rounded-md font-semibold text-gray-500 hover:bg-gray-200"
        >
          Create Account
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

// --- SIGNUP FORM COMPONENT ---
const SignUpForm = ({ onFlip }: { onFlip: () => void }) => (
  <div
    className="absolute w-full h-full backface-hidden"
    style={{ transform: "rotateY(180deg)" }}
  >
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col h-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Create an Account</h2>
        <p className="text-gray-500 mt-1">Get started in just a few clicks</p>
      </div>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <GoogleIcon />{" "}
          <span className="font-semibold text-slate-700">
            Sign up with Google
          </span>
        </button>
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <GitHubIcon />{" "}
          <span className="font-semibold text-slate-700">
            Sign up with GitHub
          </span>
        </button>
      </div>
      <div className="flex items-center my-6">
        <hr className="flex-grow" />
        <span className="mx-4 text-xs font-semibold text-gray-400 uppercase">
          Or
        </span>
        <hr className="flex-grow" />
      </div>
      <div className="bg-gray-100 p-1 rounded-lg flex mb-6">
        <button
          onClick={onFlip}
          className="w-1/2 py-2 rounded-md font-semibold text-gray-500 hover:bg-gray-200"
        >
          Login
        </button>
        <button className="w-1/2 py-2 rounded-md font-semibold bg-white text-blue-600 shadow">
          Create Account
        </button>
      </div>
      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Create a strong password"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-slate-800 text-white font-bold py-3 rounded-lg hover:bg-slate-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  </div>
);

// This is the main logic component that controls the flip
function AccountFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const formType = searchParams.get("form") === "signup" ? "signup" : "login";

  const handleFlip = (type: "login" | "signup") => {
    router.push(`/account?form=${type}`, { scroll: false });
  };

  return (
    <div className="w-full max-w-md" style={{ perspective: "1200px" }}>
      <motion.div
        className="relative w-full"
        // This min-height is crucial to prevent the container from collapsing during the flip
        style={{ transformStyle: "preserve-3d", minHeight: "650px" }}
        animate={{ rotateY: formType === "signup" ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <LoginForm onFlip={() => handleFlip("signup")} />
        <SignUpForm onFlip={() => handleFlip("login")} />
      </motion.div>
    </div>
  );
}

// The page component, wrapped in Suspense for useSearchParams
export default function AccountPage() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Suspense
        fallback={
          <div className="w-full max-w-md h-[650px] bg-white rounded-2xl shadow-xl animate-pulse" />
        }
      >
        <AccountFormComponent />
      </Suspense>
    </main>
  );
}
