import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [param, setParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const nav = useNavigate();
    const [recipeData, setRecipeData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        nav("/");
        setLoading(true);
        try {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes?search=${param}&key=4bfe9dd6-8371-4700-89e1-50161e2be123`
            );
            const result = await response.json();
            if (result && result.data && result.data.recipes) {
                setData(result.data.recipes);
                setLoading(false);
                setParam("");
            }
        } catch (error) {
            console.log(error);
            setData(null);
            setLoading(false);
            setParam("");
        }
    };

    const handleFavorites = (recipe) => {
        const cpy = [...favoritesList];
        const index = cpy.findIndex((item) => item.id === recipe.id);

        if (index === -1) {
            cpy.push(recipe);
        } else {
            cpy.splice(index, 1);
        }

        setFavoritesList(cpy);
    };

    return (
        <GlobalContext.Provider
            value={{
                param,
                setParam,
                handleSubmit,
                loading,
                data,
                recipeData,
                setRecipeData,
                favoritesList,
                handleFavorites,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
