import Link from "next/link" ;
import { Checkbox } from "@/components/ui/checkbox";
import { Terms }  from "../components/Terms";
import { LoginForm } from "./LoginForm";


export default function LoginPage() {
  return (
    <div>
      <p className="text-3xl font-bold text-left mb-7">Iniciar sesión</p>
      <LoginForm/>
      <div className="mt-5 text-center ">
        <Link href="/" className="hover:underline hover:opacity-70">
        ¿Olvidaste la contraseña?
        </Link>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" className="border-white" />
        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Recuérdame
        </label>
      </div>
      <div className="mt-4 flex gap-1">
        <p className="text-white opacity-70"> 
          ¿Primera vez en Netflix? </p>
            <Link href="/register" className="text-white opacity-1">
            Suscríbete ahora.
            </Link>
      </div>
        <Terms/>
    </div>
  )
}