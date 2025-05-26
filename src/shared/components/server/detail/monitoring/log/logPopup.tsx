import React, { useState } from 'react';
import styled from 'styled-components';
import { LogEntryProps } from '../types';
import { LogDetails } from './logDetails';
import { LogContent } from './logContent';
import { RequestHeaders } from './requestHeaders';
import { MetaInformation } from './metaInfo';

interface LogPopupProps {
  data: LogEntryProps;
  onClose: () => void;
}

const Overlay = styled.section`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Popup = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: #0b1739;
  width: 40vw;
  padding: 3vh 2vw;
  border-radius: 1vh;
`;

export const LogPopup: React.FC<LogPopupProps> = ({ data, onClose }) => {
  return (
    <Overlay>
      <Popup>
        <LogDetails timestamp={data.timestamp} onClose={onClose} />
        <LogContent title={data.message} content={data.content} />
        <RequestHeaders headers={data.header} />
        <MetaInformation severity={data.severity} environment={data.env} />
      </Popup>
    </Overlay>
  );
};