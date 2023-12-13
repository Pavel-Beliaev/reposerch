import React from 'react';
import ContentList from "../components/ContentList/ContentList";
import ErrorElement from "../components/ErrorElement/ErrorElement";

const ErrorPage = () => {
    return (
        <ContentList>
            <ErrorElement/>
        </ContentList>
    );
};

export default ErrorPage;