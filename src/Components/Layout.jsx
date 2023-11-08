import React from 'react';

function Layout(props) {
    return(
        <div className="flex h-screen bg-gray-50">
            <div className="m-auto">
            <div className="gap-4 flex flex-col">
            {props.children}
                </div>
            </div>
        </div>
    )
}
export default Layout
