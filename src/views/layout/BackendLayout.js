// @ts-nocheck
// import external modules
import React, {memo, useEffect} from "react";
import {FoldedContentConsumer, FoldedContentProvider} from "utility/context/toggleContentContext";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {utils} from 'utils';
import 'assets/vendors/vendors.min.css';
import 'assets/css/themes/vertical-dark-menu-template/materialize.css';
import 'assets/css/themes/vertical-dark-menu-template/style.css';
import 'assets/css/pages/dashboard.css';
import 'assets/css/index.scss';

const externalScript = [
    '/static/js/materialize.js',
];
const BackendLayout = props => {
    useEffect(() => {
        utils.loadExternalScript(externalScript)
    })
    return (
        <FoldedContentProvider>
            <FoldedContentConsumer>
                {context => (
                    <div
                        className="vertical-layout page-header-light vertical-menu-collapsible vertical-dark-menu 2-columns">
                        <Navbar {...props}/>
                        <Sidebar/>
                        <main id="main">
                            <div className="row">
                                <div className="col s12">
                                    <div className="container">
                                        {props.children}
                                    </div>
                                </div>
                            </div>
                        </main>
                        <Footer/>
                    </div>
                )}
            </FoldedContentConsumer>
        </FoldedContentProvider>
    );
};
export default memo(BackendLayout);

