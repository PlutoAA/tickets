import { Inter } from "next/font/google";
import "./globals.scss";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme="dark"
        />
      </body>
    </html>
  );
}
