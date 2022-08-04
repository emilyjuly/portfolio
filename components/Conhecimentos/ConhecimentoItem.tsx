import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentosProps {
  title: string;
  icon: ReactNode;
}

export default function ConhecimentoItem({ title, icon }: ConhecimentosProps) {
  return (
    <ConhecimentoContainer>
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  );
}
