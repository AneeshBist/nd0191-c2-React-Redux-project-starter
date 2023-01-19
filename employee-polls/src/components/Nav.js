import { connect } from "react-redux";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { logoutUser } from "../actions/authedUser";

const Nav = ({ dispatch, authedUser }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(logoutUser());
    navigate("/");
  };
  return (
    <>
      {authedUser === null ? null : (
        <>
          <Outlet />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand" href="#">
                <b>Employee Polls</b>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/leaderboard"
                    >
                      Leaderboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/add"
                    >
                      New
                    </NavLink>
                  </li>
                </ul>
                <div className="me">
                  <i>hi, {authedUser}&nbsp;&nbsp;</i>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(Nav);
