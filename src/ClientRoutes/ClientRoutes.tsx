import { FC } from 'react';
import { Route, Routes } from "react-router-dom";
import HomePagePage from '../pages/HomePage/HomePage.page';
import AccountPage from '../pages/AccountPage';
import TestsPage from '../pages/TestsPage';
import TestPage from '../pages/TestPage';
import CreateTestPage from '../pages/CreateTestPage';





const ClientRoutes: FC = () => {
    
    return (
      <Routes>
        <Route path="/" element={<HomePagePage />}>
          <Route path="account" element={<AccountPage />} />
          <Route path="tests/" element={<TestsPage />}>
            <Route path="test/:testId" element={<TestPage />} />
          </Route>
            <Route path="createTest" element={<CreateTestPage />} />
        </Route>
      </Routes>
    );
}


export default ClientRoutes;