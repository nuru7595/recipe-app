import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Details() {
    const { id } = useParams();
    const { recipeData, setRecipeData, favoritesList, handleFavorites } =
        useContext(GlobalContext);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            );
            const result = await response.json();
            if (result?.data?.recipe) {
                setRecipeData(result?.data?.recipe);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section>
            <h1 className="font-bold text-center border-b-2 border-white py-2">
                Recipe Details
            </h1>
            <div className="p-6 lg:grid grid-cols-2 gap-6">
                <div>
                    <div className="overflow-hidden rounded-sm aspect-video">
                        <img
                            src={recipeData?.image_url}
                            alt={recipeData?.title}
                            className="w-full object-cover hover:scale-105 duration-300"
                        />
                    </div>
                    <div className="my-6 space-y-3">
                        <h1 className="text-center font-bold">
                            {recipeData?.title}
                        </h1>
                        <p className="text-center">{recipeData?.publisher}</p>
                        <button
                            className="border rounded-md px-12 py-2 block mx-auto cursor-pointer hover:bg-slate-600 duration-200"
                            onClick={() => {
                                handleFavorites(recipeData);
                            }}
                        >
                            {favoritesList &&
                            favoritesList.length > 0 &&
                            favoritesList.findIndex(
                                (item) => item.id === recipeData.id
                            ) !== -1
                                ? "Remove from Favorites"
                                : "Add to Favorites"}
                        </button>
                    </div>
                </div>
                <div>
                    {recipeData?.ingredients && (
                        <div className="space-y-3">
                            <h2 className="text-center font-bold">
                                Ingredients
                            </h2>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="border border-white">
                                            Ingredient
                                        </th>
                                        <th className="border border-white">
                                            Quantity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recipeData?.ingredients?.map(
                                        (item, index) => (
                                            <tr
                                                key={index}
                                                className="font-bold"
                                            >
                                                <td className="border border-white">
                                                    {`${
                                                        index + 1
                                                    }. ${item.description
                                                        .charAt(0)
                                                        .toUpperCase()}${item.description.slice(
                                                        1
                                                    )}`}
                                                </td>
                                                <td className="border border-white">
                                                    {item.quantity
                                                        ? `${item.quantity} ${item.unit}`
                                                        : "*"}
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
