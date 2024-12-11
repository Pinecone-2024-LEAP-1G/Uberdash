import { Instagram, Facebook, Twitter } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`py-12 mb-3 ${className}`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-3xl font-extrabold text-gray-800">Хурдан хоол</p>
          <p className="text-sm text-gray-600 mt-2 text-center md:text-left">
            Таны дуртай ресторанууд, түргэн хүргэлттэйгээр
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <button className="hover:text-blue-500 text-gray-700 font-medium transition">
            Ресторангаа нэмэх
          </button>
          <button className="hover:text-blue-500 text-gray-700 font-medium transition">
            Хүргэлт хийхээр бүртгүүлэх
          </button>
          <button className="hover:text-blue-500 text-gray-700 font-medium transition">
            Бизнесийн аккаунт үүсгэх
          </button>
        </div>

        <div className="flex gap-4">
          <button
            aria-label="Facebook"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
          >
            <Facebook size={20} className="text-blue-600" />
          </button>
          <button
            aria-label="Twitter"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
          >
            <Twitter size={20} className="text-blue-400" />
          </button>
          <button
            aria-label="Instagram"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-pink-100 transition-all"
          >
            <Instagram size={20} className="text-pink-500" />
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Хурдан хоол. Бүх эрх хуулиар
        хамгаалагдсан.
      </div>
    </footer>
  );
};
