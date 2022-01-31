import React from "react";
import MovieIcon from "../../icons/logo.png";
import { withTranslator } from "../../hoc/withTranslator";


import "./AboutPage.scss";

function AboutPage ( { translate } ) {

    return (
        <>
            <div className="about-page">
                <h1 className="about-page__title">{translate("about.title.1")}<span>{translate("about.title.span")}</span>{translate("about.title.2")}</h1>
                <div className="about-page__picture">
                    <img src={MovieIcon} alt="movie-icon" />
                </div>
                <p>{translate("about.p.1")}</p>
                <p>{translate("about.p.2")}</p>
                <p>{translate("about.p.3")}</p>
                <p>{translate("about.p.4")}</p>
                <p>{translate("about.p.5")}</p>
                <p>{translate("about.p.6")}</p>
                <p>{translate("about.p.7")}</p>
                <p>{translate("about.p.8")}</p>
                <p>{translate("about.p.9")}</p>
                <p>{translate("about.p.10")}</p>
                <p>{translate("about.p.11")}</p>
            </div>
        </>
    );
}

export default withTranslator(AboutPage);