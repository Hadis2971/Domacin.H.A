const cache = new Map();

export default ({ src, image }) => {
  const source = cache.get(src);
  if (source) return image;

  let status = "pending";

  const promise = new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      cache.set(src, src);
      status = "success";
      resolve(src);
    };
  });

  if (status === "pending") throw promise;
  else return image;
};
