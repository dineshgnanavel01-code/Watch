import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ShieldCheck, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      return setError("Please enter your full name.");
    }
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Please enter a valid email address.");
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }
    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setError("");
    navigate("/");
  };

  return (
    <main className="relative flex min-h-[78vh] items-center justify-center overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative w-full max-w-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-stone-900/50 px-4 py-2 font-serif text-xs tracking-widest text-stone-300 backdrop-blur-md transition hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
        >
          <ArrowLeft size={14} />
          Return
        </button>

        <div className="mb-10 text-center">
          <p className="section-label !text-amber-400">Join LUXE</p>
          <h1 className="mt-4 font-display text-5xl text-white">Create Account</h1>
          <p className="mt-4 text-sm text-stone-500">Register to curate your private collection and track orders.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 border border-white/10 bg-stone-900/70 p-6 backdrop-blur-xl sm:p-8">
          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Full name</span>
            <input
              required
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-amber-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Email address</span>
            <input
              required
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-amber-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Password</span>
            <input
              required
              type="password"
              placeholder="••••••••"
              minLength={6}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-amber-400"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Confirm password</span>
            <input
              required
              type="password"
              placeholder="••••••••"
              minLength={6}
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              className="w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-amber-400"
            />
          </label>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button type="submit" className="btn-gold flex w-full items-center justify-center">
            Create Account <ArrowRight size={16} className="ml-3" />
          </button>

          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-600">
            <ShieldCheck size={14} /> Secure private registration
          </div>
        </form>

        <p className="mt-7 text-center text-sm text-stone-500">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-400 hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </main>
  );
};

export default Signup;