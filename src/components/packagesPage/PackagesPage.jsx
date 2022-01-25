import React from "react";

import PackagesTable from "./packagesTable/PackagesTable";
import OrderForm from "./orderForm/OrderForm";

import "./PackagesPage.scss";



function PackagesPage () {

    return (
        <>
            <div className="packages-page">
                <h3 className="packages-page__text">We can offer you the following paid packages:</h3>
                <PackagesTable/>
                <h4 className="packages-page__invitation">To place an order, please use the special form below:</h4>
                <OrderForm/>
            </div>

        </>
    );
}

export default PackagesPage;