import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Registration functionality will be connected later.
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* ================= LEFT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
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

          {/* Main Content */}
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sky-300 text-sm mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full" />
              Start learning smarter
            </div>

            <h1 className="text-5xl font-bold text-white leading-tight mb-6">
              Build better
              <span className="text-sky-400"> study habits.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed">
              Create your account and transform your study materials into
              personalized flashcards designed to help you remember more.
            </p>

            {/* Benefits */}
            <div className="mt-10 space-y-5">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ✦
                </div>

                <div>
                  <h3 className="text-white font-medium">Study smarter</h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Turn long notes into focused revision material.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ✓
                </div>

                <div>
                  <h3 className="text-white font-medium">Active recall</h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Practice questions and strengthen your memory.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center text-sky-400">
                  ↗
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    Track your progress
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    See how your knowledge improves over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p className="text-sm text-slate-500">
            Your learning journey starts here.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 overflow-y-auto">
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

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Create your account
            </h2>

            <p className="mt-2 text-slate-500">
              Start turning your study materials into smarter revision.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 pr-16 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-2">
                Use at least 6 characters.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Confirm password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 px-4 pr-16 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 hover:text-slate-700"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-sky-500"
              />

              <span className="text-sm leading-5 text-slate-500">
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-slate-700 hover:text-sky-600"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium text-slate-700 hover:text-sky-600"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-xl bg-sky-500 py-3.5 font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-500/20"
            >
              Create account
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm text-slate-500 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-slate-900 hover:text-sky-600"
            >
              Sign in
            </Link>
          </p>

          {/* Footer */}
          <p className="text-center text-xs text-slate-400 mt-6">
            © {new Date().getFullYear()} AI Smart Flashcard
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
