import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Browse extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
            <main>
                {/* <h1>Browse page!</h1> */}
                <div className="browse-bg"> </div>
                <div className="browse-container">
                    <NavbarContainer />
                </div>
            </main>
        )
    }
}

export default Browse;