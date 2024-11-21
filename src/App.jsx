import React from "react";
import { Route, Routes } from "react-router-dom";
import { SingUp } from "./pages/sing-up/sing-up";
import { SingIn } from "./pages/sing-in/sing-in";
import { MainLayout } from "./layout/main-layout";
import { UserDetail } from "./pages/user-detail/user-detail";
import { CreateUser } from "./pages/create-user/create-user";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<UserDetail />} />
          <Route path="user-create" element={<CreateUser/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
