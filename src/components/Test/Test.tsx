import React from 'react';

interface TestProps {
  origin: String
}

const Test: React.FC<TestProps> = ({origin}) => {
  return (
    <div>
      Componente de teste importado da {origin}
    </div>
  );
};

export default Test;