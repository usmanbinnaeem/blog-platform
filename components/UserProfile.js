export default function Userprofile({ user }) {
  return (
    <div className="box-center">
      <img src={user.PhotoURL} alt="profilee" className="card-img-center" />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName}</h1>
    </div>
  );
}
