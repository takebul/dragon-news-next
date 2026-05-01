import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaArrowLeft, FaEye, FaStar } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return {
    title: news.title,
    description: news.details,
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return (
    <div className="card max-w-4xl mx-auto my-8 bg-base-100 shadow-sm">
      <div className="card-body">
        {/* Author info */}

        <div className="flex justify-between items-center bg-slate-200 p-3">
          <div className="flex gap-1 items-center">
            <Image
              src={news.author?.img}
              alt="Author Image"
              height={40}
              width={40}
              className="rounded-full"
            />
            <div>
              <h2 className="font-semibold">{news.author?.name} </h2>
              <p className="text-xs">{news.author?.published_date} </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <CiBookmark size={20} />
            <CiShare2 size={20} />
          </div>
        </div>

        <h2 className="card-title">{news.title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <figure>
          <Image
            src={news.image_url}
            alt="News Image"
            height={300}
            width={300}
            className="w-full"
          />
        </figure>
        <p>{news.details} </p>

        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <h2 className="flex gap-1 items-center">
              <FaStar className="text-yellow-500" size={18} />{" "}
              {news.rating.number}
            </h2>
            <h2 className="flex gap-1 items-center">
              <FaEye size={18} /> {news.total_view}
            </h2>
          </div>

          <Link href={`/category/${news.category_id}`}>
            <button className="btn text-red-500">
              <FaArrowLeft /> All news in this category
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
