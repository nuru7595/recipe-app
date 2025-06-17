import { useContext } from "react";
import { GlobalContext } from "../context";
import Info from "../components/Info";
import Item from "../components/Item";

export default function Home() {
    const { loading, data } = useContext(GlobalContext);

    return (
        <section>
            {loading ? (
                <h3 className="text-center py-12">
                    Loading Data! Please Wait...
                </h3>
            ) : data && data.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-3">
                    {data.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <Info />
            )}
        </section>
    );
}
