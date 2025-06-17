import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <div className="rounded-md overflow-hidden space-y-2 border border-white">
            <div className=" h-56 overflow-hidden">
                <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full object-cover h-full hover:scale-105 duration-300"
                />
            </div>
            <div className="p-3 space-y-3">
                <h3 className="font-bold">{item.title}</h3>
                <p>{item.publisher}</p>
                <Link
                    to={`/recipe/${item.id}`}
                    className="border border-white p-1 text-center block rounded-sm hover:bg-slate-600 duration-300"
                >
                    Recipe Details
                </Link>
            </div>
        </div>
    );
}
