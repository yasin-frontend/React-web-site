import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Settings from './Settings';
import NotFound from './notFound';
import Table from "./Table"
const Main = ({ son }) => {
  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Navigate to="/table" replace />} />
        <Route path="/table" element={<Table son={son} />} />
        <Route path="/settings" element={<Settings son={son} />} />
        <Route path="*" element={<NotFound son={son} />} />
      </Routes>
    </div>
  );
};
export default Main;
