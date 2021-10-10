import Link from 'next/link'

function Navbar() {
  const user = true;
  const username = true;
  return (
    <nav className="navbar">
      <ul>
        <li >
          <Link href="/">
            <button className='btn-logo'>Feed</button>
          </Link>
        </li>
        {username && (
          <>
            <li className='push-left'>
              <Link href="/admin">
                <botton className = "btn-blue" >Write Post</botton>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li>
            <Link href="/signup">
              <button className = "btn-blue">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
