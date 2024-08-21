
const SearchInput = () => {
    return (
        <div className="relative flex items-center">
            {/* Icon on the left */}
            <span className="absolute left-3 text-gray-500">
                <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            {/* Input field */}
            <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
            />

            {/* Line below the input */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-primary-500"></div>
        </div>
    );
};

export default SearchInput;
