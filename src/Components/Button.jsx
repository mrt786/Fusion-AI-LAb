import { useNavigate } from 'react-router-dom';

export default function Button({ text, className, href }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} bg-gradient-to-r from-slate-300 to-slate-500 text-deepCharcoal font-bold rounded-3xl  text-xl px-5 border-4 border-lightGray`}
    >
      {text}
    </button>
  );
}