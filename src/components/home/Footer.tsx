import footerImage from "../../assets/image.png";

export const Footer = () => {
  return (
    <div className="w-full">
        <div className="bg-pink-400 h-10 text-center">
            <button className="p-3 hover:cursor-pointer hover:underline">Focus on search bar</button>
        </div>
        <img className="w-full block" src={footerImage} alt="footer" />
    </div>
  )
}
