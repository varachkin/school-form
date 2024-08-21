import React from 'react';

export const AnimatedTitle = ({ title = '', subTitle = '', children, autoheight, error }) => {
    return (
        <div className='animated-container'>

       
        <div className={autoheight ? `animated-title-wrapper-autoheight` : `animated-title-wrapper`}>
            <div className={`animated-title service-page-text-wrapper ${error ? 'error' : ''}`}>

                <div className="text-top">
                    <div className='title'>{typeof (title) === 'string' ? title?.toUpperCase() : title}</div>
                </div>
                <div className="text-bottom">
                    <div className='service-page-subtitle'>{typeof (subTitle) === 'string' ? subTitle?.toUpperCase() : subTitle}</div>
                </div>
                <div className='animated-title-footer'>
                    {children}
                </div>
            </div>
        </div>
        </div>
    );
};