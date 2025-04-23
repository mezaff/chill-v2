import AuthLayout from "@/components/Layouts/AuthLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginFormSchema, type LoginFormSchema } from "@/forms/login";
import { axiosAuthInstance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
type UserResponse = {
  id: string;
  username: string;
  password: string;
  isLogin: boolean;
  avatar: string;
  createdAt: string;
};
const LoginPage = () => {
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const onLoginSubmit = async (values: LoginFormSchema) => {
    try {
      const registedUser = (await axiosAuthInstance.get("users")).data.find(
        (user: UserResponse) => user.username === values.username
      );

      await axiosAuthInstance.put(`users/${registedUser.id}`, {
        ...registedUser,
        isLogin: true,
      });
      localStorage.setItem("user", JSON.stringify(registedUser.id));
      form.reset();
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          form.setError("username", { message: "Username tidak terdaftar" });
          form.setError("password", { message: "Password salah" });
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };
  return (
    <AuthLayout type="login" bgImg="/images/login-bg.jpg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onLoginSubmit)}
          action=""
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-white text-[10px] md:text-[18px]">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Masukkan username"
                    className="text-white text-[10px] md:text-[16px] rounded-full border-[#E7E3FC3B] placeholder:text-[#C1C2C4]"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-white text-[10px] md:text-[18px]">
                  Kata Sandi
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Masukkan kata sandi"
                    className="text-white text-[10px] md:text-[16px] rounded-full border-[#E7E3FC3B] placeholder:text-[#C1C2C4]"
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row justify-between items-center my-1">
            <span className="text-[#C1C2C4] text-[10px] md:text-[16px]">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-white cursor-pointer font-medium"
              >
                Daftar
              </Link>
            </span>
            <Link
              to="/forgot-password"
              className="text-white cursor-pointer font-medium"
            >
              Lupa kata sandi?
            </Link>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Button className="w-full rounded-full text-[10px] md:text-[16px] mt-4 md:mt-8 border bg-transparent cursor-pointer border-[#E7E3FC3B] text-white shadow-xs hover:bg-[#3D4142]">
              Masuk
            </Button>
            <p className="text-center my-1 md:my-2 text-[#9D9EA1] text-[10px] md:text-[14px]">
              Atau
            </p>
            <Button className="w-full rounded-full text-[10px] md:text-[16px] mb-2 border bg-transparent cursor-pointer border-[#E7E3FC3B] text-white shadow-xs hover:bg-[#3D4142]">
              <img
                src="/images/google.png"
                alt="google"
                className="w-[10px] md:w-[18px]"
              />
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
