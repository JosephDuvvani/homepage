export default (name = "") => {
  let projectName = name;
  let description = "";
  let onSiteUrl = "#";
  let imagePath = "#";
  let githubUrl = "#";
  let liveUrl = "#";

  const setName = (string) => (projectName = string);
  const setDescription = (string) => (description = string);
  const setOnSiteUrl = (url) => (onSiteUrl = url);
  const setImage = (path) => (imagePath = path);
  const setGithubUrl = (url) => (githubUrl = url);
  const setLiveUrl = (url) => (liveUrl = url);

  const getName = () => projectName;
  const getDescription = () => description;
  const getOnSiteUrl = () => onSiteUrl;
  const getImage = () => imagePath;
  const getGithubUrl = () => githubUrl;
  const getLiveUrl = () => liveUrl;

  return {
    setName,
    setDescription,
    setOnSiteUrl,
    getName,
    getDescription,
    getOnSiteUrl,
    setImage,
    getImage,
    setGithubUrl,
    getGithubUrl,
    setLiveUrl,
    getLiveUrl,
  };
};
