import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Layout.styled";
import { Page } from "./Page.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <Page to="/">Home</Page>
            </li>
            <li>
              <Page to="/tweets" state={{ from: "/" }}>
                Tweets
              </Page>
            </li>
          </ul>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
