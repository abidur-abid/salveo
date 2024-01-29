import Image from "next/image";
import logo from '@/assets/logo.png'
import Link from "next/link";
import { TiHome } from "react-icons/ti";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import { IoMdContacts } from "react-icons/io";



const Header = () => {
    return (
        <header>
            <div className="customContainer">
                <div className="customRow">
                    <div className="customColumn">
                        <Image src={logo} className="logo"></Image>
                    </div>
                    <div className="customColumn">
                        <nav className="laptopNav">
                            <Link href={'/'} className="link"> <TiHome /> home</Link>
                            <Link href={'/about'} className="link"> <TbArrowRoundaboutRight /> about</Link>
                            <Link href={'/services'} className="link"> <FaServicestack /> services</Link>
                            <Link href={'/appointment'} className="link"><IoBookmarksSharp /> appointment</Link>
                            <Link href={'/blogs'} className="link"> <LiaBlogSolid /> blogs</Link>
                            <Link href={'/contact'} className="link"> <IoMdContacts /> contact</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;