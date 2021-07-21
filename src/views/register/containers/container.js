//import styled from 'styled-components';
import React, { useEffect } from 'react';
import { utils } from 'utils';
import 'assets/vendors/vendors.min.css';
import 'assets/css/themes/vertical-dark-menu-template/materialize.css';
import 'assets/css/themes/vertical-dark-menu-template/style.css';
import 'assets/css/pages/login.css';
import 'assets/css/custom/custom.css';

const externalScript = [
    '//code.jquery.com/jquery-3.4.1.min.js',
    '/static/js/vendors.min.js',
    '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
    '/static/js/plugins.js',
    '/static/js/custom/custom-script.js',
]
/*const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 50px);
`;*/
const Container = (props) => {
    useEffect(() => {
        utils.loadExternalScript(externalScript)
    });
    return (
        <main>
            {props.children}
        </main>
    );

}

export default Container;
