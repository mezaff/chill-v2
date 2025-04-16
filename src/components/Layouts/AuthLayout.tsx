import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type AuthLayoutProps = {
  type: string;
  children: React.ReactNode;
  bgImg: string;
};

const AuthLayout = (props: AuthLayoutProps) => {
  const { type, children, bgImg } = props;
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Card className="w-[306px] md:w-[529px] bg-[#181A1CD6] border-none">
        <CardHeader className="flex flex-row justify-center items-center gap-2">
          <img
            src="/images/logo.png"
            alt=""
            className="w-[94px] md:w-[163px]"
          />
        </CardHeader>
        <CardTitle className="text-center font-bold text-white text-[18px] md:text-[32px]">
          {type === "login" ? "Masuk" : "Daftar"}
          <CardDescription className="text-center font-normal text-white text-[10px] md:text-[16px]">
            {type === "login" ? "Selamat Datang Kembali!" : "Selamat Datang!"}
          </CardDescription>
        </CardTitle>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default AuthLayout;
