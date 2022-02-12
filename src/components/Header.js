import sponge from "./Sponge.png";

const Header = () => {
  return (
    <div className="head">
      <img src={sponge} alt="" />
      <h2>Spongebob Squarepants</h2>
      <nav>
        <ul>
          <li>Website</li>
          <li>E-mail</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
