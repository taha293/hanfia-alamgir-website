'use client'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export function NavbarMenu() {
  const [open,setOpen] = useState(false)
  const handleClose = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
             <FiMenu  />
        </DialogTrigger>
        <DialogContent className="w-[90%] rounded-xl bg-[#ffffff]">
            <div className="flex flex-col gap-4 text-[#58742c] justify-center items-center font-semibold text-lg py-6 ">
                <Link href={"/"} onClick={handleClose}>Home</Link>
                <Link href={"/"} onClick={handleClose}>Institutes</Link>
                <Link href={"/"} onClick={handleClose}>Our Team</Link>
                <Link href={"/"} onClick={handleClose}>About Us</Link>
                <Link href={"/"} onClick={handleClose}>Our Purpose</Link>
            </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}
