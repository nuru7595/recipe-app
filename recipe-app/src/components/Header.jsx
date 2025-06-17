import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";

export default function Header() {
    const { param, setParam, handleSubmit } = useContext(GlobalContext);

    return (
        <header className="flex justify-between items-center gap-3">
            <NavLink to={"/"} className="cursor-pointer md:text-xl">
                Recipe App
            </NavLink>
            <form onSubmit={handleSubmit} className="md:w-[50%]">
                <input
                    type="text"
                    className="border rounded-md py-1 px-3 caret-white outline-none text-lg bg-slate-800 w-full"
                    placeholder="Search... ex. Mango"
                    value={param}
                    onChange={(event) => {
                        setParam(event.target.value);
                    }}
                />
            </form>
            <nav className="space-x-4">
                <NavLink to={"/"} className="cursor-pointer">
                    Home
                </NavLink>
                <NavLink to={"/favorites"} className="cursor-pointer">
                    Favorites
                </NavLink>
            </nav>
        </header>
    );
}
