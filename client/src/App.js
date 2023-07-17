import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Main from './MainPage';
import Posting from './PostingPage';

function App(){
    return(
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path={"/"} element={<Main />}></Route>
                <Route path={"/posting"} element={<Posting/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

/**
 * 다른 페이지로 이동했을 때 상단으로 스크롤
 * @returns 
 */
function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

export default App;