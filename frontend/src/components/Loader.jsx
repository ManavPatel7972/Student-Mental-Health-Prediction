import { LoaderCircle } from "lucide-react";

function Loader({ text = "Analyzing..." }) {
  return (
    <div className="loader-wrapper">
      <LoaderCircle className="spin" size={20} />
      <span>{text}</span>
    </div>
  );
}

export default Loader;
