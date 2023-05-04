import * as React from 'react';
import styled from 'styled-components';

export function AfterOperationSummary({ operation }) {
  // you get the operation model with raw operation info from the OAS definition
  const rawOperation = operation.operationDefinition;
  if (rawOperation['x-beta']) {
    return <Badge> beta </Badge>;
  } else {
    return null;
  }
}

const Badge = styled.span`
  background: #e1850f;
  border-radius: 5px;
  margin-left: 10px;
  padding: 2px 10px;
  font-size: 14px;
  vertical-align: super;
  color: white;
`;
