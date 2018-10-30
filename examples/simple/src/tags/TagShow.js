import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin3'; // eslint-disable-line import/no-unresolved

const TagShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
        </SimpleShowLayout>
    </Show>
);

export default TagShow;
