function LandingPage() {
  return (
    <div className="container">
      <div className="hero-bck">
        <div className="header">
          <img className="logo" src=".\ironhack-logo-xs.png" alt="logo image" />
          <img
            className="burger-menu"
            src=".\menu-top-xs.png"
            alt="menu image"
          />
        </div>

        <div className="paragraph">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular fronted library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </div>

      <div className="main-content">
        <div className="myDiv">
          <img src=".\icon1.png" alt="" />
          <h2>Declarative</h2>
          <p className="para">React makes it painless to create interactive UIs.</p>
        </div>

        <div className="myDiv">
          <img src=".\icon2.png" alt="" />
          <h2>Components</h2>
          <p className="para">Build encapsulated componemts that manage their state.</p>
        </div>

        <div className="myDiv">
          <img src=".\icon3.png" alt="" />
          <h2>Single-Way</h2>
          <p className="para">A set of immutable values are passed to the component's</p>
        </div>

        <div className="myDiv">
          <img src=".\icon4.png" alt="" />
          <h2>JSX</h2>
          <p className="para">Statically typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
