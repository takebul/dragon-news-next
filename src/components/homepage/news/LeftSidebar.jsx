import Link from "next/link";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">All categories</h2>
      <ul className="flex flex-col gap-3 mt-6">
        {categories.map((category) => {
          return (
            <li
              className={`
                    ${activeId === category.category_id && "bg-purple-500 text-white"}
                 rounded-md font-bold text-center text-md`}
              key={category.category_id}
            >
              <Link
                className="block p-2"
                href={`/category/${category.category_id}`}
              >
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
