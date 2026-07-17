import "../../styles/layout.css";

import TopBar from "./TopBar";

function Layout({ children }) {

    return (

        <div className="layout">

            <TopBar />

            <div className="layout-container">

                {children}

            </div>

        </div>

    );

}

export default Layout;