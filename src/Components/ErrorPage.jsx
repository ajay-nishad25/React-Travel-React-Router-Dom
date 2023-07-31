import React from 'react';
import styled from 'styled-components';

const ErrorPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f1f1;
`;

const ErrorContent = styled.div`
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
`;

const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ErrorContent>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>Page Not Found</ErrorMessage>
      </ErrorContent>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
