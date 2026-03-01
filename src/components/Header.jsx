const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="../logo-512.svg" alt="Forno-Logo" className="logo" />
      </div>

      <div className="menu-title-wrapper">
        <h2 className="menu-title">Explore Our Menu</h2>
      </div>

      <p className="menu-description">
        Authentic Italian Cuisine, 6 creative dishes to choose from. All from
        our wood-fired oven, all organic, all delicious.
      </p>
    </header>
  );
};

export default Header;
