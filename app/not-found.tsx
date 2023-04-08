import Button from "components/Button";

export default async function Page() {
  return (
    <div className="container grid items-center h-full">
      <div>
        <h1 className="mb-4 text-3xl font-bold">404</h1>
        <p className="mb-12 text-lg text-gray-600 leading-normal">
          La page demandée n&apos;existe pas
        </p>
        <Button href="/">Retour</Button>
      </div>
    </div>
  );
}
