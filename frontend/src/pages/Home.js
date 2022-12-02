import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

function Home() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      logout();
    }
  }, [user]);
  return (
    <>
      {/* <HomePage></HomePage> */}
      <div>
        Home Page <br />
        <span>Add some content here later</span>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          et obcaecati natus necessitatibus quidem quasi enim ex recusandae
          aperiam itaque amet voluptatibus nihil aut excepturi nesciunt incidunt
          at ab soluta, repellat voluptates dolorum error architecto doloribus
          eos! Corrupti aut dolores alias sequi velit? Qui eos, vero eum harum
          beatae repudiandae quas quisquam recusandae rerum. Praesentium
          distinctio minus vel nulla aut voluptas deleniti quisquam quia
          molestias quam numquam cumque libero at, animi nemo ea est, ex
          reprehenderit ab earum adipisci maiores! Suscipit, quos! Cum
          doloremque provident deleniti dicta aut molestias, quasi, atque, enim
          explicabo dolorum quo numquam repudiandae iste alias eos?
        </span>
      </div>
    </>
  );
}

export default Home;
