import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  // panggil library eror di route dom
  const error = useRouteError();
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Upss ada error nih</h1>
      <p className="my-5 text-xl">ada sedikit eror yang tak terduga karena.........</p>
      {/* pake 2 kondisi error otomatis statustext dan error message */}
      <p className="my-5 text-xl">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
