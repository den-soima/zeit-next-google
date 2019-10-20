import React from 'react'
import Link from "next/link";

const Home = () => (
  <div>
      <ul>
          <li>
              <h3>Get data from Google Cloud DB Postgres via public IP.</h3>
              <Link href='/api/googledata'>
                  <a>Go to api/googledata</a>
              </Link>
              <pre>
                  user: 'postgres',<br />
                  host: '35.246.140.248',<br />
                  database: 'googletest',<br />
                  password: 'user',<br />
                  port: 5432,<br />
              </pre>
          </li>
         <li>
             <h3>Get data from Elephant SQL via Hostname.</h3>
             <Link href='/api/elephantdata'>
                 <a>Go to api/elephantdata</a>
             </Link>
             <pre>
                 user: 'eydoewva',<br />
                 host: 'dumbo.db.elephantsql.com',<br />
                 database: 'eydoewva',<br />
                 password: 'cC-HyNcrlOa4nWa9kstq2Zi7oCfHKvbz',<br />
                 port: 5432,<br />
             </pre>
         </li>
      </ul>
      <style jsx>{`
        pre {
            background-color: #EAEAEA;
        }
      
      `}</style>
  </div>
)

export default Home
