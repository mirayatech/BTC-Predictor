import { useState } from "react";
import { useSignIn } from "../../hooks/useSignIn";
import { Form } from "./Form";
import BackButton from "../Buttons/BackButton";

export default function SignIn() {
  const { signIn, error } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signIn(email, password);
  };

  return (
    <div className="bg-[#e1e9f0] min-h-screen flex justify-center items-center bg-gradient-to-tr">
      <BackButton />

      <Form
        title="Sign In"
        buttonText="Sign In"
        text="Don't have an account?"
        linkUrl="/sign-up"
        linkText="Sign up"
        onSubmit={handleOnSubmit}
        error={error}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}