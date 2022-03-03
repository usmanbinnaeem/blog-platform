import Link from "next/link";
import { UserContext } from "../lib/context";
import { useContext } from "react";
import Image from "next/image";

function Navbar() {
  const { user, username } = useContext(UserContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button className="btn-blue">Write Post</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                {/* <Image src={user?.photoURL} alt="userProf" /> */}
                <img src={user?.photoURL} alt="Picture of the author" />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href="/signup" passHref>
              <button className="btn-blue">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
