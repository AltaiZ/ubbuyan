import React from 'react';
import Search from "@/components/search/Search"
import PrivateRoute from "@/containers/auth/private-route"

const Searchs = () => {
    return (
        <PrivateRoute>
            <Search/>
        </PrivateRoute>
    )
}
export default Searchs