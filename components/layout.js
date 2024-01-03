import Head from "next/head";
import Header from "./header";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`GuitarLA - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className="px-96">{children}</div>
      {/* <Footer /> */}
    </>
  );
}
