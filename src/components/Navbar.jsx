import "../styles/navbar.css";

const Navbar = ({ num }) => {
  return (
    <div className="navbar">
      <div className="logo">logo</div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className="btn">
              Register {num}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
