import React, { useState } from "react";
import "antd/dist/antd.css";

import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { MenuInfo } from "rc-menu/lib/interface";

import { Navbar } from "./components/navbar";
import { HomeContent } from "./components/homeContent";
import { PhotoGalleryContent } from "./components/photoGalleryContent";
import { CalendarContent } from "./components/calendarContent";
import { TodosContent } from "./components/todosContent";
import { DefaultContent } from "./components/defaultContent";

const getContentPage = (key: string) => {
  switch (key) {
    case "Home": {
      return <HomeContent />;
    }
    case "Photo Gallery": {
      return <PhotoGalleryContent />;
    }
    case "Our Calendar": {
      return <CalendarContent />;
    }
    case "Our Todos": {
      return <TodosContent />;
    }
    default: {
      return <DefaultContent />;
    }
  }
};

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");

  const onMenuSelect = (e: MenuInfo) => {
    setSelectedMenu(e.key);
  };

  return (
    <Layout>
      <Header>
        <Navbar onMenuSelect={onMenuSelect} />
      </Header>
      <Content>{getContentPage(selectedMenu)}</Content>
      <Footer>This is footer</Footer>
    </Layout>
  );
};

export default App;
