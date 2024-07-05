export const handleError = (e) => {

    if (e?.response && e?.response?.data) {
        return e?.response?.data?.message;
    }

    return e?.message;

}