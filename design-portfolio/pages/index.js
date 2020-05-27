import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andy Dobbs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hi, I'm Andy Dobbs!
        </h1>

        <p className="description">
          I design intuitive, delightful products.
        </p>

        <img 
          className="homeImage"
          src="/health-check-report.png" 
          alt="Health Check Report"
        />

        <div className="grid">
          <a href="AndyDobbsCaseStudies.pdf" className="card">
            <h3>Case Studies &rarr;</h3>
            <p>See how I approach design, research, and architecture.</p>
          </a>

          <a href="AndyDobbsResumeDesign.pdf" className="card">
            <h3>Resume &rarr;</h3>
            <p>View my career history, education, and skills.</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #4086c8;
          color: #fff;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .description a {
          color: hsl(180, 80%, 60%);
          text-decoration: none;
        }

        .description a:hover,
        .description a:focus,
        .description a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.5rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.75rem;
        }

        .homeImage {
          margin-top: 1.5rem;
          width: 80%;
          max-width: 900px;
          -webkit-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
          -moz-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
          box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.5);
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 765px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #19e6e6;
          border-color: #19e6e6;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 675px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

          .card {
            width: 80%;
          }

          .title {
            font-size: 2rem;
          }

          .description {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
