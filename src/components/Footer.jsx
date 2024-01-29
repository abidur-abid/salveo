import Image from "next/image";
import logo2 from '@/assets/logo2.png'
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-primaryColor">
            <div className="customContainer">
                <div className="flex justify-center items-center border-white border-b-2">
                    <Image src={logo2} className="w-56 h-56"></Image>
                </div>
                <div className="flex justify-center items-center gap-10 my-10">
                    <Link href={'/'} className="link2"> <TiHome /> home</Link>
                    <Link href={'/about'} className="link2"> <TbArrowRoundaboutRight /> about</Link>
                    <Link href={'/services'} className="link2"> <FaServicestack /> services</Link>
                    <Link href={'/appointment'} className="link2"><IoBookmarksSharp /> appointment</Link>
                    <Link href={'/blogs'} className="link2"> <LiaBlogSolid /> blogs</Link>
                    <Link href={'/contact'} className="link2"> <IoMdContacts /> contact</Link>
                </div>
                <div className="pb-10">
                    <p className="text-white text-center">Copyright © 2024 Salveo Integrative Health | <Link href={'/privacyPolicy'}>Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;