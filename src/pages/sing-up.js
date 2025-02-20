import Head from "next/head";
import "../styles/Home.module.css";
import SingUp from "@/components/SingUp";

export default function singUp() {
  return (
    <>
      <Head>
        <title>Register page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <SingUp />
      </div>
    </>
  );
}
