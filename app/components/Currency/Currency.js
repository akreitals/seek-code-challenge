// @flow
import React from 'react';
import Text from '../Text/Text';

const Currency = ({
    value = 0,
    locale = 'en-AU',
    currency = 'AUD',
    ...rest
}) => (
    <Text {...rest}>
        {value
            ? value.toLocaleString(locale, { style: 'currency', currency })
            : 0}
    </Text>
);

export default Currency;
