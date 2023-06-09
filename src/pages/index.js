import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
import SearchInput from "@/components/SearchInput/SearchInput";

export default function Home({ countries }) {
  return (
    <Layout>
      <div>Found {countries.length} countries</div>

      <SearchInput placeholder="Filter by Name, Region or Subregion" />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
