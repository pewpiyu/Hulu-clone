import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({results}) {
  
  return (
    <>
      <Head>
        <title>HULU</title>
        <link rel="ico" href="" />
      </Head>

      <Header />
      <Navbar />
      <Results results={results}/>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
