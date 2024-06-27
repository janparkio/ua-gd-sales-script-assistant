import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Universidad Americana - Asistente de Ventas</h1>
      </nav>
      <main className="container mx-auto py-8">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4">
        © 2024 Universidad Americana
      </footer>
    </div>
  );
};

export default Layout;