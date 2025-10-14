import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { getMainRoutes } from "./MainRouter";
import { getPagesRoutes } from "./PagesRouter";
import ScrollToTop from "../components/common/ScrollToTop";

const Router = ({ basename }: { basename: string }) => {
    return (
        <BrowserRouter basename={basename}>
            <ScrollToTop />
            <Routes>
                {/* components 기반 라우트 (기본 레이아웃 사용) */}
                {getMainRoutes()}
                
                {/* pages 폴더 기반 라우트 (레이아웃 없음 또는 커스텀) */}
                {getPagesRoutes()}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;