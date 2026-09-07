import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) return setError("Please enter a valid email address.");
    if (form.password.length < 6) return setError("Password must be at least 6 characters.");
    setError("");
    navigate("/");
  };

  return (
    <main className="relative flex min-h-[78vh] items-center justify-center overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative w-full max-w-md">
        <div className="mb-10 text-center"><p className="section-label !text-amber-400">Private Client Access</p><h1 className="mt-4 font-display text-5xl text-white">Welcome back.</h1><p className="mt-4 text-sm text-stone-500">Sign in to manage your LUXE collection and orders.</p></div>
        <form onSubmit={handleSubmit} className="space-y-5 border border-white/10 bg-stone-900/70 p-6 backdrop-blur-xl sm:p-8">
          <label className="block"><span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Email address</span><input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full border border-white/10 bg-black/30 px-4 py-4 text-sm text-white outline-none transition focus:border-amber-400" /></label>
          <label className="block"><span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-stone-500">Password</span><div className="relative"><input required minLength={6} type={showPassword ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="w-full border border-white/10 bg-black/30 px-4 py-4 pr-12 text-sm text-white outline-none transition focus:border-amber-400" /><button type="button" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? "Hide password" : "Show password"} className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-amber-400">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></label>
          {error && <p className="text-xs text-red-400">{error}</p>}
          <button type="submit" className="btn-gold flex w-full items-center justify-center">Sign In <ArrowRight size={16} className="ml-3" /></button>
          <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-stone-600"><ShieldCheck size={14} /> Secure private access</div>
        </form>
        <p className="mt-7 text-center text-sm text-stone-500">New to LUXE? <Link to="/signup" className="text-amber-400 hover:underline">Create an account</Link></p>
      </motion.div>
    </main>
  );
};

export default Login;
