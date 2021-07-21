import React, {useEffect} from 'react';
import useHomeData from 'state/home/hooks/useHomeData';
import List from "./components/list";
import {Helmet} from "react-helmet";
import {compose} from "redux";
import {injectIntl} from "react-intl";
import 'assets/css/pages/homepage.scss';
const Home = (props) => {
    const {intl} = props;
    const [home = {}, fetchData, isLoading, errorCode] = useHomeData();
    const {data = []} = home

    useEffect(() => {
        const fetch = async () => {
            await fetchData()
        }
        fetch()
    }, [fetchData])
    // TODO check isLoading, errorCode
    console.log(isLoading, errorCode)
    return (
        <div className="homepage" style={{minHeight: '800px'}}>
            <Helmet>
                <title>{intl.formatMessage({ id: 'homepage' })}</title>
                <meta name="description" content={intl.formatMessage({ id: 'homepage' })} />
            </Helmet>
            <div className="row">
                <List data={data}/>
            </div>
        </div>
    );
};


export default compose(
    injectIntl
)(Home)
