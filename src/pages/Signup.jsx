import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

   
    navigate("/");
  };

  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
            Join LUXE
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            Create Account
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >
          <input
            required
            placeholder="Full name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full border border-white/10 bg-stone-900 px-5 py-4 outline-none focus:border-amber-500"
          />

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
            minLength={6}
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            className="w-full border border-white/10 bg-stone-900 px-5 py-4 outline-none focus:border-amber-500"
          />

          <input
            required
            type="password"
            placeholder="Confirm password"
            minLength={6}
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            className="w-full border border-white/10 bg-stone-900 px-5 py-4 outline-none focus:border-amber-500"
          />

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-500 py-4 text-xs font-semibold uppercase tracking-widest text-black hover:bg-amber-400"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-stone-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-400 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;