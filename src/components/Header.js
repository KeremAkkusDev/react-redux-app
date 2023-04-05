import { themeChange, languageChange } from "../stores/SiteSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { language } = useSelector((state) => state.SiteReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{language}</h3>
      <button onClick={() => {dispatch(languageChange(language === "TR" ? "US" : "TR"));}}>
        Language Change
      </button>
      <button onClick={() => {dispatch(themeChange());}}>
        Theme Change
      </button>
    </div>
  );
}

export default Header;
