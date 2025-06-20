import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">Em breve</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Página Não Encontrada</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
          A página que você está procurando está em desenvolvimento e estará disponível em breve. Agradecemos pela sua paciência!
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