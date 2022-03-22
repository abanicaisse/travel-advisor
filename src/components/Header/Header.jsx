import React from "react"

import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from "@material-ui/icons/Search"

const Header = () => {
    return (
        <nav>
            <div className="toolbar">
                <h5 className="title">Travel Advisor</h5>
                <div>
                    <h6 className="title">Explore new Places</h6>
                    {/* <Autocomplete> */}
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <input type="search" name="search-bar" id="search-bar" placeholder="Search..." />
                        </div>
                    {/* </Autocomplete> */}
                </div>
            </div>
        </nav>
    )

    // return (
    //     <h1>Header</h1>
    // )
}

export default Header;