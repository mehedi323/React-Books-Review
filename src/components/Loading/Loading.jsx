import ClipLoader from "react-spinners/ClipLoader";


const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <ClipLoader size={120} color="red"></ClipLoader>
        </div>
    );
};

export default Loading;