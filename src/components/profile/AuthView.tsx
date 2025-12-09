import { IAuthView } from "../../types/PropTypes";

export default function AuthView({
  isError,
  isRegister,
  loginHandler,
  setIsRegister,
  registerHandler,
}: IAuthView) {
  return (
    <section className="text-my-white-max w-full min-h-[80vh] flex justify-center items-center">
      <article className="relative grid md:justify-center md:grid-cols-2 *:col-span-1 min-h-[26rem] w-11/12 md:w-2/3 rounded-xl overflow-hidden shadow-lg shadow-my-white-min/30">
        <aside className="absolute inset-0 z-10 md:static md:inset-auto md:z-auto">
          <img
            className="object-cover w-full h-full bg-my-black-min blur md:blur-0"
            src="/login.jpg"
          />
        </aside>
        <form
          onSubmit={isRegister ? registerHandler : loginHandler}
          className="grid gap-5 items-center w-full h-full md:bg-my-black-med bg-my-black-med/70 p-5 z-20 md:z-auto"
        >
          <h3 className="text-xl font-bold text-center">
            {isRegister ? "Register in" : "Login to"} FAnime
          </h3>
          {isRegister && (
            <section className="w-full space-y-2">
              <input
                name="username"
                type="text"
                placeholder="Username"
                className="w-full p-2 rounded-lg bg-my-black-max shadow-sm shadow-my-white-min focus-within:shadow-my-green-low outline-none"
              />
              <p className={`text-xs ${isError && "text-my-error"}`}>
                Username : mock
              </p>
            </section>
          )}
          <section className="w-full space-y-2">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-lg bg-my-black-max shadow-sm shadow-my-white-min focus-within:shadow-my-green-low outline-none"
            />
            <p className={`text-xs ${isError && "text-my-error"}`}>
              Email : mock@email.com
            </p>
          </section>
          <section className="w-full space-y-2">
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded-lg bg-my-black-max shadow-sm shadow-my-white-min focus-within:shadow-my-green-low outline-none"
            />
            <p className={`text-xs ${isError && "text-my-error"}`}>
              Password : 12345678
            </p>
          </section>
          <div className="space-y-3">
            <p className="text-xs">
              {isRegister ? "Have an Account ? " : "Do'nt Have an Account ? "}
              <span
                className="text-my-info cursor-pointer"
                onClick={() => setIsRegister((prev) => !prev)}
              >
                {isRegister ? "Log in" : "Register"}
              </span>
            </p>
            <button
              type="submit"
              className="w-full bg-my-green-med py-2 px-4 rounded-lg"
            >
              {isRegister ? "Register" : "Log in"}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
}
