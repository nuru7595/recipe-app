import { useContext } from "react";
import { GlobalContext } from "../context";
import Item from "../components/Item";

export default function Favorites() {
    const { favoritesList } = useContext(GlobalContext);

    return (
        <section>
            <h1 className="font-bold text-center border-b-2 border-white py-2">
                Favorites List
            </h1>
            {favoritesList && favoritesList.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3">
                    {favoritesList.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <div className="p-3">
                    <h2 className="py-6 text-center">
                        Nothing is added in favorites!
                    </h2>
                </div>
            )}
        </section>
    );
}
