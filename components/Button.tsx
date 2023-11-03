"use client";



interface BtnModel {
    title: string;

  }

const Button:React.FC<BtnModel> = ({ title }) => {
    
  return (
    <button className={``}>
      {title}
    </button>
  );
};

export default Button;
