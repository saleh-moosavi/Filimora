import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="text-my-white-max">
      Profile
      <Link to="/login-register">login</Link>
    </section>
  );
}
