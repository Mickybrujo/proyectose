const getWorkerPath = () => {
    if (process.env.NODE_ENV === 'development') {
        return "file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.js";
    }
    else {
        return ("file-loader?name=scripts/[name].[hash].js!jsstore/dist/jsstore.worker.min.js");
    }
};

export const workerPath = getWorkerPath();
