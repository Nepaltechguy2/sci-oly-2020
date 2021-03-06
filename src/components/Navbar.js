import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper nav-">
                            <ul className="left">
                                <li className="active">
                                    <a href="/">Home
                                        <i className="material-icons right">home</i>
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <a href="scores.html">ScoreTracker*/}
                                {/*        <i className="material-icons right">score</i>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a href="https://docs.google.com/spreadsheets/d/112X9Mj8x-YRNsTikTXI7lveLCZc9N8n1efaurbxns88/edit?usp=sharing">*/}
                                {/*        Events <i className="material-icons right">event_note</i>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    <a href="https://api-static.ctlglobalsolutions.com/science/Science_Olympiad_Div_C_Rules_2021_for_Web.pdf">
                                        Rules Manual
                                        <i className="material-icons right">gavel</i></a>
                                </li>
                                <li>
                                    <a href={"https://docs.google.com/spreadsheets/d/1leA7gQIg8jbos2E5NwYV_H8yZ2M_bNV38GcLF7ziwBs/"}>Timings <i className="material-icons right">av_timer</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;
