import React from "react";

import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">

                <Header></Header>


                <div className="col-3">

                    <Nav></Nav>

                </div>

                <div className="col-9">

                    <img className="d-block w-100 mb-3" src="public/image1.jpg" alt="About MIN G." />
                    <h1>About Us</h1>
                    <p>
                        Yet more FrontEnd Design student at George Brown College, Toronto, Canada   (YMFS)                 
                    </p>

                </div>

            </div>
        </div>
    </>

}
