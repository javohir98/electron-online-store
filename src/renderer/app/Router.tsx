import React from "react";
import { MemoryRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader2 } from "lucide-react";
import { TopMenu } from "../widgets/TopMenu/TopMenu";

/* --- Sahifalarni lazy yuklaymiz --- */
// const ProductsPage = lazy(() => import('@/pages/ProductsPage/ProductsPage'));
// const CartPage = lazy(() => import('@/pages/CartPage/CartPage'));
// const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage'));

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
          {/* Kategoriya filtrlarini path orqali uzatamiz */}
          {/*<Route path="/" element={<h1>Main page</h1>}/>*/}
          {/*<Route path="/category/:name" element={<ProductsPage/>}/>*/}
          {/*<Route path="/combo" element={<ProductsPage combo/>}/>*/}

          {/*/!* Mahsulot detali (modal yoki sahifa) *!/*/}
          {/*<Route path="/product/:id" element={<ProductPage/>}/>*/}

          {/*/!* Savatcha *!/*/}
          {/*<Route path="/cart" element={<CartPage/>}/>*/}

          {/* Nomavjud routelarni bosh sahifaga yo‘naltirish */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Layout>
  </MemoryRouter>
);

export default Router;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-screen flex-col">
    {/* Yopishqoq yuqori panel: menyu + cart */}
    <TopMenu />

    {/* Kontent qismi scroll bo‘lsin */}
    <main className="flex-1 overflow-y-auto bg-gray-50 px-6 py-4">
      {children}
    </main>
  </div>
);
