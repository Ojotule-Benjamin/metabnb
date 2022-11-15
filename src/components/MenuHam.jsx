const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      {/*if menuOpen is true add the active classname */}
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Place to stay</a>
        </li>
        <li>
          <a href="#work">Nfts</a>
        </li>
        <li>
          <a href="#testimonials">Community</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
