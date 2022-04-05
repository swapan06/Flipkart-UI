import React from 'react';
const initialstate = false;
const home = (state = initialstate, action) => {
    switch (action.type) {
        case 'login': return state = true;
        default: return state;
    }
}
export default home