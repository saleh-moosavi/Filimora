import { FormEvent } from "react";

export default function LogInRegister() {
  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section className="text-my-white-max w-full min-h-[80vh] flex justify-center items-center">
      <article className="grid justify-center grid-cols-2 *:col-span-1 min-h-96 w-2/3 rounded-xl overflow-hidden shadow-lg shadow-my-white-min/30">
        <aside>
          <img
            className="object-cover w-full h-full bg-my-black-min"
            src="/login.jpg"
          />
        </aside>
        <form
          onSubmit={loginHandler}
          className="grid gap-5 items-center w-full h-full bg-my-black-med p-5"
        >
          <h3 className="text-xl font-bold text-center">Log In To FAnime</h3>
          <section className="w-full space-y-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg bg-my-black-max shadow-sm shadow-my-white-min focus-within:shadow-my-green-low outline-none"
            />
            <p className="text-xs">email : mock@email.com</p>
          </section>
          <section className="w-full space-y-2">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-lg bg-my-black-max shadow-sm shadow-my-white-min focus-within:shadow-my-green-low outline-none"
            />
            <p className="text-xs">password : 12345678</p>
          </section>
          <div className="space-y-3">
            <p className="text-xs">
              Do'nt Have an Account ? <span>Register</span>
            </p>
            <button
              type="submit"
              className="w-full bg-my-green-med py-2 px-4 rounded-lg"
            >
              Log in
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}
