import React from "react";
import './Socials.scss';
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="container-socials">
      <Link href={"#"}><Image src={"/assets/icons/facebook.svg"} alt={"facebook"} width={32} height={32}/></Link>
      <Link href={"#"}><Image src={"/assets/icons/instagram.svg"} alt={"instagram"} width={32} height={32}/></Link>
      <Link href={"#"}><Image src={"/assets/icons/pinterest.svg"} alt={"pinterest"} width={32} height={32}/></Link>
      <Link href={"#"}><Image src={"/assets/icons/twitter.svg"} alt={"twitter"} width={32} height={32}/></Link>
      <Link href={"#"}><Image src={"/assets/icons/youtube.svg"} alt={"youtube"} width={32} height={32}/></Link>
    </div>
  );
}

export default Socials;