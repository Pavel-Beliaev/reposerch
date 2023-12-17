import React from 'react';
import {ContentList, ErrorElement} from "../components";

export const ErrorPage = () => {
    return (
        <div className='wrapper'>
            <ContentList>
                <ErrorElement/>
            </ContentList>
        </div>
    );
};