import { Modal } from "antd";
import { useEffect, useState } from "react";

interface AutoDestroyModalProps {
  message: string;
  timeCountDown: number;
  onClose: () => void; // Função de retorno de chamada para ser chamada quando o modal for fechado
  modalType: "success" | "error" | "info" | "warning";
}

const AutoDestroyModal: React.FC<AutoDestroyModalProps> = ({
  message,
  timeCountDown,
  onClose,
  modalType,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const countDown = () => {
      let secondsToGo = timeCountDown;

      const instance = Modal[modalType]({
        title: message,
        content: `This modal will be destroyed after ${secondsToGo} seconds.`,
      });

      const timer = setInterval(() => {
        secondsToGo -= 1;
        instance.update({
          content: `This modal will be destroyed after ${secondsToGo} seconds.`,
        });
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
        instance.destroy();
        onClose(); // Chama a função onClose quando o modal for destruído
        setVisible(false); // Esconde o modal quando for destruído
      }, timeCountDown * 1000);
    };

    countDown(); // Inicia o contador quando o componente for montado
  }, [message, onClose, timeCountDown, modalType]);

  return visible ? null : null;
};

export default AutoDestroyModal;
