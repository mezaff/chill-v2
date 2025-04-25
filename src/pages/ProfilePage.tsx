import AppLayout from "@/components/Layouts/AppLayout";
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

import UserFilmList from "@/components/UserFilmList";

import { loginFormSchema, LoginFormSchema } from "@/forms/login";
import { useLogedInUser } from "@/hooks/useLogedInUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { File } from "lucide-react";
import { useForm } from "react-hook-form";

const ProfilePage = () => {
  const { logedInUser } = useLogedInUser();
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: logedInUser?.username,
      password: logedInUser?.password,
    },
  });
  return (
    <AppLayout>
      <div className="flex flex-col gap-4 p-5 md:px-40 text-white">
        <h1 className="text-2xl font-bold mb-5">Profile Saya</h1>
        <div className="flex flex-col-reverse md:flex-row gap-20 justify-between items-start">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-row gap-6 items-center w-full">
              <img
                src={logedInUser?.avatar || "/images/default-avatar.png"}
                alt="avatar"
                className="w-[100px] h-[100px] bg-white rounded-full"
              />
              <div className="flex flex-col gap-3">
                <Button className="rounded-full bg-transparent border-2 border-[#3254FF] text-[#3254FF] hover:bg-[#3254FF] hover:text-white">
                  Ubah Foto
                </Button>
                <span className="flex gap-2 font-semibold">
                  <File /> Maksimal 2MB
                </span>
              </div>
            </div>
            <Form {...form}>
              <form action="">
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
                          className="text-white text-[10px] md:text-[18px] py-6 rounded-md border-[#E7E3FC3B] placeholder:text-[#C1C2C4]"
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
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          className="text-white text-[10px] md:text-[18px] py-6 rounded-md border-[#E7E3FC3B] placeholder:text-[#C1C2C4]"
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="rounded-full bg-transparent border-2 border-[#3254FF] text-[#3254FF] hover:bg-[#3254FF] hover:text-white mt-5">
                  Simpan
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col items-center justify-end gap-5 bg-[#3D4142] rounded-md p-5 md:w-5xl">
            <div className="flex flex-row gap-5">
              <img
                src="/images/warning.png"
                alt="warning"
                width={78}
                height={78}
              />
              <div className="flex flex-col gap-2 mt-3">
                <h1 className="md:text-2xl font-bold">
                  Saat ini anda belum berlangganan
                </h1>
                <p className="text-sm md:text-xl">
                  Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan
                  Kamu
                </p>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <Button className="rounded-full bg-[#2F3334] hover:bg-[#3254FF] text-white">
                Mulai Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mx-6 md:mx-0">
        <h1 className="text-2xl font-bold mb-5 text-white md:px-40">
          My List{" "}
        </h1>
        <UserFilmList />
      </div>

    </AppLayout>
  );
};

export default ProfilePage;
