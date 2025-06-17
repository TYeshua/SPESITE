import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Página Não Encontrada</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, teve seu nome alterado 
          ou está temporariamente indisponível.
        </p>
        <Link to="/">
          <Button variant="primary">
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;