import DOMPurify from "dompurify";
DOMPurify.setConfig({ADD_ATTR: ['target']});

const lang = document.documentElement.lang;
const locale = lang !== "en" ? `/${lang}` : '';

export const fetchData = async(filename, setContent, setError) => {
    //need to use this absolute path for data
    const path = `https://vote.gov${locale}/nvrf/assets/${filename}`;
    const response = await fetch(path)
        .then(response => response.json())
        .catch(() => setError(true));
    setContent(response);
}

export const fetchStaticData = async(filename, setContent, setError) => {
    const path = `${BASEURL}${locale}/nvrf/data/${filename}`;
    const response = await fetch(path)
        .then(response => response.json())
        .catch(() => setError(true));
    setContent(response);
}

export const sanitizeDOM = (data) => DOMPurify.sanitize(data);