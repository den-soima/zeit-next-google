import React from 'react'
import Link from "next/link";

const Home = () => (
  <div>
    <h3>Get data from Google Cloud DB Postgres via public IP.</h3>
    <Link href='/api/testdata'>
        <a>Go to api/testdata</a>
    </Link>
  </div>
)

export default Home
