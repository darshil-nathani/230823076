import React from 'react';

export const Highlight = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <span>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#d1d5db', borderRadius: '9999px', width: '4rem', height: '4rem', fontSize: '3rem', fontWeight: 'lighter',paddingBottom: '0.5rem' }}>+</button>
            </span>
            <span style={{ fontSize: '1.25rem' }}>New</span>
        </div>
    );
};
