import Link from 'next/link'
export default function Custom404() {
  return (
    <div className="container">
      <h2>404</h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <style jsx>
        {`
          .container {
            margin-top: 10rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}
