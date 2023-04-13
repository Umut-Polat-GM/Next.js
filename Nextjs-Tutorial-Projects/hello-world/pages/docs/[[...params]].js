import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { params = []} = router.query; // params = [] !important
//   console.log(params.length);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs dor feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs dor feature {params[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
}

export default Doc;
