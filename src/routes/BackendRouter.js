import React, { Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Spinner from 'components/common/Spinner';
import routeBackend from 'backendRoutes';

const BackendRouter = (props) => {
    const { match: { path } } = props;

    return (
        <Switch>
            {routeBackend.map((route, index) => {
                const { path } = route;
                return (
                    <route.layout
                        key={index}
                        exact
                        path={path}
                        render={matchProps => (
                            <Suspense fallback={<Spinner />}>
                                <route.component {...matchProps} />
                            </Suspense>
                        )}
                    />
                )
            })
            }
            <Redirect to={`${path}`} />
        </Switch>
    )
}

export default BackendRouter;
