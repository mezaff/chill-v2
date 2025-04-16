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
import { type RegisterFormSchema, registerFormSchema } from "@/forms/register";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPage = () => {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();

  const onRegisterSubmit = (values: RegisterFormSchema) => {
    const registedUser = {
      username: values.username,
      password: values.password,
    };
    const user = {
      ...registedUser,
      isLogin: false,
    };

    localStorage.setItem("user", JSON.stringify(user));
    form.reset();
    navigate("/login");
  };
  return (
    <AuthLayout type="register" bgImg="/images/register-bg.jpg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onRegisterSubmit)}
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-white text-[10px] md:text-[18px]">
                  Konfirmasi Kata Sandi
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
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-white cursor-pointer font-medium"
              >
                Masuk
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Button className="w-full rounded-full text-[10px] md:text-[16px] mt-4 md:mt-8 border bg-transparent cursor-pointer border-[#E7E3FC3B] text-white shadow-xs hover:bg-[#3D4142]">
              Daftar
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
              Daftar dengan Google
            </Button>
          </div>
        </form>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;
