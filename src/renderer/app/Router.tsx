import React from "react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { TopMenu } from "../widgets/TopMenu/TopMenu";
import { Home } from "../pages/Home";

const Router = () => (
  <MemoryRouter>
    <Layout>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/category/:name" element={<Home />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  </MemoryRouter>
);

export default Router;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen flex-col">
    <TopMenu />

    <main className="flex-1 overflow-y-auto bg-gray-50 px-6 py-4">
      {children}
    </main>
  </div>
);
