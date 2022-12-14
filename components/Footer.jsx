import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const socials = [
    {
      icon: FaFacebookF,
      link: "#",
    },
    {
      icon: BsInstagram,
      link: "#",
    },
    {
      icon: SlSocialTwitter,
      link: "#",
    },
    {
      icon: FaExternalLinkAlt,
      link: "#",
    },
  ];
  return (
    <div className="absolute -bottom-56  footer    w-full ">
      <div className="">
        <div className="w-full py-2 lg:px-14 shadow-lg flex justify-center flex-col lg:justify-between lg:flex-row items-center gap-5">
          <p className="text-lg font-semibold">
            Lets get connected on social media
          </p>
          <div className="flex gap-10">
            <Link href="#">
              <span className="">
                <FaFacebookF size={20} />
              </span>
            </Link>
            <Link href="#">
              <span className=" ">
                <BsInstagram size={20} />
              </span>
            </Link>
            <Link href="#">
              <span className=" ">
                <SlSocialTwitter size={20} />
              </span>
            </Link>
            <Link href="#">
              <span className=" ">
                <SlSocialLinkedin size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex justify-center lg:justify-between items-center flex-col lg:flex-row py-5 lg:px-14 px-4">
            <Link href="/">
              <span className=" text-3xl font-semibold">EliCode</span>
            </Link>

            <div className="">
              <Link href="/about">
                <span className="px-3 text-center cursor-pointer pt-3 ">
                  About
                </span>
              </Link>
              <Link href="/contact">
                <span className="px-3 text-center cursor-pointer pt-3 ">
                  Contact
                </span>
              </Link>
              <Link href="/templates">
                <span className="px-3 text-center cursor-pointer pt-3 ">
                  Templates
                </span>
              </Link>
            </div>
            <div>All rights Reserved &copy; 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
