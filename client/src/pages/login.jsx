import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Unable to sign in. Please check your credentials.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col justify-between w-full p-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>

            <span className="text-white text-xl font-bold">
              Smart Flashcard
            </span>
          </div>

          {/* Main message */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sky-300 text-sm mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full" />
              AI-powered learning
            </div>

            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Turn your notes into
              <span className="text-sky-400"> smarter revision.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              Upload your study materials, let AI generate intelligent
              flashcards, and improve your learning through active recall.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ✓
                </div>

                <span className="text-slate-300">AI-generated flashcards</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ✓
                </div>

                <span className="text-slate-300">
                  Practice with active recall
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ✓
                </div>

                <span className="text-slate-300">
                  Track your learning progress
                </span>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p className="text-sm text-slate-500">
            Learn smarter. Remember more.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>

            <span className="text-xl font-bold text-slate-900">
              Smart Flashcard
            </span>
          </div>

          {/* Login Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Welcome back</h2>

            <p className="mt-2 text-slate-500">
              Sign in to continue your learning journey.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  @
                </span>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-sky-600 hover:text-sky-700"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  •••
                </span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-14 pr-20 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
                />

                <span className="text-sm text-slate-600">Remember me</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-sky-500 py-3.5 font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-xs text-slate-400 uppercase">New here?</span>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Register */}
          <Link
            to="/register"
            className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white py-3.5 font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Create an account
          </Link>

          {/* Footer */}
          <p className="text-center text-xs text-slate-400 mt-8">
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-slate-500 hover:text-slate-700">
              Terms
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-slate-500 hover:text-slate-700">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
