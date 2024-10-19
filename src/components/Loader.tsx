import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { ThreeCircles } from 'react-loader-spinner';
import './style/loader.css'
interface LoaderProps {
    isLoading?: boolean;
}
const Loading: React.FC<LoaderProps>  = ({ isLoading }) => {
    return (
    <Modal isOpen={isLoading} centered>
      <ModalBody className="text-center">
        <ThreeCircles height={140} width={140} color="#3792ed" ariaLabel="loading" />
      </ModalBody>
    </Modal>
  );
};

export default Loading;
