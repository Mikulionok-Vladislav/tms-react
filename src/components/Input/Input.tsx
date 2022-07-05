import styles from "./index.module.css";

interface IProps {
  label: string;
  placeholder: string;
  className?: string;
  value?: string;
  setValue?: (value: string)=> void;
}

export const Input = ({ label, placeholder, className, value, setValue }: IProps) => {
  return (
    <label>
      {label}
      <input
      value={value}
        placeholder={placeholder}
        className={`${styles.input} ${className}`}
        onChange={(event) =>{
          if (setValue){
          setValue(event.target.value)
        }
        }}
      />
    </label>
  );
};
