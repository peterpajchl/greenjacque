import './mainheader.css';

function MainHeader({handleSave, handleReset}) {
  return (
      <header className="main-header">
        <div className="main-header__title">GreenJacque</div>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="nav-list-item">
              <button className="btn" type="button" onClick={handleSave}>Save</button>
            </li>
            <li className="nav-list-item">
              <button className="btn btn--caution" type="button" onClick={handleReset}>Reset</button>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default MainHeader;