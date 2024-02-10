import React from "react";
import './Socials.scss';
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({href, src, alt}) => (
   <Link href={href}>
     <Image src={src} alt={alt} width={32} height={32}/>
   </Link>
);

const Socials = () => (
   <div className="container-socials">
     <SocialIcon href="#" src={"/assets/icons/facebook.svg"} alt="facebook"/>
     <SocialIcon href="#" src={"/assets/icons/instagram.svg"} alt="instagram"/>
     <SocialIcon href="#" src={"/assets/icons/pinterest.svg"} alt="pinterest"/>
     <SocialIcon href="#" src={"/assets/icons/twitter.svg"} alt="twitter"/>
     <SocialIcon href="#" src={"/assets/icons/youtube.svg"} alt="youtube"/>
   </div>
);

export default Socials;