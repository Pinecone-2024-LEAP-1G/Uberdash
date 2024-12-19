import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={"pt-48 mb-3 mt-14"}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="flex flex-col items-center md:items-start">
          <Link href={"/"} className="flex items-center justify-center">
            <div className="text-3xl font-extrabold leading-none tracking-tight text-white-300 ">
              <div className="flex items-center justify-center">
                <span>Хоол</span>
                <mark className="px-2 text-white bg-green-500 rounded ">
                  Hub
                </mark>
              </div>
            </div>
          </Link>
          <p className="text-sm text-gray-600 mt-2 text-center md:text-left">
            Таны дуртай ресторанууд, түргэн хүргэлттэйгээр
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.facebook.com/profile.php?id=100074642433564"
            target="_blank"
          >
            <button
              aria-label="Facebook"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
            >
              <Facebook size={20} className="text-blue-600" />
            </button>
          </Link>
          <Link href="https://x.com/?lang=en" target="_blank">
            <button
              aria-label="Twitter"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-blue-100 transition-all"
            >
              <Twitter size={20} className="text-blue-400" />
            </button>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <button
              aria-label="Instagram"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:bg-pink-100 transition-all"
            >
              <Instagram size={20} className="text-pink-500" />
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        <p>Холбоо барих: contact@khurdan.com</p>
        <p>Утас: +976 123 4567</p>
        &copy; {new Date().getFullYear()} ХоолHub. Бүх эрх хуулиар
        хамгаалагдсан.
      </div>
    </footer>
  );
};
