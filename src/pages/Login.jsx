import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login
    navigate("/");
  };

  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            Welcome Back
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            Sign In
          </h1>

          <p className="mt-4 text-sm text-stone-500">
            Access your LUXE account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <input
            required
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full border border-white/10 bg-stone-900 px-5 py-4 outline-none focus:border-amber-500"
          />

          <input
            required
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border border-white/10 bg-stone-900 px-5 py-4 outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-amber-400"
          >
            Sign In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-stone-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-amber-400 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;