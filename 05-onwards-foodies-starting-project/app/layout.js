import MainHeaderBackground from "@/component/main-header-background";
import "./globals.css";
import MainHeader from "@/component/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <MainHeaderBackground />
        <MainHeader />

        {children}
      </body>
    </html>
  );
}
