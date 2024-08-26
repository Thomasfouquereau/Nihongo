// BodyColorChanger.jsx
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const BodyColorChanger = () => {
  const { mainBgColor } = useSelector((state) => state.mode);

  useEffect(() => {
    document.body.style.backgroundColor = mainBgColor;
  }, [mainBgColor]);

  return null;
};

export default BodyColorChanger;