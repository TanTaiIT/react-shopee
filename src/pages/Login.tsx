import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import authApi from "../apis/auth.api"
import { useNavigate } from "react-router-dom"

interface formData {
  email: string
  password: string
}
export default function Login() {
  const { register, setError, handleSubmit, formState: { errors } } = useForm<formData>()
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationFn: (body: { email: string, password: string }) => authApi.loginAccount(body)
  })

  const handleSubmitData = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        navigate('/')
      }
    })
  })
  return (
    <div className="bg-[#ee4d2d] h-[500px] p-10">
      <div className="max-w-[1024px] mx-auto bg-center bg-cover bg-no-repeat p-3 h-[100%] flex justify-center lg:justify-between bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-7rdvs-lyc1vg621m5ec0')]">
        <div className="w-[50%] max-sm:hidden"></div>
        <div className="w-[50%]">
          <form onSubmit={handleSubmitData} className="p-8 bg-white w-[400px] rounded-sm">
            <label className="text-[18px]">Dang nhap</label>
            <div className="mt-3">
              <input {...register('email', { required: true })} type="text" placeholder="Email/So dien thoai/ten dang nhap" className="p-2 w-[100%] border-2 outline-none" />
            </div>

            <div className="mt-9">
              <input {...register('password', { required: true })} type="password" placeholder="mat khau" className="p-2 w-[100%] border-2 outline-none" />
            </div>

            <button className="mt-9 rounded-none w-[100%] bg-[#ee4d2d] uppercase text-white ease-in-out duration-300">
              Dang nhap
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}