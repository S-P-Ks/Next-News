export default function EOM({ data }) {
  return (
    <>
      <div className="page-container">
        <div>
          <h1>Employees of the Month</h1>
          {data}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://my-json-server.typicode.com/S-P-Ks/Next-News"
  );

  console.log(context);

  return {
    props: {
      data: data,
    },
  };
}
