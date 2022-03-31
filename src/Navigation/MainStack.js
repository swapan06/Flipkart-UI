import React from 'react';
import HomeStack from './HomeStack';

export default function (Stack) {
    // const {appData, appStyle} = useSelector(state => state?.initBoot);

    return (
        <>
            <Stack.Screen
                name="Home"
                component={HomeStack}
                options={{ headerShown: false }}
            />
        </>
    );
}