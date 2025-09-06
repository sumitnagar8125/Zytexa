import React, { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import SocialButton from "../../components/ui/SocialButton";
import bg from "../../assets/bg.jpg";

function Right() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      className="w-full md:w-1/2 flex items-center justify-center p-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full max-w-md">
        <h2 className="text-5xl font-bold text-violet-700 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-gray-700 mb-6">
          Today is a new day. It’s your day. You shape it. <br />
          Sign in to start managing your projects.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="your email is here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="At least 8 characters..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            helperText="Use 8 or more characters with a mix of letters, numbers & symbols."
          />

          <div className="text-right -mt-1">
            <a href="#" className="text-sm text-violet-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button type="submit" fullWidth className="mt-1">
            Login
          </Button>
        </form>

        <Divider label="Or" />

        <div className="space-y-3">
          <SocialButton label="Continue with Microsoft" />
          <SocialButton label="Continue with Google" />
          <SocialButton label="Continue with Email" />
        </div>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t you have an account?{" "}
          <a href="#" className="text-violet-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Right;
