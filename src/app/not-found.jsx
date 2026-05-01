import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col font-bold text-5xl text-purple-500 gap-2">
      <h2>This page is not found!</h2>
      <Link href={"/"}>
        <button className="btn bg-purple-500 text-white">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
