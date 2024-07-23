const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

export { formatDate as f };
//# sourceMappingURL=date-BJnj8NYw.mjs.map
