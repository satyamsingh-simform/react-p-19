import type { RefObject } from "react";
import footerImage from "../../assets/image.png";

type FooterProps={
    searchRef:RefObject<HTMLInputElement|null>;
}

export const Footer = ({searchRef}:FooterProps) => {
  function handleFocus(){
    if(searchRef.current){
      searchRef.current.scrollIntoView({
        behavior:"smooth"
      })
      searchRef.current.focus();
    }
    
  }
  return (
    <div className="w-full">
        <div className="text-lg text-gray-500 h-10 text-center">
            <button className="p-3 hover:cursor-pointer hover:underline"
              onClick={handleFocus}
            >Focus on search bar</button>
        </div>
        <img className="w-full block" src={footerImage} alt="footer" />
    </div>
  )
}
