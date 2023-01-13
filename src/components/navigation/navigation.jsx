import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.style.scss';
import { UserContext } from "../../context/userContext";
import { signOutUser } from "../../util/firebase/firebase.utils";

const Navigation = () => {

    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container"></div>
                <Link className="nav-link" to="/shop">
                    SHOP
                </Link>
                {
                    currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                            {' '}
                            SIGN OUT{' '}
                        </span>
                    ) : (<Link className="nav-link" to="/auth">
                        LOGIN
                    </Link>)
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;