import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./Components/PublicLayout/PublicLayout";
import MainPage from "./pages/MainPage/MainPage";
import GamePage from "./pages/GamePage/GamePage";
import AllGamesPage from "./pages/AllGamesPage/AllGamesPage";
import AdminPanel from "./pages/AdminPanel/AdminPanel";
import Forum from "./pages/Forum/Forum";
import NewsPage from "./pages/NewsPage/NewsPage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";

const ROUTES = {
  MAIN_PAGE: "/",
  NEWS_PAGE: "/news",
  ALL_GAMES_PAGE: "/games",
  GAME_PAGE: "/games/:id",
  ADMIN_PANEL: "/admin",
  FORUM: "/forum-main",
  SEARCH_RESULT: "/search",
};

export const LINKS = {
  MAIN_PAGE: "/",
  NEWS_PAGE: "/news",
  ALL_GAMES_PAGE: "/games",
  GAME_PAGE: (id) => `/games/${id}`,
  ADMIN_PANEL: "/admin",
  FORUM: "/forum-main",
  SEARCH_RESULT: (searchQuery) => `/search?q=${searchQuery}`,
};

const PUBLIC_ROUTES = [
  { exact: true, path: ROUTES.MAIN_PAGE, component: MainPage },
  { exact: true, path: ROUTES.NEWS_PAGE, component: NewsPage },
  { exact: true, path: ROUTES.GAME_PAGE, component: GamePage },
  { exact: true, path: ROUTES.ALL_GAMES_PAGE, component: AllGamesPage },
  { exact: true, path: ROUTES.ADMIN_PANEL, component: AdminPanel },
  { exact: true, path: ROUTES.FORUM, component: Forum },
  { exact: true, path: ROUTES.SEARCH_RESULT, component: SearchResultPage },
];

const pageNotFoundStyle = {
  fontSize: "80px",
  fontWeight: "900",
  color: "#7a49a7",
  textTransform: "uppercase",
  textDecoration: "underline",
};

function Router() {
  return (
    <PublicLayout>
      <Routes>
        <Route>
          {PUBLIC_ROUTES.map(({ exact, path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
              exact={exact}
            />
          ))}

          <Route
            path="*"
            element={
              <main
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={pageNotFoundStyle}>error</p>
                <p style={pageNotFoundStyle}>page does not exist</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </PublicLayout>
  );
}

export default Router;
