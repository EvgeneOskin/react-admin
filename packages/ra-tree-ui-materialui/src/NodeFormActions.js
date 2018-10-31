import React from 'react';
import { SaveButton } from 'ra-ui-materialui3';
import NodeActions from './NodeActions';

const NodeFormActions = props => (
  <NodeActions {...props}>
    <SaveButton variant="flat" />
  </NodeActions>
);

export default NodeFormActions;
