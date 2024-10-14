import Link from "next/link";
import React from "react";

export default function Nav() {
    return <>
        <div className="col-12">
            <div className="list-group">

                <Link href="/" className="list-group-item list-group-item-action">
                    Home
                </Link>

                <Link href="/about" className="list-group-item list-group-item-action">
                    About 
                </Link>

                <Link href="/contact" className="list-group-item list-group-item-action">
                    Contact 
                </Link>

            </div>
        </div>
    </>

}
