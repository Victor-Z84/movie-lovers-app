import React from "react";
import { withTranslator } from "../../hoc/withTranslator"; 

import PackagesTable from "./packagesTable/PackagesTable";
import OrderForm from "./orderForm/OrderForm";

import "./PackagesPage.scss";

function PackagesPage ( { translate } ) {

    return (
        <>
            <div className="packages-page">
                <h3 className="packages-page__text">{translate("packages.page.text")}</h3>
                <PackagesTable/>
                <h4 className="packages-page__invitation">{translate("packages.page.invitation")}</h4>
                <OrderForm/>
            </div>

        </>
    );
}

export default withTranslator(PackagesPage);